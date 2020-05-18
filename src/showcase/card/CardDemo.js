import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card} from '../../components/card/Card';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class CardDemo extends Component {

    render() {
        const header = (
            <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>
        );
        const footer = (
            <span>
                <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}} />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
            </span>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Card</h1>
                        <p>Card is a flexible container component.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("card")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Card title="Simple Card" style={{width: '360px'}}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>

                    <br/><br/>

                    <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>
                </div>

                <CardDoc />
            </div>
        )
    }
}

class CardDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

export class CardDemo extends Component {

    render() {
        const header = (
            <img alt="Card" src='showcase/resources/demo/images/usercard.png' srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"/>
        );
        const footer = (
            <span>
                <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}} />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
            </span>
        );

        return (
            <div>
                <Card title="Simple Card" style={{width: '360px'}}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                </Card>

                <br/><br/>

                <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                </Card>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

const CardDemo = () => {

    const header = (
        <img alt="Card" src='showcase/resources/demo/images/usercard.png' srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"/>
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </span>
    );

    return (
        <div>
            <Card title="Simple Card" style={{width: '360px'}}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>

            <br/><br/>

            <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

const CardDemo = () => {

    const header = (
        <img alt="Card" src='showcase/resources/demo/images/usercard.png' srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"/>
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </span>
    );

    return (
        <div>
            <Card title="Simple Card" style={{width: '360px'}}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>

            <br/><br/>

            <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/card" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="CardDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Card} from 'primereact/card';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Card is used as a container.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Card>
    Content
</Card>

`}
                        </CodeHighlight>

                        <h3>Title</h3>
                        <p>Title text of the card is provided using the <i>title</i> property whereas <strong>subTitle</strong> property is available for additional information about the card. Both of these properties accept JSX as well.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Card title="Title" subTitle="SubTitle">
    Content
</Card>
`}
                        </CodeHighlight>

                        <h3>Header and Footer</h3>
                        <p>Header and Footer sections are defined using the properties of the same name.</p>

                        <CodeHighlight className="language-jsx">
                            {`
const header = <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>;
const footer = <span>
                <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
             </span>;

<Card footer={footer} header={header}>
    Content
</Card>

`}
                        </CodeHighlight>

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
                                        <td>Header of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Footer of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>title</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Title of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>subTitle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Secondary title of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                    <td>p-card</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-card-title</td>
                                    <td>Title element.</td>
                                </tr>
                                <tr>
                                    <td>p-card-subtitle</td>
                                    <td>Subtitle element.</td>
                                </tr>
                                <tr>
                                    <td>p-card-content</td>
                                    <td>Content of the card.</td>
                                </tr>
                                <tr>
                                    <td>p-card-footer</td>
                                    <td>Footer of the card.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
