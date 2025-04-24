import { Splitter } from 'primereact/splitter';

export default function SizeDemo() {
    return (
        <div className="card">
            <Splitter style={{ height: '300px' }}>
                <Splitter.Panel className="flex items-center justify-center" size={25} minSize={10}>
                    Panel 1
                </Splitter.Panel>
                <Splitter.Gutter />
                <Splitter.Panel className="flex items-center justify-center" size={75}>
                    Panel 2
                </Splitter.Panel>
            </Splitter>
        </div>
    );
}
