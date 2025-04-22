import { Splitter } from 'primereact/splitter';

export default function HorizontalDemo() {
    return (
        <div className="card">
            <Splitter style={{ height: '300px' }} className="mb-8">
                <Splitter.Panel className="flex items-center justify-center"> Panel 1 </Splitter.Panel>
                <Splitter.Gutter />
                <Splitter.Panel className="flex items-center justify-center"> Panel 2 </Splitter.Panel>
                <Splitter.Gutter />
                <Splitter.Panel className="flex items-center justify-center"> Panel 3 </Splitter.Panel>
            </Splitter>
        </div>
    );
}
