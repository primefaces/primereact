import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/*
 * This component's "value" prop is meant to be used by the MultiCheckbox component
 *   to perform the conditional render of only the selected Option component
 *   by using reflection to introspect the Option's prop.
 */

export const propTypes = {
    value: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    boxStyle: PropTypes.object,
    boxClassName: PropTypes.string,
}

export default function Option({ icon, style, className }) {
    return <span className={classnames('p-checkbox-icon p-c', icon, className)} style={style}/>
}
