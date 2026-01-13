import { Divider } from '@primereact/ui/divider';

export default function ContentDemo() {
    return (
        <div className="max-w-md mx-auto">
            <p className="text-sm">Fast setup with a simple onboarding process, no credit card required to get started.</p>

            <Divider.Root align="left" type="solid">
                <Divider.Content>
                    <code className="uppercase text-xs">Getting started</code>
                </Divider.Content>
            </Divider.Root>

            <p className="text-sm">Cancel anytime directly from your account settings, with no questions asked.</p>

            <Divider.Root align="center" type="dotted">
                <Divider.Content>
                    <code className="uppercase text-xs">Flexibility</code>
                </Divider.Content>
            </Divider.Root>

            <p className="text-sm">24/7 support included to help you resolve issues quickly, whenever you need assistance.</p>

            <Divider.Root align="right" type="dashed">
                <Divider.Content>
                    <code className="uppercase text-xs">Support</code>
                </Divider.Content>
            </Divider.Root>

            <p className="text-sm">No long-term commitments or hidden contracts, just transparent and flexible pricing.</p>
        </div>
    );
}
