import { StyleSheet, type StyleMeta } from '@primeuix/styled';
import { isEmpty } from '@primeuix/utils';
import * as React from 'react';

export class PrimeReactStyleSheet extends StyleSheet<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>> {
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
