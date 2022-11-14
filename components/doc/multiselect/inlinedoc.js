import { useState } from 'react';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineDoc(props) {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];

    const code = {
        basic: `
<MultiSelect inline value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
<MultiSelect flex value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
<MultiSelect inline flex value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
<MultiSelect flex itemClassName="col-4" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
<MultiSelect inline flex itemClassName="col-4" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
        `,
        javascript: `
import { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function InlineDoc() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];

    return (
        <MultiSelect inline value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
        <MultiSelect flex value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
        <MultiSelect inline flex value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
        <MultiSelect flex itemClassName="col-4" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
        <MultiSelect inline flex itemClassName="col-4" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';

export default function InlineDoc() {
    const [selectedCities, setSelectedCities] = useState<any>(null);
    const cities = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];

    return (
        <MultiSelect inline value={selectedCities} options={cities} onChange={(e : MultiSelectChangeParams) => setSelectedCities(e.value)} />
        <MultiSelect flex value={selectedCities} options={cities} onChange={(e : MultiSelectChangeParams) => setSelectedCities(e.value)} />
        <MultiSelect inline flex value={selectedCities} options={cities} onChange={(e : MultiSelectChangeParams) => setSelectedCities(e.value)} />
        <MultiSelect flex itemClassName="col-4" value={selectedCities} options={cities} onChange={(e : MultiSelectChangeParams) => setSelectedCities(e.value)} />
        <MultiSelect inline flex itemClassName="col-4" value={selectedCities} options={cities} onChange={(e : MultiSelectChangeParams) => setSelectedCities(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Set the property <i>inline</i> to true to display the items as inline panel. Set the property <i>flex</i> to true to use flex layout for the items panel. Use the property <i>itemClassName</i> to control the class of the items, for
                example to display them with a fixed width.
            </DocSectionText>
            <div className="card flex justify-content-center gap-3">
                <div>
                    inline
                    <MultiSelect inline value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
                </div>
                <div>
                    flex
                    <br />
                    <MultiSelect flex value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
                    <br />
                    <br />
                    inline + flex
                    <MultiSelect inline flex value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
                </div>
                <div>
                    flex + itemClassName
                    <br />
                    <MultiSelect flex itemClassName="col-3" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
                    <br />
                    <br />
                    inline + flex + itemClassName
                    <MultiSelect inline flex itemClassName="col-3" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
