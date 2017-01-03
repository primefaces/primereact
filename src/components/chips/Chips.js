import React, {Component} from 'react';
import classNames from 'classnames';

export class Chips extends Component {

    constructor(props) {
        super(props);
        this.state = {inputValue : props.value};
        this.inputFocus = this.inputFocus.bind(this);
    }

    onKeydown(event) {
        switch(event.which) {
            //backspace
            case 8:
                if(this.inputEL.value.length === 0 && this.state.inputValue && this.state.inputValue.length > 0) {
                    var newArray = this.state.inputValue.slice(),
                    removedItem = newArray.pop();
                    this.setState({inputValue: newArray});

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
                this.state.inputValue = this.state.inputValue || [];
                if(this.inputEL.value && this.inputEL.value.trim().length && (!this.props.max||this.props.max > this.state.inputValue.length)) {
                    var newArray = this.state.inputValue.slice();
                    newArray.push(this.inputEL.value);
                    this.setState({inputValue: newArray});
                    
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
                if(this.props.max && this.state.inputValue && this.props.max === this.state.inputValue.length) {
                    event.preventDefault();
                }
            break;
        }
    }

    removeItem(event, index) {
        if(this.props.disabled) {
            return;
        }
        
        var newArray = this.state.inputValue.slice(),
        removedItem = newArray.splice(index, 1);
        this.setState({inputValue: newArray});

        if(this.props.onRemove) {
            this.props.onRemove({
                originalEvent: event,
                value: removedItem
            });
        }
    }

    resolveFieldData(data, field) {
        if(data && field) {
            if(field.indexOf('.') === -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for(var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }

    maxedOut() {
        return this.props.max && this.state.inputValue && this.props.max === this.state.inputValue.length;
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
                        {this.state.inputValue && this.state.inputValue.map( (item , index) => {
                            var customContent = this.props.itemTemplate ? this.props.itemTemplate(item) : item;
                            var chipsItem = <li className="ui-chips-token ui-state-highlight ui-corner-all" key={index}>
                                <span className="ui-chips-token-icon fa fa-fw fa-close" onClick={() => this.removeItem(event, index)}></span>
                                <span className="ui-chips-token-label">{this.props.field ? this.resolveFieldData(item,this.props.field) : customContent}</span>
                            </li>;
                            return chipsItem;
                        })}
                        <li className="ui-chips-input-token">
                            <input ref={(el) => this.inputEL = el} type="text" disabled={this.props.disabled || this.maxedOut()} onKeyDown={(e) => this.onKeydown(e)}/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

Chips.defaultProps = {
    placeholder: null,
    value: null,
    field: null,
    max: null,
    disabled: null,
    style: null,
    className: null,
    onAdd: null,
    onRemove: null,
    itemTemplate: null
};

Chips.propTypes = {
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
};