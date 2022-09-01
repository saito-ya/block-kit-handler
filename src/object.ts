import * as Slack from '@slack/types';

export interface PlainTextOptionalProps {
    emoji?: boolean
}
export interface PlainTextElement extends Slack.PlainTextElement{}
export function plainText(text: string, optionalProps?: PlainTextOptionalProps): PlainTextElement {
    return {
        type: 'plain_text',
        text,
        emoji: optionalProps?.emoji
    }
}

export interface MrkdwnTextOptionalProps {
    verbatim?: boolean
}
export interface MrkdwnElement extends Slack.MrkdwnElement{}
export function mrkdwnText(text: string, optionalProps?: MrkdwnTextOptionalProps): MrkdwnElement {
    return {
        type: 'mrkdwn',
        text,
        verbatim: optionalProps?.verbatim
    }
}

export interface OptionOptionalProps {
    description?: Slack.PlainTextElement;
    url?: string;
}
export interface MrkdownOption extends Slack.MrkdwnOption{}
export function mrkdwnOption(text: MrkdwnElement, value: string, optionalProps?: OptionOptionalProps): MrkdownOption {
    return {
        text,
        value,
        url: optionalProps?.url,
        description: optionalProps?.description,
    }
}

export interface PlainTextOption extends Slack.PlainTextOption{}
export function plainTextOption(text: PlainTextElement, value: string, optionalProps?: OptionOptionalProps): PlainTextOption {
    return {
        text,
        value,
        url: optionalProps?.url,
        description: optionalProps?.description,
    }
}
