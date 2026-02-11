import { Times } from '@primeicons/react/times';
import { WindowMaximize } from '@primeicons/react/window-maximize';
import { Drawer } from '@primereact/ui/drawer';

export default function FullScreenDemo() {
    return (
        <div className="flex justify-center">
            <Drawer.Root position="full">
                <Drawer.Trigger iconOnly>
                    <WindowMaximize />
                </Drawer.Trigger>
                <Drawer.Backdrop />
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Drawer</Drawer.Title>
                        <Drawer.Close>
                            <Times />
                        </Drawer.Close>
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
