import React, {Component} from 'react';
import classNames from 'classnames';

export class TriStateCheckbox extends Component {

    static defaultProps = {
        value: null,
        onChange: null
    };
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    

    onClick(event) {
        this.toggle(event);
        this.inputEL.focus();
    }

    toggle(event) {
        var newValue;
        if(this.props.value === null || this.props.value === undefined)
            newValue = true;
        else if(this.props.value === true)
            newValue = false;
        else if(this.props.value === false)
            newValue = null;
            
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: newValue
            })
        }
    }

    render() {
        var boxClass = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active':(this.props.value || !this.props.value) && this.props.value !== null}),
        iconClass = classNames('ui-chkbox-icon ui-c', {'fa fa-check': this.props.value === true, 'fa fa-close': this.props.value === false});

        return (
                <div className='ui-chkbox ui-tristatechkbox ui-widget'>
                    <div className="ui-helper-hidden-accessible">
                        <input ref={(el) => this.inputEL = el} type="checkbox" readOnly/>
                    </div>
                    <div className={boxClass}
                        onClick={this.onClick}>
                        <span className={iconClass}></span>
                    </div>
                </div>
        );
    }
}