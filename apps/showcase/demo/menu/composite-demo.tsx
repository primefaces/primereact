'use client';

import { Menu } from 'primereact/menu';

export default function CompositeDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-56" composite>
                <Menu.List>
                    <Menu.Item>
                        <i className="pi pi-file" />
                        New
                    </Menu.Item>
                    <Menu.Item>
                        <i className="pi pi-folder-open" />
                        Open
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Sub>
                        <Menu.Trigger>
                            <i className="pi pi-download" />
                            Import
                            <Menu.Icon />
                        </Menu.Trigger>
                        <Menu.List>
                            <Menu.Item>
                                <i className="pi pi-file" />
                                From File
                            </Menu.Item>

                            <Menu.Sub>
                                <Menu.Trigger>
                                    <i className="pi pi-cloud" />
                                    From Cloud
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>Google Drive</Menu.Item>
                                    <Menu.Item>Dropbox</Menu.Item>
                                    <Menu.Item>OneDrive</Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Item>
                                <i className="pi pi-globe" />
                                From URL
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Sub>
                        <Menu.Trigger>
                            <i className="pi pi-share-alt" />
                            Share
                            <Menu.Icon />
                        </Menu.Trigger>
                        <Menu.List>
                            <Menu.Item>
                                <i className="pi pi-send" />
                                Send via Email
                            </Menu.Item>
                            <Menu.Item>
                                <i className="pi pi-link" />
                                Copy Link
                            </Menu.Item>
                            <Menu.Item>
                                <i className="pi pi-users" />
                                Share with Team
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Item>
                        <i className="pi pi-save" />
                        Save
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Item>
                        <i className="pi pi-sign-out" />
                        Exit
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
