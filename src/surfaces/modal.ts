import * as Slack from '@slack/types';
import { BLOCK_TYPE } from "./block-kit";
import { View } from "./view";
import { PlainTextElement } from '../object';

interface IModal extends Slack.View {
    title: PlainTextElement;
    type: 'modal';
    blocks: BLOCK_TYPE[];
    callback_id?: string;
    close?: PlainTextElement;
    submit?: PlainTextElement;
    private_metadata?: string;
    clear_on_close?: boolean;
    notify_on_close?: boolean;
}

interface ModalOptionalProps {
    callback_id?: string;
    close?: PlainTextElement;
    submit?: PlainTextElement;
    privateMetadata?: {[key: string]: any};
    clearOnClose?: boolean;
    notifyOnClose?: boolean;
}

export class Modal extends View {
    title: PlainTextElement;
    type: "modal";
    callback_id?: string;
    close?: PlainTextElement;
    submit?: PlainTextElement;
    clear_on_close?: boolean;
    notify_on_close?: boolean;

    constructor(title: PlainTextElement, blocks?: BLOCK_TYPE[], optionalProps?: ModalOptionalProps) {
        super(blocks, optionalProps?.privateMetadata);
        this.title = title;
        this.type = 'modal';
        this.callback_id = optionalProps?.callback_id;
        this.close = optionalProps?.close;
        this.submit = optionalProps?.submit;
        this.clear_on_close = optionalProps?.clearOnClose;
        this.notify_on_close = optionalProps?.notifyOnClose;
    }

    getView(): IModal {
        return {
            title: this.title,
            type: this.type,
            blocks: this.blocks,
            callback_id: this.callback_id,
            close: this.close,
            submit: this.submit,
            private_metadata: this.private_metadata,
            clear_on_close: this.clear_on_close,
            notify_on_close: this.notify_on_close,
        }
    }
    
}