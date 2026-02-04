'use client';
import { TerminalResponse } from '@primereact/types/shared/terminal';
import { Terminal } from '@primereact/ui/terminal';
import * as React from 'react';

interface FileNode {
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[];
    content?: string;
}

const fileSystem: FileNode = {
    name: '~',
    type: 'folder',
    children: [
        {
            name: 'documents',
            type: 'folder',
            children: [
                { name: 'report.pdf', type: 'file', content: '[Binary file - 2.4 MB]' },
                { name: 'notes.txt', type: 'file', content: 'Meeting notes from last week...' }
            ]
        },
        {
            name: 'projects',
            type: 'folder',
            children: [
                {
                    name: 'primereact',
                    type: 'folder',
                    children: [
                        { name: 'package.json', type: 'file', content: '{ "name": "primereact", "version": "11.0.0" }' },
                        { name: 'README.md', type: 'file', content: '# PrimeReact\nThe Most Complete UI Suite for React' }
                    ]
                }
            ]
        },
        { name: '.bashrc', type: 'file', content: 'export PATH=$PATH:/usr/local/bin' }
    ]
};

export default function FileSystemDemo() {
    const [currentPath, setCurrentPath] = React.useState<string[]>(['~']);

    const getCurrentFolder = React.useCallback((): FileNode => {
        let current = fileSystem;

        for (let i = 1; i < currentPath.length; i++) {
            const child = current.children?.find((c) => c.name === currentPath[i]);

            if (child && child.type === 'folder') {
                current = child;
            }
        }

        return current;
    }, [currentPath]);

    const commandHandler = React.useCallback(
        (text: string): TerminalResponse => {
            const parts = text.trim().split(/\s+/);
            const command = parts[0];
            const arg = parts.slice(1).join(' ');
            const folder = getCurrentFolder();

            switch (command) {
                case 'ls': {
                    const items = folder.children || [];

                    if (items.length === 0) {
                        return '(empty directory)';
                    }

                    return items.map((item) => (item.type === 'folder' ? `${item.name}/` : item.name)).join('  ');
                }

                case 'cd': {
                    if (!arg || arg === '~') {
                        setCurrentPath(['~']);

                        return undefined;
                    }

                    if (arg === '..') {
                        if (currentPath.length > 1) {
                            setCurrentPath((prev) => prev.slice(0, -1));
                        }

                        return undefined;
                    }

                    const target = folder.children?.find((c) => c.name === arg && c.type === 'folder');

                    if (target) {
                        setCurrentPath((prev) => [...prev, arg]);

                        return undefined;
                    }

                    return `cd: ${arg}: No such directory`;
                }

                case 'cat': {
                    if (!arg) {
                        return 'Usage: cat [filename]';
                    }

                    const file = folder.children?.find((c) => c.name === arg && c.type === 'file');

                    if (file) {
                        return file.content || '';
                    }

                    return `cat: ${arg}: No such file`;
                }

                case 'pwd':
                    return currentPath.join('/').replace('~/', '~/');

                case 'clear':
                    return null;

                case 'help':
                    return (
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                            <span className="text-green-500">ls</span>
                            <span className="text-muted-color">List directory contents</span>
                            <span className="text-green-500">cd [dir]</span>
                            <span className="text-muted-color">Change directory</span>
                            <span className="text-green-500">cat [file]</span>
                            <span className="text-muted-color">Display file contents</span>
                            <span className="text-green-500">pwd</span>
                            <span className="text-muted-color">Print working directory</span>
                            <span className="text-green-500">clear</span>
                            <span className="text-muted-color">Clear terminal</span>
                        </div>
                    );

                default:
                    return `${command}: command not found. Type "help" for available commands.`;
            }
        },
        [getCurrentFolder, currentPath]
    );

    const prompt = currentPath.join('/').replace('~/', '~/') + ' $';

    return (
        <Terminal.Root prompt={prompt} onCommand={commandHandler}>
            <Terminal.Welcome>File System Browser - Type &quot;help&quot; for available commands.</Terminal.Welcome>
            <Terminal.CommandList />
            <Terminal.Prompt />
        </Terminal.Root>
    );
}
