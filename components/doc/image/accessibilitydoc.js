import { DocSectionText } from '@/components/doc/common/docsectiontext';

import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                The preview button is a native <i>button</i> element with an <i>aria-label</i> that refers to the <i>aria.zoomImage</i> property of the <Link href="/locale">locale</Link> API by default, with <i>previewButtonProps</i>
                you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly.
            </p>

            <p>
                When preview is active, <i>dialog</i> role with <i>aria-modal</i> is applied to the overlay image container.
            </p>

            <p>
                Button controls use <i>aria.rotateRight</i>, <i>aria.rotateLeft</i>, <i>aria.zoomIn</i>, <i>aria.zoomOut</i> and <i>aria.close</i> from the <Link href="/locale">locale</Link> API as <i>aria-label</i>.
            </p>

            <h3>ButtonBar Keyboard Support</h3>
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
                            <td>
                                <i>tab</i>
                            </td>
                            <td>Moves focus through button bar.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>enter</i>
                            </td>
                            <td>Activates the button.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Activates the button.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>esc</i>
                            </td>
                            <td>Closes the image preview.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
