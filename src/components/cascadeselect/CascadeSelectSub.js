import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class CascadeSelectSub extends Component {

    static defaultProps = {
        options: null,
        selectionPath: false,
        className: null,
        optionLabel: null,
        optionValue: null,
        level: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        parentActive: null,
        dirty: null,
        root: null,
        template: null,
        onOptionSelect: null,
        onOptionGroupSelect: null
    };

    static propTypes = {
        options: PropTypes.array,
        selectionPath: PropTypes.any,
        className: PropTypes.string,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        level: PropTypes.number,
        optionGroupLabel: PropTypes.string,
        optionGroupChildren: PropTypes.array,
        parentActive: PropTypes.bool,
        dirty: PropTypes.bool,
        root: PropTypes.bool,
        template: PropTypes.any,
        onOptionSelect: PropTypes.func,
        onOptionGroupSelect: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            activeOption: null
        };

        this.onOptionSelect = this.onOptionSelect.bind(this);
        this.onOptionGroupSelect = this.onOptionGroupSelect.bind(this);
    }

    componentDidMount() {
        if (this.props.selectionPath && this.props.options && !this.props.dirty) {
            for (let option of this.props.options) {
                if (this.props.selectionPath.includes(option)) {
                    this.setState({ activeOption: option });
                    break;
                }
            }
        }

        if (!this.props.root) {
            this.position();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.parentActive !== this.props.parentActive) {
            this.setState({ activeOption: null })
        }
    }

    position() {
        const parentItem = this.element.parentElement;
        const containerOffset = DomHandler.getOffset(parentItem);
        const viewport = DomHandler.getViewport();
        const sublistWidth = this.element.offsetParent ? this.element.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.element);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

        if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
            this.element.style.left = '-100%';
        }
    }

    onOptionSelect(event) {
        if (this.props.onOptionSelect) {
            this.props.onOptionSelect(event);
        }
    }

    onKeyDown(event, option) {
        let listItem = event.currentTarget.parentElement;

        switch (event.key) {
            case 'Down':
            case 'ArrowDown':
                let nextItem = this.findNextItem(listItem);
                if (nextItem) {
                    nextItem.children[0].focus();
                }
                break;

            case 'Up':
            case 'ArrowUp':
                let prevItem = this.findPrevItem(listItem);
                if (prevItem) {
                    prevItem.children[0].focus();
                }
                break;

            case 'Right':
            case 'ArrowRight':
                if (this.isOptionGroup(option)) {
                    if (this.state.activeOption === option) {
                        listItem.children[1].children[0].children[0].focus();
                    }
                    else {
                        this.setState({ activeOption: option });
                    }
                }
                break;

            case 'Left':
            case 'ArrowLeft':
                this.setState({ activeOption: null });

                let parentList = event.currentTarget.parentElement.parentElement.previousElementSibling;
                if (parentList) {
                    parentList.focus();
                }
                break;

            case 'Enter':
                this.onOptionClick(event, option);
                break;

            default:
                break;
        }

        event.preventDefault();
    }

    findNextItem(item) {
        let nextItem = item.nextElementSibling;

        if (nextItem)
            return DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-cascadeselect-item') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        if (prevItem)
            return DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-cascadeselect-item') ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }

    onOptionClick(event, option) {
        if (this.isOptionGroup(option)) {
            this.setState({ activeOption: (this.state.activeOption === option) ? null : option });

            if (this.props.onOptionGroupSelect) {
                this.props.onOptionGroupSelect({
                    originalEvent: event,
                    value: option
                });
            }
        }
        else {
            if (this.props.onOptionSelect) {
                this.props.onOptionSelect({
                    originalEvent: event,
                    value: this.getOptionValue(option),
                });
            }
        }
    }

    onOptionGroupSelect(event) {
        if (this.props.onOptionGroupSelect) {
            this.props.onOptionGroupSelect(event);
        }
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option;
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : option;
    }

    getOptionGroupLabel(optionGroup) {
        return this.props.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel) : null;
    }

    getOptionGroupChildren(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupChildren[this.props.level]);
    }

    isOptionGroup(option) {
        return Object.prototype.hasOwnProperty.call(option, this.props.optionGroupChildren[this.props.level]);
    }

    getOptionLabelToRender(option) {
        return this.isOptionGroup(option) ? this.getOptionGroupLabel(option) : this.getOptionLabel(option);
    }

    renderSubmenu(option) {
        if (this.isOptionGroup(option) && this.state.activeOption === option) {
            return (
                <CascadeSelectSub options={this.getOptionGroupChildren(option)} className={"p-cascadeselect-sublist"} selectionPath={this.props.selectionPath} optionLabel={this.props.optionLabel}
                    optionValue={this.props.optionValue} level={this.props.level + 1} onOptionSelect={this.onOptionSelect} onOptionGroupSelect={this.onOptionGroupSelect}
                    parentActive={this.state.activeOption === option} optionGroupLabel={this.props.optionGroupLabel} optionGroupChildren={this.props.optionGroupChildren}
                    dirty={this.props.dirty} template={this.props.template} />
            );
        }

        return null;
    }

    renderOption(option, index) {
        const className = classNames('p-cascadeselect-item', {
            'p-cascadeselect-item-group': this.isOptionGroup(option),
            'p-cascadeselect-item-active p-highlight': this.state.activeOption === option
        }, option.className);
        const submenu = this.renderSubmenu(option);
        const content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.getOptionValue(option)) :
            <span className="p-cascadeselect-item-text">{this.getOptionLabelToRender(option)}</span>;
        const optionGroup = this.isOptionGroup(option) && <span className="p-cascadeselect-group-icon pi pi-angle-right" />

        return (
            <li key={this.getOptionLabelToRender(option) + '_' + index} className={className} style={option.style} role="none">
                <div className={"p-cascadeselect-item-content"} onClick={event => this.onOptionClick(event, option)} tabIndex={0} onKeyDown={event => this.onKeyDown(event, option)}>
                    {content}
                    {optionGroup}
                    <Ripple />
                </div>
                {submenu}
            </li>
        );
    }

    renderMenu() {
        if (this.props.options) {
            return (
                this.props.options.map((option, index) => {
                    return this.renderOption(option, index);
                })
            );
        }

        return null;
    }

    render() {
        const className = classNames('p-cascadeselect-panel p-cascadeselect-items', this.props.className)
        const submenu = this.renderMenu();

        return (
            <ul ref={el => this.element = el} className={className} role="listbox" aria-orientation="horizontal">
                {submenu}
            </ul>
        );
    }
}
