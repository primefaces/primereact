import React, {Component} from 'react';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';

export class Chips extends Component {

    static defaultProps = {
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
        placeholder: React.PropTypes.string,
        value: React.PropTypes.array,
        field: React.PropTypes.string,
        max: React.PropTypes.number,
        disabled: React.PropTypes.bool,
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        onAdd: React.PropTypes.func,
        onRemove: React.PropTypes.func,
        itemTemplate: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {values : props.value};
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

    render() {
        var styleClass = classNames('ui-inputtext ui-state-default ui-corner-all', {
                'ui-state-disabled': this.props.disabled
        });

        return (
            <div>
                <div className={classNames('ui-chips ui-widget', this.props.className)} style={this.props.style}>
                    <ul className={styleClass} onClick={this.inputFocus}>
                        {this.state.values && this.state.values.map((item , index) => {
                            var customContent = this.props.itemTemplate ? this.props.itemTemplate(item) : item;
                            var chipsItem = <li className="ui-chips-token ui-state-highlight ui-corner-all" key={index}>
                                <span className="ui-chips-token-icon fa fa-fw fa-close" onClick={(event) => this.removeItem(event, index)}></span>
                                <span className="ui-chips-token-label">{this.props.field ? ObjectUtils.resolveFieldData(item, this.props.field) : customContent}</span>
                            </li>;
                            return chipsItem;
                        })}
                        <li className="ui-chips-input-token">
                            <input ref={(el) => this.inputEL = el} type="text" disabled={this.props.disabled || this.maxedOut()} onKeyDown={(event) => this.onKeydown(event)}/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}