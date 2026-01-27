'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

interface ShippingMethod {
    id: number;
    name: string;
    price: string;
    duration: string;
}

const shippingMethods: ShippingMethod[] = [
    { id: 1, name: 'Standard Shipping', price: '$5.99', duration: '5-7 days' },
    { id: 2, name: 'Express Shipping', price: '$12.99', duration: '2-3 days' },
    { id: 3, name: 'Next Day Delivery', price: '$24.99', duration: '1 day' },
    { id: 4, name: 'Economy Shipping', price: '$3.99', duration: '7-10 days' },
    { id: 5, name: 'Same Day Delivery', price: '$34.99', duration: 'Today' },
    { id: 6, name: 'Pickup In Store', price: 'Free', duration: 'Ready in 2 hours' }
];

export default function CheckmarkDemo() {
    const [filteredMethods, setFilteredMethods] = React.useState<ShippingMethod[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredMethods(query ? shippingMethods.filter((method) => method.name.toLowerCase().includes(query)) : [...shippingMethods]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredMethods} optionKey="id" optionLabel="name" checkmark onComplete={search} className="w-full md:w-72">
                <AutoComplete.Input placeholder="Select shipping method..." />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }}>
                            {filteredMethods.map((method, index) => (
                                <AutoComplete.Option key={method.id} index={index} uKey={String(method.id)}>
                                    <AutoComplete.Selection className="mr-4" />
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="font-medium">{method.name}</span>
                                            <span className="text-muted-color text-sm">{method.duration}</span>
                                        </div>
                                        <span className="font-semibold text-primary">{method.price}</span>
                                    </div>
                                </AutoComplete.Option>
                            ))}
                        </AutoComplete.Options>
                        <AutoComplete.Empty className="text-sm">No shipping methods found</AutoComplete.Empty>
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
