import * as React from 'react';
import { RowBase } from './RowBase';

export const Row = (inProps) => {
    const props = RowBase.getProps(inProps);
    const otherProps = RowBase.getOtherProps(props);

    return (
        <tr className={props.className} style={props.style} {...otherProps}>
            {props.children}
        </tr>
    );
};

Row.displayName = 'Row';
