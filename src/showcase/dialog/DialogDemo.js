import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Dialog} from '../../components/dialog/Dialog';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DialogDemo extends Component {

    constructor() {
        super();
        this.state = {
            displayBasic: false,
            displayBasic2: false,
            displayBlockScroll: false,
            displayModal: false,
            displayMaximizable: false,
            displayPosition: false,
            position: 'center'
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
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
            [`${name}`]: false
        });
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={() => this.onHide(name)} />
                <Button label="No" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-secondary"/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dialog")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation dialog-demo">
                    <h3>Basic</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic')} />
                    <Dialog header="Godfather I" visible={this.state.displayBasic} style={{width: '50vw'}} onHide={() => this.onHide('displayBasic')} footer={this.renderFooter('displayBasic')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <Button label="Long Content" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic2')} />
                    <Dialog header="Godfather Casting" visible={this.state.displayBasic2} style={{width: '50vw'}} onHide={() => this.onHide('displayBasic2')} blockScroll footer={this.renderFooter('displayBasic2')}>
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

                    <h3>BlockScroll</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayBlockScroll')} />
                    <Dialog header="Godfather I" visible={this.state.displayBlockScroll} style={{width: '50vw'}} onHide={() => this.onHide('displayBlockScroll')} blockScroll
                        footer={this.renderFooter('displayBlockScroll')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <h3>Without Modal</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayModal')} />
                    <Dialog header="Godfather I" visible={this.state.displayModal} style={{width: '50vw'}} onHide={() => this.onHide('displayModal')} modal={false}
                        footer={this.renderFooter('displayModal')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <h3>Maximizable</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayMaximizable')} />
                    <Dialog header="Godfather I" visible={this.state.displayMaximizable} style={{width: '50vw'}} onHide={() => this.onHide('displayMaximizable')} maximizable blockScroll
                        footer={this.renderFooter('displayMaximizable')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <h3>Position</h3>
                    <div className="p-grid p-dir-col">
                        <div className="p-col">
                            <Button label="Left" icon="pi pi-arrow-right" onClick={() => this.onClick('displayPosition', 'left')} className="p-button-warning" />
                            <Button label="Right" icon="pi pi-arrow-left" onClick={() => this.onClick('displayPosition', 'right')} className="p-button-warning" />
                        </div>
                        <div className="p-col">
                            <Button label="Top" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'top')} className="p-button-warning" />
                            <Button label="TopLeft" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'topleft')} className="p-button-warning" />
                            <Button label="TopRight" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'topright')} className="p-button-warning" />
                        </div>
                        <div className="p-col">
                            <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottom')} className="p-button-warning" />
                            <Button label="BottomLeft" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottomleft')} className="p-button-warning" />
                            <Button label="BottomRight" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottomright')} className="p-button-warning" />
                        </div>
                    </div>

                    <Dialog header="Godfather I" visible={this.state.displayPosition} style={{width: '50vw'}} onHide={() => this.onHide('displayPosition')}
                        position={this.state.position} blockScroll footer={this.renderFooter('displayPosition')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>
                </div>

                <DialogDoc></DialogDoc>
            </div>
        )
    }
}

export class DialogDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Dialog} from 'primereact/dialog';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Dialog is used as a container and visibility is managed with <i>visible</i> property where <i>onHide</i> event is required to update the visibility state.</p>
<CodeHighlight className="language-jsx">
{`
<Dialog header="Godfather I" visible={this.state.visible} style={{width: '50vw'}} modal={true} onHide={() => this.setState({visible: false})}>
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Dialog>

<Button label="Show" icon="pi pi-info-circle" onClick={(e) => this.setState({visible: true})} />

`}
</CodeHighlight>

            <h3>Header and Footer</h3>
            <p>Header and Footer sections are defined using properties with the same name that accept simple strings or JSX for custom content. In addition <i>iconsTemplate</i> property enables
            adding more icons at the header section.</p>
<CodeHighlight className="language-jsx">
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

<Dialog header="Header Text" footer={footer} iconsTemplate={myIcon} visible={this.state.visible} style={{width: '50vw'}} modal={true} onHide={this.onHide}>
    Content
