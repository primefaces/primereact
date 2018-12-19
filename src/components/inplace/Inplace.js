import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button} from '../button/Button';

export class InplaceDisplay extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }

}

export class InplaceContent extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }

}

export class Inplace extends Component {

    static defaultProps = {
        style: null,
        className: null,
        active: false,
        closable: false,
        disabled: false,
        tabIndex: '0',
        onOpen: null,
        onClose: null,
        onToggle: null
    };

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        active: PropTypes.bool,
        closable: PropTypes.bool,
        disabled: PropTypes.bool,
        tabIndex: PropTypes.string,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        onToggle: PropTypes.func,
    };
    
    constructor(props) {
        super(props);
        if (!this.props.onToggle) {
            this.state = {
                active: false
            }
        }
        
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.onDisplayKeyDown = this.onDisplayKeyDown.bind(this);
    }

    open(event) {
        if (this.props.disabled) {
            return;
        }

        if(this.props.onOpen) {
            this.props.onOpen(event);
        }
        if (this.props.onToggle) {
            this.props.onToggle({
                originalEvent: event,
                value: true
            });
        }
        else {
            this.setState({
                active: true
            });
        }
    }

    close(event) {
        if (this.props.onClose) {
            this.props.onClose(event);
        }

        if (this.props.onToggle) {
            this.props.onToggle({
                originalEvent: event,
                value: false
            });
        }
        else {
            this.setState({
                active: false
            });
        }
    }

    onDisplayKeyDown(event) {
        if (event.key === 'Enter') {
            this.open(event);
            event.preventDefault();
        }
    }

    isActive() {
        return this.props.onToggle ? this.props.active: this.state.active;
    }

    renderDisplay(content) {
        const className = classNames('p-inplace-display', {'p-disabled': this.props.disabled});

        return (
            <div className={className} onClick={this.open} onKeyDown={this.onDisplayKeyDown} tabIndex={this.props.tabIndex} >
                {content}
            </div>
        );
    }
    
    renderCloseButton() {
        if (this.props.closable) {
            return (
                <Button type="button" icon="pi pi-times" onClick={this.close} />
            )
        }
        else {
            return null;
        }
    }

    renderContent(content) {
        const closeButton = this.renderCloseButton();

        return (
            <div className="p-inplace-content">
                {content}
                {closeButton}
            </div>
        );
    }

    renderChildren() {
        const active = this.isActive();

        return (
            React.Children.map(this.props.children, (child, i) => {
                if (active && child.type === InplaceContent) {
                    return this.renderContent(child);
                }
                else if (!active && child.type === InplaceDisplay) {
                    return this.renderDisplay(child);
                }
            })
        );
    }

    render() {
        const className = classNames('p-inplace p-component', {'p-inplace-closable': this.props.closable}, this.props.className);

        return (
            <div className={className}>
                {this.renderChildren()}
            </div>
        );
    }
}