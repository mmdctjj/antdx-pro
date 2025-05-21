import {
  Attachments,
  AttachmentsProps,
  Bubble,
  Prompts,
  PromptsProps,
  Sender,
  SenderProps,
  Suggestion,
  SuggestionProps,
  Welcome,
  WelcomeProps,
} from '@ant-design/x';
import { BubbleListProps } from '@ant-design/x/es/bubble/BubbleList';
import { Flex } from 'antd';
import React from 'react';

export interface ICopilotProps {
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

const Copilot = (props: ICopilotProps) => {
  return (
    <Flex
      vertical
      gap="middle"
      style={{ height: `100%` }}
      justify="space-between"
    >
      {!props?.bubbleListProps?.items?.length ? (
        <Flex vertical gap="middle">
          <Welcome {...props?.welcomeProps} />
          <Prompts {...props?.promptsProps} />
        </Flex>
      ) : (
        <Bubble.List {...(props?.bubbleListProps ?? {})} />
      )}
      <Flex vertical gap={0}>
        {!!props?.expressProps?.attachmentsProps?.items?.length && (
          <Attachments {...(props?.expressProps?.attachmentsProps ?? {})} />
        )}
        <Suggestion
          {...(props?.expressProps?.suggestionProps ?? { items: [] })}
        >
          {({ onTrigger, onKeyDown }) => {
            return (
              <Sender
                {...props.expressProps?.senderProps}
                onChange={(nextVal) => {
                  if (nextVal === '/') {
                    onTrigger();
                  } else if (!nextVal) {
                    onTrigger(false);
                  }
                  props?.expressProps?.senderProps?.onChange?.(nextVal);
                }}
                onKeyDown={onKeyDown}
              />
            );
          }}
        </Suggestion>
      </Flex>
    </Flex>
  );
};
export default Copilot;
