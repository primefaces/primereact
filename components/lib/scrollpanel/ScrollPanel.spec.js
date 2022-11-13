import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import * as React from 'react';
import { snapshot } from '../../test';
import { ScrollPanel } from './ScrollPanel';

describe('ScrollPanel', () => {
    snapshot(
        <>
            <ScrollPanel id="scrollpanel" style={{ width: '100%', height: '200px' }} className="jest">
                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever
                    anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not
                    intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect,
                    but given to ruthless violence whenever anything stands against the good of the family.
                </div>
            </ScrollPanel>
        </>,
        'ScrollPanel full settings'
    );
    test('refresh method', async () => {
        // Arrange
        const ref = React.createRef();
        const { container } = render(
            <ScrollPanel id="scrollpanel" style={{ width: '100%', height: '200px' }} className="jest" ref={ref}>
                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever
                    anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not
                    intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect,
                    but given to ruthless violence whenever anything stands against the good of the family.
                </div>
            </ScrollPanel>
        );

        // Act
        act(() => {
            ref.current.refresh();
            ref.current.getElement();
            ref.current.getContent();
            ref.current.getXBar();
            ref.current.getYBar();
        });

        // Assert
        expect(container).toMatchSnapshot();
    });
});
