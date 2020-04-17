import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface ListBoxProps {
    id?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    style?: object;
    listStyle?: object;
    className?: string;
    disabled?: boolean;
    dataKey?: string;
    multiple?: boolean;
    metaKeySelection?: boolean;
    filter?: boolean;
    filterBy?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    tabIndex?:string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string,
    itemTemplate?(item: any): JSX.Element | undefined;
    onChange?(e: {originalEvent: Event, value: any, target: {name: string, id: string, value: any}}): void;
}

export class ListBox extends React.Component<ListBoxProps,any> {}
