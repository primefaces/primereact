import * as React from 'react';

interface OnTextChangeParams {
    htmlValue: string | null;
    textValue: string;
    delta: any;
    source: string;
}

interface OnSelectionChangeParams {
    range: any;
    oldRange: any;
    source: string;
}

interface EditorProps {
    id?: string;
    value?: string;
    style?: object;
    className?: string;
    placeholder?: string;
    readOnly?: boolean;
    modules?: any;
    formats?: string[];
    theme?: string;
    headerTemplate?: React.ReactNode;
    onTextChange?(e: OnTextChangeParams): void;
    onSelectionChange?(e: OnSelectionChangeParams): void;
}

export class Editor extends React.Component<EditorProps, any> { }
