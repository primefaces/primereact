import { Divider } from '@primereact/ui/divider';

export default function BasicDemo() {
    return (
        <div className="max-w-md mx-auto">
            <div className="flex">
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

            <Divider.Root />

            <div className="flex">
                <div className="flex-1">
                    <div className="uppercase font-mono text-xs">From</div>
                    <div className="font-semibold text-2xl ">PrimeTek</div>
                    <div className="w-full h-12 mt-4 bg-surface-100 dark:bg-surface-900 rounded-lg"></div>
                </div>
                <Divider.Root orientation="vertical" />
                <div className="flex-1">
                    <div className="uppercase font-mono text-xs">To</div>
                    <div className="h-7 mt-2 rounded-lg bg-surface-100 dark:bg-surface-900"></div>
                    <div className="w-full h-12 mt-2 bg-surface-100 dark:bg-surface-900 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}
