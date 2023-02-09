import * as React from 'react';
import PrimeReact from '../api/Api';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const CascadeSelectSub = React.memo((props) => {
    const [activeOptionState, setActiveOptionState] = React.useState(null);
    const elementRef = React.useRef(null);

    const position = () => {
        const parentItem = elementRef.current.parentElement;
        const containerOffset = DomHandler.getOffset(parentItem);
        const viewport = DomHandler.getViewport();
        const sublistWidth = elementRef.current.offsetParent ? elementRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(element);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

        if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
            elementRef.current.style.left = '-100%';
        }
    };

    const onOptionSelect = (event) => {
        props.onOptionSelect && props.onOptionSelect(event);
    };

    const onKeyDown = (event, option) => {
        const listItem = event.currentTarget.parentElement;

        switch (event.key) {
            case 'Down':
            case 'ArrowDown':
                const nextItem = findNextItem(listItem);

                if (nextItem) {
                    nextItem.children[0].focus();
                }

                break;

            case 'Up':
            case 'ArrowUp':
                const prevItem = findPrevItem(listItem);

                if (prevItem) {
                    prevItem.children[0].focus();
                }

                break;

            case 'Right':
            case 'ArrowRight':
                if (isOptionGroup(option)) {
                    if (activeOptionState === option) {
                        listItem.children[1].children[0].children[0].focus();
                    } else {
                        setActiveOptionState(option);
                    }
                }

                break;

            case 'Left':
            case 'ArrowLeft':
                setActiveOptionState(null);

                const parentList = event.currentTarget.parentElement.parentElement.previousElementSibling;

                if (parentList) {
                    parentList.focus();
                }

                break;

            case 'Enter':
                onOptionClick(event, option);
                break;

            case 'Tab':
            case 'Escape':
                if (props.onPanelHide) {
                    props.onPanelHide();
                    event.preventDefault();
                }

                break;

            default:
                break;
        }

        event.preventDefault();
    };

    const findNextItem = (item) => {
        const nextItem = item.nextElementSibling;

        return nextItem ? (DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-cascadeselect-item') ? findNextItem(nextItem) : nextItem) : null;
    };

    const findPrevItem = (item) => {
        const prevItem = item.previousElementSibling;

        return prevItem ? (DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-cascadeselect-item') ? findPrevItem(prevItem) : prevItem) : null;
    };

    const onOptionClick = (event, option) => {
        if (isOptionGroup(option)) {
            setActiveOptionState((prevActiveOption) => (prevActiveOption === option ? null : option));

            if (props.onOptionGroupSelect) {
                props.onOptionGroupSelect({
                    originalEvent: event,
                    value: option
                });
            }
        } else {
            if (props.onOptionSelect) {
                props.onOptionSelect({
                    originalEvent: event,
                    value: getOptionValue(option)
                });
            }
        }
    };

    const onOptionGroupSelect = (event) => {
        props.onOptionGroupSelect && props.onOptionGroupSelect(event);
    };

    const getOptionLabel = (option) => {
        return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option;
    };

    const getOptionValue = (option) => {
        return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option;
    };

    const getOptionGroupLabel = (optionGroup) => {
        return props.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel) : null;
    };

    const getOptionGroupChildren = (optionGroup) => {
        return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren[props.level]);
    };

    const isOptionGroup = (option) => {
        return Object.prototype.hasOwnProperty.call(option, props.optionGroupChildren[props.level]);
    };

    const getOptionLabelToRender = (option) => {
        return isOptionGroup(option) ? getOptionGroupLabel(option) : getOptionLabel(option);
    };

    useMountEffect(() => {
        if (props.selectionPath && props.options && !props.dirty) {
            const activeOption = props.options.find((o) => props.selectionPath.includes(o));

            activeOption && setActiveOptionState(activeOption);
        }

        if (!props.root) {
            position();
        }
    });

    useUpdateEffect(() => {
        setActiveOptionState(null);
    }, [props.parentActive]);

    const createSubmenu = (option) => {
        if (isOptionGroup(option) && activeOptionState === option) {
            const options = getOptionGroupChildren(option);
            const parentActive = activeOptionState === option;
            const level = props.level + 1;

            return (
                <CascadeSelectSub
                    options={options}
                    className="p-cascadeselect-sublist"
                    selectionPath={props.selectionPath}
                    optionLabel={props.optionLabel}
                    optionValue={props.optionValue}
                    level={level}
                    onOptionSelect={onOptionSelect}
                    onOptionGroupSelect={onOptionGroupSelect}
                    parentActive={parentActive}
                    optionGroupLabel={props.optionGroupLabel}
                    optionGroupChildren={props.optionGroupChildren}
                    dirty={props.dirty}
                    template={props.template}
                    onPanelHide={props.onPanelHide}
                />
            );
        }

        return null;
    };

    const createOption = (option, index) => {
        const className = classNames(
            'p-cascadeselect-item',
            {
                'p-cascadeselect-item-group': isOptionGroup(option),
                'p-cascadeselect-item-active p-highlight': activeOptionState === option
            },
            option.className
        );
        const submenu = createSubmenu(option);
        const content = props.template ? ObjectUtils.getJSXElement(props.template, getOptionValue(option)) : <span className="p-cascadeselect-item-text">{getOptionLabelToRender(option)}</span>;
        const optionGroup = isOptionGroup(option) && <span className="p-cascadeselect-group-icon pi pi-angle-right" />;
        const key = getOptionLabelToRender(option) + '_' + index;

        return (
            <li key={key} className={className} style={option.style} role="none">
                <div className="p-cascadeselect-item-content" onClick={(event) => onOptionClick(event, option)} tabIndex={0} onKeyDown={(event) => onKeyDown(event, option)}>
                    {content}
                    {optionGroup}
                    <Ripple />
                </div>
                {submenu}
            </li>
        );
    };

    const createMenu = () => {
        return props.options ? props.options.map(createOption) : null;
    };

    const className = classNames('p-cascadeselect-panel p-cascadeselect-items', props.className, {
        'p-input-filled': PrimeReact.inputStyle === 'filled',
        'p-ripple-disabled': PrimeReact.ripple === false
    });
    const submenu = createMenu();

    return (
        <ul ref={elementRef} className={className} role="listbox" aria-orientation="horizontal">
            {submenu}
        </ul>
    );
});
