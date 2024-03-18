import React, { useState } from 'react';
import { FilterMatchMode } from './FilterMatchMode';
import PrimeReact from './PrimeReact';

export const PrimeReactContext = React.createContext();

export const PrimeReactProvider = (props) => {
    const propsValue = props.value || {};

    const [ripple, setRipple] = useState(propsValue.ripple || false);
    const [inputStyle, setInputStyle] = useState(propsValue.inputStyle || 'outlined');
    const [locale, setLocale] = useState(propsValue.locale || 'en');
    const [appendTo, setAppendTo] = useState(propsValue.appendTo || null);
    const [styleContainer, setStyleContainer] = useState(propsValue.styleContainer || null);
    const [cssTransition, setCssTransition] = useState(propsValue.cssTransition || true);
    const [autoZIndex, setAutoZIndex] = useState(propsValue.autoZIndex || true);
    const [hideOverlaysOnDocumentScrolling, setHideOverlaysOnDocumentScrolling] = useState(propsValue.hideOverlaysOnDocumentScrolling || false);
    const [nonce, setNonce] = useState(propsValue.nonce || null);
    const [nullSortOrder, setNullSortOrder] = useState(propsValue.nullSortOrder || 1);
    const [zIndex, setZIndex] = useState(
        propsValue.zIndex || {
            modal: 1100,
            overlay: 1000,
            menu: 1000,
            tooltip: 1100,
            toast: 1200
        }
    );
    const [ptOptions, setPtOptions] = useState(
        propsValue.ptOptions || {
            mergeSections: true,
            mergeProps: true
        }
    );
    const [pt, setPt] = useState(propsValue.pt || undefined);
    const [unstyled, setUnstyled] = useState(propsValue.unstyled || false);
    const [filterMatchModeOptions, setFilterMatchModeOptions] = useState(
        propsValue.filterMatchModeOptions || {
            text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
        }
    );

    const changeTheme = (currentTheme, newTheme, linkElementId, callback) => {
        const linkElement = document.getElementById(linkElementId);
        const cloneLinkElement = linkElement.cloneNode(true);
        const newThemeUrl = linkElement.getAttribute('href').replace(currentTheme, newTheme);

        cloneLinkElement.setAttribute('id', linkElementId + '-clone');
        cloneLinkElement.setAttribute('href', newThemeUrl);
        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();
            cloneLinkElement.setAttribute('id', linkElementId);

            if (callback) {
                callback();
            }
        });
        linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);
    };

    /**
     * @deprecated
     */
    React.useEffect(() => {
        PrimeReact.ripple = ripple;
    }, [ripple]);

    /**
     * @deprecated
     */
    React.useEffect(() => {
        PrimeReact.inputStyle = inputStyle;
    }, [inputStyle]);

    /**
     * @deprecated
     */
    React.useEffect(() => {
        PrimeReact.locale = locale;
    }, [locale]);

    const value = {
        changeTheme,
        ripple,
        setRipple,
        inputStyle,
        setInputStyle,
        locale,
        setLocale,
        appendTo,
        setAppendTo,
        styleContainer,
        setStyleContainer,
        cssTransition,
        setCssTransition,
        autoZIndex,
        setAutoZIndex,
        hideOverlaysOnDocumentScrolling,
        setHideOverlaysOnDocumentScrolling,
        nonce,
        setNonce,
        nullSortOrder,
        setNullSortOrder,
        zIndex,
        setZIndex,
        ptOptions,
        setPtOptions,
        pt,
        setPt,
        filterMatchModeOptions,
        setFilterMatchModeOptions,
        unstyled,
        setUnstyled
    };

    return <PrimeReactContext.Provider value={value}>{props.children}</PrimeReactContext.Provider>;
};
