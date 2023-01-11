import React from 'react';
import { CodeHighlight } from '../common/codehighlight';
import { DocSectionText } from '../common/docsectiontext';

export function CommandDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>The function to invoke when an item is clicked is defined using the command property.</p>
            </DocSectionText>
            <CodeHighlight lang="js">
                {`
const items =
[
    {
        label: 'New',
        icon: 'pi pi-plus',
        command: (event) => {
            // event.originalEvent: Browser event
            // event.item: MenuItem instance
        }
    }
];

`}
            </CodeHighlight>
        </>
    );
}
