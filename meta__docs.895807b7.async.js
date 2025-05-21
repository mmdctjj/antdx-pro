"use strict";(self.webpackChunkantdx_pro=self.webpackChunkantdx_pro||[]).push([[904],{60810:function(B,a,e){var v;e.r(a),e.d(a,{demos:function(){return c}});var i=e(15009),E=e.n(i),U=e(19632),j=e.n(U),$=e(97857),A=e.n($),K=e(5574),f=e.n(K),X=e(99289),d=e.n(X),n=e(67294),W=e(56106),N=e(81138),t=e(13271),g=e(2784),I=e(10048),c={"docs-guide-demo-0":{component:n.memo(n.lazy(d()(E()().mark(function P(){var o,_,b,S,x,l,L,R,F,y,u,O,w,G,M,h,z,H,k,J,D,Q,Y,q,ee,ne;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,56106));case 2:return o=r.sent,_=o.AudioOutlined,b=o.CopyOutlined,S=o.PaperClipOutlined,x=o.SyncOutlined,l=o.UserOutlined,L=o.EllipsisOutlined,R=o.DribbbleOutlined,F=o.SendOutlined,r.next=13,Promise.resolve().then(e.bind(e,81138));case 13:return y=r.sent,u=y.Attachments,O=y.Prompts,r.next=18,Promise.resolve().then(e.bind(e,13271));case 18:return w=r.sent,G=w.Copilot,r.next=22,Promise.resolve().then(e.bind(e,2784));case 22:return M=r.sent,h=M.Button,z=M.Flex,H=M.Typography,k=M.Drawer,r.next=29,Promise.resolve().then(e.t.bind(e,67294,19));case 29:return J=r.sent,D=J.useState,r.next=33,Promise.resolve().then(e.bind(e,10048));case 33:return Q=r.sent,Y=Q.default,q=[{label:"\u53D1\u9001",value:"send"},{label:"\u53D1\u90012",value:"send2"}],ee=Y({html:!0,breaks:!0}),ne=`
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
`.trim(),r.abrupt("return",{default:function(){var me=D([]),te=f()(me,2),C=te[0],V=te[1],pe={ai:{placement:"start",typing:!0,avatar:{icon:"\u2728",style:{background:"#efefef"}},messageRender:function(s){return n.createElement(H,null,n.createElement("div",{dangerouslySetInnerHTML:{__html:ee.render(s)}}))},footer:function(){return n.createElement(z,{justify:"end",gap:0},n.createElement(h,{size:"small",type:"text",icon:n.createElement(b,null)}),n.createElement(h,{size:"small",type:"text",icon:n.createElement(x,null)}))}},user:{placement:"end",typing:!0,avatar:{icon:n.createElement(l,null),style:{background:"#fde3cf"}}},suggestion:{placement:"start",avatar:{icon:n.createElement(l,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(s){return n.createElement(O,{vertical:!0,items:s})}},file:{placement:"start",avatar:{icon:n.createElement(l,null),style:{visibility:"hidden"}},variant:"borderless"},useFile:{placement:"end",avatar:{icon:n.createElement(l,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(s){return n.createElement(u,{items:s,overflow:"scrollX",disabled:!0})}}},ce=D([]),se=f()(ce,2),ve=se[0],le=se[1],fe=D(""),re=f()(fe,2),oe=re[0],Z=re[1],be=D(!1),ae=f()(be,2),ge=ae[0],ie=ae[1],_e=function(){setTimeout(function(){le(function(s){var p,T=s[s.length-1];return((p=T)===null||p===void 0?void 0:p.role)==="ai"&&(T=A()(A()({},T),{},{loading:!1,content:ne})),s.pop(),[].concat(j()(s),[T])}),ie(!1)},3e3)},he=function(s){s!=="/"&&(C.length&&V([]),console.log("onSend",C),le(function(p){return[].concat(j()(p),[{role:"user",content:s,key:"".concat(p.length+1)},{role:"useFile",content:C,key:"".concat(p.length+2)},{role:"ai",loading:!0,key:"".concat(p.length+3)}])}),Z(""),ie(!0),_e())},Pe=D(!1),de=f()(Pe,2),ye=de[0],ue=de[1];return n.createElement(n.Fragment,null,n.createElement(h,{type:"primary",onClick:function(){return ue(!0)},children:"\u5B8C\u6574\u793A\u4F8B"}),n.createElement(k,{open:ye,width:600,onClose:function(){return ue(!1)}},n.createElement(G,{welcomeProps:{title:"AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86",description:"\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138",style:{backgroundImage:"linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)",borderStartStartRadius:4},icon:n.createElement("div",{style:{fontSize:42}},"\u2728")},promptsProps:{vertical:!0,items:[{description:"\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01",key:"1"},{description:"\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60",key:"2"},{description:"\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01",key:"3"}],title:"\u53D1\u73B0\u66F4\u591A"},bubbleListProps:{roles:pe,items:ve},expressProps:{senderProps:{value:oe,onChange:Z,placeholder:"\u8BF7\u8F93\u5165",onSubmit:he,disabled:ge,actions:!1,footer:n.createElement(z,{justify:"space-between",gap:10},n.createElement("div",null,n.createElement(u,{beforeUpload:function(){return!1},onChange:function(s){var p=s.fileList;return V(p)},items:C,overflow:"scrollX"},n.createElement(h,{size:"small",type:"text",icon:n.createElement(S,null)},"\u9644\u4EF6")),n.createElement(h,{size:"small",type:"text",icon:n.createElement(R,null)},"\u8054\u7F51"),n.createElement(h,{size:"small",type:"text",shape:"circle",icon:n.createElement(L,null)})),n.createElement(h,{size:"small",type:"text",shape:"circle",icon:oe?n.createElement(F,null):n.createElement(_,null)})),header:C.length?n.createElement(u,{beforeUpload:function(){return!1},onChange:function(s){var p=s.fileList;return V(p)},items:C,overflow:"scrollX"}):null},suggestionProps:{items:q,onSelect:function(s){Z("[".concat(s,"]:"))}}}})))}});case 39:case"end":return r.stop()}},P)})))),asset:{type:"BLOCK",id:"docs-guide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
import { Button, Flex, Typography, Drawer } from 'antd';
import { useState } from 'react';
import markdownit from 'markdown-it';

const suggestionItems = [
  { label: '\u53D1\u9001', value: 'send' },
  { label: '\u53D1\u90012', value: 'send2' },
];

const md = markdownit({ html: true, breaks: true });
const text = \`
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
\`.trim();

export default () => {
  const [files, setFiles] = useState([]);

  const roles = {
    ai: {
      placement: 'start',
      typing: true,
      avatar: {
        icon: '\u2728',
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
        key: \`\${prev.length + 1}\`,
      },
      {
        role: 'useFile',
        content: files,
        key: \`\${prev.length + 2}\`,
      },
      {
        role: 'ai',
        loading: true,
        key: \`\${prev.length + 3}\`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };
  
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} children="\u5B8C\u6574\u793A\u4F8B" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
    <Copilot
      welcomeProps={{
        title: 'AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86',
        description: '\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138',
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
            \u2728
          </div>
        ),
      }}
      promptsProps={{
        vertical: true,
        items: [
          { description: '\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01', key: '1' },
          { description: '\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60', key: '2' },
          {
            description: '\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01',
            key: '3',
          },
        ],
        title: '\u53D1\u73B0\u66F4\u591A',
      }}
      bubbleListProps={{
        roles,
        items: bubbleList,
      }}
      expressProps={{
        senderProps: {
          value: inputValue,
          onChange: setInputValue,
          placeholder: '\u8BF7\u8F93\u5165',
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
                      \u9644\u4EF6
                    </Button>
                  </Attachments>
                  <Button size="small" type="text" icon={<DribbbleOutlined />}>
                    \u8054\u7F51
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
            setInputValue(\`[\${itemVal}]:\`);
          },
        },
      }}
    />
    </Drawer>
    </>
  );
};`},"@ant-design/icons":{type:"NPM",value:"6.0.0"},"@ant-design/x":{type:"NPM",value:"1.2.0"},"antdx-pro":{type:"NPM",value:"0.0.2"},antd:{type:"NPM",value:"5.25.2"},react:{type:"NPM",value:"18.3.1"},"markdown-it":{type:"NPM",value:"14.1.0"}},entry:"index.tsx"},context:{"@ant-design/icons":W,"@ant-design/x":N,"antdx-pro":t,antd:g,react:v||(v=e.t(n,2)),"markdown-it":I},renderOpts:{compile:function(){var P=d()(E()().mark(function _(){var b,S=arguments;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(335).then(e.bind(e,37335));case 2:return l.abrupt("return",(b=l.sent).default.apply(b,S));case 3:case"end":return l.stop()}},_)}));function o(){return P.apply(this,arguments)}return o}()}}}},11171:function(B,a,e){e.r(a),e.d(a,{demos:function(){return i}});var v=e(67294),i={}},13271:function(B,a,e){e.r(a),e.d(a,{Copilot:function(){return W}});var v=e(97857),i=e.n(v),E=e(78205),U=e(78919),j=e(76654),$=e(28015),A=e(3296),K=e(81765),f=e(86250),X=e(67294),d=e(85893),n=function(t){var g,I,c,P,o,_,b;return(0,d.jsxs)(f.Z,{vertical:!0,gap:"middle",style:{height:"100%"},justify:"space-between",children:[t!=null&&(g=t.bubbleListProps)!==null&&g!==void 0&&(g=g.items)!==null&&g!==void 0&&g.length?(0,d.jsx)(j.Z.List,i()({},(I=t==null?void 0:t.bubbleListProps)!==null&&I!==void 0?I:{})):(0,d.jsxs)(f.Z,{vertical:!0,gap:"middle",children:[(0,d.jsx)(E.Z,i()({},t==null?void 0:t.welcomeProps)),(0,d.jsx)(U.Z,i()({},t==null?void 0:t.promptsProps))]}),(0,d.jsxs)(f.Z,{vertical:!0,gap:0,children:[!!(t!=null&&(c=t.expressProps)!==null&&c!==void 0&&(c=c.attachmentsProps)!==null&&c!==void 0&&(c=c.items)!==null&&c!==void 0&&c.length)&&(0,d.jsx)($.Z,i()({},(P=t==null||(o=t.expressProps)===null||o===void 0?void 0:o.attachmentsProps)!==null&&P!==void 0?P:{})),(0,d.jsx)(A.Z,i()(i()({},(_=t==null||(b=t.expressProps)===null||b===void 0?void 0:b.suggestionProps)!==null&&_!==void 0?_:{items:[]}),{},{children:function(x){var l,L=x.onTrigger,R=x.onKeyDown;return(0,d.jsx)(K.Z,i()(i()({},(l=t.expressProps)===null||l===void 0?void 0:l.senderProps),{},{onChange:function(y){var u,O;y==="/"?L():y||L(!1),t==null||(u=t.expressProps)===null||u===void 0||(u=u.senderProps)===null||u===void 0||(O=u.onChange)===null||O===void 0||O.call(u,y)},onKeyDown:R}))}}))]})]})},W=n},87799:function(B,a,e){e.r(a),e.d(a,{texts:function(){return v}});const v=[{value:`pnpm add antdx-pro
`,paraId:0,tocIndex:1},{value:`import React from 'react';
import { Copilot } from 'antdx-pro';
export default () => <Copilot />;
`,paraId:1,tocIndex:2},{value:"\u4F9D\u8D56\u539F\u59CB ",paraId:2,tocIndex:3},{value:"api",paraId:2,tocIndex:3},{value:"\uFF0C\u65E0\u4EFB\u4F55\u5185\u7F6E",paraId:2,tocIndex:3},{value:`interface ICopilotProps {
  /** \u6B22\u8FCE **/
  welcomeProps?: WelcomeProps;
  /** \u804A\u5929 **/
  bubbleListProps?: BubbleListProps;
  /** \u5EFA\u8BAE **/
  promptsProps?: PromptsProps;
  /** \u8F93\u5165 **/
  expressProps?: {
    attachmentsProps?: AttachmentsProps;
    senderProps?: SenderProps;
    suggestionProps?: SuggestionProps;
  };
}
`,paraId:3,tocIndex:3}]},51446:function(B,a,e){e.r(a),e.d(a,{texts:function(){return v}});const v=[]}}]);
