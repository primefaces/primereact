import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Button extends Component {

    static defaultProps = {
        label: null,
        icon: null,
        iconPos: 'left',
        cornerStyleClass: 'ui-corner-all'
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        iconPos: PropTypes.string,
        cornerStyleClass: PropTypes.string
    };

    renderIcon() {
        if(this.props.icon) {
            let className = classNames(this.props.icon, 'ui-c', {
                'ui-button-icon-left': this.props.iconPos !== 'right',
                'ui-button-icon-right': this.props.iconPos === 'right'
            });

            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderLabel() {
        const buttonLabel = this.props.label||'ui-btn';

        return (
            <span className="ui-button-text ui-c">{buttonLabel}</span>
        );
    }

    render() {
        let className = classNames('ui-button ui-widget ui-state-default', this.props.cornerStyleClass, this.props.className, {
                'ui-button-icon-only': this.props.icon && !this.props.label,
                'ui-button-text-icon-left': this.props.icon && this.props.label && this.props.iconPos === 'left',
                'ui-button-text-icon-right': this.props.icon && this.props.label && this.props.iconPos === 'right',
                'ui-button-text-only': !this.props.icon && this.props.label,
                'ui-state-disabled': this.props.disabled
        });
        let icon = this.renderIcon();
        let label = this.renderLabel();

        let buttonProps = Object.assign({}, this.props);
        delete buttonProps.iconPos;
        delete buttonProps.icon;
        delete buttonProps.label;
        delete buttonProps.cornerStyleClass;

        return (
            <button {...buttonProps} className={className}>
                {this.props.iconPos === 'left' && icon}
                {label}
                {this.props.iconPos === 'right' && icon}
                {this.props.children}
            </button>
        );
    }
}
