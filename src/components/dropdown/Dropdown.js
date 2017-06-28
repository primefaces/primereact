import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';

export class Dropdown extends Component {

    static defaultProps = {
        value: null,
        options: null,
        onChange: null,
        itemTemplate: null,
        style: null,
        className: null,
        autoWidth: true,
        scrollHeight: '200px'
    };

    static propTypes = {
        value: PropTypes.any,
        options: PropTypes.array,
        onChange: PropTypes.func,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        autoWidth: PropTypes.bool,
        scrollHeight: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {focus: false};
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.documentClickListener = this.onDocumentClick.bind(this);
        document.addEventListener('click', this.documentClickListener);

        if(this.props.autoWidth) {
            if(!this.props.style||(!this.props.style['width']&&!this.props.style['min-width'])) {
                this.container.style.width = this.selectElement.offsetWidth + 32 + 'px';
            }
        }
    }

    componentWillUnmount() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
        }
    }

    onDocumentClick() {
        if(!this.selfClick&&!this.itemClick) {
            this.hide();
        }

        this.selfClick = false;
        this.optionClick = false;
    }

    onOptionClick(event, option, index) {
        this.optionClick = true;
        this.highlightOption=option;
        this.selectItem(event, option, index);
        this.hide();
        this.input.focus();
        event.preventDefault();
    }

    selectItem(event, option, index) {
        //if(!DomHandler.hasClass(event.target,'ui-state-highlight')) {
        this.props.onChange({
            originalEvent: event,
            value: option.value,
            index: index
        });
        // }
    }

    onClick() {
        if(this.props.disabled) {
            return;
        }

        this.selfClick = true;

        if(!this.optionClick) {
            this.input.focus();
            if(this.panel.offsetParent)
                this.hide();
            else
                this.show();
        }
    }

    findSelectedOption() {
        var selectedOption;
        if(this.props.options) {
            for(var option of this.props.options) {
                if(option.value === this.props.value) {
                    selectedOption = option;
                    break;
                }
            }
        }

        return selectedOption;
    }

    show() {
        if(this.props.options && this.props.options.length) {
            this.panel.style.zIndex = DomHandler.getZindex();
            DomHandler.relativePosition(this.panel, this.container);
            DomHandler.fadeIn(this.panel, 250);
            this.panel.style.display = 'block';
        }
    }

    hide() {
        this.panel.style.display = 'none';
    }

    onInputFocus(event) {
        this.setState({focus: true});
    }

    onInputBlur(event) {
        this.setState({focus: false});
    }

    onMouseEnterForItem(option) {
        this.setState({highlightOption: option});
    }

    onMouseLeaveForItem() {
        this.setState({highlightOption: null});
    }
    findOptionIndex(option) {
        let index = 0;
        if(this.props.options) {
            for(let i = 0; i < this.props.options.length; i++) {
                if(ObjectUtils.equals(option, this.props.options[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    onKeydown(event) {
        let highlightItemIndex =this.highlightOption? this.findOptionIndex(this.highlightOption):0;

        switch(event.which) {
            //down
            case 40:
                if( event.altKey ){
                    this.show();
                }
                else{
                    if (highlightItemIndex !== -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if (nextItemIndex !== (this.props.options.length)) {
                            this.highlightOption = this.props.options[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }

                        this.selectItem(event, this.highlightOption);
                    }
                    else {
                        this.highlightOption = this.props.options[0];
                    }
                }
                event.preventDefault();
                break;

            //up
            case 38:
                if(highlightItemIndex > 0) {
                    let prevItemIndex = highlightItemIndex - 1;
                    this.highlightOption = this.props.options[prevItemIndex];
                    this.highlightOptionChanged = true;
                    this.selectItem(event, this.highlightOption);
                }

                event.preventDefault();
                break;

            //enter
            case 13:
                if(this.highlightOption) {
                    this.selectItem(event, this.highlightOption);
                    this.hide();
                }
                event.preventDefault();
                break;

            //escape
            case 27:
                this.hide();
                event.preventDefault();
                break;

            //space
            case 32:
                if(this.panel.style.display==='block') {
                    if (this.highlightOption) {
                        this.selectItem(event, this.highlightOption);
                        this.hide();
                    }
                }
                else{
                    this.show();
                }
                event.preventDefault();
                break;

        }
        this.setState({highlightOption: this.highlightOption});
    }

    render() {
        var styleClass = classNames('ui-dropdown ui-widget ui-state-default ui-corner-all', this.props.className, {
            'ui-state-disabled': this.props.disabled,
            'ui-state-focus': this.state.focus
        });

        var selectedOption = this.findSelectedOption();
        var label = selectedOption ? selectedOption.label : (this.props.options ? this.props.options[0].label : null);
        var listItems, optionElements;

        if(this.props.options) {
            listItems = this.props.options.map((option, index) => {
                var listItemContent = this.props.itemTemplate ? this.props.itemTemplate(option) : option.label;
                var selected = (this.props.value != null && this.props.value === option.value) || (this.props.value == null && index === 0);
                var listItemStyleClass = classNames('ui-dropdown-item ui-corner-all', {'ui-state-highlight': selected || this.state.highlightOption === option});
                var listItem = <li className={listItemStyleClass} key={option.value} onClick={(event) => this.onOptionClick(event, option)}
                                   onMouseEnter={(e) => this.onMouseEnterForItem(option)} onMouseLeave={this.onMouseLeaveForItem.bind(this)}>
                    {listItemContent}
                </li>;

                return listItem;
            });

            optionElements = this.props.options.map((option, index) => {
                return <option value={option.value} key={option.value}>{option.label}</option>;
            });
        }

        return (
            <div className={styleClass} onClick={this.onClick} ref={(el) => {this.container = el;}} style={this.props.style}>
                <div className="ui-helper-hidden-accessible">
                    <select tabIndex="-1" ref={(el) => {this.selectElement = el;}}>{optionElements}</select>
                </div>
                <div className="ui-helper-hidden-accessible">
                    <input readOnly ref={(el) => {this.input = el;}} type="text" onFocus={this.onInputFocus.bind(this)} onKeyDown={this.onKeydown.bind(this)} onBlur={this.onInputBlur.bind(this)}/>
                </div>
                <label className="ui-dropdown-label ui-inputtext ui-corner-all">{label}</label>
                <div className="ui-dropdown-trigger ui-state-default ui-corner-right">
                    <span className="fa fa-fw fa-caret-down ui-c"></span>
                </div>
                <div className="ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow" ref={(el) => {this.panel = el;}}>
                    <div className="ui-dropdown-items-wrapper" style={{maxHeight: this.props.scrollHeight}}>
                        <ul className="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                            {listItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}