'use client';

import { Icon } from '@primereact/core/icon';
import type { CheckboxChangeEvent } from '@primereact/types/shared/checkbox';
import type { TreeContentInstance, TreeNode as TreeNodeType } from '@primereact/types/shared/tree';
import { Checkbox } from 'primereact/checkbox';
import { Tree } from 'primereact/tree';
import * as React from 'react';

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

function CustomTreeNode({ node, index }: { node: TreeNodeType; index: number }) {
    return (
        <Tree.Node key={node.key} node={node} index={index}>
            <Tree.Content>
                {(instance: TreeContentInstance) => {
                    const { tree, treenode } = instance;
                    const leaf = treenode?.leaf;
                    const expanded = treenode?.expanded;
                    const checked = treenode?.checked;
                    const partialChecked = treenode?.partialChecked;

                    return (
                        <>
                            <Tree.Toggle>{expanded ? <Icon className="pi pi-arrow-up" /> : <Icon className="pi pi-arrow-down" />}</Tree.Toggle>

                            <Checkbox.Root
                                checked={checked}
                                indeterminate={partialChecked}
                                onCheckedChange={(event: CheckboxChangeEvent) => {
                                    tree?.onCheckboxChange(
                                        event.originalEvent as React.ChangeEvent<HTMLInputElement>,
                                        treenode?.props.node as TreeNodeType
                                    );
                                }}
                                tabIndex={-1}
                            />

                            {leaf ? (
                                <Tree.Icon className="pi pi-file" />
                            ) : expanded ? (
                                <Tree.Icon className="pi pi-folder-open" />
                            ) : (
                                <Tree.Icon className="pi pi-folder" />
                            )}

                            <Tree.Label>{node.label}</Tree.Label>
                        </>
                    );
                }}
            </Tree.Content>

            {node.children && node.children.length > 0 && (
                <Tree.List>
                    {node.children.map((childNode: TreeNodeType, childIndex: number) => (
                        <CustomTreeNode key={childNode.key} node={childNode} index={childIndex} />
                    ))}
                </Tree.List>
            )}
        </Tree.Node>
    );
}

export default function NodeDemo() {
    return (
        <Tree.Root className="w-full md:w-120" value={nodes} selectionMode="checkbox">
            <Tree.List>
                {nodes.map((node, index) => (
                    <CustomTreeNode key={node.key} node={node} index={index} />
                ))}
            </Tree.List>
        </Tree.Root>
    );
}
