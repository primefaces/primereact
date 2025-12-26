'use client';

import { DrawerChangeEvent } from '@primereact/types/shared/drawer';
import { Button } from 'primereact/button';
import { Drawer } from 'primereact/drawer';
import * as React from 'react';

export default function PositionDemo() {
    const [visibleLeft, setVisibleLeft] = React.useState<boolean>(false);
    const [visibleRight, setVisibleRight] = React.useState<boolean>(false);
    const [visibleTop, setVisibleTop] = React.useState<boolean>(false);
    const [visibleBottom, setVisibleBottom] = React.useState<boolean>(false);

    return (
        <div>
            <div className="flex gap-2 justify-center">
                <Button.Root onClick={() => setVisibleLeft(true)}>
                    <i className="pi pi-arrow-right" />
                </Button.Root>
                <Button.Root onClick={() => setVisibleRight(true)}>
                    <i className="pi pi-arrow-left" />
                </Button.Root>
                <Button.Root onClick={() => setVisibleTop(true)}>
                    <i className="pi pi-arrow-down" />
                </Button.Root>
                <Button.Root onClick={() => setVisibleBottom(true)}>
                    <i className="pi pi-arrow-up" />
                </Button.Root>
            </div>

            <Drawer.Root open={visibleLeft} onOpenChange={(e: DrawerChangeEvent) => setVisibleLeft(e.value as boolean)}>
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Left Drawer</Drawer.Title>
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

            <Drawer.Root position="right" open={visibleRight} onOpenChange={(e: DrawerChangeEvent) => setVisibleRight(e.value as boolean)}>
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Right Drawer</Drawer.Title>
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

            <Drawer.Root
                position="top"
                open={visibleTop}
                onOpenChange={(e: DrawerChangeEvent) => setVisibleTop(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Top Drawer</Drawer.Title>
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

            <Drawer.Root
                position="bottom"
                open={visibleBottom}
                onOpenChange={(e: DrawerChangeEvent) => setVisibleBottom(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Bottom Drawer</Drawer.Title>
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
