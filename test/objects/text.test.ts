import * as chai from 'chai';
import { Text } from '../../src/objects/impl/text';

describe('test for Text class', () => {
    it('give text only', () => {
        const text = new Text('test text');

        const expected = {
            type: 'mrkdwn',
            text: 'test text',
            emoji: true,
            verbatim: false
        }
        chai.assert.deepEqual(text.getObject(), expected);
    })

    it('give optional props', () => {
        const text = new Text('Hello World!', { type: 'plain_text', emoji: true, verbatim: false });

        const expected = {
            type: 'plain_text',
            text: 'Hello World!',
            emoji: true,
            verbatim: false
        }
        chai.assert.deepEqual(text.getObject(), expected);
    })
})
