'use client';
import { ChevronDownIcon } from '@primereact/icons/chevrondown';
import { Accordion } from '@primereact/ui/accordion';

export default function DisabledDemo() {
    return (
        <div className="space-y-8">
            <Accordion.Root disabled className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            How do I reset my password?
                            <ChevronDownIcon className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            You can reset your password by clicking the "Forgot password?" link on the login page. We'll send a password reset link to
                            your registered email address.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Do you offer team accounts?
                            <ChevronDownIcon className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Yes. Our Team and Business plans are designed for collaboration. You can invite team members, assign roles, and manage
                            permissions easily from your dashboard.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion.Root>
            <Accordion.Root className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            What happens if I exceed my usage limit?
                            <ChevronDownIcon className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            If you go over your plan limits (e.g., storage or API requests), you'll receive a notification. You can either upgrade
                            your plan or wait until the next billing cycle resets.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2" disabled>
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Is there a mobile app available?
                            <ChevronDownIcon className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Yes, we offer both iOS and Android apps so you can manage your account and stay connected on the go.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion.Root>
        </div>
    );
}
