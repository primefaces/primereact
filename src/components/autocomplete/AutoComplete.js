import React, {Component} from 'react';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';

export class AutoComplete extends Component {

    static defaultProps = {
        value: null,
        style: null,
        className: null,
        inputStyle: null,
        inputClassName: null,
        suggestions: null,
        itemTemplate: null,
        field: null,
        onChange: null,
        completeMethod: null
    }

    static propTypes = {
        value: React.PropTypes.any,
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        inputStyle: React.PropTypes.object,
        inputClassName: React.PropTypes.string,
        suggestions: React.PropTypes.array,
        itemTemplate: React.PropTypes.func,
        field: React.PropTypes.string,
        onChange: React.PropTypes.func,
        completeMethod: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.suggestions && this.props.suggestions.length) {
            DomHandler.relativePosition(this.panel, this.input);
            DomHandler.fadeIn(this.panel, 250);
            this.panel.style.zIndex = DomHandler.getZindex();
        }
    }

    onOptionClick(event, suggestion) {
        this.optionClick = true;
        this.selectItem(event, suggestion);           
        this.hide();
        event.preventDefault();
    }

    hide() {
        this.panel.style.display = 'none';
    }

    selectItem(event, suggestion) {
        this.props.onChange({
            originalEvent: event,
            value: suggestion
        });
    }

    onInputChange(event) {
        this.props.onChange({
            originalEvent: event,
            value: event.target.value
        });

        if(this.props.completeMethod) {
            this.props.completeMethod({
                originalEvent: event,
                query: event.target.value
            });
        }
    }
    
    render() {
        var styleClass = classNames('ui-autocomplete ui-widget', this.props.className);
        var inputClass = classNames('ui-autocomplete-input', this.props.inputClassName);
        var value = this.props.value ? this.props.field ? ObjectUtils.resolveFieldData(this.props.value) : this.props.value : '';
        
        if(this.props.suggestions) {
            var suggestions = this.props.suggestions.map((suggestion, index) => {
                var itemContent = this.props.itemTemplate ? this.props.itemTemplate(suggestion) : this.props.field ? ObjectUtils.resolveFieldData(suggestion, this.props.field): suggestion;
                return <li onClick={(event) => this.onOptionClick(event, suggestion)} key={suggestion}>{itemContent}</li>;
            });
        }

        var hasSuggestions = this.props.suggestions && this.props.suggestions.length;

        return (
            <div className={styleClass} style={this.props.style}>
                <input type="text" className={inputClass} style={this.props.inputStyle} autoComplete="off" onChange={this.onInputChange} value={value} ref={(el) => {this.input = el;}}/>

                <div className="ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow" ref={(el) => {this.panel = el;}} style={{display: hasSuggestions ? 'block': 'none'}}>
                    <ul className="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                       {suggestions}
                    </ul>
                </div>
            </div>
        );
    }
}