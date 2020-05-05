import * as Slack from '@slack/types';
import { BlockKit } from "./block-kit";

export abstract class View extends BlockKit {
    private_metadata?: string;

    constructor(blocks?: Slack.Block[], initialMetadata?: {[key: string]: any}){
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