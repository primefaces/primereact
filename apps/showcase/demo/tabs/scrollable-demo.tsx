'use client';

import { Tabs } from 'primereact/tabs';

const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content`, value: `${i}` }));

export default function ScrollableDemo() {
    return (
        <div>
            <Tabs.Root value="0" scrollable>
                <Tabs.List>
                    {scrollableTabs.map((tab) => (
                        <Tabs.Tab key={tab.value} value={tab.value}>
                            {tab.title}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    {scrollableTabs.map((tab) => (
                        <Tabs.Panel key={tab.value} value={tab.value}>
                            {tab.content}
                        </Tabs.Panel>
                    ))}
                </Tabs.Panels>
            </Tabs.Root>
        </div>
    );
}
