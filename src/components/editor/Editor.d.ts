import React = require("react");

interface EditorProps {
    id?: string,
    value?: string,
    style?: string,
    className?: string,
    placeholder?: string,
    readonly?: boolean,
    formats?: Array<any>,
    headerTemplate?: any,
    onTextChange?({htmlValue: HTMLElement, textValue: string, delta: any, source: string}): void,
    onSelectionChange?({range: any, oldRange: any, source: string}): void;
}

export class Editor extends React.Component<EditorProps,any> {}