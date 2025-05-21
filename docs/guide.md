---
nav:
  title: 指南
  path: /guide
title: 快速开始
order: 2
---


## Usage

### 下载

```bash
pnpm add @antdx/pro
```
### 引入

```js
import React from 'react';
import { Copilot } from '@antdx/pro';
export default () => <Copilot />;
```
### Options

依赖原始 `api`，无任何内置

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
## 完整示例

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
import { Copilot } from '@antdx/pro';
import { Button, Flex, Typography, Drawer } from 'antd';
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
  
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} children="完整示例" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
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
    </Drawer>
    </>
  );
};
```

