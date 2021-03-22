import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class Skeleton extends Component {

    static defaultProps = {
        shape: 'rectangle',
        size: null,
        width: '100%',
        height: '1rem',
        borderRadius: null,
        animation: 'wave',
        style: null,
        className: null
    }

    static propTypes = {
        shape: PropTypes.string,
        size: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
        borderRadius: PropTypes.string,
        animation: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    skeletonStyle() {
        if (this.props.size)
            return { width: this.props.size, height: this.props.size, borderRadius: this.props.borderRadius };
        else
            return { width: this.props.width, height: this.props.height, borderRadius: this.props.borderRadius };
    }

    render() {
        const skeletonClassName = classNames('p-skeleton p-component', {
            'p-skeleton-circle': this.props.shape === 'circle',
            'p-skeleton-animation-none': this.props.animation === 'none'
        }, this.props.className);

        const style = this.skeletonStyle();

        return (
            <div style={style} className={skeletonClassName}></div>
        );
    }
}
