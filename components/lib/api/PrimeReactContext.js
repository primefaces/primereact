import React, { useState } from 'react';
import { FilterMatchMode } from './FilterMatchMode';

export const PrimeReactContext = React.createContext();

export const PrimeReactProvider = (props) => {
    const [ripple, setRipple] = useState((props.value && props.value.ripple) || false);
    const [inputStyle, setInputStyle] = useState((props.value && props.value.inputStyle) || 'outlined');
    const [locale, setLocale] = useState((props.value && props.value.locale) || 'en');
    const [appendTo, setAppendTo] = useState((props.value && props.value.appendTo) || null);
    const [cssTransition, setCssTransition] = useState((props.value && props.value.cssTransition) || true);
    const [autoZIndex, setAutoZIndex] = useState((props.value && props.value.autoZIndex) || true);
    const [hideOverlaysOnDocumentScrolling, setHideOverlaysOnDocumentScrolling] = useState((props.value && props.value.hideOverlaysOnDocumentScrolling) || false);
    const [nonce, setNonce] = useState((props.value && props.value.nonce) || null);
    const [nullSortOrder, setNullSortOrder] = useState((props.value && props.value.nullSortOrder) || 1);
    const [zIndex, setZIndex] = useState(
        (props.value && props.value.zIndex) || {
            modal: 1100,
            overlay: 1000,
            menu: 1000,
            tooltip: 1100,
            toast: 1200
        }
    );
    const [pt, setPt] = useState((props.value && props.value.pt) || undefined);
    const [filterMatchModeOptions, setFilterMatchModeOptions] = useState(
        (props.value && props.value.filterMatchModeOptions) || {
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
        pt,
        setPt,
        filterMatchModeOptions,
        setFilterMatchModeOptions
    };

    return <PrimeReactContext.Provider value={value}>{props.children}</PrimeReactContext.Provider>;
};
