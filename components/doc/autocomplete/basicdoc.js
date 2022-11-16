import { useState } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const code = {
        basic: `
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}  />
        `,
        javascript: `
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function BasicDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}  />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteMethodParams) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e: AutoCompleteChangeParams) => setValue(e.value)}  />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    AutoComplete is used as a controlled component with <i>value</i> and <i>onChange</i> properties. In addition, <i>suggestions</i> and a <i>completeMethod</i> are required to query the results.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
