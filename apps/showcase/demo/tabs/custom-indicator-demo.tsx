'use client';

import { Tabs } from 'primereact/tabs';

const tabs = [
    { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function CustomIndicatorDemo() {
    return (
        <div>
            <Tabs value="tab1">
                <Tabs.List>
                    {tabs.map((tab) => (
                        <Tabs.Tab key={tab.id} value={tab.id} className="border-none z-10">
                            {tab.title}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator className="w-[var(--width)] h-[calc(var(--height)-12px)] bottom-none top-1/2 -translate-y-1/2 bg-surface-100 dark:bg-surface-800 rounded-md" />
                </Tabs.List>
                <Tabs.Panels>
                    {tabs.map((tab) => (
                        <Tabs.Panel key={tab.id} value={tab.id}>
                            <p>{tab.content}</p>
                        </Tabs.Panel>
                    ))}
                </Tabs.Panels>
            </Tabs>
        </div>
    );
}
