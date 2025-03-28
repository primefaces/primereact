//import { StyleSheet } from '@primeuix/styled';
import { createStyleMarkup, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';

class StyleSheet<S = HTMLStyleElement> {
    _styles;
    _attrs;
    constructor({ attrs } = {}) {
        this._styles = new Map();
        this._attrs = attrs || {};
    }
    get(key: string) {
        return this._styles.get(key);
    }
    has(key: string) {
        return this._styles.has(key);
    }
    delete(key: string) {
        this._styles.delete(key);
    }
    clear() {
        this._styles.clear();
    }
    add(key: string, css?: string) {
        if (isNotEmpty(css) && !this._styles.has(key)) {
            const meta = {
                name: key,
                css,
                attrs: this._attrs,
                markup: createStyleMarkup(css, this._attrs)
            } satisfies StyleMeta;

            this._styles.set(key, {
                ...meta,
                element: this.createStyleElement(meta)
            });
        }
    }
    update() {
        // @todo
    }
    getStyles() {
        return this._styles;
    }
    getAllCSS() {
        return [...this._styles.values()].map((style) => style.css).filter(String);
    }
    getAllMarkup() {
        return [...this._styles.values()].map((style) => style.markup).filter(String);
    }
    getAllElements() {
        return [...this._styles.values()].map((style) => style.element);
    }
    /**
     * Used to create a style element.
     *
     * @param {StyleMeta} meta
     * @returns {HTMLStyleElement | undefined}
     */
    // eslint-disable-next-line
    createStyleElement(meta: StyleMeta = {}): S | undefined {
        return undefined;
    }
}

/**
 * @todo update the `PrimeReactStyleSheet` class to extend the `StyleSheet` class from the `@primeuix/styled` package.
 */
export class PrimeReactStyleSheet extends StyleSheet<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>> {
    createStyleElement(meta: StyleMeta = {}) {
        const { css, attrs, name } = meta;

        return (
            <style {...attrs} data-primereact-style-id={name} key={name}>
                {css}
            </style>
        );
    }
}
