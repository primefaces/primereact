import { FilterMatchMode } from './FilterMatchMode';

/**
 * @deprecated please use PrimeReactContext
 */
export default class PrimeReact {
    static ripple = false;

    static inputStyle = 'outlined';

    static locale = 'en';

    static appendTo = null;

    static cssTransition = true;

    static autoZIndex = true;

    static hideOverlaysOnDocumentScrolling = false;

    static nonce = null;

    static nullSortOrder = 1;

    static zIndex = {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100,
        toast: 1200
    };

    static pt = undefined;

    static filterMatchModeOptions = {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };

    static changeTheme = function (currentTheme, newTheme, linkElementId, callback) {
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
}
