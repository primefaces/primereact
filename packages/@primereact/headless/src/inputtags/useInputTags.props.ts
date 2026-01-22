import type { useInputTagsProps } from '@primereact/types/shared/inputtags';

export const defaultProps: useInputTagsProps = {
    defaultValue: undefined,
    value: undefined,
    defaultInputValue: '',
    inputValue: undefined,
    max: undefined,
    delimiter: undefined,
    allowDuplicate: undefined,
    options: [],
    optionKey: undefined,
    optionLabel: undefined,
    optionValue: undefined,
    optionDisabled: undefined,
    optionGroupLabel: undefined,
    optionGroupChildren: undefined,
    delay: 300,
    minLength: 1,
    appendTo: 'body',
    addOnBlur: undefined,
    addOnPaste: undefined,
    addOnTab: undefined,
    onAdd: undefined,
    onRemove: undefined,
    onValueChange: undefined,
    onInputValueChange: undefined,
    onComplete: undefined
};
