import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu } from 'primereact/menu';

export default function RouterDemo() {
    const router = useRouter();

    const handleProgrammatic = () => {
        router.push('/docs/gettingstarted/introduction');
    };

    return (
        <div className="card flex justify-center">
            <Menu className="w-56">
                <Menu.List>
                    <Menu.Item as={Link} href="/docs/theming/unstyled">
                        <i className="pi pi-palette" />
                        Router Link
                    </Menu.Item>
                    <Menu.Item onClick={handleProgrammatic}>
                        <i className="pi pi-link" />
                        Programmatic
                    </Menu.Item>
                    <Menu.Item as="a" href="https://react.dev/" target="_blank">
                        <i className="pi pi-home" />
                        External
                    </Menu.Item>
                </Menu.List>
            </Menu>
        </div>
    );
}
