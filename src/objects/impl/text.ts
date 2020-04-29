import { Object } from "../object";

export type TEXT_TYPE = 'plain_text' | 'mrkdwn';
export interface TextOptionalProps {
    type?: TEXT_TYPE;
    emoji?: Boolean;
    verbatim?: Boolean;
}

export class Text implements Object {
    type: TEXT_TYPE;
    text: string;
    emoji: Boolean;
    verbatim: Boolean;

    constructor(text: string, optionalProps?: TextOptionalProps) {
        this.text = text;

        if(optionalProps) {
            const { type, emoji, verbatim } = optionalProps;
            this.type = type ? type : 'mrkdwn';
            this.emoji = emoji ? emoji : true;              // TODO: fix logic for emoji = false
            this.verbatim = verbatim ? verbatim : false;    
        } else {
            this.type = 'mrkdwn';
            this.emoji = true;
            this.verbatim = false;
        }
    }

    getObject(): { [key: string]: any; } {
        return {
            type: this.type,
            text: this.text,
            emoji: this.emoji,
            verbatim: this.verbatim
        }
    }
}