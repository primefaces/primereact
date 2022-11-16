import { useState } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ForceSelectionDoc(props) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const code = {
        basic: `
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} forceSelection />
        `,
        javascript: `
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function ForceSelectionDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} forceSelection />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function ForceSelectionDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteMethodParams) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e: AutoCompleteChangeParams) => setValue(e.value)} forceSelection />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions. Simply enable{' '}
                    <i>forceSelection</i> to enforce that input is always from the suggestion list.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} forceSelection />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
