(self.webpackChunkantdx_pro=self.webpackChunkantdx_pro||[]).push([[831],{23699:function(ue,ie,e){"use strict";var C;e.r(ie),e.d(ie,{demos:function(){return me}});var M=e(15009),r=e.n(M),K=e(19632),S=e.n(K),ye=e(97857),ne=e.n(ye),he=e(5574),b=e.n(he),xe=e(99289),O=e.n(xe),Pe=e(44987),Se=e.n(Pe),n=e(67294),f=e(56106),se=e(81138),oe=e(13271),G=e(2784),de=e(10048),me={"copilot-demo-0":{component:n.memo(n.lazy(O()(r()().mark(function g(){var l,d,i,u,c,t,j,E,h,x,D,R,I,Y,_,s,U;return r()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,56106));case 2:return l=P.sent,d=l.CopyOutlined,i=l.PaperClipOutlined,u=l.SyncOutlined,c=l.UserOutlined,P.next=9,Promise.resolve().then(e.bind(e,81138));case 9:return t=P.sent,j=t.Attachments,E=t.Prompts,P.next=14,Promise.resolve().then(e.bind(e,13271));case 14:return h=P.sent,x=h.Copilot,P.next=18,Promise.resolve().then(e.bind(e,2784));case 18:return D=P.sent,R=D.Button,I=D.Drawer,Y=D.Flex,P.next=24,Promise.resolve().then(e.t.bind(e,67294,19));case 24:return _=P.sent,s=_.useState,U={ai:{placement:"start",typing:!0,avatar:{icon:"\u2728",style:{background:"#efefef"}}},user:{placement:"end",typing:!0,avatar:{icon:n.createElement(c,null),style:{background:"#fde3cf"}}},suggestion:{placement:"start",avatar:{icon:n.createElement(c,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(V){return n.createElement(E,{vertical:!0,items:V})}},file:{placement:"start",avatar:{icon:n.createElement(c,null),style:{visibility:"hidden"}},variant:"borderless"},useFile:{placement:"end",avatar:{icon:n.createElement(c,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(V){return n.createElement(j,{items:V,overflow:"scrollX",disabled:!0})}}},P.abrupt("return",{default:function(){var V=s([]),J=b()(V,2),w=J[0],W=J[1],Q=s(""),q=b()(Q,2),v=q[0],z=q[1],Z=s(!1),N=b()(Z,2),X=N[0],B=N[1],ee=function(){setTimeout(function(){W(function(L){var m,o=L[L.length-1];return((m=o)===null||m===void 0?void 0:m.role)==="ai"&&(o=ne()(ne()({},o),{},{loading:!1,content:"hello world"})),L.pop(),[].concat(S()(L),[o])}),B(!1)},3e3)},re=function(L){L!=="/"&&(W(function(m){return[].concat(S()(m),[{role:"user",content:L,key:"".concat(m.length+1)},{role:"ai",loading:!0,key:"".concat(m.length+2)}])}),z(""),B(!0),ee())},ae=s(!1),H=b()(ae,2),$=H[0],F=H[1];return n.createElement(n.Fragment,null,n.createElement(R,{onClick:function(){return F(!0)},children:"\u57FA\u7840"}),n.createElement(I,{open:$,width:600,onClose:function(){return F(!1)}},n.createElement(x,{welcomeProps:{title:"AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86",description:"\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138",style:{backgroundImage:"linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)",borderStartStartRadius:4},icon:n.createElement("div",{style:{fontSize:42}},"\u2728")},promptsProps:{vertical:!0,items:[{description:"\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01",key:"1"},{description:"\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60",key:"2"},{description:"\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01",key:"3"}],title:"\u53D1\u73B0\u66F4\u591A"},bubbleListProps:{roles:U,items:w},expressProps:{senderProps:{value:v,onChange:z,placeholder:"\u8BF7\u8F93\u5165",onSubmit:re,disabled:X}}})))}});case 28:case"end":return P.stop()}},g)})))),asset:{type:"BLOCK",id:"copilot-demo-0",refAtomIds:["Copilot"],dependencies:{"index.jsx":{type:"FILE",value:`import {
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
      icon: '\u2728',
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
        key: \`\${prev.length + 1}\`,
      },
      {
        role: 'ai',
        loading: true,
        key: \`\${prev.length + 2}\`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="\u57FA\u7840" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86',
            description: '\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138',
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
            },
          }}
        />
      </Drawer>
    </>
  );
};`},"@ant-design/icons":{type:"NPM",value:"6.0.0"},"@ant-design/x":{type:"NPM",value:"1.2.0"},"antdx-pro":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.25.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@ant-design/icons":f,"@ant-design/x":se,"antdx-pro":oe,antd:G,react:C||(C=e.t(n,2))},renderOpts:{compile:function(){var g=O()(r()().mark(function d(){var i,u=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,u));case 3:case"end":return t.stop()}},d)}));function l(){return g.apply(this,arguments)}return l}()}},"copilot-demo-1":{component:n.memo(n.lazy(O()(r()().mark(function g(){var l,d,i,u,c,t,j,E,h,x,D,R,I,Y;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,56106));case 2:return l=s.sent,d=l.UserOutlined,s.next=6,Promise.resolve().then(e.bind(e,81138));case 6:return i=s.sent,u=i.Attachments,c=i.Prompts,s.next=11,Promise.resolve().then(e.bind(e,13271));case 11:return t=s.sent,j=t.Copilot,s.next=15,Promise.resolve().then(e.bind(e,2784));case 15:return E=s.sent,h=E.Button,x=E.Drawer,s.next=20,Promise.resolve().then(e.t.bind(e,67294,19));case 20:return D=s.sent,R=D.useState,I=[{label:"\u53D1\u9001",value:"send"},{label:"\u53D1\u90012",value:"send2"}],Y={ai:{placement:"start",typing:!0,avatar:{icon:"\u2728",style:{background:"#efefef"}}},user:{placement:"end",typing:!0,avatar:{icon:n.createElement(d,null),style:{background:"#fde3cf"}}},suggestion:{placement:"start",avatar:{icon:n.createElement(d,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(A){return n.createElement(c,{vertical:!0,items:A})}},file:{placement:"start",avatar:{icon:n.createElement(d,null),style:{visibility:"hidden"}},variant:"borderless"},useFile:{placement:"end",avatar:{icon:n.createElement(d,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(A){return n.createElement(u,{items:A,overflow:"scrollX",disabled:!0})}}},s.abrupt("return",{default:function(){var A=R([]),P=b()(A,2),a=P[0],V=P[1],J=R(""),w=b()(J,2),W=w[0],Q=w[1],q=R(!1),v=b()(q,2),z=v[0],Z=v[1],N=function(){setTimeout(function(){V(function($){var F,T=$[$.length-1];return((F=T)===null||F===void 0?void 0:F.role)==="ai"&&(T=ne()(ne()({},T),{},{loading:!1,content:"hello world"})),$.pop(),[].concat(S()($),[T])}),Z(!1)},3e3)},X=function($){$!=="/"&&(V(function(F){return[].concat(S()(F),[{role:"user",content:$,key:"".concat(F.length+1)},{role:"ai",loading:!0,key:"".concat(F.length+2)}])}),Q(""),Z(!0),N())},B=R(!1),ee=b()(B,2),re=ee[0],ae=ee[1];return n.createElement(n.Fragment,null,n.createElement(h,{onClick:function(){return ae(!0)},children:"\u641C\u7D22\u5EFA\u8BAE"}),n.createElement(x,{open:re,width:600,onClose:function(){return ae(!1)}},n.createElement(j,{welcomeProps:{title:"AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86",description:"\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138",style:{backgroundImage:"linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)",borderStartStartRadius:4},icon:n.createElement("div",{style:{fontSize:42}},"\u2728")},promptsProps:{vertical:!0,items:[{description:"\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01",key:"1"},{description:"\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60",key:"2"},{description:"\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01",key:"3"}],title:"\u53D1\u73B0\u66F4\u591A"},bubbleListProps:{roles:Y,items:a},expressProps:{senderProps:{value:W,onChange:Q,placeholder:"\u8F93\u5165 / \u5F00\u542F\u641C\u7D22\u5EFA\u8BAE",onSubmit:X,disabled:z},suggestionProps:{items:I,onSelect:function($){Q("[".concat($,"]:"))}}}})))}});case 25:case"end":return s.stop()}},g)})))),asset:{type:"BLOCK",id:"copilot-demo-1",refAtomIds:["Copilot"],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
  { label: '\u53D1\u9001', value: 'send' },
  { label: '\u53D1\u90012', value: 'send2' },
];

const roles = {
  ai: {
    placement: 'start',
    typing: true,
    avatar: {
      icon: '\u2728',
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
        key: \`\${prev.length + 1}\`,
      },
      {
        role: 'ai',
        loading: true,
        key: \`\${prev.length + 2}\`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="\u641C\u7D22\u5EFA\u8BAE" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86',
            description: '\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138',
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
              placeholder: '\u8F93\u5165 / \u5F00\u542F\u641C\u7D22\u5EFA\u8BAE',
              onSubmit: onSend,
              disabled: inputDisabled,
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
};`},"@ant-design/icons":{type:"NPM",value:"6.0.0"},"@ant-design/x":{type:"NPM",value:"1.2.0"},"antdx-pro":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.25.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":f,"@ant-design/x":se,"antdx-pro":oe,antd:G,react:C||(C=e.t(n,2))},renderOpts:{compile:function(){var g=O()(r()().mark(function d(){var i,u=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,u));case 3:case"end":return t.stop()}},d)}));function l(){return g.apply(this,arguments)}return l}()}},"copilot-demo-2":{component:n.memo(n.lazy(O()(r()().mark(function g(){var l,d,i,u,c,t,j,E,h,x,D,R,I,Y,_,s,U,A;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return A=function(){for(var J=[],w=0;w<U.length;w++){var W=`event: message
data: {"id":"`.concat(w,'","content":"').concat(U[w],`"}

`);J.push(W)}return new ReadableStream({start:function(q){return O()(r()().mark(function v(){var z,Z,N;return r()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:z=0,Z=J;case 1:if(!(z<Z.length)){B.next=9;break}return N=Z[z],B.next=5,new Promise(function(ee){return setTimeout(ee,100)});case 5:q.enqueue(new TextEncoder().encode(N));case 6:z++,B.next=1;break;case 9:q.close();case 10:case"end":return B.stop()}},v)}))()}})},a.next=3,Promise.resolve().then(e.bind(e,56106));case 3:return l=a.sent,d=l.CopyOutlined,i=l.SyncOutlined,u=l.UserOutlined,a.next=9,Promise.resolve().then(e.bind(e,81138));case 9:return c=a.sent,t=c.Attachments,j=c.Prompts,E=c.XStream,a.next=15,Promise.resolve().then(e.bind(e,13271));case 15:return h=a.sent,x=h.Copilot,a.next=19,Promise.resolve().then(e.bind(e,2784));case 19:return D=a.sent,R=D.Button,I=D.Flex,Y=D.Drawer,a.next=25,Promise.resolve().then(e.t.bind(e,67294,19));case 25:return _=a.sent,s=_.useState,U=["He","llo",", w","or","ld!"],a.abrupt("return",{default:function(){var J={ai:{placement:"start",typing:!0,avatar:{icon:"\u2728",style:{background:"#efefef"}},footer:function(){return n.createElement(I,{justify:"end",gap:0},n.createElement(R,{size:"small",type:"text",icon:n.createElement(d,null)}),n.createElement(R,{size:"small",type:"text",icon:n.createElement(i,null)}))}},user:{placement:"end",typing:!0,avatar:{icon:n.createElement(u,null),style:{background:"#fde3cf"}}},suggestion:{placement:"start",avatar:{icon:n.createElement(u,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(y){return n.createElement(j,{vertical:!0,items:y})}},file:{placement:"start",avatar:{icon:n.createElement(u,null),style:{visibility:"hidden"}},variant:"borderless"},useFile:{placement:"end",avatar:{icon:n.createElement(u,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(y){return n.createElement(t,{items:y,overflow:"scrollX",disabled:!0})}}},w=s([]),W=b()(w,2),Q=W[0],q=W[1],v=s(""),z=b()(v,2),Z=z[0],N=z[1],X=s(!1),B=b()(X,2),ee=B[0],re=B[1];function ae(){return H.apply(this,arguments)}function H(){return H=O()(r()().mark(function o(){var y,te,fe,be,pe,le;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:y=!1,te=!1,p.prev=2,be=r()().mark(function ce(){var De;return r()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:De=le.value,q(function(ge){var Ee,ve=ge[ge.length-1];if(((Ee=ve)===null||Ee===void 0?void 0:Ee.role)==="ai"){var Ie,Ce;ve=ne()(ne()({},ve),{},{loading:!1,content:((Ie=ve.content)!==null&&Ie!==void 0?Ie:"")+((Ce=JSON.parse(De.data))===null||Ce===void 0?void 0:Ce.content)})}return ge.pop(),[].concat(S()(ge),[ve])}),re(!1);case 3:case"end":return Oe.stop()}},ce)}),pe=Se()(E({readableStream:A()}));case 5:return p.next=7,pe.next();case 7:if(!(y=!(le=p.sent).done)){p.next=12;break}return p.delegateYield(be(),"t0",9);case 9:y=!1,p.next=5;break;case 12:p.next=18;break;case 14:p.prev=14,p.t1=p.catch(2),te=!0,fe=p.t1;case 18:if(p.prev=18,p.prev=19,!(y&&pe.return!=null)){p.next=23;break}return p.next=23,pe.return();case 23:if(p.prev=23,!te){p.next=26;break}throw fe;case 26:return p.finish(23);case 27:return p.finish(18);case 28:case"end":return p.stop()}},o,null,[[2,14,18,28],[19,,23,27]])})),H.apply(this,arguments)}var $=function(y){y!=="/"&&(q(function(te){return[].concat(S()(te),[{role:"user",content:y,key:"".concat(te.length+1)},{role:"ai",loading:!0,key:"".concat(te.length+3)}])}),N(""),re(!0),ae())},F=s(!1),T=b()(F,2),L=T[0],m=T[1];return n.createElement(n.Fragment,null,n.createElement(R,{onClick:function(){return m(!0)},children:"\u6D41\u5F0F\u6E32\u67D3"}),n.createElement(Y,{open:L,width:600,onClose:function(){return m(!1)}},n.createElement(x,{welcomeProps:{title:"AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86",description:"\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138",style:{backgroundImage:"linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)",borderStartStartRadius:4},icon:n.createElement("div",{style:{fontSize:42}},"\u2728")},promptsProps:{vertical:!0,items:[{description:"\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01",key:"1"},{description:"\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60",key:"2"},{description:"\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01",key:"3"}],title:"\u53D1\u73B0\u66F4\u591A"},bubbleListProps:{roles:J,items:Q},expressProps:{senderProps:{value:Z,onChange:N,placeholder:"\u8BF7\u8F93\u5165",onSubmit:$,disabled:ee}}})))}});case 29:case"end":return a.stop()}},g)})))),asset:{type:"BLOCK",id:"copilot-demo-2",refAtomIds:["Copilot"],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
    const sseEventPart = \`event: message\\ndata: {"id":"\${i}","content":"\${contentChunks[i]}"}\\n\\n\`;
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
        icon: '\u2728',
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
        key: \`\${prev.length + 1}\`,
      },
      {
        role: 'ai',
        loading: true,
        key: \`\${prev.length + 3}\`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    readStream();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="\u6D41\u5F0F\u6E32\u67D3" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86',
            description: '\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138',
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
            },
          }}
        />
      </Drawer>
    </>
  );
};`},"@ant-design/icons":{type:"NPM",value:"6.0.0"},"@ant-design/x":{type:"NPM",value:"1.2.0"},"antdx-pro":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.25.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":f,"@ant-design/x":se,"antdx-pro":oe,antd:G,react:C||(C=e.t(n,2))},renderOpts:{compile:function(){var g=O()(r()().mark(function d(){var i,u=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,u));case 3:case"end":return t.stop()}},d)}));function l(){return g.apply(this,arguments)}return l}()}},"copilot-demo-3":{component:n.memo(n.lazy(O()(r()().mark(function g(){var l,d,i,u,c,t,j,E,h,x,D,R,I,Y,_,s,U,A;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,56106));case 2:return l=a.sent,d=l.UserOutlined,a.next=6,Promise.resolve().then(e.bind(e,81138));case 6:return i=a.sent,u=i.Attachments,c=i.Prompts,a.next=11,Promise.resolve().then(e.bind(e,13271));case 11:return t=a.sent,j=t.Copilot,a.next=15,Promise.resolve().then(e.bind(e,2784));case 15:return E=a.sent,h=E.Button,x=E.Drawer,D=E.Typography,a.next=21,Promise.resolve().then(e.t.bind(e,67294,19));case 21:return R=a.sent,I=R.useState,a.next=25,Promise.resolve().then(e.bind(e,10048));case 25:return Y=a.sent,_=Y.default,s=[{label:"\u53D1\u9001",value:"send"},{label:"\u53D1\u90012",value:"send2"}],U=_({html:!0,breaks:!0}),A=`
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
`.trim(),a.abrupt("return",{default:function(){var J={ai:{placement:"start",typing:!0,avatar:{icon:"\u2728",style:{background:"#efefef"}},messageRender:function(o){return n.createElement(D,null,n.createElement("div",{dangerouslySetInnerHTML:{__html:U.render(o)}}))}},user:{placement:"end",typing:!0,avatar:{icon:n.createElement(d,null),style:{background:"#fde3cf"}}},suggestion:{placement:"start",avatar:{icon:n.createElement(d,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(o){return n.createElement(c,{vertical:!0,items:o})}},file:{placement:"start",avatar:{icon:n.createElement(d,null),style:{visibility:"hidden"}},variant:"borderless"},useFile:{placement:"end",avatar:{icon:n.createElement(d,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(o){return n.createElement(u,{items:o,overflow:"scrollX",disabled:!0})}}},w=I([]),W=b()(w,2),Q=W[0],q=W[1],v=I(""),z=b()(v,2),Z=z[0],N=z[1],X=I(!1),B=b()(X,2),ee=B[0],re=B[1],ae=function(){setTimeout(function(){q(function(o){var y,te=o[o.length-1];return((y=te)===null||y===void 0?void 0:y.role)==="ai"&&(te=ne()(ne()({},te),{},{loading:!1,content:A})),o.pop(),[].concat(S()(o),[te])}),re(!1)},3e3)},H=function(o){o!=="/"&&(q(function(y){return[].concat(S()(y),[{role:"user",content:o,key:"".concat(y.length+1)},{role:"ai",loading:!0,key:"".concat(y.length+2)}])}),N(""),re(!0),ae())},$=I(!1),F=b()($,2),T=F[0],L=F[1];return n.createElement(n.Fragment,null,n.createElement(h,{onClick:function(){return L(!0)},children:"markdown \u6E32\u67D3"}),n.createElement(x,{open:T,width:600,onClose:function(){return L(!1)}},n.createElement(j,{welcomeProps:{title:"AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86",description:"\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138",style:{backgroundImage:"linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)",borderStartStartRadius:4},icon:n.createElement("div",{style:{fontSize:42}},"\u2728")},promptsProps:{vertical:!0,items:[{description:"\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01",key:"1"},{description:"\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60",key:"2"},{description:"\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01",key:"3"}],title:"\u53D1\u73B0\u66F4\u591A"},bubbleListProps:{roles:J,items:Q},expressProps:{senderProps:{value:Z,onChange:N,placeholder:"\u8BF7\u8F93\u5165",onSubmit:H,disabled:ee}}})))}});case 31:case"end":return a.stop()}},g)})))),asset:{type:"BLOCK",id:"copilot-demo-3",refAtomIds:["Copilot"],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
  { label: '\u53D1\u9001', value: 'send' },
  { label: '\u53D1\u90012', value: 'send2' },
];

const md = markdownit({ html: true, breaks: true });
const text = \`
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
\`.trim();

export default () => {
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
        key: \`\${prev.length + 1}\`,
      },
      {
        role: 'ai',
        loading: true,
        key: \`\${prev.length + 2}\`,
      },
    ]);
    setInputValue('');
    setInputDisabled(true);
    requestData();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} children="markdown \u6E32\u67D3" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86',
            description: '\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138',
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
            },
          }}
        />
      </Drawer>
    </>
  );
};`},"@ant-design/icons":{type:"NPM",value:"6.0.0"},"@ant-design/x":{type:"NPM",value:"1.2.0"},"antdx-pro":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.25.2"},react:{type:"NPM",value:"18.3.1"},"markdown-it":{type:"NPM",value:"14.1.0"}},entry:"index.tsx"},context:{"@ant-design/icons":f,"@ant-design/x":se,"antdx-pro":oe,antd:G,react:C||(C=e.t(n,2)),"markdown-it":de},renderOpts:{compile:function(){var g=O()(r()().mark(function d(){var i,u=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,u));case 3:case"end":return t.stop()}},d)}));function l(){return g.apply(this,arguments)}return l}()}},"copilot-demo-4":{component:n.memo(n.lazy(O()(r()().mark(function g(){var l,d,i,u,c,t,j,E,h,x,D,R,I,Y;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,56106));case 2:return l=s.sent,d=l.PaperClipOutlined,i=l.UserOutlined,s.next=7,Promise.resolve().then(e.bind(e,81138));case 7:return u=s.sent,c=u.Attachments,t=u.Prompts,s.next=12,Promise.resolve().then(e.bind(e,13271));case 12:return j=s.sent,E=j.Copilot,s.next=16,Promise.resolve().then(e.bind(e,2784));case 16:return h=s.sent,x=h.Button,D=h.Drawer,s.next=21,Promise.resolve().then(e.t.bind(e,67294,19));case 21:return R=s.sent,I=R.useState,Y={ai:{placement:"start",typing:!0,avatar:{icon:"\u2728",style:{background:"#efefef"}}},user:{placement:"end",typing:!0,avatar:{icon:n.createElement(i,null),style:{background:"#fde3cf"}}},suggestion:{placement:"start",avatar:{icon:n.createElement(i,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(A){return n.createElement(t,{vertical:!0,items:A})}},file:{placement:"start",avatar:{icon:n.createElement(i,null),style:{visibility:"hidden"}},variant:"borderless"},useFile:{placement:"end",avatar:{icon:n.createElement(i,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(A){return n.createElement(c,{items:A,overflow:"scrollX",disabled:!0})}}},s.abrupt("return",{default:function(){var A=I([]),P=b()(A,2),a=P[0],V=P[1],J=I([]),w=b()(J,2),W=w[0],Q=w[1],q=I(""),v=b()(q,2),z=v[0],Z=v[1],N=I(!1),X=b()(N,2),B=X[0],ee=X[1],re=function(){setTimeout(function(){Q(function(m){var o,y=m[m.length-1];return((o=y)===null||o===void 0?void 0:o.role)==="ai"&&(y=ne()(ne()({},y),{},{loading:!1,content:"hello world"})),m.pop(),[].concat(S()(m),[y])}),ee(!1)},3e3)},ae=function(m){m!=="/"&&(V([]),Q(function(o){return[].concat(S()(o),[{role:"user",content:m,key:"".concat(o.length+1)},{role:"useFile",content:a,key:"".concat(o.length+2)},{role:"ai",loading:!0,key:"".concat(o.length+3)}])}),Z(""),ee(!0),re())},H=I(!1),$=b()(H,2),F=$[0],T=$[1];return n.createElement(n.Fragment,null,n.createElement(x,{onClick:function(){return T(!0)},children:"\u9644\u4EF6\u4E0A\u4F20"}),n.createElement(D,{open:F,width:600,onClose:function(){return T(!1)}},n.createElement(E,{welcomeProps:{title:"AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86",description:"\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138",style:{backgroundImage:"linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)",borderStartStartRadius:4},icon:n.createElement("div",{style:{fontSize:42}},"\u2728")},promptsProps:{vertical:!0,items:[{description:"\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01",key:"1"},{description:"\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60",key:"2"},{description:"\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01",key:"3"}],title:"\u53D1\u73B0\u66F4\u591A"},bubbleListProps:{roles:Y,items:W},expressProps:{senderProps:{value:z,onChange:Z,placeholder:"\u8BF7\u8F93\u5165",onSubmit:ae,disabled:B,prefix:n.createElement(c,{beforeUpload:function(){return!1},onChange:function(m){var o=m.fileList;return V(o)},items:a,overflow:"scrollX"},n.createElement(x,{type:"text",icon:n.createElement(d,null)})),header:a.length?n.createElement(c,{beforeUpload:function(){return!1},onChange:function(m){var o=m.fileList;return V(o)},items:a,overflow:"scrollX"}):null}}})))}});case 25:case"end":return s.stop()}},g)})))),asset:{type:"BLOCK",id:"copilot-demo-4",refAtomIds:["Copilot"],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
      icon: '\u2728',
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
      <Button onClick={() => setOpen(true)} children="\u9644\u4EF6\u4E0A\u4F20" />
      <Drawer open={open} width={600} onClose={() => setOpen(false)}>
        <Copilot
          welcomeProps={{
            title: 'AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86',
            description: '\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138',
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
};`},"@ant-design/icons":{type:"NPM",value:"6.0.0"},"@ant-design/x":{type:"NPM",value:"1.2.0"},"antdx-pro":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.25.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":f,"@ant-design/x":se,"antdx-pro":oe,antd:G,react:C||(C=e.t(n,2))},renderOpts:{compile:function(){var g=O()(r()().mark(function d(){var i,u=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,u));case 3:case"end":return t.stop()}},d)}));function l(){return g.apply(this,arguments)}return l}()}},"copilot-demo-5":{component:n.memo(n.lazy(O()(r()().mark(function g(){var l,d,i,u,c,t,j,E,h,x,D,R,I,Y,_,s,U,A,P,a,V,J,w,W,Q;return r()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,56106));case 2:return l=v.sent,d=l.AudioOutlined,i=l.CopyOutlined,u=l.PaperClipOutlined,c=l.SyncOutlined,t=l.UserOutlined,j=l.EllipsisOutlined,E=l.DribbbleOutlined,h=l.SendOutlined,v.next=13,Promise.resolve().then(e.bind(e,81138));case 13:return x=v.sent,D=x.Attachments,R=x.Prompts,v.next=18,Promise.resolve().then(e.bind(e,13271));case 18:return I=v.sent,Y=I.Copilot,v.next=22,Promise.resolve().then(e.bind(e,2784));case 22:return _=v.sent,s=_.Button,U=_.Flex,A=_.Typography,v.next=28,Promise.resolve().then(e.t.bind(e,67294,19));case 28:return P=v.sent,a=P.useState,v.next=32,Promise.resolve().then(e.bind(e,10048));case 32:return V=v.sent,J=V.default,w=[{label:"\u53D1\u9001",value:"send"},{label:"\u53D1\u90012",value:"send2"}],W=J({html:!0,breaks:!0}),Q=`
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
`.trim(),v.abrupt("return",{default:function(){var Z=a([]),N=b()(Z,2),X=N[0],B=N[1],ee={ai:{placement:"start",typing:!0,avatar:{icon:"\u2728",style:{background:"#efefef"}},messageRender:function(k){return n.createElement(A,null,n.createElement("div",{dangerouslySetInnerHTML:{__html:W.render(k)}}))},footer:function(){return n.createElement(U,{justify:"end",gap:0},n.createElement(s,{size:"small",type:"text",icon:n.createElement(i,null)}),n.createElement(s,{size:"small",type:"text",icon:n.createElement(c,null)}))}},user:{placement:"end",typing:!0,avatar:{icon:n.createElement(t,null),style:{background:"#fde3cf"}}},suggestion:{placement:"start",avatar:{icon:n.createElement(t,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(k){return n.createElement(R,{vertical:!0,items:k})}},file:{placement:"start",avatar:{icon:n.createElement(t,null),style:{visibility:"hidden"}},variant:"borderless"},useFile:{placement:"end",avatar:{icon:n.createElement(t,null),style:{visibility:"hidden"}},variant:"borderless",messageRender:function(k){return n.createElement(D,{items:k,overflow:"scrollX",disabled:!0})}}},re=a([]),ae=b()(re,2),H=ae[0],$=ae[1],F=a(""),T=b()(F,2),L=T[0],m=T[1],o=a(!1),y=b()(o,2),te=y[0],fe=y[1],be=function(){setTimeout(function(){$(function(k){var p,ce=k[k.length-1];return((p=ce)===null||p===void 0?void 0:p.role)==="ai"&&(ce=ne()(ne()({},ce),{},{loading:!1,content:Q})),k.pop(),[].concat(S()(k),[ce])}),fe(!1)},3e3)},pe=function(k){k!=="/"&&(X.length&&B([]),console.log("onSend",X),$(function(p){return[].concat(S()(p),[{role:"user",content:k,key:"".concat(p.length+1)},{role:"useFile",content:X,key:"".concat(p.length+2)},{role:"ai",loading:!0,key:"".concat(p.length+3)}])}),m(""),fe(!0),be())};return n.createElement(Y,{welcomeProps:{title:"AI\uFF0C\u597D\u5199\uFF0C\u592A\u597D\u5199\u4E86",description:"\u4E0D\u7528\u4E09\u5929\uFF0C\u4E24\u5C0F\u65F6\uFF0C\u4F46\u6211\u4E3A\u5565\u4E0D\u5199\u4E86\uFF0C\u56E0\u4E3A\u7237\u4EEC\u8981\u8138",style:{backgroundImage:"linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)",borderStartStartRadius:4},icon:n.createElement("div",{style:{fontSize:42}},"\u2728")},promptsProps:{vertical:!0,items:[{description:"\u26A1\uFE0Fgo go go \u51FA\u53D1\u5566\uFF01",key:"1"},{description:"\u{1F680}\u7279\u522B\u7684\u65E5\u5B50\u91CC\u7279\u522B\u7684\u6B4C\u9001\u7ED9\u7279\u522B\u7684\u4F60",key:"2"},{description:"\u{1F525}\u4E22\u554A\u4E22\u554A\u4E22\u624B\u7EE2\uFF0C\u8F7B\u8F7B\u5730\u653E\u5728\u5C0F\u670B\u53CB\u7684\u540E\u8FB9\uFF0C\u6CA1\u5EA7\uFF01",key:"3"}],title:"\u53D1\u73B0\u66F4\u591A"},bubbleListProps:{roles:ee,items:H},expressProps:{senderProps:{value:L,onChange:m,placeholder:"\u8BF7\u8F93\u5165",onSubmit:pe,disabled:te,actions:!1,footer:n.createElement(U,{justify:"space-between",gap:10},n.createElement("div",null,n.createElement(D,{beforeUpload:function(){return!1},onChange:function(k){var p=k.fileList;return B(p)},items:X,overflow:"scrollX"},n.createElement(s,{size:"small",type:"text",icon:n.createElement(u,null)},"\u9644\u4EF6")),n.createElement(s,{size:"small",type:"text",icon:n.createElement(E,null)},"\u8054\u7F51"),n.createElement(s,{size:"small",type:"text",shape:"circle",icon:n.createElement(j,null)})),n.createElement(s,{size:"small",type:"text",shape:"circle",icon:L?n.createElement(h,null):n.createElement(d,null)})),header:X.length?n.createElement(D,{beforeUpload:function(){return!1},onChange:function(k){var p=k.fileList;return B(p)},items:X,overflow:"scrollX"}):null},suggestionProps:{items:w,onSelect:function(k){m("[".concat(k,"]:"))}}}})}});case 38:case"end":return v.stop()}},g)})))),asset:{type:"BLOCK",id:"copilot-demo-5",refAtomIds:["Copilot"],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

  return (
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
  );
};`},"@ant-design/icons":{type:"NPM",value:"6.0.0"},"@ant-design/x":{type:"NPM",value:"1.2.0"},"antdx-pro":{type:"NPM",value:"0.0.3"},antd:{type:"NPM",value:"5.25.2"},react:{type:"NPM",value:"18.3.1"},"markdown-it":{type:"NPM",value:"14.1.0"}},entry:"index.tsx"},context:{"@ant-design/icons":f,"@ant-design/x":se,"antdx-pro":oe,antd:G,react:C||(C=e.t(n,2)),"markdown-it":de},renderOpts:{compile:function(){var g=O()(r()().mark(function d(){var i,u=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,u));case 3:case"end":return t.stop()}},d)}));function l(){return g.apply(this,arguments)}return l}()}}}},13271:function(ue,ie,e){"use strict";e.r(ie),e.d(ie,{Copilot:function(){return Se}});var C=e(97857),M=e.n(C),r=e(78205),K=e(78919),S=e(76654),ye=e(28015),ne=e(3296),he=e(81765),b=e(86250),xe=e(67294),O=e(85893),Pe=function(f){var se,oe,G,de,me,g,l;return(0,O.jsxs)(b.Z,{vertical:!0,gap:"middle",style:{height:"100%"},justify:"space-between",children:[f!=null&&(se=f.bubbleListProps)!==null&&se!==void 0&&(se=se.items)!==null&&se!==void 0&&se.length?(0,O.jsx)(S.Z.List,M()({},(oe=f==null?void 0:f.bubbleListProps)!==null&&oe!==void 0?oe:{})):(0,O.jsxs)(b.Z,{vertical:!0,gap:"middle",children:[(0,O.jsx)(r.Z,M()({},f==null?void 0:f.welcomeProps)),(0,O.jsx)(K.Z,M()({},f==null?void 0:f.promptsProps))]}),(0,O.jsxs)(b.Z,{vertical:!0,gap:0,children:[!!(f!=null&&(G=f.expressProps)!==null&&G!==void 0&&(G=G.attachmentsProps)!==null&&G!==void 0&&(G=G.items)!==null&&G!==void 0&&G.length)&&(0,O.jsx)(ye.Z,M()({},(de=f==null||(me=f.expressProps)===null||me===void 0?void 0:me.attachmentsProps)!==null&&de!==void 0?de:{})),(0,O.jsx)(ne.Z,M()(M()({},(g=f==null||(l=f.expressProps)===null||l===void 0?void 0:l.suggestionProps)!==null&&g!==void 0?g:{items:[]}),{},{children:function(i){var u,c=i.onTrigger,t=i.onKeyDown;return(0,O.jsx)(he.Z,M()(M()({},(u=f.expressProps)===null||u===void 0?void 0:u.senderProps),{},{onChange:function(E){var h,x;E==="/"?c():E||c(!1),f==null||(h=f.expressProps)===null||h===void 0||(h=h.senderProps)===null||h===void 0||(x=h.onChange)===null||x===void 0||x.call(h,E)},onKeyDown:t}))}}))]})]})},Se=Pe},82024:function(ue,ie,e){"use strict";e.r(ie),e.d(ie,{texts:function(){return C}});const C=[{value:"\u672C\u6587\u6863\u5DF2\u7ECF\u9ED8\u8BA4\u60A8\u9605\u8BFB\u4E86 ",paraId:0},{value:"atndx",paraId:0},{value:" \u6587\u6863\uFF01",paraId:0},{value:"\u7EC4\u4EF6\u5DF2\u7ECF\u7EC4\u88C5\u4E86 atndx \u7684\u57FA\u7840\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5173\u5FC3\u5E94\u7528\u914D\u7F6E\uFF0C\u4E0D\u7528\u5173\u5FC3\u57FA\u7840\u5E03\u5C40\uFF0C\u6574\u4F53\u914D\u7F6E\u5B8C\u5168\u6839\u636E atndx \u7684\u57FA\u7840 api \u914D\u7F6E\uFF0C\u65E0\u4EFB\u4F55\u6DFB\u52A0 ",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\uFF01",paraId:1,tocIndex:0},{value:`interface ICopilotProps {
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
`,paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6\u9996\u9875\u914D\u7F6E\u4E86 ",paraId:3,tocIndex:0},{value:"\u6B22\u8FCE\u8BED",paraId:3,tocIndex:0},{value:" \u548C ",paraId:3,tocIndex:0},{value:"\u5F00\u59CB\u5EFA\u8BAE",paraId:3,tocIndex:0},{value:" \u4EE5\u53CA ",paraId:3,tocIndex:0},{value:"\u8F93\u5165",paraId:3,tocIndex:0},{value:" \u529F\u80FD\u3002",paraId:3,tocIndex:0},{value:"\u5F00\u59CB\u804A\u5929\u540E\u9690\u85CF\u6B22\u8FCE\u8BED\u548C\u5F00\u59CB\u5EFA\u8BAE\uFF0C\u53EA\u5C55\u793A ",paraId:4,tocIndex:0},{value:"\u804A\u5929\u5185\u5BB9",paraId:4,tocIndex:0},{value:" \u548C ",paraId:4,tocIndex:0},{value:"\u8F93\u5165",paraId:4,tocIndex:0},{value:" \u529F\u80FD\u3002",paraId:4,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u6839\u636E\u57FA\u7840 ",paraId:5},{value:"api",paraId:5},{value:" \u8FDB\u884C\u529F\u80FD\u6269\u5C55\uFF0C\u4E0B\u9762\u662F\u4E00\u4E9B\u793A\u4F8B\uFF01",paraId:5}]},44987:function(ue){function ie(C){var M,r,K,S=2;for(typeof Symbol!="undefined"&&(r=Symbol.asyncIterator,K=Symbol.iterator);S--;){if(r&&(M=C[r])!=null)return M.call(C);if(K&&(M=C[K])!=null)return new e(M.call(C));r="@@asyncIterator",K="@@iterator"}throw new TypeError("Object is not async iterable")}function e(C){function M(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var K=r.done;return Promise.resolve(r.value).then(function(S){return{value:S,done:K}})}return e=function(K){this.s=K,this.n=K.next},e.prototype={s:null,n:null,next:function(){return M(this.n.apply(this.s,arguments))},return:function(K){var S=this.s.return;return S===void 0?Promise.resolve({value:K,done:!0}):M(S.apply(this.s,arguments))},throw:function(K){var S=this.s.return;return S===void 0?Promise.reject(K):M(S.apply(this.s,arguments))}},new e(C)}ue.exports=ie,ue.exports.__esModule=!0,ue.exports.default=ue.exports}}]);
