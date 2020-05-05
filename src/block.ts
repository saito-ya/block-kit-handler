import * as Slack from '@slack/types'

declare type ACTIONS_ELEMENTS_TYPE = (Slack.Button | Slack.Overflow | Slack.Datepicker | Slack.Select | Slack.RadioButtons | Slack.Checkboxes | Slack.Action)[];
export interface ActionsOptionalProps {
    blockId?: string;
}
export function actions(elements: ACTIONS_ELEMENTS_TYPE, optionalProps?: ActionsOptionalProps): Slack.ActionsBlock {
    return {
        type: 'actions',
        elements,
        block_id: optionalProps?.blockId
    }
}

declare type CONTEXT_ELEMENT_TYPE = (Slack.ImageElement | Slack.PlainTextElement | Slack.MrkdwnElement)[];
export interface ContextOptionalProps {
    blockId?: string;
}
export function context(elements: CONTEXT_ELEMENT_TYPE, optionalProps?: ContextOptionalProps): Slack.ContextBlock {
    return {
        type: 'context',
        elements,
        block_id: optionalProps?.blockId
    }
}

export interface DividerOptionalProps {
    blockId?: string;
}
export function divider(optionalProps?: DividerOptionalProps): Slack.DividerBlock {
    return {
        type: 'divider',
        block_id: optionalProps?.blockId
    }
}

declare type INPUT_ELEMENT_TYPE = Slack.Select | Slack.MultiSelect | Slack.Datepicker | Slack.PlainTextInput | Slack.RadioButtons | Slack.Checkboxes;
export interface InputOptionalProps {
    blockId?: string;
    hint?: Slack.PlainTextElement;
    optional?: boolean;
}
export function input(label: Slack.PlainTextElement, element: INPUT_ELEMENT_TYPE, optionalProps?: InputOptionalProps): Slack.InputBlock {
    return {
        type: 'input',
        label,
        element,
        block_id: optionalProps?.blockId,
        hint: optionalProps?.hint,
        optional: optionalProps?.optional
    }
}

declare type SECTION_ACCESSORY_TYPE = Slack.Button | Slack.Overflow | Slack.Datepicker | Slack.Select | Slack.MultiSelect | Slack.Action | Slack.ImageElement | Slack.RadioButtons | Slack.Checkboxes;
export interface SectionOptionalProps {
    text?: Slack.PlainTextElement | Slack.MrkdwnElement;
    fields?: (Slack.PlainTextElement | Slack.MrkdwnElement)[];
    accessory?: SECTION_ACCESSORY_TYPE;
    blockId?: string;
}
export function section(optionalProps?: SectionOptionalProps): Slack.SectionBlock {
    return {
        type: 'section',
        text: optionalProps?.text,
        fields: optionalProps?.fields,
        accessory: optionalProps?.accessory,
        block_id: optionalProps?.blockId
    }
}
