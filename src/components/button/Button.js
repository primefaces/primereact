import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Button extends Component {

    static defaultProps = {
        label: null,
        icon: null,
        iconPos: 'left',
        cornerStyleClass: 'p-corner-all'
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        iconPos: PropTypes.string,
        cornerStyleClass: PropTypes.string
    };

    renderIcon() {
        if(this.props.icon) {
            let className = classNames(this.props.icon, 'p-c', {
                'p-button-icon-left': this.props.iconPos !== 'right',
                'p-button-icon-right': this.props.iconPos === 'right'
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
        const buttonLabel = this.props.label||'p-btn';

        return (
            <span className="p-button-text p-c">{buttonLabel}</span>
        );
    }

    render() {
        let className = classNames('p-button p-component', this.props.cornerStyleClass, this.props.className, {
                'p-button-icon-only': this.props.icon && !this.props.label,
                'p-button-text-icon-left': this.props.icon && this.props.label && this.props.iconPos === 'left',
                'p-button-text-icon-right': this.props.icon && this.props.label && this.props.iconPos === 'right',
                'p-button-text-only': !this.props.icon && this.props.label,
                'p-disabled': this.props.disabled
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
