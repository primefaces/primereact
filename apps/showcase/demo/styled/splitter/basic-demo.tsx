'use client';

import { Splitter } from '@primereact/ui/splitter';

export default function BasicDemo() {
    return (
        <div>
            <Splitter.Root style={{ height: '240px' }}>
                <Splitter.Panel className="flex items-center justify-center"> Panel 1 </Splitter.Panel>
                <Splitter.Gutter>
                    <Splitter.Thumb />
                </Splitter.Gutter>
                <Splitter.Panel className="flex items-center justify-center"> Panel 2 </Splitter.Panel>
            </Splitter.Root>
        </div>
    );
}
