interface Option {
    value: any,
    icon: string,
    style?: any,
    boxStyle?: any,
    className?: string,
    boxClassName?: string,
}

interface MultiStateCheckboxProps {
    id?: string;
    inputId?: string;
    options?: Option[]
    value?: any;
    name?: string;
    style?: object;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    ariaLabelledBy?: string;
    onChange?(e: {originalEvent: Event, value: any, checked: boolean, target: {type: string, name: string, id: string, value: any, checked: boolean}}): void;
}

export function MultiStateCheckbox(props: MultiStateCheckboxProps)
