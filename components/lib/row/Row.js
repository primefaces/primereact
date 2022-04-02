import * as React from 'react';

export const Row = (props) => <tr className={props.className} style={props.style}>{props.children}</tr>

Row.displayName = 'Row';
Row.defaultProps = {
    __TYPE: 'Row',
    style: null,
    className: null
}
