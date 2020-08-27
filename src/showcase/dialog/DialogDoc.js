import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DialogDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './DialogDemo.scss';

export class DialogDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayBasic: false,
            displayBasic2: false,
            displayBlockScroll: false,
            displayModal: false,
            displayConfirmation: false,
            displayMaximizable: false,
            displayPosition: false,
            position: 'center'
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [\`\${name}\`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [\`\${name}\`]: false
        });
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => this.onHide(name)} autoFocus />
            </div>
        );
    }

    render() {
        return (
            <div className="dialog-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic')} />
                    <Dialog header="Header" visible={this.state.displayBasic} style={{ width: '50vw' }} footer={this.renderFooter('displayBasic')} onHide={() => this.onHide('displayBasic')}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Dialog>

                    <Button label="Long Content" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic2')} />
                    <Dialog header="Header" visible={this.state.displayBasic2} style={{ width: '50vw' }} footer={this.renderFooter('displayBasic2')} onHide={() => this.onHide('displayBasic2')}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br />
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <br />
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br />
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <br />
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        <br />
                    </Dialog>

                    <h5>Without Modal</h5>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayModal')} />
                    <Dialog header="Header" visible={this.state.displayModal} modal={false} style={{ width: '50vw' }} footer={this.renderFooter('displayModal')} onHide={() => this.onHide('displayModal')}>
                        <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Dialog>

                    <h5>Confirmation</h5>
                    <Button label="Confirm" icon="pi pi-external-link" onClick={() => this.onClick('displayConfirmation')} />
                    <Dialog header="Confirmation" visible={this.state.displayConfirmation} modal style={{ width: '350px' }} footer={this.renderFooter('displayConfirmation')} onHide={() => this.onHide('displayConfirmation')}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            <span>Are you sure you want to proceed?</span>
                        </div>
                    </Dialog>

                    <h5>Maximizable</h5>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayMaximizable')} />
                    <Dialog header="Header" visible={this.state.displayMaximizable} maximizable modal style={{ width: '50vw' }} footer={this.renderFooter('displayMaximizable')} onHide={() => this.onHide('displayMaximizable')}>
                        <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Dialog>

                    <h5>Position</h5>
                    <div className="p-grid p-dir-col">
                        <div className="p-col">
                            <Button label="Left" icon="pi pi-arrow-right" onClick={() => this.onClick('displayPosition', 'left')} className="p-button-warning" />
                            <Button label="Right" icon="pi pi-arrow-left" onClick={() => this.onClick('displayPosition', 'right')} className="p-button-warning" />
                        </div>
                        <div className="p-col">
                            <Button label="Top" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'top')} className="p-button-warning" />
                            <Button label="TopLeft" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'top-left')} className="p-button-warning" />
                            <Button label="TopRight" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'top-right')} className="p-button-warning" />
                        </div>
                        <div className="p-col">
                            <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottom')} className="p-button-warning" />
                            <Button label="BottomLeft" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottom-left')} className="p-button-warning" />
                            <Button label="BottomRight" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottom-right')} className="p-button-warning" />
                        </div>
                    </div>

                    <Dialog header="Header" visible={this.state.displayPosition} position={this.state.position} modal style={{ width: '50vw' }} footer={this.renderFooter('displayPosition')} onHide={() => this.onHide('displayPosition')}>
                        <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Dialog>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

const DialogDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayBlockScroll, setDisplayBlockScroll] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');

    const onClick = (stateMethod, position = '') => {
        stateMethod(true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (stateMethod) => {
        stateMethod(false);
    }

    const renderFooter = (stateMethod) => {
        return (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(stateMethod)} />
                <Button label="No" icon="pi pi-times" onClick={() => onHide(stateMethod)} className="p-button-secondary"/>
            </div>
        );
    }

    return (
        <div className="dialog-demo">
            <h5>Basic</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayBasic)} />
            <Dialog header="Godfather I" visible={displayBasic} style={{width: '50vw'}} onHide={() => onHide(setDisplayBasic)} footer={renderFooter(setDisplayBasic)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <Button label="Long Content" icon="pi pi-external-link" onClick={() => onClick(setDisplayBasic2)} />
            <Dialog header="Godfather Casting" visible={displayBasic2} style={{width: '50vw'}} onHide={() => onHide(setDisplayBasic2)} blockScroll footer={renderFooter(setDisplayBasic2)}>
                Puzo was first to show interest in having Marlon Brando portray Don Vito Corleone by sending a letter to Brando in which he stated Brando was the "only actor who can play the Godfather." Despite Puzo's wishes, the executives at Paramount were against having Brando, partly due to the poor performance of his recent films and also his short temper. Coppola favored Brando or Laurence Olivier for the role, but Olivier's agent refused the role claiming Olivier was sick; however, Olivier went on to star in Sleuth later that year. The studio mainly pushed for Ernest Borgnine to receive the part. Other considerations were George C. Scott, Richard Conte, Anthony Quinn, and Orson Welles.
                <br/><br/>
                After months of debate between Coppola and Paramount over Brando, the two finalists for the role were Borgnine and Brando, the latter of whom Paramount president Stanley Jaffe required to perform a screen test. Coppola did not want to offend Brando and stated that he needed to test equipment in order to set up the screen test at Brando's California residence. For make-up, Brando stuck cotton balls in his cheeks, put shoe polish in his hair to darken it, and rolled his collar. Coppola placed Brando's audition tape in the middle of the videos of the audition tapes as the Paramount executives watched them. The executives were impressed with Brando's efforts and allowed Coppola to cast Brando for the role if Brando accepted a lower salary and put up a bond to ensure he would not cause any delays in production. Brando earned $1.6 million from a net participation deal.
                <br/><br/>
                From the start of production, Coppola wanted Robert Duvall to play the part of Tom Hagen. After screen testing several other actors, Coppola eventually got his wish and Duvall was awarded the part of Tom Hagen. Al Martino, a then famed singer in nightclubs, was notified of the character Johnny Fontane by a friend who read the eponymous novel and felt Martino represented the character of Johnny Fontane. Martino then contacted producer Albert S. Ruddy, who gave him the part. However, Martino was stripped of the part after Coppola became director and then awarded the role to singer Vic Damone. According to Martino, after being stripped of the role, he went to Russell Bufalino, his godfather and a crime boss, who then orchestrated the publication of various news articles that claimed Coppola was unaware of Ruddy giving Martino the part. Damone eventually dropped the role because he did not want to provoke the mob, in addition to being paid too little. Ultimately, the part of Johnny Fontane was given to Martino.
                <br/><br/>
                Robert De Niro originally was given the part of Paulie Gatto. A spot in The Gang That Couldn't Shoot Straight opened up after Al Pacino quit the project in favor of The Godfather, which led De Niro to audition for the role and leave The Godfather after receiving the part. After De Niro quit, Johnny Martino was given the role of Gatto. Coppola cast Diane Keaton for the role of Kay Adams due to her reputation for being eccentric. John Cazale was given the part of Fredo Corleone after Coppola saw him perform in an Off Broadway production. Gianni Russo was given the role of Carlo Rizzi after he was asked to perform a screen test in which he acted out the fight between Rizzi and Connie.
                <br/><br/>
                Nearing the start of filming on March 29, Michael Corleone had yet to be cast. Paramount executives wanted a popular actor, either Warren Beatty or Robert Redford. Producer Robert Evans wanted Ryan O'Neal to receive the role in part due to his recent success in Love Story. Pacino was Coppola's favorite for the role as he could picture him roaming the Sicilian countryside, and wanted an unknown actor who looked like an Italian-American. However, Paramount executives found Pacino to be too short to play Michael. Dustin Hoffman, Martin Sheen, and James Caan also auditioned. Caan was well received by the Paramount executives and was given the part of Michael initially, while the role of Sonny Corleone was awarded to Carmine Caridi. Coppola still pushed for Pacino to play Michael after the fact and Evans eventually conceded, allowing Pacino to have the role of Michael as long as Caan played Sonny. Evans preferred Caan over Caridi because Caan was seven inches shorter than Caridi, which was much closer to Pacino's height. Despite agreeing to play Michael Corleone, Pacino was contracted to star in MGM's The Gang That Couldn't Shoot Straight, but the two studios agreed on a settlement and Pacino was signed by Paramount three weeks before shooting began.
                <br/><br/>
                Coppola gave several roles in the film to family members. He gave his sister, Talia Shire, the role of Connie Corleone. His daughter Sofia played Michael Francis Rizzi, Connie's and Carlo's newborn son. Carmine Coppola, his father, appeared in the film as an extra playing a piano during a scene. Coppola's wife, mother, and two sons all appeared as extras in the picture. Several smaller roles, like Luca Brasi, were cast after the filming had started.
                <br/><br/>
            </Dialog>

            <h5>BlockScroll</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayBlockScroll)} />
            <Dialog header="Godfather I" visible={displayBlockScroll} style={{width: '50vw'}} onHide={() => onHide(setDisplayBlockScroll)} blockScroll
                footer={renderFooter(setDisplayBlockScroll)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <h5>Without Modal</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayModal)} />
            <Dialog header="Godfather I" visible={displayModal} style={{width: '50vw'}} onHide={() => onHide(setDisplayModal)} modal={false}
                footer={renderFooter(setDisplayModal)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <h5>Maximizable</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayMaximizable)} />
            <Dialog header="Godfather I" visible={displayMaximizable} style={{width: '50vw'}} onHide={() => onHide(setDisplayMaximizable)} maximizable blockScroll
                footer={renderFooter(setDisplayMaximizable)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <h5>Position</h5>
            <div className="p-grid p-dir-col">
                <div className="p-col">
                    <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick(setDisplayPosition, 'left')} className="p-button-warning" />
                    <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick(setDisplayPosition, 'right')} className="p-button-warning" />
                </div>
                <div className="p-col">
                    <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick(setDisplayPosition, 'top')} className="p-button-warning" />
                    <Button label="TopLeft" icon="pi pi-arrow-down" onClick={() => onClick(setDisplayPosition, 'top-left')} className="p-button-warning" />
                    <Button label="TopRight" icon="pi pi-arrow-down" onClick={() => onClick(setDisplayPosition, 'top-right')} className="p-button-warning" />
                </div>
                <div className="p-col">
                    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick(setDisplayPosition, 'bottom')} className="p-button-warning" />
                    <Button label="BottomLeft" icon="pi pi-arrow-up" onClick={() => onClick(setDisplayPosition, 'bottom-left')} className="p-button-warning" />
                    <Button label="BottomRight" icon="pi pi-arrow-up" onClick={() => onClick(setDisplayPosition, 'bottom-right')} className="p-button-warning" />
                </div>
            </div>

            <Dialog header="Godfather I" visible={displayPosition} style={{width: '50vw'}} onHide={() => onHide(setDisplayPosition)}
                position={position} blockScroll footer={renderFooter(setDisplayPosition)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

const DialogDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayBlockScroll, setDisplayBlockScroll] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');

    const onClick = (stateMethod: any, position: string = '') => {
        stateMethod(true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (stateMethod: any) => {
        stateMethod(false);
    }

    const renderFooter = (stateMethod: any) => {
        return (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(stateMethod)} />
                <Button label="No" icon="pi pi-times" onClick={() => onHide(stateMethod)} className="p-button-secondary"/>
            </div>
        );
    }

    return (
        <div className="dialog-demo">
            <h5>Basic</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayBasic)} />
            <Dialog header="Godfather I" visible={displayBasic} style={{width: '50vw'}} onHide={() => onHide(setDisplayBasic)} footer={renderFooter(setDisplayBasic)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <Button label="Long Content" icon="pi pi-external-link" onClick={() => onClick(setDisplayBasic2)} />
            <Dialog header="Godfather Casting" visible={displayBasic2} style={{width: '50vw'}} onHide={() => onHide(setDisplayBasic2)} blockScroll footer={renderFooter(setDisplayBasic2)}>
                Puzo was first to show interest in having Marlon Brando portray Don Vito Corleone by sending a letter to Brando in which he stated Brando was the "only actor who can play the Godfather." Despite Puzo's wishes, the executives at Paramount were against having Brando, partly due to the poor performance of his recent films and also his short temper. Coppola favored Brando or Laurence Olivier for the role, but Olivier's agent refused the role claiming Olivier was sick; however, Olivier went on to star in Sleuth later that year. The studio mainly pushed for Ernest Borgnine to receive the part. Other considerations were George C. Scott, Richard Conte, Anthony Quinn, and Orson Welles.
                <br/><br/>
                After months of debate between Coppola and Paramount over Brando, the two finalists for the role were Borgnine and Brando, the latter of whom Paramount president Stanley Jaffe required to perform a screen test. Coppola did not want to offend Brando and stated that he needed to test equipment in order to set up the screen test at Brando's California residence. For make-up, Brando stuck cotton balls in his cheeks, put shoe polish in his hair to darken it, and rolled his collar. Coppola placed Brando's audition tape in the middle of the videos of the audition tapes as the Paramount executives watched them. The executives were impressed with Brando's efforts and allowed Coppola to cast Brando for the role if Brando accepted a lower salary and put up a bond to ensure he would not cause any delays in production. Brando earned $1.6 million from a net participation deal.
                <br/><br/>
                From the start of production, Coppola wanted Robert Duvall to play the part of Tom Hagen. After screen testing several other actors, Coppola eventually got his wish and Duvall was awarded the part of Tom Hagen. Al Martino, a then famed singer in nightclubs, was notified of the character Johnny Fontane by a friend who read the eponymous novel and felt Martino represented the character of Johnny Fontane. Martino then contacted producer Albert S. Ruddy, who gave him the part. However, Martino was stripped of the part after Coppola became director and then awarded the role to singer Vic Damone. According to Martino, after being stripped of the role, he went to Russell Bufalino, his godfather and a crime boss, who then orchestrated the publication of various news articles that claimed Coppola was unaware of Ruddy giving Martino the part. Damone eventually dropped the role because he did not want to provoke the mob, in addition to being paid too little. Ultimately, the part of Johnny Fontane was given to Martino.
                <br/><br/>
                Robert De Niro originally was given the part of Paulie Gatto. A spot in The Gang That Couldn't Shoot Straight opened up after Al Pacino quit the project in favor of The Godfather, which led De Niro to audition for the role and leave The Godfather after receiving the part. After De Niro quit, Johnny Martino was given the role of Gatto. Coppola cast Diane Keaton for the role of Kay Adams due to her reputation for being eccentric. John Cazale was given the part of Fredo Corleone after Coppola saw him perform in an Off Broadway production. Gianni Russo was given the role of Carlo Rizzi after he was asked to perform a screen test in which he acted out the fight between Rizzi and Connie.
                <br/><br/>
                Nearing the start of filming on March 29, Michael Corleone had yet to be cast. Paramount executives wanted a popular actor, either Warren Beatty or Robert Redford. Producer Robert Evans wanted Ryan O'Neal to receive the role in part due to his recent success in Love Story. Pacino was Coppola's favorite for the role as he could picture him roaming the Sicilian countryside, and wanted an unknown actor who looked like an Italian-American. However, Paramount executives found Pacino to be too short to play Michael. Dustin Hoffman, Martin Sheen, and James Caan also auditioned. Caan was well received by the Paramount executives and was given the part of Michael initially, while the role of Sonny Corleone was awarded to Carmine Caridi. Coppola still pushed for Pacino to play Michael after the fact and Evans eventually conceded, allowing Pacino to have the role of Michael as long as Caan played Sonny. Evans preferred Caan over Caridi because Caan was seven inches shorter than Caridi, which was much closer to Pacino's height. Despite agreeing to play Michael Corleone, Pacino was contracted to star in MGM's The Gang That Couldn't Shoot Straight, but the two studios agreed on a settlement and Pacino was signed by Paramount three weeks before shooting began.
                <br/><br/>
                Coppola gave several roles in the film to family members. He gave his sister, Talia Shire, the role of Connie Corleone. His daughter Sofia played Michael Francis Rizzi, Connie's and Carlo's newborn son. Carmine Coppola, his father, appeared in the film as an extra playing a piano during a scene. Coppola's wife, mother, and two sons all appeared as extras in the picture. Several smaller roles, like Luca Brasi, were cast after the filming had started.
                <br/><br/>
            </Dialog>

            <h5>BlockScroll</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayBlockScroll)} />
            <Dialog header="Godfather I" visible={displayBlockScroll} style={{width: '50vw'}} onHide={() => onHide(setDisplayBlockScroll)} blockScroll
                footer={renderFooter(setDisplayBlockScroll)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <h5>Without Modal</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayModal)} />
            <Dialog header="Godfather I" visible={displayModal} style={{width: '50vw'}} onHide={() => onHide(setDisplayModal)} modal={false}
                footer={renderFooter(setDisplayModal)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <h5>Maximizable</h5>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick(setDisplayMaximizable)} />
            <Dialog header="Godfather I" visible={displayMaximizable} style={{width: '50vw'}} onHide={() => onHide(setDisplayMaximizable)} maximizable blockScroll
                footer={renderFooter(setDisplayMaximizable)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>

            <h5>Position</h5>
            <div className="p-grid p-dir-col">
                <div className="p-col">
                    <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick(setDisplayPosition, 'left')} className="p-button-warning" />
                    <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick(setDisplayPosition, 'right')} className="p-button-warning" />
                </div>
                <div className="p-col">
                    <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick(setDisplayPosition, 'top')} className="p-button-warning" />
                    <Button label="TopLeft" icon="pi pi-arrow-down" onClick={() => onClick(setDisplayPosition, 'top-left')} className="p-button-warning" />
                    <Button label="TopRight" icon="pi pi-arrow-down" onClick={() => onClick(setDisplayPosition, 'top-right')} className="p-button-warning" />
                </div>
                <div className="p-col">
                    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick(setDisplayPosition, 'bottom')} className="p-button-warning" />
                    <Button label="BottomLeft" icon="pi pi-arrow-up" onClick={() => onClick(setDisplayPosition, 'bottom-left')} className="p-button-warning" />
                    <Button label="BottomRight" icon="pi pi-arrow-up" onClick={() => onClick(setDisplayPosition, 'bottom-right')} className="p-button-warning" />
                </div>
            </div>

            <Dialog header="Godfather I" visible={displayPosition} style={{width: '50vw'}} onHide={() => onHide(setDisplayPosition)}
                position={position} blockScroll footer={renderFooter(setDisplayPosition)}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.dialog-demo > .p-button, .dialog-demo .p-grid .p-button {
    margin: 0.5em 0.5em 0.5em 0;
    width: 140px;
}
.dialog-demo .p-dialog .p-dialog-content {
    line-height: 1.5;
}
            `
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Dialog } from 'primereact/dialog';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Dialog is used as a container and visibility is managed with <i>visible</i> property where <i>onHide</i> event is required to update the visibility state.</p>
<CodeHighlight>
{`
<Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic')} />

<Dialog header="Header" visible={this.state.displayBasic} style={{ width: '50vw' }} footer={this.renderFooter('displayBasic')} onHide={() => this.onHide('displayBasic')}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Dialog>
`}
</CodeHighlight>

                        <h5>Header and Footer</h5>
                        <p>Header and Footer sections are defined using properties with the same name that accept simple strings or JSX for custom content. In addition <i>icons</i> property enables
            adding more icons at the header section.</p>
