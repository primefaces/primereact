import { Divider } from '@primereact/ui/divider';

export default function TypeDemo() {
    return (
        <div className="max-w-md mx-auto">
            <p className="text-sm">Fast setup, no credit card required</p>

            <Divider.Root type="solid" />

            <p className="text-sm">Cancel anytime from your account</p>

            <Divider.Root type="dotted" />

            <p className="text-sm">24/7 support included</p>

            <Divider.Root type="dashed" />

            <p className="text-sm">No long-term commitments</p>
        </div>
    );
}
