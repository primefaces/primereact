'use client';

import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import { Switch } from 'primereact/switch';
import { Tabs } from 'primereact/tabs';

const tabs = [
    {
        id: 'tab1',
        title: 'Account Info',
        icon: 'pi pi-user',
        content: 'Update your personal information such as name, email address, and profile picture.'
    },
    {
        id: 'tab2',
        title: 'Payment',
        icon: 'pi pi-credit-card',
        badge: 'New',
        content: 'Manage your subscription plan, view invoices, and update your payment method.'
    },
    {
        id: 'tab3',
        title: 'Preferences',
        icon: 'pi pi-cog',
        content: 'Customize how the application looks and behaves to match your personal preferences.'
    }
];

export default function TemplateDemo() {
    return (
        <div>
            <Tabs.Root value="tab1" className="max-w-md mx-auto">
                <Tabs.List>
                    {tabs.map((tab) => (
                        <Tabs.Tab key={tab.id} value={tab.id} className="flex items-center gap-2">
                            <i className={tab.icon}></i>
                            {tab.title}
                            {tab.badge && <Badge.Root size="small">{tab.badge}</Badge.Root>}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel value="tab1">
                        <div>
                            <p className="mt-2 mb-8 text-surface-500">
                                Update your personal information such as name, email address, and profile picture.
                            </p>
                            <form>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <Label.Root htmlFor="username">Username</Label.Root>
                                        <InputText id="username" placeholder="john.doe" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label.Root htmlFor="email">Email</Label.Root>
                                        <InputText id="email" placeholder="john.doe@example.com" />
                                    </div>
                                </div>
                                <Button.Root className="mt-8 w-fit">Save Changes</Button.Root>
                            </form>
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab2">
                        <div>
                            <p className="mt-2 mb-8 text-surface-500">
                                Manage your subscription plan, view invoices, and update your payment method.
                            </p>
                            <form>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <Label.Root htmlFor="cardName">Cardholder Name</Label.Root>
                                        <InputText id="cardName" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label.Root htmlFor="cardNumber">Card Number</Label.Root>
                                        <InputText id="cardNumber" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label.Root htmlFor="expiryDate">Expiry Date</Label.Root>
                                        <InputText id="expiryDate" placeholder="MM/YY" />
                                    </div>
                                </div>
                                <Button.Root className="mt-8 w-fit">Update Payment</Button.Root>
                            </form>
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab3">
                        <div>
                            <p className="mt-2 mb-8 text-surface-500">
                                Customize how the application looks and behaves to match your personal preferences.
                            </p>
                            <form>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label.Root htmlFor="darkMode">Dark Mode</Label.Root>
                                        <Switch.Root inputId="darkMode">
                                            <Switch.Control>
                                                <Switch.Thumb />
                                            </Switch.Control>
                                        </Switch.Root>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label.Root htmlFor="emailNotifications">Email Notifications</Label.Root>
                                        <Switch.Root inputId="emailNotifications" defaultChecked>
                                            <Switch.Control>
                                                <Switch.Thumb />
                                            </Switch.Control>
                                        </Switch.Root>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label.Root htmlFor="desktopNotifications">Desktop Notifications</Label.Root>
                                        <Switch.Root inputId="desktopNotifications">
                                            <Switch.Control>
                                                <Switch.Thumb />
                                            </Switch.Control>
                                        </Switch.Root>
                                    </div>
                                </div>
                                <Button.Root className="w-fit mt-8 ml-auto mr-0">Save Preferences</Button.Root>
                            </form>
                        </div>
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs.Root>
        </div>
    );
}