<CodeHighlight>
{`
const footer = (
    <div>
        <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
        <Button label="No" icon="pi pi-times" onClick={this.onHide} />
    </div>
);

const myIcon = (
    <button className="p-dialog-titlebar-icon p-link">
        <span className="pi pi-search"></span>
    </button>
)

<Dialog header="Header Text" footer={footer} icons={myIcon} visible={this.state.visible} style={{width: '50vw'}} modal onHide={this.onHide}>
    Content
</Dialog>
`}
</CodeHighlight>

                        <h5>Dynamic Content</h5>
                        <p>Dynamic content may move the dialog boundaries outside of the viewport. Common solution is defining max-height via <i>contentStyle</i> so longer content displays a scrollbar.</p>

                        <h5>Properties</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>header</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Title content of the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Footer content of the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>visible</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Specifies the visibility of the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>position</td>
                                        <td>string</td>
                                        <td>center</td>
                                        <td>Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".</td>
                                    </tr>
                                    <tr>
                                        <td>modal</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Defines if background should be blocked when dialog is displayed.</td>
                                    </tr>
                                    <tr>
                                        <td>contentStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Style of the content section.</td>
                                    </tr>
                                    <tr>
                                        <td>contentClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the content section.</td>
                                    </tr>
                                    <tr>
                                        <td>closeOnEscape</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Specifies if pressing escape key should hide the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>dismissableMask</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Specifies if clicking the modal background should hide the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>rtl</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled dialog is displayed in RTL direction.</td>
                                    </tr>
                                    <tr>
                                        <td>closable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Adds a close icon to the header to hide the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>maskClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the mask.</td>
                                    </tr>
                                    <tr>
                                        <td>showHeader</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to show the header or not.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>DOM element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the dialog should be mounted.</td>
                                    </tr>
                                    <tr>
                                        <td>baseZIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Base zIndex value to use in layering.</td>
                                    </tr>
                                    <tr>
                                        <td>maximizable</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether the dialog can be displayed full screen.</td>
                                    </tr>
                                    <tr>
                                        <td>blockScroll</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether background scroll should be blocked when dialog is visible.</td>
                                    </tr>
                                    <tr>
                                        <td>icons</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Custom icons template for the header.</td>
                                    </tr>
                                    <tr>
                                        <td>ariaCloseIconLabel</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines a string that labels the close icon.</td>
                                    </tr>
                                    <tr>
                                        <td>focusOnShow</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>When enabled, first button receives focus on show.</td>
                                    </tr>
                                    <tr>
                                        <td>maximized</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled, the dialog is initially displayed full screen.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onHide</td>
                                        <td>null</td>
                                        <td>Callback to invoke when dialog is hidden (Required).</td>
                                    </tr>
                                    <tr>
                                        <td>onShow</td>
                                        <td>null</td>
                                        <td>Callback to invoke when dialog is showed.</td>
                                    </tr>
                                    <tr>
                                        <td>onMaximize</td>
                                        <td>event.originalEvent: Browser event  <br />
                                            event.maximized: Whether to show the dialog or not on fullscreen.
                                        </td>
                                        <td>Callback to invoke when toggle maximize icon is clicked.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-dialog</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dialog-titlebar</td>
                                        <td>Container of header.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dialog-title</td>
                                        <td>Header element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dialog-titlebar-icon</td>
                                        <td>Icon container inside header.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dialog-titlebar-close</td>
                                        <td>Close icon element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-dialog-content</td>
                                        <td>Content element</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="DialogDemo" sources={this.sources} extFiles={this.extFiles} />
<CodeHighlight lang="scss">
{`
.dialog-demo {
    .p-button {
        margin: 0 .5rem 0 0;
        min-width: 10rem;
    }

    p {
        margin: 0;
        line-height: 1.5;
    }

    .confirmation-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-dialog .p-button {
        min-width: 6rem;
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
