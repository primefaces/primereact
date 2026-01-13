import { Divider } from '@primereact/ui/divider';

export default function VerticalDemo() {
    return (
        <div className="flex w-fit mx-auto">
            <div>
                <div className="uppercase font-mono text-xs">Invoice No</div>
                <div className="font-light">0000123</div>
            </div>
            <Divider.Root orientation="vertical" />
            <div>
                <div className="uppercase font-mono text-xs">Issued</div>
                <div className="font-light">01/01/2026</div>
            </div>
            <Divider.Root orientation="vertical" />
            <div>
                <div className="uppercase font-mono text-xs">Due Date</div>
                <div className="font-light">02/02/2026</div>
            </div>
        </div>
    );
}
