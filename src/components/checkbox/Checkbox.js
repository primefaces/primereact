import React, {Component} from 'react';
import classNames from 'classnames';

export class Checkbox extends Component {
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: !this.props.checked
            });
        }
    }

    render() {
        var boxClass = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active':this.props.checked}),
        iconClass = classNames('ui-chkbox-icon ui-c', {'fa fa-check': this.props.checked});
        
        return (
            <div className={classNames('ui-chkbox-container', this.props.className)}>
                <div className='ui-chkbox ui-widget'>
                    <div className="ui-helper-hidden-accessible">
                        <input type="checkbox" />
                    </div>
                    <div className={boxClass}
                        onClick={this.onClick}>
                        <span className={iconClass}></span>
                    </div>
                </div>
                {this.props.label && <label className="ui-chkbox-label">{this.props.label}</label>}
            </div>
        )
    }
}

Checkbox.defaultProps = {
    label: null,
    value: null,
    onChange: null,
    checked: false
};

Checkbox.propTypes = {
    label: React.PropTypes.string,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
    checked: React.PropTypes.bool
};