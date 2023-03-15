import { DocSectionText } from '../common/docsectiontext';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>Following is the list of structural style classes</p>
            </DocSectionText>
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
                            <td>p-colorpicker</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-overlay</td>
                            <td>Container element in overlay mode.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-preview </td>
                            <td>Preview input in overlay mode.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-panel</td>
                            <td>Panel element of the colorpicker.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-content</td>
                            <td>Wrapper that contains color and hue sections.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-color-selector</td>
                            <td>Color selector container.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-color</td>
                            <td>Color element.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-color-handle</td>
                            <td>Handle of the color element.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-hue</td>
                            <td>Hue slider.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-hue-handle</td>
                            <td>Handle of the hue slider.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
