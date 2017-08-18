import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class RadioButton extends Component {

    static defaultProps = {
        id: null,
        label: null,
        value: null,
        onChange: null,
        checked: false
    };

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        onChange: PropTypes.func,
        checked: PropTypes.bool
    };
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    select(e) {
        this.input.checked = true;
        this.onClick(e);
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
            <div id={this.props.id} className={classNames('ui-radiobutton-container', this.props.className)}>
                <div className='ui-radiobutton ui-widget'>
                    <div className="ui-helper-hidden-accessible">
                        <input ref={(el) => this.input = el} type="radio" />
                    </div>
                    <div className={boxClass}
                        onClick={this.onClick}>
                        <span className={iconClass}></span>
                    </div>
                </div>
                {this.props.label && <label className="ui-radiobutton-label" onClick={this.select.bind(this)}>{this.props.label}</label>}
            </div>
        )
    }
}