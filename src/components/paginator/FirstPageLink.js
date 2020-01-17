import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class FirstPageLink extends Component {

    static defaultProps = {
        disabled: false,
        onClick: null
    }

    static propTypes = {
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    }

    render() {
        let className = classNames('p-paginator-first p-paginator-element p-link', {'p-disabled': this.props.disabled});

        return (
            <button type="button" className={className} onClick={this.props.onClick} disabled={this.props.disabled}>
                <span className="p-paginator-icon pi pi-step-backward"></span>
            </button>
        );
    }
}
