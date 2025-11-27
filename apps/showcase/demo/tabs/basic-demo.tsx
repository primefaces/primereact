'use client';

import { Tabs } from 'primereact/tabs';

export default function BasicDemo() {
    return (
        <div>
            <Tabs value="tab1">
                <Tabs.List>
                    <Tabs.Tab value="tab1">Account Info</Tabs.Tab>
                    <Tabs.Tab value="tab2">Payment</Tabs.Tab>
                    <Tabs.Tab value="tab3">Preferences</Tabs.Tab>
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel value="tab1">
                        <p>Update your personal information such as name, email address, and profile picture.</p>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab2">
                        <p>Manage your subscription plan, view invoices, and update your payment method.</p>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab3">
                        <p>Customize how the application looks and behaves to match your personal preferences.</p>
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    );
}
