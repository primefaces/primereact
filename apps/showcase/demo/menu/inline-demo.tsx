'use client';

import { Menu } from 'primereact/menu';

export default function InlineDemo() {
    return (
        <div className="flex justify-center">
            <Menu className="w-64">
                <Menu.List>
                    <Menu.Item>
                        <i className="pi pi-home" />
                        Dashboard
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Label>Workspace</Menu.Label>

                    <Menu.Item>
                        <i className="pi pi-chart-line" />
                        Analytics
                    </Menu.Item>

                    <Menu.Sub defaultOpen={true}>
                        <Menu.Trigger>
                            <i className="pi pi-folder" />
                            Projects
                            <Menu.Icon />
                        </Menu.Trigger>
                        <Menu.List>
                            <Menu.Item>
                                <i className="pi pi-briefcase" />
                                Active Projects
                            </Menu.Item>
                            <Menu.Item>
                                <i className="pi pi-clock" />
                                Recent
                            </Menu.Item>

                            <Menu.Sub>
                                <Menu.Trigger>
                                    <i className="pi pi-star" />
                                    Favorites
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <i className="pi pi-code" />
                                        Website Redesign
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-mobile" />
                                        Mobile App
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-database" />
                                        API Development
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Item>
                                <i className="pi pi-check-circle" />
                                Completed
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
                                <i className="pi pi-user-plus" />
                                Add Member
                            </Menu.Item>
                            <Menu.Item>
                                <i className="pi pi-sitemap" />
                                Organization
                            </Menu.Item>

                            <Menu.Sub>
                                <Menu.Trigger>
                                    <i className="pi pi-cog" />
                                    Settings
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <i className="pi pi-shield" />
                                        Permissions
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-bell" />
                                        Notifications
                                    </Menu.Item>
                                    <Menu.Item>
                                        <i className="pi pi-lock" />
                                        Privacy
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Separator />

                    <Menu.Item>
                        <i className="pi pi-question-circle" />
                        Help & Support
                    </Menu.Item>
                </Menu.List>
            </Menu>
        </div>
    );
}
