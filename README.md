# antdx-pro

[![NPM version](https://img.shields.io/npm/v/antdx-pro.svg?style=flat)](https://npmjs.org/package/antdx-pro)
[![NPM downloads](http://img.shields.io/npm/dm/antdx-pro.svg?style=flat)](https://npmjs.org/package/antdx-pro)

基于 antdx 封装的 UI 库

## Usage


```bash
pnpm add antdx-pro
```
```jsx
import React from 'react';
import { Copilot } from 'antdx-pro';
export default () => <Copilot />;
```
## Options

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

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT
