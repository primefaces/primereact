'use client';

import { Menu } from '@primereact/ui/menu';

export default function Basic() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
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
                            <Menu.Item>
                                <i className="pi pi-star" />
                                Favorites
                            </Menu.Item>
                            <Menu.Item>
                                <i className="pi pi-check-circle" />
                                Completed
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Separator />

                    <Menu.Item>
                        <i className="pi pi-question-circle" />
                        Help & Support
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
