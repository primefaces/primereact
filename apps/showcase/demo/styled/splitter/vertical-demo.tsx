import { Splitter } from '@primereact/ui/splitter';

export default function VerticalDemo() {
    return (
        <Splitter.Root orientation="vertical" className="h-60 max-w-lg mx-auto">
            <Splitter.Panel className="flex items-center justify-center"> Panel 1 </Splitter.Panel>
            <Splitter.Gutter>
                <Splitter.Thumb />
            </Splitter.Gutter>
            <Splitter.Panel className="flex items-center justify-center"> Panel 2 </Splitter.Panel>
        </Splitter.Root>
    );
}
