import React, { Component } from 'react';
import { ScrollPanel } from '../../components/scrollpanel/ScrollPanel';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ScrollPanelDoc } from './ScrollPanelDoc';
import './ScrollPanelDemo.scss';

export class ScrollPanelDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="scrollPanel">
                        <h1>ScrollPanel</h1>
                        <p>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation scrollpanel-demo">
                    <div className="card">
                        <div className="p-grid">
                            <div className="p-col-12 p-md-4">
                                <ScrollPanel style={{ width: '100%', height: '200px' }}>
                                    <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                        son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                        Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                        of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                        against the good of the family.
                                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                        son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                        life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                        and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                        family.
                                </div>
                                </ScrollPanel>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                                    <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                        son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                        Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                        of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                        against the good of the family.
                                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                        son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                        life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                        and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                        family.
                                </div>
                                </ScrollPanel>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                                    <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                        son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                        Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                        of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                        against the good of the family.
                                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                        son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                        life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                        and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                        family.
                                </div>
                                </ScrollPanel>
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollPanelDoc></ScrollPanelDoc>
            </div>
        )
    }
}
