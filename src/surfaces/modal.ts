import * as Slack from '@slack/types';
import { BLOCK_TYPE } from "./block-kit";
import { View } from "./view";
import { PlainTextElement, Option } from '../object';

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
    external_id?: string;
}

interface ModalOptionalProps {
    callback_id?: string;
    close?: PlainTextElement;
    submit?: PlainTextElement;
    privateMetadata?: {[key: string]: any};
    clearOnClose?: boolean;
    notifyOnClose?: boolean;
    externalId?: string;
}

export class Modal extends View {
    title: PlainTextElement;
    type: "modal";
    callback_id?: string;
    close?: PlainTextElement;
    submit?: PlainTextElement;
    clear_on_close?: boolean;
    notify_on_close?: boolean;
    external_id?: string;

    constructor(title: PlainTextElement, blocks?: BLOCK_TYPE[], optionalProps?: ModalOptionalProps) {
        super(blocks, optionalProps?.privateMetadata);
        this.title = title;
        this.type = 'modal';
        this.callback_id = optionalProps?.callback_id;
        this.close = optionalProps?.close;
        this.submit = optionalProps?.submit;
        this.clear_on_close = optionalProps?.clearOnClose;
        this.notify_on_close = optionalProps?.notifyOnClose;
        this.external_id = optionalProps?.externalId;
    }

    getView(): IModal {
        return {
            title: this.title,
            type: this.type,
            blocks: super.blocks,
            callback_id: this.callback_id,
            close: this.close,
            submit: this.submit,
            private_metadata: super.private_metadata,
            clear_on_close: this.clear_on_close,
            notify_on_close: this.notify_on_close,
            external_id: this.external_id
        }
    }
    
}