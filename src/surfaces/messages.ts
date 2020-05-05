import * as Slack from '@slack/types';
import { BlockKit } from './block-kit';

export class Messages extends BlockKit {
    constructor(blocks?: Slack.Block[]) {
        super(blocks);
    }
}