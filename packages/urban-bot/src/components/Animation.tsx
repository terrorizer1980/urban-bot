import React from 'react';
import { useBotContext } from '../hooks/hooks';
import { UrbanMessageCommonData } from '../types/Messages';
import { ButtonGroupProps } from './ButtonGroup';
import { getButtonsByButtonGroup } from '../utils/getButtonsByButtonGroup';
import { UrbanFileFormat } from '../types';
import { formatMarkupLanguageElement } from '../utils/formatMarkupLanguageElement';
import { getParseMode } from '../utils/getParseMode';

export type AnimationProps = UrbanMessageCommonData & {
    file: UrbanFileFormat;
    name?: string;
    title?: React.ReactNode;
    duration?: number;
    width?: number;
    height?: number;
    buttons?: React.FunctionComponentElement<ButtonGroupProps>;
    isNewMessageEveryRender?: boolean;
};
export function Animation({
    file,
    name,
    height,
    width,
    buttons: buttonGroupElement,
    disableNotification,
    duration,
    forceReply,
    isNewMessageEveryRender: isNewMessageEveryRenderProp,
    parseMode,
    replyToMessageId,
    title,
    ...otherProps
}: AnimationProps) {
    const {
        $$managerBot,
        isNewMessageEveryRender: isNewMessageEveryRenderContext,
        chat,
        parseMode: parseModeContext,
        bot,
    } = useBotContext();

    const finalParseMode = getParseMode(title, parseMode, parseModeContext, bot.defaultParseMode);
    const formattedTitle = formatMarkupLanguageElement(title, finalParseMode);

    const formattedButtons = getButtonsByButtonGroup(buttonGroupElement);

    return (
        <urban-animation
            $$managerBot={$$managerBot}
            chat={chat}
            isNewMessageEveryRender={isNewMessageEveryRenderProp ?? isNewMessageEveryRenderContext}
            data={{
                disableNotification,
                replyToMessageId,
                forceReply,
                parseMode: finalParseMode,
                buttons: formattedButtons,
                isReplyButtons: buttonGroupElement?.props.isReplyButtons,
                title: formattedTitle,
                file,
                name,
                duration,
                height,
                width,
                ...otherProps,
            }}
        />
    );
}
