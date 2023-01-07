import React from 'react';
import { CodeHighlight } from '../common/codehighlight';
import { DocSectionText } from '../common/docsectiontext';

export function NavigationDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Navigation is specified using url property for external links or using command function for internal router.</p>
            </DocSectionText>
            <CodeHighlight lang="js">
                {`
const items =
[
    {
        label: 'New',
        icon: 'pi pi-plus',
        command: (event) => {
            window.location.hash = "/fileupload";
        }
    },
    {
        label: 'Link',
        icon: 'pi pi-check',
        url: 'https://www.primefaces.org/primereact'
    }
];

`}
            </CodeHighlight>
        </>
    );
}
