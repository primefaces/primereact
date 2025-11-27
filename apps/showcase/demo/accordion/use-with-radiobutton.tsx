'use client';

import type { useAccordionChangeEvent } from '@primereact/types/shared/accordion';
import type { RadioButtonGroupValueChangeEvent } from '@primereact/types/shared/radiobutton';
import { Accordion } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import * as React from 'react';

const items = [
    {
        label: 'Starter Plan',
        description: 'Perfect for individuals getting started. Includes access to core components and community support.',
        value: '1',
        price: '$99'
    },
    {
        label: 'Growth Plan',
        description: 'Ideal for freelancers and small teams. Unlocks advanced UI components and priority email support.',
        value: '2',
        price: '$249'
    },
    {
        label: 'Scale Plan',
        description: 'Best for growing businesses. Includes all features, early access to new releases, and Slack support.',
        value: '3',
        price: '$499'
    }
];

export default function UseWithRadioButton() {
    const [selected, setSelected] = React.useState<string>('1');

    return (
        <div>
            <div className="max-w-md mx-auto w-full">
                <RadioButton.Group
                    className="w-full"
                    value={selected}
                    onValueChange={(e: RadioButtonGroupValueChangeEvent) => setSelected(e.value as string)}
                >
                    <Accordion
                        value={selected}
                        onChange={(e: useAccordionChangeEvent) => setSelected(e.value as string)}
                        className="w-full border border-surface-200 dark:border-surface-700 rounded-md divide-y divide-surface-200 dark:divide-surface-700"
                    >
                        {items.map((item) => (
                            <Accordion.Panel key={item.value} value={item.value} className="last:border-none transition-all ease-out">
                                <Accordion.Header
                                    onClick={() => setSelected(item.value)}
                                    className="flex items-center justify-between bg-transparent py-3.5"
                                >
                                    <span className="flex items-center gap-4">
                                        <RadioButton inputId={`radio-${item.value}`} name="price" value={item.value} />
                                        <span className="font-semibold text-xl">{item.label}</span>
                                    </span>
                                    <span className="text-xl font-semibold">{item.price}</span>
                                </Accordion.Header>
                                <Accordion.Content className="bg-transparent px-4 pb-3.5 leading-6 pl-14">
                                    <p>{item.description}</p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))}
                    </Accordion>
                </RadioButton.Group>
                <Button className="w-full mt-4" size="large">
                    Buy Now for {items.find((item) => item.value === selected)?.price}
                </Button>
            </div>
        </div>
    );
}
