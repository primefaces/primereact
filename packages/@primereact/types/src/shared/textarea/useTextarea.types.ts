/**
 *
 * The useTextarea manages the state and functionality of an textarea component.
 *
 * [Live Demo](https://www.primereact.org/textarea/)
 *
 * @module usetextarea
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useTextarea.
 */
export interface useTextareaProps {
    /**
     * When present, height of textarea changes as being typed.
     * @default false
     */
    autoResize?: boolean | undefined;
}

/**
 * Defines valid state in useTextarea.
 */
export interface useTextareaState {}

/**
 * Defines the methods and properties exposed by useTextarea.
 */
export interface useTextareaExposes {
    /**
     * Event handler for input events on the textarea.
     * @returns void
     */
    onInput: () => void;
}

/**
 * Instance of useTextarea headless.
 */
export type useTextareaInstance = HeadlessInstance<useTextareaProps, useTextareaState, useTextareaExposes>;
