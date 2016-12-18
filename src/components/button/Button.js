import React, {Component} from 'react';
import classNames from 'classnames';

export class Button extends Component {
    
    render() {
        var styleClass = classNames('ui-button ui-widget ui-state-default ui-corner-all', {
                'ui-button-text-only': !this.props.icon && this.props.label,
                'ui-button-icon-only': this.props.icon && !this.props.label,
                'ui-button-text-icon-left': this.props.icon && this.props.iconPos === 'left',
                'ui-button-text-icon-right': this.props.icon && this.props.iconPos === 'right'
        }),
        iconStyleClass = null;
        
        if(this.props.icon) {
            iconStyleClass = classNames(this.icon, 'ui-c fa fa-fw', {
                'ui-button-icon-left': this.iconPos === 'left',
                'ui-button-icon-right': this.iconPos === 'right'
            });
        }

        return (
            <button type="button" className={styleClass}>
                {this.props.icon && <span className={iconStyleClass}></span>}
                <span className="ui-button-text ui-c">{this.props.label||'ui-button'}</span>
            </button>
        );
    }
}

Button.defaultProps = {
    label: null,
    icon: null,
    iconPos: 'left'
}