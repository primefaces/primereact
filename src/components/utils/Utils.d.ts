import React from "react";

export declare function classNames(...args: any[]): string | undefined;

export declare class ConnectedOverlayScrollHandler {
    constructor(element: any, listener?: () => void);
    bindScrollListener(): void;
    unbindScrollListener(): void;
    destroy(): void;
}

export declare class DomHandler {
    innerWidth(el: HTMLElement): number;
    width(el: HTMLElement): number;
    getWindowScrollTop(): number;
    getWindowScrollLeft(): number;
    getOuterWidth(el: HTMLElement, margin: boolean): number;
    getOuterHeight(el: HTMLElement, margin: boolean): number;
    getClientHeight(el: HTMLElement, margin: boolean): number;
    getViewport(): { width: number; height: number; };
    getOffset(el: HTMLElement): { top: any; left: any; };
    index(el: HTMLElement): number;
    addMultipleClasses(el: HTMLElement, className: string): void;
    addClass(el: HTMLElement, className: string): void;
    removeClass(el: HTMLElement, className: string): void;
    hasClass(el: HTMLElement, className: string): boolean;
    find(el: HTMLElement, selector: string): any[];
    findSingle(el: HTMLElement, selector: string): any;
    getHeight(el: HTMLElement): number;
    getWidth(el: HTMLElement): number;
    alignOverlay(overlay: HTMLElement, target: HTMLElement, appendTo?: string): void;
    absolutePosition(el: HTMLElement, target: HTMLElement): void;
    relativePosition(el: HTMLElement, target: HTMLElement): void;
    flipfitCollision(el: HTMLElement, target: HTMLElement, my?: string, at?: string, callback?: any): void;
    findCollisionPosition(position: string): void;
    getParents(el: HTMLElement, parents?: any[]): any[];
    getScrollableParents(el: HTMLElement): any[];
    getHiddenElementOuterHeight(el: HTMLElement): number;
    getHiddenElementOuterWidth(el: HTMLElement): number;
    getHiddenElementDimensions(el: HTMLElement): { width?: number; height?: number; };
    fadeIn(el: HTMLElement, duration: number): void;
    fadeOut(el: HTMLElement, duration: number): void;
    getUserAgent(): string;
    isIOS(): boolean;
    isAndroid(): boolean;
    isFunction(obj: any): boolean;
    appendChild(el: HTMLElement, target: HTMLElement): void;
    removeChild(el: HTMLElement, target: HTMLElement): void;
    isElement(obj: any): boolean;
    scrollInView(container: HTMLElement, item: HTMLElement): void;
    calculateScrollbarWidth(el: HTMLElement): number;
    getBrowser(): object;
    resolveUserAgent(): { browser: string; version: string; };
    clearSelection(): void;
    calculateScrollbarWidth(): number;
    isVisible(el: HTMLElement): boolean;
    getFocusableElements(el: HTMLElement): any[];
    getFirstFocusableElement(el: HTMLElement): any;
    getLastFocusableElement(el: HTMLElement): any;
    getCursorOffset(el: HTMLElement, prevText?: string, nextText?: string, currentText?: string): { top: any; left: any; };
}

export declare function EventBus(): {
    on(type: string, fn: any): void;
    emit(type: string, evt?: any): void;
    off(type: string, fn: any): void;
}

export declare class FilterUtils {
    filter(value: any, fields: string, filterValue: any, filterMatchMode: string, filterLocale?: string): any[];
    startsWith(value: any, filter: string, filterLocale?: string): boolean;
    contains(value: any, filter: string, filterLocale?: string): boolean;
    endsWith(value: any, filter: string, filterLocale?: string): boolean;
    equals(value: any, filter: string, filterLocale?: string): boolean;
    notEquals(value: any, filter: string, filterLocale?: string): boolean;
    in(value: any, filter: string, filterLocale?: string): boolean;
    lt(value: any, filter: string, filterLocale?: string): boolean;
    lte(value: any, filter: string, filterLocale?: string): boolean;
    gt(value: any, filter: string, filterLocale?: string): boolean;
    gte(value: any, filter: string, filterLocale?: string): boolean;
}

export declare function mask(el: HTMLElement, options: object): {
    init(): void;
    bindEvents(): void;
    unbindEvents(): void;
    updateModel(e: React.SyntheticEvent): void;
    getValue(): string;
}

export declare class ObjectUtils {
    equals(obj1: any, obj2: any, field: string): boolean;
    deepEquals(a: any, b: any): boolean;
    resolveFieldData(data: any, field: string): any;
    isFunction(obj: any): boolean;
    findDiffKeys(obj1: any, obj2: any): object;
    reorderArray(value: any, from: number, to: number): void;
    findIndexInList(value: any, list: any[]): number;
    getJSXElement(obj: any, ...params: any[]): any;
    removeAccents(str: any): string;
    isEmpty(value: any): boolean;
    isNotEmpty(value: any): boolean;
}

export declare function UniqueComponentId(prefix?: string): string;

export declare const ZIndexUtils: {
    get(el?: HTMLElement): number;
    set(key: string, el: HTMLElement, baseZIndex?: number): void;
    clear(el: HTMLElement): void;
    getBase(key: string): number;
    getCurrent(key: string): number;
}
