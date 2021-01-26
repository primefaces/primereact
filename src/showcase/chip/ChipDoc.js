import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ChipDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Chip } from 'primereact/chip';
import './ChipDemo.css';

export class ChipDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <div className="p-d-flex p-ai-center p-flex-wrap">
                        <Chip label="Action" className="p-mr-2 p-mb-2" />
                        <Chip label="Comedy" className="p-mr-2 p-mb-2" />
                        <Chip label="Mystery" className="p-mr-2 p-mb-2" />
                        <Chip label="Thriller" className="p-mb-2" removable />
                    </div>

                    <h5>Icon</h5>
                    <div className="p-d-flex p-ai-center p-flex-wrap">
                        <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2" />
                        <Chip label="Facebook" icon="pi pi-facebook" className="p-mr-2 p-mb-2" />
                        <Chip label="Google" icon="pi pi-google" className="p-mr-2 p-mb-2" />
                        <Chip label="Microsoft" icon="pi pi-microsoft" className="p-mb-2" removable />
                    </div>

                    <h5>Image</h5>
                    <div className="p-d-flex p-ai-center p-flex-wrap">
                        <Chip label="Amy Elsner" image="showcase/demo/images/avatar/amyelsner.png" className="p-mr-2 p-mb-2" />
                        <Chip label="Asiya Javayant" image="showcase/demo/images/avatar/asiyajavayant.png" className="p-mr-2 p-mb-2" />
                        <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2" />
                        <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="p-mb-2" removable />
                    </div>

                    <h5>Styling</h5>
                    <div className="p-d-flex p-ai-center p-flex-wrap">
                        <Chip label="Action" className="p-mr-2 p-mb-2 custom-chip" />
                        <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2 custom-chip" />
                        <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2 custom-chip" />
                        <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="custom-chip p-mb-2" removable />
                    </div>
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import { Chip } from 'primereact/chip';
import './ChipDemo.css';

const ChipDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Action" className="p-mr-2 p-mb-2" />
                    <Chip label="Comedy" className="p-mr-2 p-mb-2" />
                    <Chip label="Mystery" className="p-mr-2 p-mb-2" />
                    <Chip label="Thriller" className="p-mb-2" removable />
                </div>

                <h5>Icon</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2" />
                    <Chip label="Facebook" icon="pi pi-facebook" className="p-mr-2 p-mb-2" />
                    <Chip label="Google" icon="pi pi-google" className="p-mr-2 p-mb-2" />
                    <Chip label="Microsoft" icon="pi pi-microsoft" className="p-mb-2" removable />
                </div>

                <h5>Image</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Amy Elsner" image="showcase/demo/images/avatar/amyelsner.png" className="p-mr-2 p-mb-2" />
                    <Chip label="Asiya Javayant" image="showcase/demo/images/avatar/asiyajavayant.png" className="p-mr-2 p-mb-2" />
                    <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2" />
                    <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="p-mb-2" removable />
                </div>

                <h5>Styling</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Action" className="p-mr-2 p-mb-2 custom-chip" />
                    <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2 custom-chip" />
                    <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2 custom-chip" />
                    <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="custom-chip p-mb-2" removable />
                </div>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Chip } from 'primereact/chip';
import './ChipDemo.css';

const ChipDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Action" className="p-mr-2 p-mb-2" />
                    <Chip label="Comedy" className="p-mr-2 p-mb-2" />
                    <Chip label="Mystery" className="p-mr-2 p-mb-2" />
                    <Chip label="Thriller" className="p-mb-2" removable />
                </div>

                <h5>Icon</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2" />
                    <Chip label="Facebook" icon="pi pi-facebook" className="p-mr-2 p-mb-2" />
                    <Chip label="Google" icon="pi pi-google" className="p-mr-2 p-mb-2" />
                    <Chip label="Microsoft" icon="pi pi-microsoft" className="p-mb-2" removable />
                </div>

                <h5>Image</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Amy Elsner" image="showcase/demo/images/avatar/amyelsner.png" className="p-mr-2 p-mb-2" />
                    <Chip label="Asiya Javayant" image="showcase/demo/images/avatar/asiyajavayant.png" className="p-mr-2 p-mb-2" />
                    <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2" />
                    <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="p-mb-2" removable />
                </div>

                <h5>Styling</h5>
                <div className="p-d-flex p-ai-center p-flex-wrap">
                    <Chip label="Action" className="p-mr-2 p-mb-2 custom-chip" />
                    <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2 custom-chip" />
                    <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2 custom-chip" />
                    <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="custom-chip p-mb-2" removable />
                </div>
            </div>
        </div>
    );
}
                `
            }
        }
        this.extFiles = {
            'src/demo/ChipDemo.css': {
                content: `
.p-chip.custom-chip {
    background: var(--primary-color);
    color: var(--primary-color-text);
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
import { Chip } from 'primereact/chip';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
				        <p>Chip can display labels, icons and images.</p>
<CodeHighlight>
{`
<Chip label="Text Only" />
<Chip label="Text with icon" icon="pi pi-check" />
<Chip label="Text with image" image="user.png" />
`}
</CodeHighlight>

                        <h5>Removable</h5>
                        <p>Setting <i>removable</i> property displays an icon to close the chip, the optional <i>onRemove</i>
                        event is available to get notified when a chip is hidden.</p>
<CodeHighlight>
{`
<Chip label="Text" removable />
`}
</CodeHighlight>

                        <h5>Templating</h5>
				        <p>Content can easily be customized with the <i>template</i> property instead of using the built-in modes.</p>

<CodeHighlight>
{`
<Chip template="Content" />
<Chip template={<span>Content<span>} />
<Chip template={(props) => <span>Content<span>} />
`}
</CodeHighlight>

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
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines the text to display.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines the icon to display.</td>
                                    </tr>
                                    <tr>
                                        <td>image</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines the image to display.</td>
                                    </tr>
                                    <tr>
                                        <td>removable</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to display a remove icon.</td>
                                    </tr>
                                    <tr>
                                        <td>removeIcon</td>
                                        <td>string</td>
                                        <td>pi pi-times-circle</td>
                                        <td>Icon of the remove element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>template</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Template of an item.</td>
                                    </tr>
                                    <tr>
                                        <td>imageAlt</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>It specifies an alternate text for an image, if the image cannot be displayed.</td>
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
                                        <td>onRemove</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when a chip is removed.</td>
                                    </tr>
                                    <tr>
                                        <td>onImageError</td>
                                        <td>event: Browser event</td>
                                        <td>This event is triggered if an error occurs while loading an image file.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
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
                                        <td>p-chip</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-chip-image</td>
                                        <td>Container element in image mode.</td>
                                    </tr>
                                    <tr>
                                        <td>p-chip-text</td>
                                        <td>Text of the chip.</td>
                                    </tr>
                                    <tr>
                                        <td>pi-chip-remove-icon</td>
                                        <td>Remove icon.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'ChipDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
