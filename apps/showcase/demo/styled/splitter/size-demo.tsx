import { Splitter } from '@primereact/ui/splitter';

export default function SizeDemo() {
    return (
        <div>
            <Splitter.Root className="h-60 max-w-lg mx-auto">
                <Splitter.Panel className="flex items-center justify-center" size={25} minSize={10}>
                    Panel 1
                </Splitter.Panel>
                <Splitter.Gutter>
                    <Splitter.Thumb />
                </Splitter.Gutter>
                <Splitter.Panel className="flex items-center justify-center" size={75}>
                    Panel 2
                </Splitter.Panel>
            </Splitter.Root>
        </div>
    );
}
