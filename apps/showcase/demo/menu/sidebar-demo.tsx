import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Menu } from 'primereact/menu';
import { StyleClass } from 'primereact/styleclass';
import * as React from 'react';

export default function SidebarDemo() {
    const menuRef = React.useRef(null);

    return (
        <div className="card flex gap-6">
            <div className="w-64 h-240 bg-surface-0 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 flex flex-col">
                <div className="p-4 border-b border-surface-200 dark:border-surface-700">
                    <div className="text-xl font-bold text-primary">Prime App</div>
                </div>

                {/* Top Navigation Menu */}
                <div className="flex-1 overflow-y-auto">
                    <Menu className="border-none">
                        <Menu.List>
                            <Menu.Item>
                                <i className="pi pi-home" />
                                Dashboard
                                <Badge shape="circle" className="ml-auto">
                                    8
                                </Badge>
                            </Menu.Item>

                            <Menu.Sub defaultOpen={true}>
                                <Menu.Trigger>
                                    <i className="pi pi-inbox" />
                                    Inbox
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <i className="pi pi-envelope" />
                                        All Messages
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-star" />
                                        Starred
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-send" />
                                        Sent
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-trash" />
                                        Trash
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Sub>
                                <Menu.Trigger>
                                    <i className="pi pi-folder" />
                                    Projects
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <i className="pi pi-circle-fill text-xs text-blue-500" />
                                        Website Redesign
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-circle-fill text-xs text-green-500" />
                                        Mobile App
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-circle-fill text-xs text-orange-500" />
                                        API Integration
                                    </Menu.Item>
                                    <Menu.Separator />
                                    <Menu.Item>
                                        <i className="pi pi-plus" />
                                        New Project
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Sub>
                                <Menu.Trigger>
                                    <i className="pi pi-users" />
                                    Team
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <i className="pi pi-users" />
                                        All Members
                                    </Menu.Item>
                                    <Menu.Sub>
                                        <Menu.Trigger>
                                            <i className="pi pi-sitemap" />
                                            Departments
                                            <Menu.Icon />
                                        </Menu.Trigger>
                                        <Menu.List>
                                            <Menu.Item>
                                                <i className="pi pi-code" />
                                                Engineering
                                            </Menu.Item>
                                            <Menu.Item>
                                                <i className="pi pi-palette" />
                                                Design
                                            </Menu.Item>
                                            <Menu.Item>
                                                <i className="pi pi-chart-line" />
                                                Marketing
                                            </Menu.Item>
                                            <Menu.Item>
                                                <i className="pi pi-dollar" />
                                                Sales
                                            </Menu.Item>
                                        </Menu.List>
                                    </Menu.Sub>
                                    <Menu.Item>
                                        <i className="pi pi-user-plus" />
                                        Invite Member
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Separator />

                            <Menu.Item>
                                <i className="pi pi-calendar" />
                                Calendar
                            </Menu.Item>

                            <Menu.Sub>
                                <Menu.Trigger>
                                    <i className="pi pi-chart-bar" />
                                    Analytics
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <i className="pi pi-eye" />
                                        Overview
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-chart-line" />
                                        Traffic
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-users" />
                                        Users
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-money-bill" />
                                        Revenue
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Item>
                                <i className="pi pi-file" />
                                Documents
                            </Menu.Item>

                            <Menu.Separator />

                            <Menu.Label>
                                <span className="text-xs font-bold text-surface-500">FAVORITES</span>
                            </Menu.Label>

                            <Menu.Item>
                                <i className="pi pi-star-fill text-yellow-500" />
                                Important
                            </Menu.Item>
                            <Menu.Item>
                                <i className="pi pi-bookmark-fill text-blue-500" />
                                Bookmarks
                                <Badge shape="circle" severity="secondary" className="ml-auto">
                                    5
                                </Badge>
                            </Menu.Item>
                        </Menu.List>
                    </Menu>
                </div>

                {/* Bottom User Menu */}
                <div className="p-4 border-t border-surface-200 dark:border-surface-700">
                    <div ref={menuRef} className="hidden overflow-hidden mb-2">
                        <Menu className="border-none">
                            <Menu.List className="w-56">
                                <Menu.Item>
                                    <i className="pi pi-user" />
                                    View Profile
                                </Menu.Item>
                                <Menu.Item>
                                    <i className="pi pi-cog" />
                                    Settings
                                </Menu.Item>

                                <Menu.Separator />

                                <Menu.Item>
                                    <i className="pi pi-question-circle" />
                                    Help & Support
                                </Menu.Item>

                                <Menu.Separator />

                                <Menu.Item className="text-red-600 dark:text-red-400">
                                    <i className="pi pi-power-off" />
                                    Sign Out
                                </Menu.Item>
                            </Menu.List>
                        </Menu>
                    </div>

                    <StyleClass
                        as="button"
                        type="button"
                        selector="@prev"
                        enterFromClassName="hidden"
                        enterActiveClassName="animate-slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="animate-fadeout"
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer"
                    >
                        <Avatar shape="circle" size="normal">
                            <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            <Avatar.Fallback>SA</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col items-start flex-1">
                            <span className="font-semibold text-sm">Sarah Anderson</span>
                            <span className="text-xs text-surface-500">Online</span>
                        </div>
                        <i className="pi pi-ellipsis-v text-sm" />
                    </StyleClass>
                </div>
            </div>

            <div className="flex-1">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Sidebar Menu Demo</h2>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
                        <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Sidebar Layout</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                            This demo showcases a typical sidebar layout with two distinct menu sections:
                        </p>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
                            <li>
                                <strong>Top Navigation Menu:</strong> Contains main navigation items, organized by category with separators. Features
                                badge notifications and icon-based navigation.
                            </li>
                            <li>
                                <strong>Bottom User Menu:</strong> A dropdown menu triggered by clicking the user profile area. Provides quick access
                                to user-related actions and settings.
                            </li>
                        </ul>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-3">
                            The sidebar uses the Menu component in inline mode (no Portal) for the main navigation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
