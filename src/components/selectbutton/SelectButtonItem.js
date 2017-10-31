import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class SelectButtonItem extends Component {

    static defaultProps = {
        option: null,
        label: null,
        selected: null,
        tabIndex: null,
        onClick: null
    };

    static propTypes = {
        option: PropTypes.object,
        label: PropTypes.string,
        selected: PropTypes.bool,
        tabIndex: PropTypes.number,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            });
        }
    }
    
    onFocus(event) {
        DomHandler.addClass(this.el, 'ui-state-focus');
    }
    
    onBlur(event) {
        DomHandler.removeClass(this.el, 'ui-state-focus');
    }

    render() {
        let className = classNames('ui-button ui-widget ui-state-default ui-button-text-only', {
            'ui-state-active': this.props.selected,
            'ui-state-disabled': this.props.disabled
        });
        
        return (
            <div ref={(el) => this.el = el} className={className} onClick={this.onClick}>
                <span className="ui-button-text ui-c">{this.props.label}</span>
                <div className="ui-helper-hidden-accessible">
                    <input type="checkbox" checked={this.props.selected} onFocus={this.onFocus} onBlur={this.onBlur} 
                        tabIndex={this.props.tabIndex} disabled={this.props.disabled} value={this.props.label}/>
                </div>
            </div>
        );
    }
}