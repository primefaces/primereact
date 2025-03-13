import { StyleSheet } from '@primeuix/styled';
import * as React from 'react';

/**
 * @todo update the `PrimeReactStyleSheet` class to extend the `StyleSheet` class from the `@primeuix/styled` package.
 */
export class PrimeReactStyleSheet extends StyleSheet {
    createStyleElement(meta: StyleMeta = {}, key: string): React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> | undefined {
        const { css, attrs } = meta;

        return (
            <style {...attrs} data-primereact-style-id={key} key={key}>
                {css}
            </style>
        );
    }
}
