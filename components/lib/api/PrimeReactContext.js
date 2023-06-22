import React, { useState } from 'react';
import { FilterMatchMode } from './FilterMatchMode';

export const PrimeReactContext = React.createContext();

export const PrimeReactProvider = (props) => {
    const [ripple, setRipple] = useState(false);
    const [inputStyle, setInputStyle] = useState('outlined');
    const [locale, setLocale] = useState('en');
    const [appendTo, setAppendTo] = useState(null);
    const [cssTransition, setCssTransition] = useState(true);
    const [autoZIndex, setAutoZIndex] = useState(true);
    const [hideOverlaysOnDocumentScrolling, setHideOverlaysOnDocumentScrolling] = useState(false);
    const [nonce, setNonce] = useState(null);
    const [nullSortOrder, setNullSortOrder] = useState(1);
    const [zIndex, setZIndex] = useState({
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100,
        toast: 1200
    });
    const [pt, setPt] = useState(undefined);
    const [filterMatchModeOptions, setFilterMatchModeOptions] = useState({
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    });

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
