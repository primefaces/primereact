import React, {Component} from 'react';
import classNames from 'classnames';

export class RadioButton extends Component {

    static defaultProps = {
        label: null,
        value: null,
        onChange: null,
        checked: false
    };

    static propTypes = {
        label: React.PropTypes.string,
        value: React.PropTypes.any,
        onChange: React.PropTypes.func,
        checked: React.PropTypes.bool
    };
    
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
        var boxClass = classNames('ui-radiobutton-box ui-widget ui-corner-all ui-state-default', {'ui-state-active':this.props.checked}),
        iconClass = classNames('ui-radiobutton-icon ui-c', {'fa fa-circle': this.props.checked});
        
        return (
            <div className={classNames('ui-radiobutton-container', this.props.className)}>
                <div className='ui-radiobutton ui-widget'>
                    <div className="ui-helper-hidden-accessible">
                        <input type="radio" />
                    </div>
                    <div className={boxClass}
                        onClick={this.onClick}>
                        <span className={iconClass}></span>
                    </div>
                </div>
                {this.props.label && <label className="ui-radiobutton-label">{this.props.label}</label>}
            </div>
        )
    }
}