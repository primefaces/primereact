import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import { Switch } from 'primereact/switch';
import { Tabs } from 'primereact/tabs';
import { useState } from 'react';

const tabs = [
    { id: 'tab1', title: 'Account Info', icon: 'pi pi-user', content: 'Update your personal information such as name, email address, and profile picture.' },
    { id: 'tab2', title: 'Payment', icon: 'pi pi-credit-card', badge: 'New', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { id: 'tab3', title: 'Preferences', icon: 'pi pi-cog', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function TemplateDemo() {
    const [preferences, setPreferences] = useState({
        darkMode: false,
        emailNotifications: false,
        desktopNotifications: false
    });

    return (
        <div className="card">
            <Tabs value="tab1" className="max-w-md mx-auto">
                <Tabs.List>
                    {tabs.map((tab) => (
                        <Tabs.Tab key={tab.id} value={tab.id} className="flex items-center gap-2">
                            <i className={tab.icon}></i>
                            {tab.title}
                            {tab.badge && <Badge size="small">{tab.badge}</Badge>}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel value="tab1">
                        <div>
                            <p className="mt-2 mb-8 text-surface-500">Update your personal information such as name, email address, and profile picture.</p>
                            <form>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="username">Username</Label>
                                        <InputText id="username" placeholder="john.doe" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="email">Email</Label>
                                        <InputText id="email" placeholder="john.doe@example.com" />
                                    </div>
                                </div>
                                <Button className="mt-8 w-fit">Save Changes</Button>
                            </form>
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab2">
                        <div>
                            <p className="mt-2 mb-8 text-surface-500">Manage your subscription plan, view invoices, and update your payment method.</p>
                            <form>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="cardName">Cardholder Name</Label>
                                        <InputText id="cardName" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="cardNumber">Card Number</Label>
                                        <InputText id="cardNumber" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="expiryDate">Expiry Date</Label>
                                        <InputText id="expiryDate" placeholder="MM/YY" />
                                    </div>
                                </div>
                                <Button className="mt-8 w-fit">Update Payment</Button>
                            </form>
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab3">
                        <div>
                            <p className="mt-2 mb-8 text-surface-500">Customize how the application looks and behaves to match your personal preferences.</p>
                            <form>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="darkMode">Dark Mode</Label>
                                        <Switch inputId="darkMode">
                                            <Switch.Control>
                                                <Switch.Thumb />
                                            </Switch.Control>
                                        </Switch>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                                        <Switch inputId="emailNotifications" defaultChecked>
                                            <Switch.Control>
                                                <Switch.Thumb />
                                            </Switch.Control>
                                        </Switch>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="desktopNotifications">Desktop Notifications</Label>
                                        <Switch inputId="desktopNotifications">
                                            <Switch.Control>
                                                <Switch.Thumb />
                                            </Switch.Control>
                                        </Switch>
                                    </div>
                                </div>
                                <Button className="w-fit mt-8 ml-auto mr-0">Save Preferences</Button>
                            </form>
                        </div>
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    );
}
