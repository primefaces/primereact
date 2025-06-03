import { StyleSheet, type StyleMeta, type StyleSheetProps } from '@primeuix/styled';
import { isEmpty } from '@primeuix/utils';
import * as React from 'react';

export class PrimeReactStyleSheet extends StyleSheet<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>> {
    constructor({ attrs }: StyleSheetProps = {}) {
        super({ attrs });
        this._styles.set('layer-order', {});
    }
    has(key: string) {
        if (key === 'layer-order') {
            return this._styles.get(key)?.css !== undefined;
        }

        return this._styles.has(key);
    }
    createStyleElement(meta: StyleMeta = {}) {
        const { css, attrs, name } = meta;

        if (isEmpty(name)) return undefined;

        return (
            <style {...attrs} data-primereact-style-id={name} key={name}>
                {css}
            </style>
        );
    }
}
