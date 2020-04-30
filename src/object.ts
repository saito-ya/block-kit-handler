import * as Slack from '@slack/types';

export function plainText(text: string, emoji?: boolean): Slack.PlainTextElement {
    return {
        type: 'plain_text',
        text,
        emoji
    }
}

export function mrkdwnText(text: string, verbatim?: boolean): Slack.MrkdwnElement {
    return {
        type: 'mrkdwn',
        text,
        verbatim
    }
}

export interface OptionOptionalProps {
    description?: Slack.PlainTextElement;
    url?: string;
}
export function option(text: Slack.PlainTextElement | Slack.MrkdwnElement, value: string, optionalProps?: OptionOptionalProps): Slack.Option {
    return {
        text,
        value,
        description: optionalProps?.description,
        url: optionalProps?.url
    }
}