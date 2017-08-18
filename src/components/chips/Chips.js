import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';

export class Chips extends Component {

    static defaultProps = {
        id: null,
        placeholder: null,
        value: [],
        field: null,
        max: null,
        disabled: null,
        style: null,
        className: null,
        onAdd: null,
        onRemove: null,
        itemTemplate: null
    }

    static propTypes = {
        id: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.array,
        field: PropTypes.string,
        max: PropTypes.number,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        onAdd: PropTypes.func,
        onRemove: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {values : props.value, focus: false};
        this.inputFocus = this.inputFocus.bind(this);
    }

    onKeydown(event) {
        var stateValues;

        switch(event.which) {
            //backspace
            case 8:
                if(this.inputEL.value.length === 0 && this.state.values && this.state.values.length > 0) {
                    stateValues = [...this.state.values];
                    var removedItem = stateValues.pop();
                    this.setState({values: stateValues});

                    if(this.props.onRemove) {
                        this.props.onRemove({
                            originalEvent: event,
                            value: removedItem
                        });
                    }
                }
            break;
            
            //enter
            case 13:
                if(this.inputEL.value && this.inputEL.value.trim().length && (!this.props.max||this.props.max > this.state.values.length)) {
                    stateValues = [...this.state.values];
                    stateValues.push(this.inputEL.value);
                    this.setState({values: stateValues});
                    
                    if(this.props.onAdd) {
                        this.props.onAdd({
                            originalEvent: event,
                            value: this.inputEL.value
                        });
                    }
                }
                this.inputEL.value = '';
                event.preventDefault();
            break;
            
            default:
                if(this.props.max && this.state.values && this.props.max === this.state.values.length) {
                    event.preventDefault();
                }
            break;
        }
    }

    removeItem(event, index) {
        if(this.props.disabled) {
            return;
        }
        
        var stateValues = [...this.state.values];
        var removedItem = stateValues.splice(index, 1);
        this.setState({values: stateValues});

        if(this.props.onRemove) {
            this.props.onRemove({
                originalEvent: event,
                value: removedItem
            });
        }
    }

    maxedOut() {
        return this.props.max && this.state.values && this.props.max === this.state.values.length;
    }

    inputFocus() {
        this.inputEL.focus();
    }

    onFocus() {
        this.setState({focus: true});
    }
    
    onBlur() {
        this.setState({focus: false});
    }

    render() {
        var listClassName = classNames('ui-inputtext ui-state-default ui-corner-all', {
            'ui-state-disabled': this.props.disabled,
            'ui-state-focus': this.state.focus
        });

        if(this.state.values) {
            var items = this.state.values.map((value , index) => {
                            var customContent = this.props.itemTemplate ? this.props.itemTemplate(value) : value;
                            var item = <li className="ui-chips-token ui-state-highlight ui-corner-all" key={index}>
                                <span className="ui-chips-token-icon fa fa-fw fa-close" onClick={(event) => this.removeItem(event, index)}></span>
                                <span className="ui-chips-token-label">{this.props.field ? ObjectUtils.resolveFieldData(value, this.props.field) : customContent}</span>
                            </li>;
                            return item;
                        });
        }

        var inputToken = <li className="ui-chips-input-token">
                            <InputText ref={(el) => this.inputEL = ReactDOM.findDOMNode(el)} type="text" disabled={this.props.disabled||this.maxedOut()} 
                                        onKeyDown={(event) => this.onKeydown(event)} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)}/>
                        </li>;

        return (
            <div id={this.props.id}>
                <div className={classNames('ui-chips ui-widget', this.props.className)} style={this.props.style}>
                    <ul className={listClassName} onClick={this.inputFocus}>
                        {items}
                        {inputToken}
                    </ul>
                </div>
            </div>
        );
    }
}