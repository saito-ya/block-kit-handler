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
export interface Option extends Slack.Option{}
export function option(text: PlainTextElement | MrkdwnElement, value: string, optionalProps?: OptionOptionalProps): Option {
    return {
        text,
        value,
        description: optionalProps?.description,
        url: optionalProps?.url
    }
}