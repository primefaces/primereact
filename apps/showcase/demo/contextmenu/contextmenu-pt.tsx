'use client';

'use client';

import { ContextMenuCheckboxItemCheckedChangeEvent, ContextMenuRadioGroupValueChangeEvent } from '@primereact/types/shared/contextmenu';
import { ContextMenu } from 'primereact/contextmenu';
import * as React from 'react';

export default function ContextMenuPTDemo() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [soundEnabled, setSoundEnabled] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <ContextMenu className="w-64">
            <ContextMenu.List>
                <ContextMenu.Item>Overview</ContextMenu.Item>

                <ContextMenu.Separator />

                <ContextMenu.Label>Preferences</ContextMenu.Label>

                <ContextMenu.CheckboxItem
                    checked={notificationsEnabled}
                    onCheckedChange={(e: ContextMenuCheckboxItemCheckedChangeEvent) => setNotificationsEnabled(e.value)}
                >
                    <ContextMenu.CheckboxIcon />
                    Enable Notifications
                </ContextMenu.CheckboxItem>

                <ContextMenu.CheckboxItem
                    checked={soundEnabled}
                    onCheckedChange={(e: ContextMenuCheckboxItemCheckedChangeEvent) => setSoundEnabled(e.value)}
                >
                    <ContextMenu.CheckboxIcon />
                    Enable Sound
                </ContextMenu.CheckboxItem>

                <ContextMenu.Separator />

                <ContextMenu.Label>Appearance</ContextMenu.Label>

                <ContextMenu.RadioGroup value={theme} onValueChange={(e: ContextMenuRadioGroupValueChangeEvent) => setTheme(e.value as string)}>
                    <ContextMenu.RadioItem value="light">
                        <ContextMenu.RadioIcon />
                        Light Mode
                    </ContextMenu.RadioItem>
                    <ContextMenu.RadioItem value="dark">
                        <ContextMenu.RadioIcon />
                        Dark Mode
                    </ContextMenu.RadioItem>
                    <ContextMenu.RadioItem value="system">
                        <ContextMenu.RadioIcon />
                        System Default
                    </ContextMenu.RadioItem>
                </ContextMenu.RadioGroup>

                <ContextMenu.Separator />

                <ContextMenu.Item>Settings</ContextMenu.Item>
            </ContextMenu.List>
        </ContextMenu>
    );
}
