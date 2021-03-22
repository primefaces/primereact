import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class UITreeTableNode extends Component {

    static defaultProps = {
        node: null,
        index: null
    }

    static propTypes = {
        node: PropTypes.object,
        index: PropTypes.number
    }

    render() {
        return (
            <>

            </>
        );
    }
}
