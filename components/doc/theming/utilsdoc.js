import { DocSectionText } from '../common/docsectiontext';

export function UtilsDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>In addition to PrimeFlex, PrimeReact has a couple of css utility classes on its own as well.</p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-component</td>
                            <td>Applies component theming such as font-family and font-size to an element.</td>
                        </tr>
                        <tr>
                            <td>p-fluid</td>
                            <td>Applies 100% width to all descendant components.</td>
                        </tr>
                        <tr>
                            <td>p-disabled</td>
                            <td>Applies an opacity to display as disabled.</td>
                        </tr>
                        <tr>
                            <td>p-sr-only</td>
                            <td>Element becomes visually hidden however accessibility is still available.</td>
                        </tr>
                        <tr>
                            <td>p-reset</td>
                            <td>Resets the browsers defaults.</td>
                        </tr>
                        <tr>
                            <td>p-link</td>
                            <td>Renders a button as a link.</td>
                        </tr>
                        <tr>
                            <td>p-error</td>
                            <td>Indicates an error text.</td>
                        </tr>
                        <tr>
                            <td>p-invalid</td>
                            <td>Applies the invalid style to a text or a form field.</td>
                        </tr>
                        <tr>
                            <td>p-text-secondary</td>
                            <td>Applies the text color of the theme with the secondary priority.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
