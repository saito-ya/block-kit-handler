import * as Slack from '@slack/types';
import { BlockKit, BLOCK_TYPE } from "./block-kit";

export abstract class View extends BlockKit {
    public private_metadata?: string;

    constructor(blocks?: BLOCK_TYPE[], initialMetadata?: {[key: string]: any}){
        super(blocks);
        this.private_metadata = initialMetadata ? JSON.stringify(initialMetadata) : undefined;
    }

    updateMetadata(key: string, value: any): this {
        let metadata: {[s: string]: any} = {};
        if (this.private_metadata) {
            metadata = JSON.parse(this.private_metadata);
        }
        metadata[key] = value;
        this.private_metadata = JSON.stringify(metadata);

        return this;
    }

    getMetadata(): string {
        if (this.private_metadata) return this.private_metadata;
        return '';
    }

    abstract getView(): Slack.View;
}