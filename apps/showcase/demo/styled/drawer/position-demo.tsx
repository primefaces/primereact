'use client';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { AngleUp } from '@primeicons/react/angle-up';
import { Times } from '@primeicons/react/times';
import { DrawerRootChangeEvent } from '@primereact/types/shared/drawer';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';
import * as React from 'react';

export default function PositionDemo() {
    const [visibleLeft, setVisibleLeft] = React.useState<boolean>(false);
    const [visibleRight, setVisibleRight] = React.useState<boolean>(false);
    const [visibleTop, setVisibleTop] = React.useState<boolean>(false);
    const [visibleBottom, setVisibleBottom] = React.useState<boolean>(false);

    return (
        <div>
            <div className="flex gap-2 justify-center">
                <Button iconOnly onClick={() => setVisibleLeft(true)}>
                    <AngleRight />
                </Button>
                <Button iconOnly onClick={() => setVisibleRight(true)}>
                    <AngleLeft />
                </Button>
                <Button iconOnly onClick={() => setVisibleTop(true)}>
                    <AngleDown />
                </Button>
                <Button iconOnly onClick={() => setVisibleBottom(true)}>
                    <AngleUp />
                </Button>
            </div>

            <Drawer.Root open={visibleLeft} onOpenChange={(e: DrawerRootChangeEvent) => setVisibleLeft(e.value as boolean)}>
                <Drawer.Portal className="w-full md:w-80">
                    <Drawer.Header>
                        <Drawer.Title>Left Drawer</Drawer.Title>
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

            <Drawer.Root position="right" open={visibleRight} onOpenChange={(e: DrawerRootChangeEvent) => setVisibleRight(e.value as boolean)}>
                <Drawer.Portal className="w-full md:w-80">
                    <Drawer.Header>
                        <Drawer.Title>Right Drawer</Drawer.Title>
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

            <Drawer.Root
                position="top"
                open={visibleTop}
                onOpenChange={(e: DrawerRootChangeEvent) => setVisibleTop(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Top Drawer</Drawer.Title>
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

            <Drawer.Root
                position="bottom"
                open={visibleBottom}
                onOpenChange={(e: DrawerRootChangeEvent) => setVisibleBottom(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <Drawer.Portal>
                    <Drawer.Header>
                        <Drawer.Title>Bottom Drawer</Drawer.Title>
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
