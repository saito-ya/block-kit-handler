import * as chai from 'chai';
import * as Slack from '@slack/types';
import { actions, context, divider, input, section } from '../src/block';
import { button, checkboxes, datepicker, plainTextInput, staticSelect } from '../src/element';
import { plainText, option, mrkdwnText } from '../src/object';

describe('block', () => {
    it('actions - required props only', () => {
        const obj = actions([button(plainText('button'), 'button_action')]);

        const expected: Slack.ActionsBlock = {
            type: 'actions',
            elements: [
                {
                    type: 'button',
                    text: {
                        type: 'plain_text',
                        text: 'button',
                        emoji: undefined
                    },
                    action_id: 'button_action',
                    url: undefined,
                    value: undefined,
                    style: undefined
                }
            ],
            block_id: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('actions - optional props', () => {
        const obj = actions([datepicker('date_picked', { initialDate: '2020-05-02' })], {
            blockId: 'actions_block'
        });

        const expected: Slack.ActionsBlock = {
            type: 'actions',
            elements: [
                {
                    type: 'datepicker',
                    action_id: 'date_picked',
                    placeholder: undefined,
                    initial_date: '2020-05-02'
                }
            ],
            block_id: 'actions_block'
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('context - required props only', () => {
        const obj = context([plainText('context')]);

        const expected: Slack.ContextBlock = {
            type: 'context',
            elements: [
                {
                    type: 'plain_text',
                    text: 'context',
                    emoji: undefined
                }
            ],
            block_id: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('context - optional props', () => {
        const obj = context([plainText('context'), mrkdwnText('context 2')], {
            blockId: 'context_block'
        });

        const expected: Slack.ContextBlock = {
            type: 'context',
            elements: [
                {
                    type: 'plain_text',
                    text: 'context',
                    emoji: undefined
                },
                {
                    type: 'mrkdwn',
                    text: 'context 2',
                    verbatim: undefined
                }
            ],
            block_id: 'context_block'
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('divider - required props only', () => {
        const obj = divider();

        const expected: Slack.DividerBlock = {
            type: 'divider',
            block_id: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('divider - optional props', () => {
        const obj = divider({ blockId: 'divider_block' });

        const expected: Slack.DividerBlock = {
            type: 'divider',
            block_id: 'divider_block'
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('input - required props only', () => {
        const obj = input(plainText('input'), staticSelect('selected', plainText('please select'), [
            option(mrkdwnText('opt 1'), 'opt-1'),
            option(plainText('opt 2'), 'opt-2')
        ]));

        const expected: Slack.InputBlock = {
            type: 'input',
            label: {
                type: 'plain_text',
                text: 'input',
                emoji: undefined
            },
            element: {
                type: 'static_select',
                action_id: 'selected',
                placeholder: {
                    type: 'plain_text',
                    text: 'please select',
                    emoji: undefined
                },
                options: [
                    {
                        text: {
                            type: 'mrkdwn',
                            text: 'opt 1',
                            verbatim: undefined
                        },
                        value: 'opt-1',
                        description: undefined,
                        url: undefined
                    },
                    {
                        text: {
                            type: 'plain_text',
                            text: 'opt 2',
                            emoji: undefined
                        },
                        value: 'opt-2',
                        description: undefined,
                        url: undefined
                    }
                ],
                initial_option: undefined
            },
            block_id: undefined,
            hint: undefined,
            optional: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('input - optional props', () => {
        const obj = input(plainText('input'), datepicker('date_picked', { initialDate: '2020-05-02' }), {
            blockId: 'input_block',
            hint: plainText('hint')
        });

        const expected: Slack.InputBlock = {
            type: 'input',
            label: {
                type: 'plain_text',
                text: 'input',
                emoji: undefined
            },
            element: {
                type: 'datepicker',
                action_id: 'date_picked',
                placeholder: undefined,
                initial_date: '2020-05-02'
            },
            block_id: 'input_block',
            hint: {
                type: 'plain_text',
                text: 'hint',
                emoji: undefined
            },
            optional: undefined
        }
        chai.assert.deepEqual(obj, expected);
    })

    it('section - optional props', () => {
        const obj = section({
            text: mrkdwnText('section text', { verbatim: false }),
            accessory: button(plainText('button 1'), 'button_clicked'),
            blockId: 'section_block'
        });

        const expected: Slack.SectionBlock = {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: 'section text',
                verbatim: false
            },
            fields: undefined,
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'button 1',
                    emoji: undefined
                },
                action_id: 'button_clicked',
                url: undefined,
                value: undefined,
                style: undefined
            },
            block_id: 'section_block'
        }
        chai.assert.deepEqual(obj, expected);
    })

})