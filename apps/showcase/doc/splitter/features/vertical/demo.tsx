import { Splitter } from 'primereact/splitter';

export default function VerticalDemo() {
    return (
        <div className="card">
            <Splitter style={{ height: '300px' }} layout="vertical">
                <Splitter.Panel className="flex items-center justify-center"> Panel 1 </Splitter.Panel>
                <Splitter.Gutter />
                <Splitter.Panel className="flex items-center justify-center"> Panel 2 </Splitter.Panel>
            </Splitter>
        </div>
    );
}
