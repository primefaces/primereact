import * as React from 'react';
import { ObjectUtils } from '../utils/Utils';

export const Row = (props) => {
    const otherProps = ObjectUtils.findDiffKeys(props, Row.defaultProps);

    return <tr className={props.className} style={props.style} {...otherProps}>{props.children}</tr>
}

Row.displayName = 'Row';
Row.defaultProps = {
    __TYPE: 'Row',
    style: null,
    className: null
}
