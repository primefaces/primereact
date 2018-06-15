import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class TriStateCheckbox extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        value: null,
        name: null,
        style: null,
        className: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        value: PropTypes.bool,
        name: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        onChange: PropTypes.func
    }
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
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

    onFocus(e) {
        DomHandler.addClass(this.box, 'ui-state-focus');
    }

    onBlur(e) {
        DomHandler.removeClass(this.box, 'ui-state-focus');
    }

    render() {
        let containerClass = classNames('ui-chkbox ui-tristatecheckbox ui-widget', this.props.className);
        let boxClass = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active':(this.props.value || !this.props.value) && this.props.value !== null});
        let iconClass = classNames('ui-chkbox-icon ui-c', {'pi pi-check': this.props.value === true, 'pi pi-times': this.props.value === false});

        return (
            <div id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick}>
                <div className="ui-helper-hidden-accessible">
                    <input ref={(el) => this.inputEL = el} type="checkbox" id={this.props.inputId} name={this.props.name} onFocus={this.onFocus} onBlur={this.onBlur}/>
                </div>
                <div className={boxClass} ref={(el) => { this.box = el; }}>
                    <span className={iconClass}></span>
                </div>
            </div>
        );
    }
}