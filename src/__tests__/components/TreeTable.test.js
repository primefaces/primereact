import React from 'react';
import { render } from '@testing-library/react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';

const nodes = [
    {
        "key": "0",
        "data": {
            "name": "Applications",
            "size": "100kb",
            "type": "Folder"
        },
        "children": [
            {
                "key": "0-0",
                "data": {
                    "name": "React",
                    "size": "25kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "key": "0-0-0",
                        "data": {
                            "name": "react.app",
                            "size": "10kb",
                            "type": "Application"
                        }
                    },
                    {
                        "key": "0-0-1",
                        "data": {
                            "name": "native.app",
                            "size": "10kb",
                            "type": "Application"
                        }
                    },
                    {
                        "key": "0-0-2",
                        "data": {
                            "name": "mobile.app",
                            "size": "5kb",
                            "type": "Application"
                        }
                    }
                ]
            },
            {
                "key": "0-1",
                "data": {
                    "name": "editor.app",
                    "size": "25kb",
                    "type": "Application"
                }
            },
            {
                "key": "0-2",
                "data": {
                    "name": "settings.app",
                    "size": "50kb",
                    "type": "Application"
                }
            }
        ]
    },
    {
        "key": "1",
        "data": {
            "name": "Cloud",
            "size": "20kb",
            "type": "Folder"
        },
        "children": [
            {
                "key": "1-0",
                "data": {
                    "name": "backup-1.zip",
                    "size": "10kb",
                    "type": "Zip"
                }
            },
            {
                "key": "1-1",
                "data": {
                    "name": "backup-2.zip",
                    "size": "10kb",
                    "type": "Zip"
                }
            }
        ]
    },
    {
        "key": "2",
        "data": {
            "name": "Desktop",
            "size": "150kb",
            "type": "Folder"
        },
        "children": [
            {
                "key": "2-0",
                "data": {
                    "name": "note-meeting.txt",
                    "size": "50kb",
                    "type": "Text"
                }
            },
            {
                "key": "2-1",
                "data": {
                    "name": "note-todo.txt",
                    "size": "100kb",
                    "type": "Text"
                }
            }
        ]
    },
    {
        "key": "3",
        "data": {
            "name": "Documents",
            "size": "75kb",
            "type": "Folder"
        },
        "children": [
            {
                "key": "3-0",
                "data": {
                    "name": "Work",
                    "size": "55kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "key": "3-0-0",
                        "data": {
                            "name": "Expenses.doc",
                            "size": "30kb",
                            "type": "Document"
                        }
                    },
                    {
                        "key": "3-0-1",
                        "data": {
                            "name": "Resume.doc",
                            "size": "25kb",
                            "type": "Resume"
                        }
                    }
                ]
            }
        ]
    }
]

describe('TreeTable Component', () => {
    test('should display the TreeTable', () => {

        const { container } = render(<TreeTable value={nodes} >
            <Column field="name" header="name" expander></Column>
            <Column field="size" header="size"></Column>
            <Column field="type" header="type"></Column>
        </TreeTable>);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-treetable p-component');
    })
})