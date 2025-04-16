import { Accordion } from 'primereact/accordion';

export default function DynamicDemo() {
    const tabs = [
        { title: 'Title 1', content: 'Content 1', value: '0' },
        { title: 'Title 2', content: 'Content 2', value: '1' },
        { title: 'Title 3', content: 'Content 3', value: '2' }
    ];

    return (
        <div className="card ">
            <Accordion value={'0'}>
                {tabs.map((tab) => (
                    <Accordion.Panel key={tab.value} value={tab.value}>
                        <Accordion.Header>
                            {tab.title}
                            <Accordion.CollapseIcon />
                            <Accordion.ExpandIcon />
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="m-0">{tab.content}</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
    );
}
