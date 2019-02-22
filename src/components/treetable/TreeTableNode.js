import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}