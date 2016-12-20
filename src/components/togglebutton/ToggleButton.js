import React, {Component} from 'react';
import classNames from 'classnames';

export class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = { checked: true };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({checked: !this.state.checked})
    }

    render() {
        var styleClass = classNames('ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all', this.props.className, {
            'ui-button-text-icon-left': (this.props.onIcon && this.props.offIcon),
            'ui-button-text-only': (!this.props.onIcon && !this.props.offIcon) && (this.props.onLabel || this.props.offLabel),
            'ui-state-active': this.state.checked,
            'ui-state-disabled': this.props.disabled
        }),
        onIconStyleClass = null,
        offIconStyleClass = null;

        if(this.props.onIcon) {
            onIconStyleClass = classNames('ui-c fa fa-fw' , this.props.onIcon , {
                'ui-button-icon-only': (this.props.onIcon && this.props.offIcon) && (!this.props.onLabel || !this.props.offLabel),
                'ui-button-icon-left': (this.props.onIcon && this.props.offIcon)
            });
        }

        if(this.props.offIcon) {
            offIconStyleClass = classNames('ui-c fa fa-fw' , this.props.offIcon , {
                'ui-button-icon-only': (this.props.onIcon && this.props.offIcon) && (!this.props.onLabel || !this.props.offLabel),
                'ui-button-icon-left': (this.props.onIcon && this.props.offIcon)
            });
        }

        return (
           <div className={styleClass} style={this.props.style} onClick={this.toggle}>
                <div className="ui-helper-hidden-accessible">
                    <input type="checkbox"/>
                </div>
                {(this.props.onIcon && this.props.offIcon) && <span className={this.state.checked ? onIconStyleClass : offIconStyleClass}></span>}
                <span className="ui-button-text ui-unselectable-text">{this.state.checked ? this.props.onLabel : this.props.offLabel}</span>
            </div>
        );
    }
}

ToggleButton.defaultProps = {
    onIcon: null,
    offIcon: null,
    onLabel: 'Yes',
    offLabel: 'No',
    style: null,
    className: null,
    checked: false
};

ToggleButton.propTypes = {
    onIcon: React.PropTypes.string,
    offIcon: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    offLabel: React.PropTypes.string,
    style: React.PropTypes.object,
    className: React.PropTypes.string
};