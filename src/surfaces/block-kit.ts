import * as Slack from '@slack/types';
import { clone } from '../util';
import { ActionsBlock, ContextBlock, DividerBlock, InputBlock, SectionBlock } from '../block';

export declare type BLOCK_TYPE = ActionsBlock | ContextBlock | DividerBlock | InputBlock | SectionBlock | Slack.Block;
export class BlockKit {
    blocks: BLOCK_TYPE[];

    constructor(blocks?: BLOCK_TYPE[]) {
        if(blocks) this.blocks = clone(blocks);
        else this.blocks = [];
    }

    addBlocks(additionalBlocks: BLOCK_TYPE[], previousBlockId: string): this {
        for (const [index, block] of this.blocks.entries()) {
            if (block.block_id && block.block_id === previousBlockId) {
                this.blocks.splice(index + 1, 0, ...clone(additionalBlocks));
                return this;
            }
        }
        return this;
    }

    addBlocksAtFirst(additionalBlocks: BLOCK_TYPE[]): this {
        this.blocks = clone(additionalBlocks).concat(this.blocks);
        return this;
    }

    addBlocksAtLast(additionalBlocks: BLOCK_TYPE[]): this {
        this.blocks = this.blocks.concat(clone(additionalBlocks));
        return this;
    }

    removeBlockById(removingBlockId: string): this {
        this.blocks = this.blocks.filter( block => {
            return block.block_id !== removingBlockId;
        })
        return this;
    }

    removeFirstBlock(): this {
        this.blocks.shift();
        return this;
    }

    removeLastBlock(): this {
        this.blocks.pop();
        return this;
    }

    exchangeBlock(additionalBlock: BLOCK_TYPE, removalBlockId: string): this {
        for (const [index, block] of this.blocks.entries()) {
            if (block.block_id === removalBlockId) {
                this.blocks.splice(index, 1, additionalBlock);
                return this;
            }
        }
        return this;
    }

}