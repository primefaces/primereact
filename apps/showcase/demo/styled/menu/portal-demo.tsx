import { Avatar } from '@primereact/ui/avatar';
import { Menu } from '@primereact/ui/menu';
import { Bell } from '@primeicons/react/bell';
import { Bookmark } from '@primeicons/react/bookmark';
import { User } from '@primeicons/react/user';
import { Shield } from '@primeicons/react/shield';

export default function PortalDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
                <Menu.Trigger className="flex items-center gap-3">
                    <Avatar.Root shape="circle">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        <Avatar.Fallback>A</Avatar.Fallback>
                    </Avatar.Root>
                    <div className="flex flex-col items-start">
                        <span className="font-semibold text-sm">Sarah Anderson</span>
                        <span className="text-xs">Product Manager</span>
                    </div>
                </Menu.Trigger>

                <Menu.Portal>
                    <Menu.List>
                        <Menu.Label className="flex-col items-start gap-2">
                            <p className="font-bold text-sm">Active Account</p>
                            <p className="font-bold text-sm">sarah.anderson@company.com</p>
                        </Menu.Label>

                        <Menu.Separator />

                        <Menu.Item>
                            <User />
                            Profile Settings
                        </Menu.Item>
                        <Menu.Item>
                            <Bell />
                            Notifications
                        </Menu.Item>
                        <Menu.Item>
                            <Bookmark />
                            Saved Items
                        </Menu.Item>
                        <Menu.Item>
                            <Shield />
                            Privacy & Security
                        </Menu.Item>
                        <Menu.Item>
                            <i className="pi pi-palette" />
                            Appearance
                        </Menu.Item>
                        <Menu.Item disabled>
                            <i className="pi pi-history" />
                            Activity Log
                            <span className="ml-auto text-xs">Premium</span>
                        </Menu.Item>

                        <Menu.Separator />

                        <Menu.Item className="text-red-600">
                            <i className="pi pi-power-off" />
                            Sign Out
                        </Menu.Item>
                    </Menu.List>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}
