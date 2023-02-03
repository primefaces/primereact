import * as React from 'react';
import { ObjectUtils } from '../utils/Utils';
import { RowDefaultProps } from './RowBase';

export const Row = (inProps) => {
    const props = ObjectUtils.getProps(inProps, RowDefaultProps);
    const otherProps = ObjectUtils.findDiffKeys(props, RowDefaultProps);

    return (
        <tr className={props.className} style={props.style} {...otherProps}>
            {props.children}
        </tr>
    );
};

Row.displayName = 'Row';
