'use client';

import { Drawer } from 'primereact/drawer';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Drawer.Root position="full">
                <Drawer.Trigger>
                    <i className="pi pi-window-maximize" />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Drawer</Drawer.Title>
                        <Drawer.Close />
                    </Drawer.Header>
                    <Drawer.Content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}
