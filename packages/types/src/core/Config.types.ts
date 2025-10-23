import type { FilterMatchModeType } from '@primereact/core/api';
import type { PassThroughOptions, PassThroughProps } from './PassThrough.types';
import type { ThemeOptions, ThemeProps } from './Theme.types';

/**
 * Defines the Content Security Policy (CSP) configuration.
 */
export interface CSP {
    /**
     * Defines nonce value to be used in the style tag.
     */
    nonce?: string | undefined;
}

/**
 * Defines the z-index values.
 */
export interface ZIndex {
    /**
     * Defines the base z-index value for the modals.
     * @default 1100
     */
    modal?: number | undefined;
    /**
     * Defines the base z-index value for the overlays.
     * @default 1000
     */
    overlay?: number | undefined;
    /**
     * Defines the base z-index value for the menus.
     * @default 1000
     */
    menu?: number | undefined;
    /**
     * Defines the base z-index value for the tooltip.
     * @default 1100
     */
    tooltip?: number | undefined;
}

/**
 * Defines the PrimeReact props type.
 */
export interface PrimeReactProps {
    /**
     * Defines the Content Security Policy (CSP) configuration.
     * @see {@link https://primereact.org/configuration/#csp}
     */
    csp?: CSP | undefined;
    /**
     * @todo Define the type.
     */
    defaults?: Record<string, { props: Record<string, unknown> }> | undefined;
    /**
     * Defines the filter match mode options.
     */
    filterMatchModeOptions?: Record<string, FilterMatchModeType[]> | undefined;
    /**
     * Defines the input variant.
     */
    inputVariant?: 'outlined' | 'filled' | undefined;
    /**
     * Defines the locale.
     */
    locale?: {
        startsWith?: string;
        contains?: string;
        notContains?: string;
        endsWith?: string;
        equals?: string;
        notEquals?: string;
        noFilter?: string;
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
        dateIs?: string;
        dateIsNot?: string;
        dateBefore?: string;
        dateAfter?: string;
        clear?: string;
        apply?: string;
        matchAll?: string;
        matchAny?: string;
        addRule?: string;
        removeRule?: string;
        accept?: string;
        reject?: string;
        choose?: string;
        upload?: string;
        cancel?: string;
        completed?: string;
        pending?: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear?: string;
        chooseMonth?: string;
        chooseDate?: string;
        prevDecade?: string;
        nextDecade?: string;
        prevYear?: string;
        nextYear?: string;
        prevMonth?: string;
        nextMonth?: string;
        prevHour?: string;
        nextHour?: string;
        prevMinute?: string;
        nextMinute?: string;
        prevSecond?: string;
        nextSecond?: string;
        am?: string;
        pm?: string;
        today?: string;
        weekHeader?: string;
        firstDayOfWeek?: number;
        showMonthAfterYear?: boolean;
        dateFormat?: string;
        weak?: string;
        medium?: string;
        strong?: string;
        passwordPrompt?: string;
        emptyFilterMessage?: string;
        searchMessage?: string;
        selectionMessage?: string;
        emptySelectionMessage?: string;
        emptySearchMessage?: string;
        emptyMessage?: string;
        fileChosenMessage?: string;
        noFileChosenMessage?: string;
        aria?: {
            trueLabel?: string;
            falseLabel?: string;
            nullLabel?: string;
            star?: string;
            stars?: string;
            selectAll?: string;
            unselectAll?: string;
            close?: string;
            previous?: string;
            next?: string;
            navigation?: string;
            scrollTop?: string;
            moveUp?: string;
            moveTop?: string;
            moveDown?: string;
            moveBottom?: string;
            moveToTarget?: string;
            moveToSource?: string;
            moveAllToTarget?: string;
            moveAllToSource?: string;
            pageLabel?: string;
            firstPageLabel?: string;
            lastPageLabel?: string;
            nextPageLabel?: string;
            prevPageLabel?: string;
            rowsPerPageLabel?: string;
            jumpToPageDropdownLabel?: string;
            jumpToPageInputLabel?: string;
            selectRow?: string;
            unselectRow?: string;
            expandRow?: string;
            collapseRow?: string;
            showFilterMenu?: string;
            hideFilterMenu?: string;
            filterOperator?: string;
            filterConstraint?: string;
            editRow?: string;
            saveEdit?: string;
            cancelEdit?: string;
            listView?: string;
            gridView?: string;
            slide?: string;
            slideNumber?: string;
            zoomImage?: string;
            zoomIn?: string;
            zoomOut?: string;
            rotateRight?: string;
            rotateLeft?: string;
            listLabel?: string;
        };
    };
    /**
     * Defines the passthrough options.
     */
    pt?: PassThroughProps['value'] | undefined;
    /**
     * Defines the passthrough options.
     */
    ptOptions?: PassThroughOptions | undefined;
    /**
     * Defines the ripple effect.
     */
    ripple?: boolean | undefined;
    /**
     * Defines the theme.
     */
    theme?: (Pick<ThemeProps, 'preset'> & { options?: ThemeOptions }) | undefined;
    /**
     * Collects styles of the used components.
     */
    stylesheet?: ThemeProps['stylesheet'] | undefined;
    /**
     * Defines whether the components should be unstyled.
     */
    unstyled?: boolean | undefined;
    /**
     * Defines the z-index values.
     */
    zIndex?: ZIndex | undefined;
}
