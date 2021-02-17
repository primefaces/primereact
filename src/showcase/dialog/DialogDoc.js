import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

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
import './DialogDemo.css';

export class DialogDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayBasic: false,
            displayBasic2: false,
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

                    <Dialog header="Header" visible={this.state.displayPosition} position={this.state.position} modal style={{ width: '50vw' }} footer={this.renderFooter('displayPosition')} onHide={() => this.onHide('displayPosition')}
                        draggable={false} resizable={false}>
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
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './DialogDemo.css';

const DialogDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition
    }

    const onClick = (name, position) => {
        dialogFuncMap[\`\${name}\`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[\`\${name}\`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <div className="dialog-demo">
            <div className="card">
                <h5>Basic</h5>
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
                <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>

                <Button label="Long Content" icon="pi pi-external-link" onClick={() => onClick('displayBasic2')} />
                <Dialog header="Header" visible={displayBasic2} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
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
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} />
                <Dialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
                    <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>

                <h5>Maximizable</h5>
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} />
                <Dialog header="Header" visible={displayMaximizable} maximizable modal style={{ width: '50vw' }} footer={renderFooter('displayMaximizable')} onHide={() => onHide('displayMaximizable')}>
                    <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>

                <h5>Position</h5>
                <div className="p-grid p-dir-col">
                    <div className="p-col">
                        <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick('displayPosition', 'left')} className="p-button-warning" />
                        <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick('displayPosition', 'right')} className="p-button-warning" />
                    </div>
                    <div className="p-col">
                        <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top')} className="p-button-warning" />
                        <Button label="TopLeft" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top-left')} className="p-button-warning" />
                        <Button label="TopRight" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top-right')} className="p-button-warning" />
                    </div>
                    <div className="p-col">
                        <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-warning" />
                        <Button label="BottomLeft" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom-left')} className="p-button-warning" />
                        <Button label="BottomRight" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom-right')} className="p-button-warning" />
                    </div>
                </div>

                <Dialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}
                    draggable={false} resizable={false}>
                    <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './DialogDemo.css';

const DialogDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition
    }

    const onClick = (name, position) => {
        dialogFuncMap[\`\${name}\`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[\`\${name}\`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <div className="dialog-demo">
            <div className="card">
                <h5>Basic</h5>
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
                <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>

                <Button label="Long Content" icon="pi pi-external-link" onClick={() => onClick('displayBasic2')} />
                <Dialog header="Header" visible={displayBasic2} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
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
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} />
                <Dialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
                    <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>

                <h5>Maximizable</h5>
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} />
                <Dialog header="Header" visible={displayMaximizable} maximizable modal style={{ width: '50vw' }} footer={renderFooter('displayMaximizable')} onHide={() => onHide('displayMaximizable')}>
                    <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>

                <h5>Position</h5>
                <div className="p-grid p-dir-col">
                    <div className="p-col">
                        <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick('displayPosition', 'left')} className="p-button-warning" />
                        <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick('displayPosition', 'right')} className="p-button-warning" />
                    </div>
                    <div className="p-col">
                        <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top')} className="p-button-warning" />
                        <Button label="TopLeft" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top-left')} className="p-button-warning" />
                        <Button label="TopRight" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top-right')} className="p-button-warning" />
                    </div>
                    <div className="p-col">
                        <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-warning" />
                        <Button label="BottomLeft" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom-left')} className="p-button-warning" />
                        <Button label="BottomRight" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom-right')} className="p-button-warning" />
                    </div>
                </div>

                <Dialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}
                    draggable={false} resizable={false}>
                    <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>
            </div>
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'src/demo/DialogDemo.css': {
                content: `
.dialog-demo .p-button {
    margin: 0 .5rem 0 0;
    min-width: 10rem;
}

.dialog-demo p {
    margin: 0;
    line-height: 1.5;
}

.dialog-demo .p-dialog .p-button {
    min-width: 6rem;
}
                `
            }
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
<Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />

<Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
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
        <Button label="Yes" icon="pi pi-check" onClick={onHide} />
        <Button label="No" icon="pi pi-times" onClick={onHide} />
    </div>
);

const myIcon = (
    <button className="p-dialog-titlebar-icon p-link">
        <span className="pi pi-search"></span>
    </button>
)

<Dialog header="Header Text" footer={footer} icons={myIcon} visible={visible} style={{width: '50vw'}} modal onHide={onHide}>
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
                                        <td>resizable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Enables resizing of the content.</td>
                                    </tr>
                                    <tr>
                                        <td>draggable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Enables dragging to change the position using header.</td>
                                    </tr>
                                    <tr>
                                        <td>minX</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Minimum value for the left coordinate of dialog in dragging.</td>
                                    </tr>
                                    <tr>
                                        <td>minY</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Minimum value for the top coordinate of dialog in dragging.</td>
                                    </tr>
                                    <tr>
                                        <td>keepInViewport</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Keeps dialog in the viewport.</td>
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
                                    <tr>
                                        <td>onDragStart</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when dialog dragging is initiated.</td>
                                    </tr>
                                    <tr>
                                        <td>onDrag</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when dragging dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>onDragEnd</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when dialog dragging is completed.</td>
                                    </tr>
                                    <tr>
                                        <td>onResizeStart</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when dialog resizing is initiated.</td>
                                    </tr>
                                    <tr>
                                        <td>onResize</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke while resizing dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>onResizeEnd</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when dialog resizing is completed.</td>
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

                    {
                        useLiveEditorTabs({ name: 'DialogDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
