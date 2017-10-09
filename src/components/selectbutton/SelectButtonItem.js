import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class SelectButtonItem extends Component {

    static defaultProps = {
        option: null,
        selected: null,
        onClick: null
    };

    static propTypes = {
        option: PropTypes.object,
        selected: PropTypes.bool,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            });
        }
    }

    render() {
        let className = classNames('ui-button ui-widget ui-state-default ui-button-text-only', {
            'ui-state-active': this.props.selected,
            'ui-state-disabled': this.props.disabled
        });
        
        return (
            <div className={className} onClick={this.onClick}>
                <span className="ui-button-text ui-c">{this.props.option.label}</span>
            </div>
        );
    }
}