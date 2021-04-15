import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class AvatarGroup extends Component {

    static defaultProps = {
        style: null,
        className: null
    }

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string
    };

    render() {
        const containerClassName = classNames('p-avatar-group p-component', this.props.className);

        return (
            <div className={containerClassName} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}
