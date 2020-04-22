/* eslint-disable @typescript-eslint/no-empty-interface,@typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { UrbanMessageTextData, UrbanMessageImageData, UrbanMessageButtonsData } from './types/Messages';
import { ManagerBot } from './ManagerBot/ManagerBot';
import { UrbanChat } from './types';

export type Markup = { children: React.ReactNode };
export type Link = Markup & { href: string };
export type UrbanElement<Type = unknown, NativeEventPayload = unknown, Meta = unknown> = {
    $$managerBot: ManagerBot<Type, NativeEventPayload, Meta>;
    chat: UrbanChat;
    isNewMessageEveryRender?: boolean;
};

export type UrbanElementText = UrbanElement & { data: UrbanMessageTextData };
export type UrbanElementImage = UrbanElement & { data: UrbanMessageImageData };
export type UrbanElementButtons = UrbanElement & { data: UrbanMessageButtonsData };

declare global {
    namespace JSX {
        export interface IntrinsicElements {
            'urban-text': UrbanElementText;
            'urban-img': UrbanElementImage;
            'urban-buttons': UrbanElementButtons;
            b: Markup;
            i: Markup;
            u: Markup;
            s: Markup;
            code: Markup;
            pre: Markup;
            q: Markup;
            a: Link;
            br: {};
        }
    }
}
