import React from 'react';
import PropTypes from 'prop-types';

export const Row = (props) => <tr className={props.className} style={props.style}>{props.children}</tr>

Row.defaultProps = {
    __TYPE: 'Row',
    style: null,
    className: null
}

Row.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
}
