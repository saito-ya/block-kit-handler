import * as Slack from '@slack/types';
import { BLOCK_TYPE } from "./block-kit";
import { View } from "./view";

interface IHomeTab extends Slack.View {
    type: 'home';
    blocks: BLOCK_TYPE[];
    callback_id?: string;
    private_metadata?: string;
}

interface HomeTabOptionalProps {
    callbackId?: string;
    privateMetadata?: {[key: string]: any};
}

export class HomeTab extends View {
    type: 'home';
    callback_id?: string;

    constructor(blocks?: BLOCK_TYPE[], optionalProps?: HomeTabOptionalProps) {
        super(blocks, optionalProps?.privateMetadata);
        this.type = 'home';
        this.callback_id = optionalProps?.callbackId;
    }

    getView(): IHomeTab {
        return {
            type: this.type,
            blocks: this.blocks,
            callback_id: this.callback_id,
            private_metadata: this.private_metadata,
        }
    }
}