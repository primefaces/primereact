import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from '@primereact/ui/accordion';

export default function BasicDemo() {
    return (
        <div>
            <Accordion.Root className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            What is this service about?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and
                            powerful analytics. Whether you’re working solo or in a team, it’s built to scale with your needs.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Is my data secure?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
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
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
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
