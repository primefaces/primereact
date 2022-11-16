import { useState } from 'react';
import { AutoComplete } from '../../lib/autocomplete/AutoComplete';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DropdownDoc(props) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    const code = {
        basic: `
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
        `,
        javascript: `
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DropdownDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    return (
        <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DropdownDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteMethodParams) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    return (
        <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e: AutoCompleteChangeParams) => setValue(e.value)} dropdown />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Enabling <i>dropdown</i> property displays a button next to the input field where click behavior of the button is defined using <i>dropdownMode</i> property that takes <strong>blank</strong> or <strong>current</strong> as possible 
                values.  <strong>blank</strong> is the default mode to send a query with an empty string whereas <strong>current</strong> setting sends a query with the current value of the input.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
