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

    render() {
        var className = classNames('ui-button ui-widget ui-state-default', this.props.cornerStyleClass, this.props.className, {
                'ui-button-text-only': !this.props.icon && this.props.label,
                'ui-button-icon-only': this.props.icon && !this.props.label,
                'ui-button-text-icon-left': this.props.label && this.props.icon && this.props.iconPos === 'left',
                'ui-button-text-icon-right': this.props.label && this.props.icon && this.props.iconPos === 'right',
                'ui-state-disabled': this.props.disabled
        }),
        iconStyleClass = null;

        var buttonProps = Object.assign({}, this.props);
        delete buttonProps.iconPos;
        delete buttonProps.icon;
        delete buttonProps.label;
        delete buttonProps.cornerStyleClass;

        if(this.props.icon) {
            iconStyleClass = classNames(this.props.icon, 'ui-c fa fa-fw', {
                'ui-button-icon-left': this.props.iconPos !== 'right',
                'ui-button-icon-right': this.props.iconPos === 'right'
            });
        }

        return (
            <button {...buttonProps} className={className}>
                {this.props.icon && <span className={iconStyleClass}></span>}
                <span className="ui-button-text ui-c">{this.props.label||'ui-btn'}</span>
                {this.props.children}
            </button>
        );
    }
}
