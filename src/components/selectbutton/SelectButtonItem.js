import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if (this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            });

            this.input.focus();
        }
    }
    
    onFocus() {
        this.setState({focused: true});
    }

    onBlur() {
        this.setState({focused: false});
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onClick(event);
            event.preventDefault();
        }
    }

    componentDidUpdate() {
        this.input.checked = this.props.selected;
    }

    render() {
        let className = classNames('p-button p-component p-button-text-only', {
            'p-highlight': this.props.selected,
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        });
        
        return (
            <div ref={(el) => this.el = el} className={className} onClick={this.onClick}>
                <span className="p-button-text p-c">{this.props.label}</span>
                <div className="p-hidden-accessible">
                    <input ref={(el) => this.input = el} type="checkbox" defaultChecked={this.props.selected} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} 
                        tabIndex={this.props.tabIndex} disabled={this.props.disabled} value={this.props.label}/>
                </div>
            </div>
        );
    }
}