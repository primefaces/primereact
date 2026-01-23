'use client';
import { ChevronDownIcon } from '@primereact/icons/chevrondown';
import type { AccordionRootValueChangeEvent } from '@primereact/types/shared/accordion';
import { Accordion } from '@primereact/ui/accordion';
import { Button } from '@primereact/ui/button';
import { useState } from 'react';

export default function ControlledDemo() {
    const [activePanel, setActivePanel] = useState<string | null>('1');

    return (
        <div className="space-y-4">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setActivePanel('1')} severity={activePanel === '1' ? 'primary' : 'secondary'}>
                    Panel 1
                </Button>
                <Button onClick={() => setActivePanel('2')} severity={activePanel === '2' ? 'primary' : 'secondary'}>
                    Panel 2
                </Button>
                <Button onClick={() => setActivePanel('3')} severity={activePanel === '3' ? 'primary' : 'secondary'}>
                    Panel 3
                </Button>
                <Button onClick={() => setActivePanel(null)} severity="danger">
                    Close All
                </Button>
            </div>
            <Accordion.Root
                className="max-w-md mx-auto"
                value={activePanel}
                onValueChange={(e: AccordionRootValueChangeEvent) => setActivePanel(e.value as string | null)}
            >
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            What is this service about?
                            <ChevronDownIcon className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and
                            powerful analytics. Whether you&apos;re working solo or in a team, it&apos;s built to scale with your needs.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Is my data secure?
                            <ChevronDownIcon className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                            stored on secure servers and regularly backed up.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="3">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Can I upgrade or downgrade my plan later?
                            <ChevronDownIcon className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately,
                            and any billing adjustments are handled automatically.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion.Root>
        </div>
    );
}
