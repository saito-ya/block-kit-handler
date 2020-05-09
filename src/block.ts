import * as Slack from '@slack/types'
import { PlainTextElement, MrkdwnElement } from './object';
import { Button, Checkboxes, Datepicker, PlainTextInput, StaticSelect } from './element';

declare type ACTIONS_ELEMENTS_TYPE = (Button | Datepicker | Checkboxes | StaticSelect | Slack.Overflow | Slack.Select | Slack.RadioButtons)[];
export interface ActionsOptionalProps {
    blockId?: string;
}
export interface ActionsBlock extends Slack.ActionsBlock{}
export function actions(elements: ACTIONS_ELEMENTS_TYPE, optionalProps?: ActionsOptionalProps): ActionsBlock {
    return {
        type: 'actions',
        elements,
        block_id: optionalProps?.blockId
    }
}

declare type CONTEXT_ELEMENT_TYPE = (PlainTextElement | MrkdwnElement | Slack.ImageElement)[];
export interface ContextOptionalProps {
    blockId?: string;
}
export interface ContextBlock extends Slack.ContextBlock{}
export function context(elements: CONTEXT_ELEMENT_TYPE, optionalProps?: ContextOptionalProps): ContextBlock {
    return {
        type: 'context',
        elements,
        block_id: optionalProps?.blockId
    }
}

export interface DividerOptionalProps {
    blockId?: string;
}
export interface DividerBlock extends Slack.DividerBlock{}
export function divider(optionalProps?: DividerOptionalProps): DividerBlock {
    return {
        type: 'divider',
        block_id: optionalProps?.blockId
    }
}

declare type INPUT_ELEMENT_TYPE = Checkboxes | Datepicker | PlainTextInput | StaticSelect | Slack.Select | Slack.MultiSelect | Slack.RadioButtons;
export interface InputOptionalProps {
    blockId?: string;
    hint?: PlainTextElement;
    optional?: boolean;
}
export interface InputBlock extends Slack.InputBlock{}
export function input(label: PlainTextElement, element: INPUT_ELEMENT_TYPE, optionalProps?: InputOptionalProps): InputBlock {
    return {
        type: 'input',
        label,
        element,
        block_id: optionalProps?.blockId,
        hint: optionalProps?.hint,
        optional: optionalProps?.optional
    }
}

declare type SECTION_ACCESSORY_TYPE = Button | Checkboxes | Datepicker | StaticSelect | Slack.Overflow | Slack.Select | Slack.MultiSelect | Slack.Action | Slack.ImageElement | Slack.RadioButtons;
export interface SectionOptionalProps {
    text?: PlainTextElement | MrkdwnElement;
    fields?: (PlainTextElement | MrkdwnElement)[];
    accessory?: SECTION_ACCESSORY_TYPE;
    blockId?: string;
}
export interface SectionBlock extends Slack.SectionBlock{}
export function section(optionalProps?: SectionOptionalProps): SectionBlock {
    return {
        type: 'section',
        text: optionalProps?.text,
        fields: optionalProps?.fields,
        accessory: optionalProps?.accessory,
        block_id: optionalProps?.blockId
    }
}
