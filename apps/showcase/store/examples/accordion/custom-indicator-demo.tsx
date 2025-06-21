import { MinusIcon, PlusIcon } from '@primereact/icons';
import type { AccordionHeaderIndicatorInstance } from '@primereact/types/shared/accordion';
import { Accordion } from 'primereact/accordion';

export default function CustomIndicatorDemo() {
    return (
        <div className="card">
            <Accordion className="max-w-md mx-auto" multiple>
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        What is this service about?
                        <Accordion.HeaderIndicator className="group">
                            <PlusIcon className="group-data-[p-active=true]:rotate-45 transition-transform ease-out" />
                        </Accordion.HeaderIndicator>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>
                            This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics. Whether you&apos;re working solo or in a team, it&apos;s built to scale with your
                            needs.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        Is my data secure?
                        <Accordion.HeaderIndicator>{({ accordionpanel }: AccordionHeaderIndicatorInstance) => (accordionpanel?.active ? <MinusIcon /> : <PlusIcon />)}</Accordion.HeaderIndicator>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="3">
                    <Accordion.Header className="justify-start gap-2">
                        <Accordion.HeaderIndicator />
                        Can I upgrade or downgrade my plan later?
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}
