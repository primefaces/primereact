import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { AutoComplete } from '@/components/lib/autocomplete/AutoComplete';
import { useState } from 'react';

export function InvalidDoc(props) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const code = {
        basic: `
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} className="p-invalid" />
        `,
        javascript: `
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function InvalidDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function InvalidDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} className="p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
