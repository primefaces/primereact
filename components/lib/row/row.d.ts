/**
 *
 * @todo
 *
 * [Live Demo](https://www.primefaces.org/primereact/datatable/)
 *
 * @module row
 *
 */
import * as React from 'react';

/**
 * Defines valid properties in Row component.
 * @group Properties
 */
export interface RowProps {
    /**
     * Inline style of the element.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Style class of the row.
     */
    className?: string | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * **PrimeReact - Row**
 *
 * @todo
 *
 * [Live Demo](https://www.primefaces.org/primereact/datatable/)
 * --- ---
 * ![PrimeReact](https://www.primefaces.org/primereact/images/logo.png|height=100|width=100)
 *
 * @module row
 */
export declare class Row extends React.Component<RowProps, any> {}
