import { Listbox } from 'primereact/listbox';
import * as React from 'react';

const options = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function Demos() {
    const [selectedCity, setSelectedCity] = React.useState('RM');

    return (
        <div className="card flex items-center flex-col gap-3">
            Selected City(code): <b className="contents">{[selectedCity].flat().join(', ')}</b>
            {/*<Listbox className="w-full md:w-56" value={selectedCity} onValueChange={(e) => setSelectedCity(e.value)} options={options} optionLabel="name" optionValue="code">
                <Listbox.Header>Header</Listbox.Header>
                <Listbox.Options />
                <Listbox.Footer>Footer</Listbox.Footer>
            </Listbox>
            <Listbox className="w-full md:w-14rem" defaultValue={selectedCity} options={options} optionKey="code" selectionMode="single" optionValue="code">
                <Listbox.Header>Header</Listbox.Header>
                <Listbox.Options>
                    {(instance) => {
                        return instance.options?.map((city) => (
                            <Listbox.Option key={city.code} uKey={city.code}>
                                {city.name}
                            </Listbox.Option>
                        ));
                    }}
                </Listbox.Options>
                <Listbox.Footer>Footer</Listbox.Footer>
            </Listbox>*/}
            <Listbox className="w-full md:w-14rem" defaultValue={selectedCity} options={options} optionKey="code" optionValue="code">
                <Listbox.Header>
                    Header
                    <Listbox.Filter placeholder="Search" />
                </Listbox.Header>
                <Listbox.Options>
                    <Listbox.Option uKey="NY">New York</Listbox.Option>
                    <Listbox.Option uKey="RM">Rome</Listbox.Option>
                    <Listbox.Option uKey="LDN">London</Listbox.Option>
                    <Listbox.Option uKey="IST">Istanbul</Listbox.Option>
                    <Listbox.Option uKey="PRS">Paris</Listbox.Option>
                </Listbox.Options>
                <Listbox.Footer>Footer</Listbox.Footer>
            </Listbox>
            <Listbox className="w-full md:w-14rem" defaultValue={selectedCity} options={options} optionValue="code">
                <Listbox.Header>
                    Header2
                    <Listbox.Filter placeholder="Search" />
                </Listbox.Header>
                <Listbox.Options>
                    <Listbox.Option index={0}>New York</Listbox.Option>
                    <Listbox.Option index={1}>Rome</Listbox.Option>
                    <Listbox.Option index={2}>London</Listbox.Option>
                    <Listbox.Option index={3}>Istanbul</Listbox.Option>
                    <Listbox.Option index={4}>Paris</Listbox.Option>
                </Listbox.Options>
                <Listbox.Footer>Footer</Listbox.Footer>
            </Listbox>
        </div>
    );
}

// <Listbox.Empty>No options found</Listbox.Empty>
/*
{(instance, { option }) => (
                       <Listbox.Option>
                            <Listbox.Selection></Listbox.Selection><span>{option.name}</span>
                        </Listbox.Option>
                    )}

<Listbox.Option group>
    Grouped Option
</Listbox.Option>
*/
