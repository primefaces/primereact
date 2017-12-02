import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class GrowlMessage extends Component {

    static defaultProps = {
        message: null,
        onClose: null
    }

    static propTypes = {
        message: PropTypes.object,
        onClose: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }

    componentDidMount() {
        if(!this.props.message.sticky) {
            setTimeout(() => {
                this.close(null);
            }, this.props.message.life||3000);
        }
    }

    close(event) {
        if(this.props.onClose) {
            this.props.onClose({
                message: this.props.message
            })
        }

        if(event) {
            event.preventDefault();
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

        return (
            <div ref={(el) => { this.element = el; }} className={className} aria-live="polite">
                <div className="ui-growl-item ui-helper-clearfix">
                    <a href="#" className="ui-growl-icon-close fa fa-close" onClick={this.close}></a>
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