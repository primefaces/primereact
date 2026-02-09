import { Menu } from '@primereact/ui/menu';
import { Bell } from '@primeicons/react/bell';
import { CheckCircle } from '@primeicons/react/check-circle';
import { Code } from '@primeicons/react/code';
import { Cog } from '@primeicons/react/cog';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { Lock } from '@primeicons/react/lock';
import { Star } from '@primeicons/react/star';
import { Users } from '@primeicons/react/users';
import { Shield } from '@primeicons/react/shield';

export default function InlineDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
                <Menu.List>
                    <Menu.Item>
                        <Home />
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
                            <Folder />
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
                                    <Star />
                                    Favorites
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <Code />
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
                                <CheckCircle />
                                Completed
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Sub>
                        <Menu.Trigger>
                            <Users />
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
                                    <Cog />
                                    Settings
                                    <Menu.Icon />
                                </Menu.Trigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <Shield />
                                        Permissions
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Bell />
                                        Notifications
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Lock />
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
            </Menu.Root>
        </div>
    );
}
