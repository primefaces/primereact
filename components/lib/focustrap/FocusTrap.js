import React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useMountEffect, useStyle } from '../hooks/Hooks';
import { DomHandler } from '../utils/Utils';
import { FocusTrapBase } from './FocusTrapBase';

export const FocusTrap = React.memo(
    React.forwardRef((inProps, ref) => {
        const targetRef = React.useRef(null);
        const firstFocusableElementRef = React.useRef(null);
        const lastFocusableElementRef = React.useRef(null);
        const context = React.useContext(PrimeReactContext);
        const props = FocusTrapBase.getProps(inProps, context);

        const metaData = {
            props
        };

        useStyle(FocusTrapBase.css.styles, { name: 'focustrap' });

        const { ptm } = FocusTrapBase.setMetaData({
            ...metaData
        });

        React.useImperativeHandle(ref, () => ({
            props,
            getInk: () => firstFocusableElementRef.current,
            getTarget: () => targetRef.current
        }));

        useMountEffect(() => {
            if (!props.disabled) {
                targetRef.current = getTarget();
                setAutoFocus(targetRef.current, props);
            }
        });

        const getTarget = () => {
            return firstFocusableElementRef.current && firstFocusableElementRef.current.parentElement;
        };

        const setAutoFocus = (target) => {
            const { autoFocusSelector = '', firstFocusableSelector = '', autoFocus = false } = props || {};

            let focusableElement = DomHandler.getFirstFocusableElement(target, `[autofocus]${getComputedSelector(autoFocusSelector)}`);

            autoFocus && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(target, getComputedSelector(firstFocusableSelector)));

            DomHandler.focus(focusableElement);
        };

        const getComputedSelector = (selector) => {
            return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ''}`;
        };

        const onFirstHiddenElementFocus = (event) => {
            const { currentTarget, relatedTarget } = event;

            const focusableElement =
                relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement || !targetRef.current?.contains(relatedTarget)
                    ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, getComputedSelector(currentTarget.$_pfocustrap_focusableselector))
                    : currentTarget.$_pfocustrap_lasthiddenfocusableelement;

            DomHandler.focus(focusableElement);
        };

        const onLastHiddenElementFocus = (event) => {
            const { currentTarget, relatedTarget } = event;

            const focusableElement =
                relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement || !targetRef.current?.contains(relatedTarget)
                    ? DomHandler.getLastFocusableElement(currentTarget.parentElement, getComputedSelector(currentTarget.$_pfocustrap_focusableselector))
                    : currentTarget.$_pfocustrap_firsthiddenfocusableelement;

            DomHandler.focus(focusableElement);
        };

        const createHiddenFocusableElements = () => {
            const { tabIndex = 0 } = props || {};

            const createFocusableElement = (onFocus, section) => {
                return (
                    <span
                        ref={section === 'firstfocusableelement' ? firstFocusableElementRef : lastFocusableElementRef}
                        className={'p-hidden-accessible p-hidden-focusable'}
                        tabIndex={tabIndex}
                        role={'presentation'}
                        aria-hidden={true}
                        data-p-hidden-accessible={true}
                        data-p-hidden-focusable={true}
                        onFocus={onFocus}
                        data-pc-section={section}
                    ></span>
                );
            };

            const firstFocusableElement = createFocusableElement(onFirstHiddenElementFocus, 'firstfocusableelement');
            const lastFocusableElement = createFocusableElement(onLastHiddenElementFocus, 'lastfocusableelement');

            if (firstFocusableElement.ref.current && lastFocusableElement.ref.current) {
                firstFocusableElement.ref.current.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement.ref.current;
                lastFocusableElement.ref.current.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement.ref.current;
            }

            return (
                <>
                    {firstFocusableElement}
                    {props.children}
                    {lastFocusableElement}
                </>
            );
        };

        return createHiddenFocusableElements();
    })
);

export default FocusTrap;
