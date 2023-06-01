import * as React from 'react';
import { RowBase } from './RowBase';
import { mergeProps } from '../utils/Utils';

export const Row = (inProps) => {
    const props = RowBase.getProps(inProps);
    //@todo Pass Parent MetaData
    const { ptm } = RowBase.setMetaData({
        props: props
    });

    const rootProps = mergeProps(
        {
            className: props.className,
            style: props.style
        },
        RowBase.getOtherProps(props),
        ptm('root')
    );

    return <tr {...rootProps}>{props.children}</tr>;
};

Row.displayName = 'Row';
