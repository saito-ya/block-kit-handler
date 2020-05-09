import { BlockKit, BLOCK_TYPE } from './block-kit';

export class Messages extends BlockKit {
    constructor(blocks?: BLOCK_TYPE[]) {
        super(blocks);
    }
}