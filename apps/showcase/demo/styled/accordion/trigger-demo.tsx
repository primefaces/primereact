'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import type { AccordionTriggerInstance } from '@primereact/types/shared/accordion';
import { Accordion } from '@primereact/ui/accordion';

export default function TriggerDemo() {
    return (
        <div>
            <Accordion.Root className="max-w-md mx-auto" multiple>
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full group">
                            What is this service about?
                            <Plus className="group-[[data-content-open]>&]:rotate-45 transition-transform ease-out" />
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
                        <p className="pl-4">Is my data secure?</p>
                        <Accordion.Trigger className="flex justify-between items-center">
                            {({ accordionpanel }: AccordionTriggerInstance) => (accordionpanel?.active ? <Minus /> : <Plus />)}
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
                        <Accordion.Trigger className="flex justify-start items-center w-full gap-2">
                            <Plus className="[[data-content-open]>&]:rotate-45 transition-transform ease-out" />
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
