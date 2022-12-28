import { ScrollPanel } from '../../lib/scrollpanel/ScrollPanel';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function CustomDemo(props) {
    const code = {
        basic: `
<div className="scrollpanel-demo">
    <div className="card">
        <div className="grid">
            <div className="col-12 md:col-4">
                <ScrollPanel style={{ width: '100%', height: '200px' }}>
                    <div style={{ padding: '1em', lineHeight: '1.5' }}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                        father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but
                        given to ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son
                        Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just
                        like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </div>
                </ScrollPanel>
            </div>
        <div className="col-12 md:col-4">
                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                    <div style={{ padding: '1em', lineHeight: '1.5' }}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                        father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but
                        given to ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son
                        Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just
                        like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </div>
                </ScrollPanel>
            </div>
            <div className="col-12 md:col-4">
                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                    <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                        father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but
                        given to ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son
                        Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just
                        like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </div>
                </ScrollPanel>
            </div>
        </div>
    </div>
</div>
        `,
        javascript: `
import React from 'react'; 
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollPanelDemo.css';

export default function CustomDemo() {

    return (
        <div className="scrollpanel-demo">
            <div className="card">
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                                father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but
                                given to ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son
                                Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just
                                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </div>
                        </ScrollPanel>
                    </div>
                    <div className="col-12 md:col-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                            <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                                father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but
                                given to ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son
                                Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just
                                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </div>
                        </ScrollPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollPanelDemo.css';

export default function CustomDemo() {

    return (
        <div className="scrollpanel-demo">
            <div className="card">
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                                father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but
                                given to ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son
                                Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just
                                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </div>
                        </ScrollPanel>
                    </div>
                    <div className="col-12 md:col-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                            <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                                father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but
                                given to ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son
                                Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just
                                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </div>
                        </ScrollPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}
        `,
        extFiles: {
            'ScrollPanelDemo.css': `
/* ScrollPanelDemo.css */

.scrollpanel-demo .p-scrollpanel p {
    padding: .5rem;
    line-height: 1.5;
    margin: 0;
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-wrapper {
    border-right: 10px solid var(--surface-b);
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-bar {
    background-color: var(--primary-color);
    opacity: 1;
    transition: background-color .2s;
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-bar:hover {
    background-color: #007ad9;
}

.scrollpanel-demo .p-scrollpanel.custombar2 .p-scrollpanel-wrapper {
    border-right: 10px solid var(--surface-b);
    border-bottom: 10px solid var(--surface-b);
}

.scrollpanel-demo .p-scrollpanel.custombar2 .p-scrollpanel-bar {
    background-color: var(--surface-d);
    border-radius: 0;
    opacity: 1;
    transition: background-color .2s;
}

.scrollpanel-demo .col-12 {
    padding: 2rem;
}
`
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>ScrollPanel is defined using dimensions for the scrollable viewport.</p>
            </DocSectionText>
            <div className="scrollpanel-demo">
                <div className="card">
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                                    father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to
                                    ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has
                                    just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of
                                    the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                                </div>
                            </ScrollPanel>
                        </div>
                        <div className="col-12 md:col-6">
                            <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                                <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his
                                    father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to
                                    ruthless violence whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has
                                    just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of
                                    the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
