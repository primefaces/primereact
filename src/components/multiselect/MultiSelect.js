import React, {Component} from 'react';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class MultiSelect extends Component {

    constructor(props) {
        super(props);
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
        var model = this.props.value ? this.props.value.slice() : [];
        var type = null;
        var indexInValue = this.findIndexInValue(option);

        if(this.isSelected(option)) {
            model.splice(indexInValue, 1);
            type = -1;
        }
        else {
            model.push(option.value);
            type = 1;
        }

        this.props.onChange({
            originalEvent: event,
            value: model,
            index: index,
            type: type
        });

        event.preventDefault();
    }

    onClick() {
        if(this.props.disabled) {
            return;
        }

        this.selfClick = true;

        if(!this.optionClick) {
            if(this.panel.offsetParent)
                this.hide();
            else
                this.show();
        }
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

    findIndexInValue(option) {
        return this.props.value ? this.props.value.findIndex(val => val === option.value) : -1;
    }

    isSelected(option) {
        return this.props.value ? this.props.value.includes(option.value) : false;
    }

    getLabel() {
        var label;
        if(this.props.value && this.props.value.length) {
            label = '';
            for(let i = 0; i < this.props.value.length; i++) {
                if(i != 0) {
                    label = label + ',';
                }
                label = label + this.findLabelByValue(this.props.value[i]);
            }
        }
        else {
            label = this.props.defaultLabel;
        }

        return label;
    }

    findLabelByValue(val) {
        var label = null;
        for(var i = 0; i < this.props.options.length; i++) {
            var option = this.props.options[i];
            if(option.value == val) {
                label = option.label;
                break; 
            }
        }
        return label;
    }

    render() {
        var styleClass = classNames('ui-multiselect ui-widget ui-state-default ui-corner-all', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });

        var label = this.getLabel();
        var listItems;;

        if(this.props.options) {
            listItems = this.props.options.map((option, index) => {
                    var selected = this.isSelected(option);
                    var listItemStyleClass = classNames('ui-multiselect-item ui-corner-all', {'ui-state-highlight': selected});
                    var checkboxStyleClass = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active': selected});
                    var checkboxIcon = classNames('ui-chkbox-icon ui-c', {'fa fa-check': selected});
                    var listItem = <li className={listItemStyleClass} key={option.value} onClick={(event) => this.onOptionClick(event, option, index)}>
                                        <div className="ui-chkbox ui-widget">
                                            <div className="ui-helper-hidden-accessible">
                                                <input readOnly="readonly" type="checkbox" />
                                            </div>
                                            <div className={checkboxStyleClass}>
                                                <span className={checkboxIcon}></span>
                                            </div>
                                        </div>
                                        <label>{option.label}</label>
                                    </li>;

                    return listItem;
                });
        }

        return (
            <div className={styleClass} onClick={this.onClick} ref={(el) => {this.container = el;}} style={this.props.style}>
                <div className="ui-helper-hidden-accessible">
                    <input readOnly type="text" />
                </div>
                <div className="ui-multiselect-label-container" title="Choose">
                    <label className="ui-multiselect-label ui-corner-all">{label}</label>
                </div>
                <div className="ui-multiselect-trigger ui-state-default ui-corner-right">
                    <span className="fa fa-fw fa-caret-down ui-c"></span>
                </div>
                <div className="ui-multiselect-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow" ref={(el) => {this.panel = el;}}>
                    <div className="ui-multiselect-items-wrapper" style={{maxHeight: this.props.scrollHeight}}>
                        <ul className="ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                            {listItems}  
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

MultiSelect.defaultProps = {
    value: null,
    options: null,
    onChange: null,
    style: null,
    className: null,
    scrollHeight: '200px',
    defaultLabel: 'Choose'
};

MultiSelect.propTypes = {
    value: React.PropTypes.any,
    options: React.PropTypes.array,
    onChange: React.PropTypes.func,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    scrollHeight: React.PropTypes.string,
    defaultLabel: React.PropTypes.string
};