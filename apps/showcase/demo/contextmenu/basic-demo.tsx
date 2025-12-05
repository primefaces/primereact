import { ContextMenu } from 'primereact/contextmenu';

export default function BasicDemo() {
    return (
        <div className="card flex justify-center">
            <ContextMenu className="w-64">
                <ContextMenu.Trigger className="flex justify-center items-center border-2 border-dashed border-surface-200 dark:border-surface-700 w-120 h-64">
                    Right Click Here
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                    <ContextMenu.List>
                        <ContextMenu.Item>
                            <i className="pi pi-home" />
                            Dashboard
                        </ContextMenu.Item>

                        <ContextMenu.Separator />

                        <ContextMenu.Label>Workspace</ContextMenu.Label>

                        <ContextMenu.Item>
                            <i className="pi pi-chart-line" />
                            Analytics
                        </ContextMenu.Item>

                        <ContextMenu.Sub>
                            <ContextMenu.Trigger>
                                <i className="pi pi-folder" />
                                Projects
                                <ContextMenu.Icon />
                            </ContextMenu.Trigger>
                            <ContextMenu.List>
                                <ContextMenu.Item>
                                    <i className="pi pi-briefcase" />
                                    Active Projects
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <i className="pi pi-clock" />
                                    Recent
                                </ContextMenu.Item>

                                <ContextMenu.Sub>
                                    <ContextMenu.Trigger>
                                        <i className="pi pi-star" />
                                        Favorites
                                        <ContextMenu.Icon />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.List>
                                        <ContextMenu.Item>
                                            <i className="pi pi-code" />
                                            Website Redesign
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <i className="pi pi-mobile" />
                                            Mobile App
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <i className="pi pi-database" />
                                            API Development
                                        </ContextMenu.Item>
                                    </ContextMenu.List>
                                </ContextMenu.Sub>

                                <ContextMenu.Item>
                                    <i className="pi pi-check-circle" />
                                    Completed
                                </ContextMenu.Item>
                            </ContextMenu.List>
                        </ContextMenu.Sub>

                        <ContextMenu.Sub>
                            <ContextMenu.Trigger>
                                <i className="pi pi-users" />
                                Team
                                <ContextMenu.Icon />
                            </ContextMenu.Trigger>
                            <ContextMenu.List>
                                <ContextMenu.Item>
                                    <i className="pi pi-user-plus" />
                                    Add Member
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <i className="pi pi-sitemap" />
                                    Organization
                                </ContextMenu.Item>

                                <ContextMenu.Sub>
                                    <ContextMenu.Trigger>
                                        <i className="pi pi-cog" />
                                        Settings
                                        <ContextMenu.Icon />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.List>
                                        <ContextMenu.Item>
                                            <i className="pi pi-shield" />
                                            Permissions
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <i className="pi pi-bell" />
                                            Notifications
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <i className="pi pi-lock" />
                                            Privacy
                                        </ContextMenu.Item>
                                    </ContextMenu.List>
                                </ContextMenu.Sub>
                            </ContextMenu.List>
                        </ContextMenu.Sub>

                        <ContextMenu.Separator />

                        <ContextMenu.Item>
                            <i className="pi pi-question-circle" />
                            Help & Support
                        </ContextMenu.Item>
                    </ContextMenu.List>
                </ContextMenu.Portal>
            </ContextMenu>
        </div>
    );
}
