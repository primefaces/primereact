import React, { Component } from 'react';
import { Accordion, AccordionTab } from '../../components/accordion/Accordion';
import AppContentContext from '../../AppContentContext';
import { AccordionDoc } from './AccordionDoc';

export class AccordionDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Accordion</h1>
                        <p>Accordion groups a collection of contents in tabs.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("accordion")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Default</h3>
                    <Accordion>
                        <AccordionTab header="Godfather I">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            <p>Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            <p>After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.</p>
                        </AccordionTab>
                    </Accordion>

                    <h3>Multiple</h3>
                    <Accordion multiple={true}>
                        <AccordionTab header="Godfather I">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            <p>Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            <p>After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather IV" disabled={true}></AccordionTab>
                    </Accordion>
                </div>

                <AccordionDoc></AccordionDoc>
            </div>
        )
    }
}
