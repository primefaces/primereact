import { Splitter } from 'primereact/splitter';

export default function NestedDemo() {
    return (
        <div className="card">
            <Splitter style={{ height: '300px' }}>
                <Splitter.Panel className="flex items-center justify-center" size={20} minSize={10}>
                    Panel 1
                </Splitter.Panel>
                <Splitter.Gutter />
                <Splitter.Panel size={80}>
                    <Splitter layout="vertical">
                        <Splitter.Panel className="flex items-center justify-center" size={15}>
                            Panel 2
                        </Splitter.Panel>
                        <Splitter.Gutter />
                        <Splitter.Panel size={85}>
                            <Splitter>
                                <Splitter.Panel className="flex items-center justify-center" size={20}>
                                    Panel 3
                                </Splitter.Panel>
                                <Splitter.Gutter />
                                <Splitter.Panel className="flex items-center justify-center" size={80}>
                                    Panel 4
                                </Splitter.Panel>
                            </Splitter>
                        </Splitter.Panel>
                    </Splitter>
                </Splitter.Panel>
            </Splitter>
        </div>
    );
}
