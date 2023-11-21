import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function SurfacesDoc(props) {
    const shades = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    return (
        <>
            <DocSectionText {...props}>
                <p>Surface palette is used when designing the layers such as headers, content, footers, overlays and dividers. Surface palette varies between 0 - 900 and named surfaces are also available.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-column">
                    {shades.map((shade) => {
                        return (
                            <div key={shade} className="w-18rem flex align-items-center p-3 font-bold" style={{ backgroundColor: `var(--surface-${shade})`, color: shade < 600 ? 'var(--surface-900)' : 'var(--surface-0)' }}>
                                --surface-{shade}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>--surface-ground</td>
                            <td>Base ground color.</td>
                        </tr>
                        <tr>
                            <td>--surface-section</td>
                            <td>Background color of a section on a ground surface.</td>
                        </tr>
                        <tr>
                            <td>--surface-card</td>
                            <td>Color of a surface used as a card.</td>
                        </tr>
                        <tr>
                            <td>--surface-overlay</td>
                            <td>Color of overlay surfaces.</td>
                        </tr>
                        <tr>
                            <td>--surface-border</td>
                            <td>Color of a divider.</td>
                        </tr>
                        <tr>
                            <td>--surface-hover</td>
                            <td>Color of an element in hover state.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
