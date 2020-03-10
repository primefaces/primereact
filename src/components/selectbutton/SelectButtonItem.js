import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class SelectButtonItem extends Component {

    static defaultProps = {
        option: null,
        label: null,
        className: null,
        selected: null,
        tabIndex: null,
        ariaLabelledBy: null,
        template: null,
        onClick: null
    };

    static propTypes = {
        option: PropTypes.object,
        label: PropTypes.string,
        className: PropTypes.string,
        selected: PropTypes.bool,
        tabIndex: PropTypes.number,
        ariaLabelledBy: PropTypes.string,
        template: PropTypes.func,
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

    renderContent() {
        if (this.props.template) {
            return this.props.template(this.props.option);
        }
        else {
            return (
                <span className="p-button-text p-c">{this.props.label}</span>
            );
        }
    }

    render() {
        const className = classNames(this.props.option.className, 'p-button p-component p-button-text-only', this.props.className, {
            'p-highlight': this.props.selected,
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        });
        const content = this.renderContent();

        return (
            <div ref={(el) => this.el = el} className={className} onClick={this.onClick} role="button" aria-pressed={this.props.selected} aria-labelledby={this.props.ariaLabelledBy}>
                {content}
                <div className="p-hidden-accessible">
                    <input ref={(el) => this.input = el} type="checkbox" defaultChecked={this.props.selected} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown}
                        tabIndex={this.props.tabIndex} disabled={this.props.disabled} value={this.props.label}/>
                </div>
            </div>
        );
    }
}
