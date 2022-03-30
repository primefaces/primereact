import React from 'react';

export const Row = (props) => <tr className={props.className} style={props.style}>{props.children}</tr>

Row.defaultProps = {
    __TYPE: 'Row',
    style: null,
    className: null
}