</Dialog>

`}
</CodeHighlight>

            <h3>Dynamic Content</h3>
            <p>Dynamic content may move the dialog boundaries outside of the viewport. Common solution is defining max-height via <i>contentStyle</i> so longer content displays a scrollbar.</p>

            <h3>Properties</h3>
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
                            <td>Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".</td>
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
                            <td>closeOnEscape</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Specifices if pressing escape key should hide the dialog.</td>
                        </tr>
                        <tr>
                            <td>dismissableMask</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifices if clicking the modal background should hide the dialog.</td>
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
                            <td>iconsTemplate</td>
                            <td>Element</td>
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

            <h3>Events</h3>
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
                            <td>event.originalEvent: Browser event  <br/>
                                event.maximized: Whether to show the dialog or not on fullscreen.
                            </td>
                            <td>Callback to invoke when toggle maximize icon is clicked.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
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

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/dialog" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Dialog} from '../../components/dialog/Dialog';
import {Button} from '../../components/button/Button';

export class DialogDemo extends Component {

    constructor() {
        super();
        this.state = {
            displayBasic: false,
            displayBasic2: false,
            displayBlockScroll: false,
            displayModal: false,
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
                <Button label="Yes" icon="pi pi-check" onClick={() => this.onHide(name)} />
                <Button label="No" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-secondary"/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                </div>

                <div className="content-section implementation dialog-demo">
                    <h3>Basic</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic')} />
                    <Dialog header="Godfather I" visible={this.state.displayBasic} style={{width: '50vw'}} onHide={() => this.onHide('displayBasic')} footer={this.renderFooter('displayBasic')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <Button label="Long Content" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic2')} />
                    <Dialog header="Godfather Casting" visible={this.state.displayBasic2} style={{width: '50vw'}} onHide={() => this.onHide('displayBasic2')} blockScroll footer={this.renderFooter('displayBasic2')}>
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

                    <h3>BlockScroll</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayBlockScroll')} />
                    <Dialog header="Godfather I" visible={this.state.displayBlockScroll} style={{width: '50vw'}} onHide={() => this.onHide('displayBlockScroll')} blockScroll
                        footer={this.renderFooter('displayBlockScroll')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <h3>Without Modal</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayModal')} />
                    <Dialog header="Godfather I" visible={this.state.displayModal} style={{width: '50vw'}} onHide={() => this.onHide('displayModal')} modal={false}
                        footer={this.renderFooter('displayModal')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <h3>Maximizable</h3>
                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayMaximizable')} />
                    <Dialog header="Godfather I" visible={this.state.displayMaximizable} style={{width: '50vw'}} onHide={() => this.onHide('displayMaximizable')} maximizable blockScroll
                        footer={this.renderFooter('displayMaximizable')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>

                    <h3>Position</h3>
                    <div className="p-grid p-dir-col">
                        <div className="p-col">
                            <Button label="Left" icon="pi pi-arrow-right" onClick={() => this.onClick('displayPosition', 'left')} className="p-button-warning" />
                            <Button label="Right" icon="pi pi-arrow-left" onClick={() => this.onClick('displayPosition', 'right')} className="p-button-warning" />
                        </div>
                        <div className="p-col">
                            <Button label="Top" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'top')} className="p-button-warning" />
                            <Button label="TopLeft" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'topleft')} className="p-button-warning" />
                            <Button label="TopRight" icon="pi pi-arrow-down" onClick={() => this.onClick('displayPosition', 'topright')} className="p-button-warning" />
                        </div>
                        <div className="p-col">
                            <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottom')} className="p-button-warning" />
                            <Button label="BottomLeft" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottomleft')} className="p-button-warning" />
                            <Button label="BottomRight" icon="pi pi-arrow-up" onClick={() => this.onClick('displayPosition', 'bottomright')} className="p-button-warning" />
                        </div>
                    </div>

                    <Dialog header="Godfather I" visible={this.state.displayPosition} style={{width: '50vw'}} onHide={() => this.onHide('displayPosition')}
                        position={this.state.position} blockScroll footer={this.renderFooter('displayPosition')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Dialog>
                </div>
            </div>
        )
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
