import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class GrowlMessage extends Component {

    static defaultProps = {
        message: null,
        onClose: null,
        onClick: null
    }

    static propTypes = {
        message: PropTypes.object,
        onClose: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        if(!this.props.message.sticky) {
            this.timeout = setTimeout(() => {
                this.onClose(null);
            }, this.props.message.life||3000);
        }
    }

    onClose(event) {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
        
        if(this.props.onClose) {
            this.props.onClose(this.props.message);
        }

        if(event) {
            event.preventDefault();
        }
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.message);
        }
    }

    renderCloseIcon() {
        if(this.props.message.closable !== false) {
            return (
                <a className="ui-growl-icon-close fa fa-close" onClick={this.onClose}><span></span></a>
            );
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow', {
            'ui-growl-message-info': this.props.message.severity === 'info',
            'ui-growl-message-warn': this.props.message.severity === 'warn',
            'ui-growl-message-error': this.props.message.severity === 'error',
            'ui-growl-message-success': this.props.message.severity === 'success'
        });

        let iconClassName = classNames('ui-growl-image fa fa-2x', {
            'fa-info-circle': this.props.message.severity === 'info',
            'fa-warning': this.props.message.severity === 'warn',
            'fa-close': this.props.message.severity === 'error',
            'fa-check': this.props.message.severity === 'success'
        });

        let closeIcon = this.renderCloseIcon();

        return (
            <div ref={(el) => { this.element = el; }} className={className} aria-live="polite" onClick={this.onClick}>
                <div className="ui-growl-item ui-helper-clearfix">
                    {closeIcon}
                    <span className={iconClassName}></span>
                    <div className="ui-growl-message">
                        <span className="ui-growl-title">{this.props.message.summary}</span>
                        <p>{this.props.message.detail}</p>
                    </div>
                </div>
            </div>
        );

    }
}