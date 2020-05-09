import * as chai from 'chai';
import * as Slack from '@slack/types';
import { BLOCK_TYPE } from '../src/surfaces/block-kit';
import { Modal } from '../src/surfaces/modal';
import { actions, context, divider, input, section } from '../src/block';
import { button, checkboxes, datepicker, plainTextInput, staticSelect } from '../src/element';
import { plainText, option, mrkdwnText } from '../src/object';
import { HomeTab } from '../src';

describe('surfaces', () => {
    it('modal', () => {
        const blocks: BLOCK_TYPE[] = [
            context([mrkdwnText('context')], { blockId: 'context' }),
            divider({ blockId: 'divider' })
        ];
        const modal = new Modal(plainText('test modal'), blocks, {
            callback_id: 'callback',
            close: plainText('Cansel'),
            submit: plainText('OK'),
            privateMetadata: { key: 'value' }
        });

        const expected: Slack.View = {
            title: {
                type: 'plain_text',
                text: 'test modal',
                emoji: undefined
            },
            type: 'modal',
            blocks: [
                {
                    type: 'context',
                    elements: [
                        {
                            type: 'mrkdwn',
                            text: 'context'
                        }
                    ],
                    block_id: 'context'
                },
                {
                    type: 'divider',
                    block_id: 'divider'
                }
            ],
            callback_id: 'callback',
            close: {
                type: 'plain_text',
                text: 'Cansel',
                emoji: undefined
            },
            submit: {
                type: 'plain_text',
                text: 'OK',
                emoji: undefined
            },
            private_metadata: '{\"key\":\"value\"}',
            clear_on_close: undefined,
            notify_on_close: undefined,
        }
        chai.assert.deepEqual(modal.getView(), expected);
    })

    it('home-tab', () => {
        const blocks: BLOCK_TYPE[] = [
            actions([button(plainText('button 1'), 'button_pushed')]),
            input(plainText('input'), datepicker('date_picked', { initialDate: '2020-05-02'}))
        ]
        const homeTab = new HomeTab(blocks, {
            callbackId: 'callback',
            privateMetadata: { country: 'Japan'}
        })

        const expected: Slack.View = {
            type: 'home',
            blocks: [
                {
                    type: 'actions',
                    elements: [
                        {
                            type: 'button',
                            text: {
                                type: 'plain_text',
                                text: 'button 1'
                            },
                            action_id: 'button_pushed'
                        }
                    ]
                },
                {
                    type: 'input',
                    label: {
                        type: 'plain_text',
                        text: 'input'
                    },
                    element: {
                        type: 'datepicker',
                        action_id: 'date_picked',
                        initial_date: '2020-05-02'
                    }
                }
            ],
            callback_id: 'callback',
            private_metadata: '{\"country\":\"Japan\"}'
        }
        chai.assert.deepEqual(homeTab.getView(), expected);
    })

})