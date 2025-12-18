'use client';

import type { TreeNode, useTreeValueChangeEvent } from '@primereact/types/shared/tree';
import { Tree } from 'primereact/tree';
import * as React from 'react';

export default function DragDropMultipleDemo() {
    const [nodes, setNodes] = React.useState<TreeNode[]>([
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
    ]);

    const [nodes2, setNodes2] = React.useState<TreeNode[]>([
        {
            key: '1-0',
            label: '/etc',
            icon: 'pi pi-fw pi-folder'
        }
    ]);

    const [nodes3, setNodes3] = React.useState<TreeNode[]>([]);

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <Tree
                value={nodes}
                onValueChange={(e: useTreeValueChangeEvent) => setNodes(e.value)}
                draggableNodes
                droppableNodes
                draggableScope="first"
                droppableScope="none"
                className="flex-1 border border-surface rounded-lg"
            >
                <Tree.List />
                <Tree.Empty>No Items Left</Tree.Empty>
            </Tree>
            <Tree
                value={nodes2}
                onValueChange={(e: useTreeValueChangeEvent) => setNodes2(e.value)}
                draggableNodes
                droppableNodes
                draggableScope="second"
                droppableScope="first"
                className="flex-1 border border-surface rounded-lg"
                pt={{
                    root: ({ state }) => ({ className: state.dragHover ? 'border-dashed border-primary!' : undefined })
                }}
            >
                <Tree.List />
                <Tree.Empty>Drag Nodes Here</Tree.Empty>
            </Tree>
            <Tree
                value={nodes3}
                onValueChange={(e: useTreeValueChangeEvent) => setNodes3(e.value)}
                draggableNodes
                droppableNodes
                droppableScope={['first', 'second']}
                className="flex-1 border border-surface rounded-lg"
                pt={{
                    root: ({ state }) => ({ className: state.dragHover ? 'border-dashed border-primary!' : undefined })
                }}
            >
                <Tree.List />
                <Tree.Empty>Drag Nodes Here</Tree.Empty>
            </Tree>
        </div>
    );
}
