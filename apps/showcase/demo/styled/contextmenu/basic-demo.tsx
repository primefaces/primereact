import { Briefcase, ChartLine, Clock, Database, Mobile, QuestionCircle, Sitemap, UserPlus } from '@primeicons/react';
import { Bell } from '@primeicons/react/bell';
import { CheckCircle } from '@primeicons/react/check-circle';
import { Code } from '@primeicons/react/code';
import { Cog } from '@primeicons/react/cog';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { Lock } from '@primeicons/react/lock';
import { Shield } from '@primeicons/react/shield';
import { Star } from '@primeicons/react/star';
import { Users } from '@primeicons/react/users';
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <ContextMenu.Root className="w-64">
                <ContextMenu.Trigger className="flex justify-center items-center border-2 border-dashed border-surface-200 dark:border-surface-700 w-120 h-64">
                    Right Click Here
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                    <ContextMenu.List>
                        <ContextMenu.Item>
                            <Home />
                            Dashboard
                        </ContextMenu.Item>

                        <ContextMenu.Separator />

                        <ContextMenu.Label>Workspace</ContextMenu.Label>

                        <ContextMenu.Item>
                            <ChartLine />
                            Analytics
                        </ContextMenu.Item>

                        <ContextMenu.Sub>
                            <ContextMenu.Trigger>
                                <Folder />
                                Projects
                                <ContextMenu.Icon />
                            </ContextMenu.Trigger>
                            <ContextMenu.List>
                                <ContextMenu.Item>
                                    <Briefcase />
                                    Active Projects
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Clock />
                                    Recent
                                </ContextMenu.Item>

                                <ContextMenu.Sub>
                                    <ContextMenu.Trigger>
                                        <Star />
                                        Favorites
                                        <ContextMenu.Icon />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.List>
                                        <ContextMenu.Item>
                                            <Code />
                                            Website Redesign
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <Mobile />
                                            Mobile App
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <Database />
                                            API Development
                                        </ContextMenu.Item>
                                    </ContextMenu.List>
                                </ContextMenu.Sub>

                                <ContextMenu.Item>
                                    <CheckCircle />
                                    Completed
                                </ContextMenu.Item>
                            </ContextMenu.List>
                        </ContextMenu.Sub>

                        <ContextMenu.Sub>
                            <ContextMenu.Trigger>
                                <Users />
                                Team
                                <ContextMenu.Icon />
                            </ContextMenu.Trigger>
                            <ContextMenu.List>
                                <ContextMenu.Item>
                                    <UserPlus />
                                    Add Member
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Sitemap />
                                    Organization
                                </ContextMenu.Item>

                                <ContextMenu.Sub>
                                    <ContextMenu.Trigger>
                                        <Cog />
                                        Settings
                                        <ContextMenu.Icon />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.List>
                                        <ContextMenu.Item>
                                            <Shield />
                                            Permissions
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <Bell />
                                            Notifications
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <Lock />
                                            Privacy
                                        </ContextMenu.Item>
                                    </ContextMenu.List>
                                </ContextMenu.Sub>
                            </ContextMenu.List>
                        </ContextMenu.Sub>

                        <ContextMenu.Separator />

                        <ContextMenu.Item>
                            <QuestionCircle />
                            Help & Support
                        </ContextMenu.Item>
                    </ContextMenu.List>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </div>
    );
}
