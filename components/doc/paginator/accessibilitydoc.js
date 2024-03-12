import { DocSectionText } from '@/components/doc/common/docsectiontext';

import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Paginator is placed inside a <i>nav</i> element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below.
            </p>

            <p>
                First, previous, next and last page navigators elements with <i>aria-label</i> attributes referring to the <i>aria.firstPageLabel</i>, <i>aria.prevPageLabel</i>, <i>aria.nextPageLabel</i> and <i>aria.lastPageLabel</i>
                properties of the <Link href="/locale">locale</Link> API respectively.
            </p>

            <p>
                Page links are also button elements with an <i>aria-label</i> attribute derived from the <i>aria.pageLabel</i> of the <Link href="/locale">locale</Link> API. Current page is marked with <i>aria-current</i> set to "page" as well.
            </p>

            <p>
                Current page report uses <i>aria-live="polite"</i> to instruct screen reader about the changes to the pagination state.
            </p>

            <p>
                Rows per page dropdown internally uses a dropdown component, refer to the <Link href="/dropdown">dropdown</Link> documentation for accessibility details. Additionally, the dropdown uses an <i>aria-label</i>
                from the <i>aria.rowsPerPage</i> property of the <Link href="/locale">locale</Link> API.
            </p>

            <p>
                Jump to page input is an <i>input</i> element with an <i>aria-label</i> that refers to the <i>aria.jumpToPage</i> property of the <Link href="/locale">locale</Link> API.
            </p>

            <h3>Keyboard Support</h3>
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
                            <td>Moves focus through the paginator elements.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>enter</i>
                            </td>
                            <td>Executes the paginator element action.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Executes the paginator element action.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Rows Per Page Dropdown Keyboard Support</h3>
            <p>
                Refer to the <Link href="/dropdown">dropdown</Link> documentation for more details about keyboard support.
            </p>
        </DocSectionText>
    );
}
