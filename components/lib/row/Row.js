import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useMergeProps } from '../hooks/Hooks';
import { RowBase } from './RowBase';

export const Row = (inProps) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = RowBase.getProps(inProps, context);
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
