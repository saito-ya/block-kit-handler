import { Block } from "../block";

export interface ActionsProps {
    blockId: String
}

export class Actions implements Block {
    type: String;
    blockId?: String;

    constructor(elements) {
        this.type = 'actions';
    }
}