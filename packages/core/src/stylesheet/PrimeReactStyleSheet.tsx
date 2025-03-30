import { StyleSheet, type StyleMeta } from '@primeuix/styled';
import * as React from 'react';

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
