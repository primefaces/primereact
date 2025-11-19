import { Menu } from 'primereact/menu';

export default function MenuPTDemo() {
    return (
        <Menu className="w-64">
            <Menu.List>
                <Menu.Item>Dashboard</Menu.Item>
                <Menu.Separator />
                <Menu.Item group>Workspace</Menu.Item>
                <Menu.Item>Analytics</Menu.Item>
                <Menu.Sub defaultOpen={true}>
                    <Menu.Trigger>Projects</Menu.Trigger>
                    <Menu.List>
                        <Menu.Item>Active Projects</Menu.Item>
                        <Menu.Item>Recent</Menu.Item>
                    </Menu.List>
                </Menu.Sub>
            </Menu.List>
        </Menu>
    );
}
