import { MenuCheckboxItemCheckedChangeEvent, MenuRadioGroupValueChangeEvent } from '@primereact/types/shared/menu';
import { Menu } from 'primereact/menu';
import * as React from 'react';

export default function RadioCheckboxDemo() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [soundEnabled, setSoundEnabled] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <div className="card flex justify-center">
            <Menu className="w-64">
                <Menu.List>
                    <Menu.Item>Overview</Menu.Item>

                    <Menu.Separator />

                    <Menu.Label>Preferences</Menu.Label>

                    <Menu.CheckboxItem
                        checked={notificationsEnabled}
                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setNotificationsEnabled(e.value)}
                    >
                        <Menu.CheckboxIcon />
                        Enable Notifications
                    </Menu.CheckboxItem>

                    <Menu.CheckboxItem checked={soundEnabled} onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setSoundEnabled(e.value)}>
                        <Menu.CheckboxIcon />
                        Enable Sound
                    </Menu.CheckboxItem>

                    <Menu.Separator />

                    <Menu.Label>Appearance</Menu.Label>

                    <Menu.RadioGroup value={theme} onValueChange={(e: MenuRadioGroupValueChangeEvent) => setTheme(e.value as string)}>
                        <Menu.RadioItem value="light">
                            <Menu.RadioIcon />
                            Light Mode
                        </Menu.RadioItem>
                        <Menu.RadioItem value="dark">
                            <Menu.RadioIcon />
                            Dark Mode
                        </Menu.RadioItem>
                        <Menu.RadioItem value="system">
                            <Menu.RadioIcon />
                            System Default
                        </Menu.RadioItem>
                    </Menu.RadioGroup>

                    <Menu.Separator />

                    <Menu.Item>Settings</Menu.Item>
                </Menu.List>
            </Menu>
        </div>
    );
}
