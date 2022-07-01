import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ImageDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Image } from 'primereact/image';

export class ImageDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />

                    <h5>Preview</h5>
                    <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
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
import React from 'react';
import { Image } from 'primereact/image';

const ImageDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />

                <h5>Preview</h5>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React from 'react';
import { Image } from 'primereact/image';

const ImageDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />

                <h5>Preview</h5>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/image/image.min.js"></script>`,
            content: `
import React from 'react';
import { Image } from 'primereact/image';

const ImageDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />

                <h5>Preview</h5>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
            </div>
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { Image } from 'primereact/image';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/image/image.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Image is used as the native <i>img</i> element and supports all properties that the native element has.</p>

<CodeHighlight>
{`
<Image src="image1.png" alt="Image Text" />
`}
</CodeHighlight>

                    <h5>Preview</h5>
                    <p>Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming.</p>

                    <h5>Templating</h5>
                    <p>An eye icon is displayed by default when the image is hovered in preview mode. Use the<i>template</i>prop for custom content.</p>

<CodeHighlight>
{`
<Image src="image1.png" template="Preview Content" alt="Image Text" />
`}
</CodeHighlight>


                    <h5>Properties</h5>
                    <p>Image passes any valid attribute to the underlying img element, additional attribute is the following.</p>
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
                                    <td>preview</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Controls the preview functionality.</td>
                                </tr>
                                <tr>
                                    <td>downloadable</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Adds a download button to the preview control menu.</td>
                                </tr>
                                <tr>
                                    <td>imageStyle</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Inline style of the image element.</td>
                                </tr>
                                <tr>
                                    <td>imageClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the image element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <p>Any valid event like click and mouseover are passed to the underlying input element. Events below are the additional ones related to the preview functionality.</p>
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
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Triggered when the preview overlay is shown.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Triggered when the preview overlay is hidden.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                                    <td>p-image</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-image-preview-container</td>
                                    <td>Container element with preview enabled.</td>
                                </tr>
                                <tr>
                                    <td>p-image-preview-indicator</td>
                                    <td>Mask layer over the image when hovered.</td>
                                </tr>
                                <tr>
                                    <td>p-image-preview-icon</td>
                                    <td>Icon of the preview indicator.</td>
                                </tr>
                                <tr>
                                    <td>p-image-mask</td>
                                    <td>Preview overlay container.</td>
                                </tr>
                                <tr>
                                    <td>p-image-toolbar</td>
                                    <td>Transformation options container.</td>
                                </tr>
                                <tr>
                                    <td>p-image-action</td>
                                    <td>An element inside the toolbar.</td>
                                </tr>
                                <tr>
                                    <td>p-image-preview</td>
                                    <td>Image element inside the preview overlay.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>The preview button is a native <i>button</i> element with an <i>aria-label</i> that refers to the <i>aria.zoomImage</i> property of the <Link href="/locale">locale</Link> API by default, with <i>previewButtonProps</i>
                        you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly.</p>

                        <p>When preview is active, <i>dialog</i> role with <i>aria-modal</i> is applied to the overlay image container.</p>

                        <p>Button controls use <i>aria.rotateRight</i>, <i>aria.rotateLeft</i>, <i>aria.zoomIn</i>, <i>aria.zoomOut</i> and <i>aria.close</i> from the <Link href="/locale">locale</Link> API as <i>aria-label</i>.</p>

                        <h6>ButtonBar Keyboard Support</h6>
                        <p>When preview is activated, close button receives the initial focus.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>tab</i></td>
                                        <td>Moves focus through button bar.</td>
                                    </tr>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Activates the button.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Activates the button.</td>
                                    </tr>
                                    <tr>
                                        <td><i>esc</i></td>
                                        <td>Closes the image preview.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'ImageDemo', sources: sources })
                }
            </TabView>
        </div>
    );
})

export default ImageDoc;
