import { DocSectionText } from '../../common/docsectiontext';

export function StyledDoc(props) {
    const code = {
        basic: `
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}  />
        `,
        javascript: `
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function UnstyledDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function UnstyledDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>List of class names used in the styled mode.</p>
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
                            <td>p-autocomplete</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-panel</td>
                            <td>Overlay panel of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-items</td>
                            <td>List container of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-item</td>
                            <td>List item of a suggestion.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-token</td>
                            <td>Element of a selected item in multiple mode.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-token-icon</td>
                            <td>Close icon element of a selected item in multiple mode.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-token-label</td>
                            <td>Label of a selected item in multiple mode.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
