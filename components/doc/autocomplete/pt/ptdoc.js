import { useState } from 'react';
import { AutoComplete } from '../../../lib/autocomplete/AutoComplete';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const code = {
        basic: `
<AutoComplete
    value={value}
    suggestions={items}
    completeMethod={search}
    onChange={(e) => setValue(e.value)}
    pt={{
        input: { root: { className: 'w-16rem' } },
        item: ({ context }) => ({
            className: context.selected ? 'bg-primary-300' : undefined
        })
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function PTDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={(e) => setValue(e.value)}
                pt={{
                    input: { root: { className: 'w-16rem' } },
                    item: ({ context }) => ({
                        className: context.selected ? 'bg-primary-300' : undefined
                    })
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function PTDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={(e) => setValue(e.value)}
                pt={{
                    input: { root: { className: 'w-16rem' } },
                    item: ({ context }) => ({
                        className: context.selected ? 'bg-primary-300' : undefined
                    })
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete
                    value={value}
                    suggestions={items}
                    completeMethod={search}
                    onChange={(e) => setValue(e.value)}
                    pt={{
                        input: { root: { className: 'w-16rem' } },
                        item: ({ context }) => ({
                            className: context.selected ? 'bg-primary-300' : undefined
                        })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
