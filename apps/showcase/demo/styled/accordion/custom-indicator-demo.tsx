'use client';
import { PlusIcon } from '@primereact/icons';
import type { AccordionTriggerInstance } from '@primereact/types/shared/accordion';
import { Accordion } from '@primereact/ui/accordion';

export default function CustomIndicatorDemo() {
    const test = (instance: AccordionTriggerInstance) => {
        //console.log(instance);

        return instance.accordionpanel?.active ? 'True' : 'False';
    };

    return (
        <div>
            <Accordion.Root className="max-w-md mx-auto" multiple>
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full group">
                            What is this service about?
                            <PlusIcon className="group-[[data-content-open]>&]:rotate-45 transition-transform ease-out" />
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
                        Is my data secure?
                        <Accordion.Trigger className="flex justify-between items-center">{test}</Accordion.Trigger>
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
                        <Accordion.Trigger className="flex justify-start items-center w-full gap-2">
                            <PlusIcon className="[[data-content-open]>&]:rotate-45 transition-transform ease-out" />
                            Can I upgrade or downgrade my plan later?
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
