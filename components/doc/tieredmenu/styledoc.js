import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
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
                                <td>p-tieredmenu</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-menu-list</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem</td>
                                <td>Menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-text</td>
                                <td>Label of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-icon</td>
                                <td>Icon of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-submenu-icon</td>
                                <td>Arrow icon of a submenu.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
