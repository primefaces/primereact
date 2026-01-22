import { Accordion } from '@primereact/ui/accordion';

export default function DisabledDemo() {
    return (
        <div className="space-y-8">
            <Accordion.Root disabled className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        How do I reset my password?
                        <Accordion.Trigger />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            You can reset your password by clicking the “Forgot password?” link on the login page. We’ll send a password reset link to
                            your registered email address.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        Do you offer team accounts?
                        <Accordion.Trigger />
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
                        What happens if I exceed my usage limit?
                        <Accordion.Trigger />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            If you go over your plan limits (e.g., storage or API requests), you’ll receive a notification. You can either upgrade
                            your plan or wait until the next billing cycle resets.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2" disabled>
                    <Accordion.Header>
                        Is there a mobile app available?
                        <Accordion.Trigger />
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
