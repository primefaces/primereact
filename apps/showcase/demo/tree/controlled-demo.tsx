'use client';

import type { TreeExpandedKeys, TreeNode, useTreeExpandedChangeEvent } from '@primereact/types/shared/tree';
import { Button } from 'primereact/button';
import { Tree } from 'primereact/tree';
import * as React from 'react';

export default function ControlledDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<TreeExpandedKeys>({ '0': true });

    const nodes = [
        {
            key: '0',
            label: 'app',
            data: 'app folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '0-0',
                    label: 'api',
                    data: 'api folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '0-0-0',
                            label: 'auth',
                            data: 'auth folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '0-0-0-0',
                                    label: 'route.ts',
                                    data: 'route.ts file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '0-1',
                    label: 'layout.tsx',
                    data: 'layout.tsx file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '0-2',
                    label: 'page.tsx',
                    data: 'page.tsx file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '1',
            label: 'components',
            data: 'components folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '1-0',
                    label: 'Header.tsx',
                    data: 'Header.tsx file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '1-1',
                    label: 'Footer.tsx',
                    data: 'Footer.tsx file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '2',
            label: 'public',
            data: 'public folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '2-0',
                    label: 'favicon.ico',
                    data: 'favicon.ico file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '3',
            label: '.env.local',
            data: '.env.local file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '4',
            label: 'next.config.js',
            data: 'next.config.js file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '5',
            label: 'package.json',
            data: 'package.json file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '6',
            label: 'README.md',
            data: 'README.md file',
            icon: 'pi pi-fw pi-file'
        }
    ];

    const expandAll = () => {
        const _expandedKeys = {};

        for (const node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node: TreeNode, _expandedKeys: TreeExpandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (const child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    return (
        <>
            <div className="flex flex-wrap gap-2 mb-6">
                <Button.Root type="button" onClick={expandAll}>
                    <i className="pi pi-plus" />
                    Expand All
                </Button.Root>
                <Button.Root type="button" onClick={collapseAll}>
                    <i className="pi pi-minus" />
                    Collapse All
                </Button.Root>
            </div>
            <Tree.Root
                value={nodes}
                expandedKeys={expandedKeys}
                onExpandedChange={(e: useTreeExpandedChangeEvent) => setExpandedKeys(e.value)}
                className="w-full md:w-120"
            >
                <Tree.List />
            </Tree.Root>
        </>
    );
}
