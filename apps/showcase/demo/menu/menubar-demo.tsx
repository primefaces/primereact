'use client';

import { MenuInstance } from '@primereact/types/shared/menu';
import { Menu } from 'primereact/menu';
import * as React from 'react';

export default function MenubarDemo() {
    const menuRefs = React.useRef<Array<MenuInstance | null>>([]);
    const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);

    const handleMenuOpenChange = React.useCallback(
        (index: number) => (event: { value: boolean }) => {
            if (event.value) {
                setOpenMenuIndex(index);
            } else {
                setOpenMenuIndex((prev) => (prev === index ? null : prev));
            }
        },
        []
    );

    const handleMenuMouseEnter = React.useCallback(
        (index: number) => () => {
            if (openMenuIndex !== null) {
                setOpenMenuIndex(index);
            }
        },
        [openMenuIndex]
    );

    const handleMenuKeyDown = React.useCallback(
        (index: number) => (event: React.KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                const nextIndex = index === menuRefs.current.length - 1 ? 0 : index + 1;
                const nextMenu = menuRefs.current[nextIndex];

                if (nextMenu?.triggerRef?.current?.elementRef?.current) {
                    nextMenu.triggerRef.current.elementRef.current.focus();
                }
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                const prevIndex = index === 0 ? menuRefs.current.length - 1 : index - 1;
                const prevMenu = menuRefs.current[prevIndex];

                if (prevMenu?.triggerRef?.current?.elementRef?.current) {
                    prevMenu.triggerRef.current.elementRef.current.focus();
                }
            }
        },
        []
    );

    const handleItemClick = React.useCallback(() => {
        setOpenMenuIndex(null);
    }, []);

    return (
        <div className="flex justify-center">
            <div
                className="flex gap-1 bg-surface-100 dark:bg-surface-800 rounded-md p-1 w-fit"
                role="menubar"
                onMouseLeave={() => setOpenMenuIndex(null)}
            >
                <Menu
                    className="w-64"
                    ref={(el) => {
                        menuRefs.current[0] = menuRefs.current[0] ?? (el as MenuInstance | null);
                    }}
                    open={openMenuIndex === 0}
                    onOpenChange={handleMenuOpenChange(0)}
                >
                    <Menu.Trigger
                        variant={openMenuIndex === 0 ? 'filled' : 'text'}
                        onKeyDown={handleMenuKeyDown(0)}
                        onMouseEnter={handleMenuMouseEnter(0)}
                    >
                        File
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.List>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-file" />
                                New Document
                                <span className="ml-auto text-xs opacity-60">⌘ N</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-folder-open" />
                                Open Project
                                <span className="ml-auto text-xs opacity-60">⌘ O</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-window-maximize" />
                                New Window
                                <span className="ml-auto text-xs opacity-60">⇧ ⌘ N</span>
                            </Menu.Item>

                            <Menu.Separator />

                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-save" />
                                Save
                                <span className="ml-auto text-xs opacity-60">⌘ S</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-download" />
                                Save As...
                                <span className="ml-auto text-xs opacity-60">⇧ ⌘ S</span>
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Portal>
                </Menu>

                <Menu
                    ref={(el) => {
                        menuRefs.current[1] = menuRefs.current[1] ?? (el as MenuInstance | null);
                    }}
                    open={openMenuIndex === 1}
                    onOpenChange={handleMenuOpenChange(1)}
                >
                    <Menu.Trigger
                        variant={openMenuIndex === 1 ? 'filled' : 'text'}
                        onKeyDown={handleMenuKeyDown(1)}
                        onMouseEnter={handleMenuMouseEnter(1)}
                    >
                        Edit
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.List className="w-64">
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-undo" />
                                Undo
                                <span className="ml-auto text-xs opacity-60">⌘ Z</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-replay" />
                                Redo
                                <span className="ml-auto text-xs opacity-60">⇧ ⌘ Z</span>
                            </Menu.Item>

                            <Menu.Separator />

                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-clipboard" />
                                Cut
                                <span className="ml-auto text-xs opacity-60">⌘ X</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-copy" />
                                Copy
                                <span className="ml-auto text-xs opacity-60">⌘ C</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-file" />
                                Paste
                                <span className="ml-auto text-xs opacity-60">⌘ V</span>
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Portal>
                </Menu>

                <Menu
                    ref={(el) => {
                        menuRefs.current[2] = menuRefs.current[2] ?? (el as MenuInstance | null);
                    }}
                    open={openMenuIndex === 2}
                    onOpenChange={handleMenuOpenChange(2)}
                >
                    <Menu.Trigger
                        variant={openMenuIndex === 2 ? 'filled' : 'text'}
                        onKeyDown={handleMenuKeyDown(2)}
                        onMouseEnter={handleMenuMouseEnter(2)}
                    >
                        View
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.List className="w-64">
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-search-plus" />
                                Zoom In
                                <span className="ml-auto text-xs opacity-60">⌘ +</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-search-minus" />
                                Zoom Out
                                <span className="ml-auto text-xs opacity-60">⌘ -</span>
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-refresh" />
                                Reset Zoom
                                <span className="ml-auto text-xs opacity-60">⌘ 0</span>
                            </Menu.Item>

                            <Menu.Separator />

                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-window-maximize" />
                                Full Screen
                                <span className="ml-auto text-xs opacity-60">⌃ ⌘ F</span>
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Portal>
                </Menu>

                <Menu
                    ref={(el) => {
                        menuRefs.current[3] = menuRefs.current[3] ?? (el as MenuInstance | null);
                    }}
                    open={openMenuIndex === 3}
                    onOpenChange={handleMenuOpenChange(3)}
                >
                    <Menu.Trigger
                        variant={openMenuIndex === 3 ? 'filled' : 'text'}
                        onKeyDown={handleMenuKeyDown(3)}
                        onMouseEnter={handleMenuMouseEnter(3)}
                    >
                        Help
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.List className="w-64">
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-book" />
                                Documentation
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-github" />
                                View on GitHub
                            </Menu.Item>
                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-question-circle" />
                                Support
                            </Menu.Item>

                            <Menu.Separator />

                            <Menu.Item onClick={handleItemClick}>
                                <i className="pi pi-info-circle" />
                                About
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Portal>
                </Menu>
            </div>
        </div>
    );
}
