import { Splitter } from 'primereact/splitter';

export default function SplitterPT() {
    return (
        <Splitter className="w-full" style={{ height: '300px' }}>
            <Splitter.Panel className="flex items-center justify-center"> Panel 1 </Splitter.Panel>
            <Splitter.Gutter>
                <Splitter.Thumb />
            </Splitter.Gutter>
            <Splitter.Panel className="flex items-center justify-center"> Panel 2 </Splitter.Panel>
        </Splitter>
    );
}
