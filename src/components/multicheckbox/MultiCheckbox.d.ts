interface MultiCheckboxProps {
    id?: string;
    inputId?: string;
    value?: any;
    name?: string;
    style?: object;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    ariaLabelledBy?: string;
    onChange?(e: {originalEvent: Event, value: any, checked: boolean, target: {type: string, name: string, id: string, value: any, checked: boolean}}): void;
}

export function MultiCheckbox(props: MultiCheckboxProps)
