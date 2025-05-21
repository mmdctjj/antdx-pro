---
nav:
  title: 组件
demo:
  cols: 2
title: Copilot
path: /components
---

本文档已经默认您阅读了 [atndx](https://x.ant.design/components/overview/) 文档！

### 基础

组件已经组装了 atndx 的基础组件，我们只需要关心应用配置，不用关心基础布局，整体配置完全根据 atndx 的基础 api 配置，无任何添加 `api`！

```ts
interface ICopilotProps {
  /** 欢迎 **/
  welcomeProps?: WelcomeProps;
  /** 聊天 **/
  bubbleListProps?: BubbleListProps;
  /** 建议 **/
  promptsProps?: PromptsProps;
  /** 输入 **/
  expressProps?: {
    attachmentsProps?: AttachmentsProps;
    senderProps?: SenderProps;
    suggestionProps?: SuggestionProps;
  };
}
```

组件首页配置了 `欢迎语` 和 `开始建议` 以及 `输入` 功能。

开始聊天后隐藏欢迎语和开始建议，只展示 `聊天内容` 和 `输入` 功能。

```jsx
import {
  CopyOutlined,
  PaperClipOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Attachments, Prompts } from '@ant-design/x';
import { Copilot } from 'antdx-pro';
import { Button, Drawer, Flex } from 'antd';
import { useState } from 'react';

const roles = {
  ai: {
    placement: 'start',
    typing: true,
    avatar: {
      icon: '✨',
      style: { background: '#efefef' },
    },
  },
  user: {
    placement: 'end',
    typing: true,
    avatar: {
      icon: <UserOutlined />,
      style: { background: '#fde3cf' },
    },
  },
  suggestion: {
    placement: 'start',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
    messageRender: (items) => <Prompts vertical items={items} />,
  },
  file: {
    placement: 'start',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
  },
  useFile: {
    placement: 'end',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
    messageRender: (items) => (
      <Attachments items={items} overflow="scrollX" disabled />
    ),
  },
};

export default () => {
  const [bubbleList, setBubbleList] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [inputDisabled, setInputDisabled] = useState(false);

  const requestData = () => {
    setTimeout(() => {
      setBubbleList((prev) => {
        let lastBubble = prev[prev.length - 1];
        if (lastBubble?.role === 'ai') {
          lastBubble = {
            ...lastBubble,
            loading: false,
            content: 'hello world',
          };
        }
        prev.pop();
        return [...prev, lastBubble];
      });
      setInputDisabled(false);
    }, 3000);
  };

  const onSend = (val) => {
    if (val === '/') return;

    setBubbleList((prev) => [
      ...prev,
      {
        role: 'user',
        content: val,
        key: `${prev.length + 1}`,
      },
      {
        role: 'ai',
        loading: true,
        key: `${prev.length + 2}`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="基础" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI，好写，太好写了',
            description: '不用三天，两小时，但我为啥不写了，因为爷们要脸',
            style: {
              backgroundImage:
                'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
              borderStartStartRadius: 4,
            },
            icon: (
              <div
                style={{
                  fontSize: 42,
                }}
              >
                ✨
              </div>
            ),
          }}
          promptsProps={{
            vertical: true,
            items: [
              { description: '⚡️go go go 出发啦！', key: '1' },
              { description: '🚀特别的日子里特别的歌送给特别的你', key: '2' },
              {
                description: '🔥丢啊丢啊丢手绢，轻轻地放在小朋友的后边，没座！',
                key: '3',
              },
            ],
            title: '发现更多',
          }}
          bubbleListProps={{
            roles,
            items: bubbleList,
          }}
          expressProps={{
            senderProps: {
              value: inputValue,
              onChange: setInputValue,
              placeholder: '请输入',
              onSubmit: onSend,
              disabled: inputDisabled,
            },
          }}
        />
      </Drawer>
    </>
  );
};
```

你可以根据基础 `api` 进行功能扩展，下面是一些示例！

### 搜索建议

```tsx
import {
  CopyOutlined,
  PaperClipOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Attachments, Prompts } from '@ant-design/x';
import { Copilot } from 'antdx-pro';
import { Button, Drawer, Flex } from 'antd';
import { useState } from 'react';

const suggestionItems = [
  { label: '发送', value: 'send' },
  { label: '发送2', value: 'send2' },
];

const roles = {
  ai: {
    placement: 'start',
    typing: true,
    avatar: {
      icon: '✨',
      style: { background: '#efefef' },
    },
  },
  user: {
    placement: 'end',
    typing: true,
    avatar: {
      icon: <UserOutlined />,
      style: { background: '#fde3cf' },
    },
  },
  suggestion: {
    placement: 'start',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
    messageRender: (items) => <Prompts vertical items={items} />,
  },
  file: {
    placement: 'start',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
  },
  useFile: {
    placement: 'end',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
    messageRender: (items) => (
      <Attachments items={items} overflow="scrollX" disabled />
    ),
  },
};

export default () => {
  const [bubbleList, setBubbleList] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [inputDisabled, setInputDisabled] = useState(false);

  const requestData = () => {
    setTimeout(() => {
      setBubbleList((prev) => {
        let lastBubble = prev[prev.length - 1];
        if (lastBubble?.role === 'ai') {
          lastBubble = {
            ...lastBubble,
            loading: false,
            content: 'hello world',
          };
        }
        prev.pop();
        return [...prev, lastBubble];
      });
      setInputDisabled(false);
    }, 3000);
  };

  const onSend = (val) => {
    if (val === '/') return;

    setBubbleList((prev) => [
      ...prev,
      {
        role: 'user',
        content: val,
        key: `${prev.length + 1}`,
      },
      {
        role: 'ai',
        loading: true,
        key: `${prev.length + 2}`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="搜索建议" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI，好写，太好写了',
            description: '不用三天，两小时，但我为啥不写了，因为爷们要脸',
            style: {
              backgroundImage:
                'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
              borderStartStartRadius: 4,
            },
            icon: (
              <div
                style={{
                  fontSize: 42,
                }}
              >
                ✨
              </div>
            ),
          }}
          promptsProps={{
            vertical: true,
            items: [
              { description: '⚡️go go go 出发啦！', key: '1' },
              { description: '🚀特别的日子里特别的歌送给特别的你', key: '2' },
              {
                description: '🔥丢啊丢啊丢手绢，轻轻地放在小朋友的后边，没座！',
                key: '3',
              },
            ],
            title: '发现更多',
          }}
          bubbleListProps={{
            roles,
            items: bubbleList,
          }}
          expressProps={{
            senderProps: {
              value: inputValue,
              onChange: setInputValue,
              placeholder: '输入 / 开启搜索建议',
              onSubmit: onSend,
              disabled: inputDisabled,
            },
            suggestionProps: {
              items: suggestionItems,
              onSelect: (itemVal) => {
                setInputValue(`[${itemVal}]:`);
              },
            },
          }}
        />
      </Drawer>
    </>
  );
};
```

### 流式渲染

```tsx
import {
  CopyOutlined,
  PaperClipOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Attachments, Prompts, XStream } from '@ant-design/x';
import { Copilot } from 'antdx-pro';
import { Button, Flex, Drawer } from 'antd';
import { useState } from 'react';

const contentChunks = ['He', 'llo', ', w', 'or', 'ld!'];

function mockReadableStream() {
  const sseChunks: string[] = [];

  for (let i = 0; i < contentChunks.length; i++) {
    const sseEventPart = `event: message\ndata: {"id":"${i}","content":"${contentChunks[i]}"}\n\n`;
    sseChunks.push(sseEventPart);
  }

  return new ReadableStream({
    async start(controller) {
      for (const chunk of sseChunks) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        controller.enqueue(new TextEncoder().encode(chunk));
      }
      controller.close();
    },
  });
}

export default () => {
  const roles = {
    ai: {
      placement: 'start',
      typing: true,
      avatar: {
        icon: '✨',
        style: { background: '#efefef' },
      },
      footer: () => (
        <Flex justify="end" gap={0}>
          <Button size="small" type="text" icon={<CopyOutlined />} />
          <Button size="small" type="text" icon={<SyncOutlined />} />
        </Flex>
      ),
    },
    user: {
      placement: 'end',
      typing: true,
      avatar: {
        icon: <UserOutlined />,
        style: { background: '#fde3cf' },
      },
    },
    suggestion: {
      placement: 'start',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
      messageRender: (items) => <Prompts vertical items={items} />,
    },
    file: {
      placement: 'start',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
    },
    useFile: {
      placement: 'end',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
      messageRender: (items) => (
        <Attachments items={items} overflow="scrollX" disabled />
      ),
    },
  };

  const [bubbleList, setBubbleList] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [inputDisabled, setInputDisabled] = useState(false);

  async function readStream() {
    for await (const chunk of XStream({
      readableStream: mockReadableStream(),
    })) {
      setBubbleList((prev) => {
        let lastBubble = prev[prev.length - 1];
        if (lastBubble?.role === 'ai') {
          lastBubble = {
            ...lastBubble,
            loading: false,
            content:
              (lastBubble.content ?? '') + JSON.parse(chunk.data)?.content,
          };
        }
        prev.pop();
        return [...prev, lastBubble];
      });
      setInputDisabled(false);
    }
  }

  const onSend = (val) => {
    if (val === '/') return;
    setBubbleList((prev) => [
      ...prev,
      {
        role: 'user',
        content: val,
        key: `${prev.length + 1}`,
      },
      {
        role: 'ai',
        loading: true,
        key: `${prev.length + 3}`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    readStream();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="流式渲染" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI，好写，太好写了',
            description: '不用三天，两小时，但我为啥不写了，因为爷们要脸',
            style: {
              backgroundImage:
                'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
              borderStartStartRadius: 4,
            },
            icon: (
              <div
                style={{
                  fontSize: 42,
                }}
              >
                ✨
              </div>
            ),
          }}
          promptsProps={{
            vertical: true,
            items: [
              { description: '⚡️go go go 出发啦！', key: '1' },
              { description: '🚀特别的日子里特别的歌送给特别的你', key: '2' },
              {
                description: '🔥丢啊丢啊丢手绢，轻轻地放在小朋友的后边，没座！',
                key: '3',
              },
            ],
            title: '发现更多',
          }}
          bubbleListProps={{
            roles,
            items: bubbleList,
          }}
          expressProps={{
            senderProps: {
              value: inputValue,
              onChange: setInputValue,
              placeholder: '请输入',
              onSubmit: onSend,
              disabled: inputDisabled,
            },
          }}
        />
      </Drawer>
    </>
  );
};
```

### markdown 渲染

```tsx
import {
  CopyOutlined,
  PaperClipOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Attachments, Prompts, XStream } from '@ant-design/x';
import { Copilot } from 'antdx-pro';
import { Button, Flex, Drawer, Typography } from 'antd';
import { useState } from 'react';
import markdownit from 'markdown-it';

const suggestionItems = [
  { label: '发送', value: 'send' },
  { label: '发送2', value: 'send2' },
];

const md = markdownit({ html: true, breaks: true });
const text = `
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
`.trim();

export default () => {
  const roles = {
    ai: {
      placement: 'start',
      typing: true,
      avatar: {
        icon: '✨',
        style: { background: '#efefef' },
      },
      messageRender: (items) => (
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: md.render(items) }} />
        </Typography>
      ),
    },
    user: {
      placement: 'end',
      typing: true,
      avatar: {
        icon: <UserOutlined />,
        style: { background: '#fde3cf' },
      },
    },
    suggestion: {
      placement: 'start',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
      messageRender: (items) => <Prompts vertical items={items} />,
    },
    file: {
      placement: 'start',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
    },
    useFile: {
      placement: 'end',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
      messageRender: (items) => (
        <Attachments items={items} overflow="scrollX" disabled />
      ),
    },
  };

  const [bubbleList, setBubbleList] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [inputDisabled, setInputDisabled] = useState(false);

  const requestData = () => {
    setTimeout(() => {
      setBubbleList((prev) => {
        let lastBubble = prev[prev.length - 1];
        if (lastBubble?.role === 'ai') {
          lastBubble = {
            ...lastBubble,
            loading: false,
            content: text,
          };
        }
        prev.pop();
        return [...prev, lastBubble];
      });
      setInputDisabled(false);
    }, 3000);
  };

  const onSend = (val) => {
    if (val === '/') return;
    setBubbleList((prev) => [
      ...prev,
      {
        role: 'user',
        content: val,
        key: `${prev.length + 1}`,
      },
      {
        role: 'ai',
        loading: true,
        key: `${prev.length + 2}`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="markdown 渲染" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI，好写，太好写了',
            description: '不用三天，两小时，但我为啥不写了，因为爷们要脸',
            style: {
              backgroundImage:
                'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
              borderStartStartRadius: 4,
            },
            icon: (
              <div
                style={{
                  fontSize: 42,
                }}
              >
                ✨
              </div>
            ),
          }}
          promptsProps={{
            vertical: true,
            items: [
              { description: '⚡️go go go 出发啦！', key: '1' },
              { description: '🚀特别的日子里特别的歌送给特别的你', key: '2' },
              {
                description: '🔥丢啊丢啊丢手绢，轻轻地放在小朋友的后边，没座！',
                key: '3',
              },
            ],
            title: '发现更多',
          }}
          bubbleListProps={{
            roles,
            items: bubbleList,
          }}
          expressProps={{
            senderProps: {
              value: inputValue,
              onChange: setInputValue,
              placeholder: '请输入',
              onSubmit: onSend,
              disabled: inputDisabled,
            },
          }}
        />
      </Drawer>
    </>
  );
};
```

### 附件上传

```tsx
import {
  CopyOutlined,
  PaperClipOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Attachments, Prompts } from '@ant-design/x';
import { Copilot } from 'antdx-pro';
import { Button, Drawer, Flex } from 'antd';
import { useState } from 'react';

const roles = {
  ai: {
    placement: 'start',
    typing: true,
    avatar: {
      icon: '✨',
      style: { background: '#efefef' },
    },
  },
  user: {
    placement: 'end',
    typing: true,
    avatar: {
      icon: <UserOutlined />,
      style: { background: '#fde3cf' },
    },
  },
  suggestion: {
    placement: 'start',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
    messageRender: (items) => <Prompts vertical items={items} />,
  },
  file: {
    placement: 'start',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
  },
  useFile: {
    placement: 'end',
    avatar: {
      icon: <UserOutlined />,
      style: { visibility: 'hidden' },
    },
    variant: 'borderless',
    messageRender: (items) => (
      <Attachments items={items} overflow="scrollX" disabled />
    ),
  },
};

export default () => {
  const [files, setFiles] = useState([]);

  const [bubbleList, setBubbleList] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [inputDisabled, setInputDisabled] = useState(false);

  const requestData = () => {
    setTimeout(() => {
      setBubbleList((prev) => {
        let lastBubble = prev[prev.length - 1];
        if (lastBubble?.role === 'ai') {
          lastBubble = {
            ...lastBubble,
            loading: false,
            content: 'hello world',
          };
        }
        prev.pop();
        return [...prev, lastBubble];
      });
      setInputDisabled(false);
    }, 3000);
  };

  const onSend = (val) => {
    if (val === '/') return;
    setFiles([]);
    setBubbleList((prev) => [
      ...prev,
      {
        role: 'user',
        content: val,
        key: `${prev.length + 1}`,
      },
      {
        role: 'useFile',
        content: files,
        key: `${prev.length + 2}`,
      },
      {
        role: 'ai',
        loading: true,
        key: `${prev.length + 3}`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="附件上传" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI，好写，太好写了',
            description: '不用三天，两小时，但我为啥不写了，因为爷们要脸',
            style: {
              backgroundImage:
                'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
              borderStartStartRadius: 4,
            },
            icon: (
              <div
                style={{
                  fontSize: 42,
                }}
              >
                ✨
              </div>
            ),
          }}
          promptsProps={{
            vertical: true,
            items: [
              { description: '⚡️go go go 出发啦！', key: '1' },
              { description: '🚀特别的日子里特别的歌送给特别的你', key: '2' },
              {
                description: '🔥丢啊丢啊丢手绢，轻轻地放在小朋友的后边，没座！',
                key: '3',
              },
            ],
            title: '发现更多',
          }}
          bubbleListProps={{
            roles,
            items: bubbleList,
          }}
          expressProps={{
            senderProps: {
              value: inputValue,
              onChange: setInputValue,
              placeholder: '请输入',
              onSubmit: onSend,
              disabled: inputDisabled,
              prefix: (
                <Attachments
                  {...{
                    beforeUpload: () => false,
                    onChange: ({ fileList }) => setFiles(fileList),
                    items: files,
                    overflow: 'scrollX',
                  }}
                >
                  <Button type="text" icon={<PaperClipOutlined />} />
                </Attachments>
              ),
              header: files.length ? (
                <Attachments
                  {...{
                    beforeUpload: () => false,
                    onChange: ({ fileList }) => setFiles(fileList),
                    items: files,
                    overflow: 'scrollX',
                  }}
                />
              ) : null,
            },
          }}
        />
      </Drawer>
    </>
  );
};
```

### 输入框更多样式

```tsx
import {
  AudioOutlined,
  CopyOutlined,
  PaperClipOutlined,
  SyncOutlined,
  UserOutlined,
  EllipsisOutlined,
  DribbbleOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Attachments, Prompts } from '@ant-design/x';
import { Copilot } from 'antdx-pro';
import { Button, Flex, Typography } from 'antd';
import { useState } from 'react';
import markdownit from 'markdown-it';

const suggestionItems = [
  { label: '发送', value: 'send' },
  { label: '发送2', value: 'send2' },
];

const md = markdownit({ html: true, breaks: true });
const text = `
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
`.trim();

export default () => {
  const [files, setFiles] = useState([]);

  const roles = {
    ai: {
      placement: 'start',
      typing: true,
      avatar: {
        icon: '✨',
        style: { background: '#efefef' },
      },
      messageRender: (items) => (
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: md.render(items) }} />
        </Typography>
      ),
      footer: () => (
        <Flex justify="end" gap={0}>
          <Button size="small" type="text" icon={<CopyOutlined />} />
          <Button size="small" type="text" icon={<SyncOutlined />} />
        </Flex>
      ),
    },
    user: {
      placement: 'end',
      typing: true,
      avatar: {
        icon: <UserOutlined />,
        style: { background: '#fde3cf' },
      },
    },
    suggestion: {
      placement: 'start',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
      messageRender: (items) => <Prompts vertical items={items} />,
    },
    file: {
      placement: 'start',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
    },
    useFile: {
      placement: 'end',
      avatar: {
        icon: <UserOutlined />,
        style: { visibility: 'hidden' },
      },
      variant: 'borderless',
      messageRender: (items) => (
        <Attachments items={items} overflow="scrollX" disabled />
      ),
    },
  };

  const [bubbleList, setBubbleList] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [inputDisabled, setInputDisabled] = useState(false);

  const requestData = () => {
    setTimeout(() => {
      setBubbleList((prev) => {
        let lastBubble = prev[prev.length - 1];
        if (lastBubble?.role === 'ai') {
          lastBubble = {
            ...lastBubble,
            loading: false,
            content: text,
          };
        }
        prev.pop();
        return [...prev, lastBubble];
      });
      setInputDisabled(false);
    }, 3000);
  };

  const onSend = (val: string) => {
    if (val === '/') return;
    if (files.length) {
      setFiles([]);
    }
    console.log('onSend', files);
    setBubbleList((prev) => [
      ...prev,
      {
        role: 'user',
        content: val,
        key: `${prev.length + 1}`,
      },
      {
        role: 'useFile',
        content: files,
        key: `${prev.length + 2}`,
      },
      {
        role: 'ai',
        loading: true,
        key: `${prev.length + 3}`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  return (
    <Copilot
      welcomeProps={{
        title: 'AI，好写，太好写了',
        description: '不用三天，两小时，但我为啥不写了，因为爷们要脸',
        style: {
          backgroundImage: 'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
          borderStartStartRadius: 4,
        },
        icon: (
          <div
            style={{
              fontSize: 42,
            }}
          >
            ✨
          </div>
        ),
      }}
      promptsProps={{
        vertical: true,
        items: [
          { description: '⚡️go go go 出发啦！', key: '1' },
          { description: '🚀特别的日子里特别的歌送给特别的你', key: '2' },
          {
            description: '🔥丢啊丢啊丢手绢，轻轻地放在小朋友的后边，没座！',
            key: '3',
          },
        ],
        title: '发现更多',
      }}
      bubbleListProps={{
        roles,
        items: bubbleList,
      }}
      expressProps={{
        senderProps: {
          value: inputValue,
          onChange: setInputValue,
          placeholder: '请输入',
          onSubmit: onSend,
          disabled: inputDisabled,
          actions: false,
          footer: (
              <Flex justify="space-between" gap={10}>
                <div>
                  <Attachments
                    {...{
                      beforeUpload: () => false,
                      onChange: ({ fileList }) => setFiles(fileList),
                      items: files,
                      overflow: "scrollX",
                    }}
                  >
                    <Button
                      size="small"
                      type="text"
                      icon={<PaperClipOutlined />}
                    >
                      附件
                    </Button>
                  </Attachments>
                  <Button size="small" type="text" icon={<DribbbleOutlined />}>
                    联网
                  </Button>
                  <Button
                    size="small"
                    type="text"
                    shape="circle"
                    icon={<EllipsisOutlined />}
                  />
                </div>
                <Button
                  size="small"
                  type="text"
                  shape="circle"
                  icon={inputValue ? <SendOutlined /> : <AudioOutlined />}
                />
              </Flex>
          ),
          header: files.length ? (
            <Attachments
              {...{
                beforeUpload: () => false,
                onChange: ({ fileList }) => setFiles(fileList),
                items: files,
                overflow: 'scrollX',
              }}
            />
          ) : null,
        },
        suggestionProps: {
          items: suggestionItems,
          onSelect: (itemVal) => {
            setInputValue(`[${itemVal}]:`);
          },
        },
      }}
    />
  );
};
```
