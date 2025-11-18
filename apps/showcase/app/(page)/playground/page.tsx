'use client';

import { MinusIcon, PlusIcon } from '@primereact/icons';
import { MenuSubOpenChangeEvent } from '@primereact/types/shared/menu';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import React from 'react';

export default function BasicDemo() {
    const [open, setOpen] = React.useState(true);
    const [disabled, setDisabled] = React.useState(true);

    return (
        <>
            {/* Nested Menu Example */}
            <h3 className="mb-3 text-lg font-semibold">Nested Menu (Inline - No Portal)</h3>
            <Button onClick={() => setDisabled((prev) => !prev)}>toggle disabled</Button>
            <Button onClick={() => setOpen((prev) => !prev)}>Toggle</Button>
            <div className="card flex justify-center">
                <Menu>
                    <Menu.List>
                        <Menu.Item>
                            <MinusIcon />
                            Home
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item group>
                            <PlusIcon className="mr-2" />
                            Main Menu
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item>About</Menu.Item>

                        <Menu.Sub open={open} onOpenChange={(e: MenuSubOpenChangeEvent) => setOpen(e.value)}>
                            <Menu.Trigger>Products</Menu.Trigger>
                            <Menu.List>
                                <Menu.Item>Product 1</Menu.Item>
                                <Menu.Item disabled={disabled}>Product 2</Menu.Item>

                                <Menu.Sub>
                                    <Menu.Trigger>Categories</Menu.Trigger>
                                    <Menu.List>
                                        <Menu.Item>Electronics</Menu.Item>
                                        <Menu.Item>Clothing</Menu.Item>
                                        <Menu.Item>Books</Menu.Item>

                                        <Menu.Sub>
                                            <Menu.Trigger>Electronics</Menu.Trigger>
                                            <Menu.List>
                                                <Menu.Item>Phones</Menu.Item>
                                                <Menu.Item>Laptops</Menu.Item>
                                                <Menu.Item>Tablets</Menu.Item>
                                            </Menu.List>
                                        </Menu.Sub>
                                    </Menu.List>
                                </Menu.Sub>

                                <Menu.Item>Product 3</Menu.Item>
                            </Menu.List>
                        </Menu.Sub>

                        <Menu.Sub disabled>
                            <Menu.Trigger>Services</Menu.Trigger>
                            <Menu.List>
                                <Menu.Item>Consulting</Menu.Item>
                                <Menu.Item>Development</Menu.Item>

                                <Menu.Sub>
                                    <Menu.Trigger>Support</Menu.Trigger>
                                    <Menu.List>
                                        <Menu.Item>Email Support</Menu.Item>
                                        <Menu.Item>Phone Support</Menu.Item>
                                        <Menu.Item>Live Chat</Menu.Item>
                                    </Menu.List>
                                </Menu.Sub>
                            </Menu.List>
                        </Menu.Sub>

                        <Menu.Item>Contact</Menu.Item>
                    </Menu.List>
                </Menu>
            </div>

            {/* Menu with Portal (Overlay) */}
            <h3 className="mb-3 text-lg font-semibold">Menu with Portal (Overlay)</h3>
            <div className="card flex justify-center">
                <Menu>
                    <Menu.Trigger>Show Menu</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.List>
                            <Menu.Item>Item 1</Menu.Item>
                            <Menu.Item>Item 2</Menu.Item>
                            <Menu.Item>Item 3</Menu.Item>
                        </Menu.List>
                    </Menu.Portal>
                </Menu>
            </div>
        </>
    );
}
