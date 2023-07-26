import * as React from 'react';
import { RowBase } from './RowBase';
import { mergeProps } from '../utils/Utils';
import { PrimeReactContext } from '../api/Api';

export const Row = (inProps) => {
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
