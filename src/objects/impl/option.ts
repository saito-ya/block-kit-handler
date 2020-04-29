import { Object } from '../object';
import { Text } from './text';

export interface OptionOptionalProps {
    description?: Text;
    url?: string
}

export class Option implements Object {
    text: Text;
    value: string;
    description?: Text;
    url?: string;

    constructor(text: Text, value: string, optionalProps?: OptionOptionalProps) {
        this.text = text;
        this.value = value;

        if(optionalProps) {
            const { description, url } = optionalProps;
            this.description = description ? description : undefined;
            this.url = url ? url : undefined;
        }
    }

    getObject(): { [key: string]: any; } {
        const object = { text: this.text, value: this.value };
        if(this.description) object['description'] = this.description.getObject();
        if(this.url) object['url'] = this.url;
        return object;
    }
    
}