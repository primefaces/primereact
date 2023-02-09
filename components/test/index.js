import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Set the userAgent inside the navigator
Object.defineProperty(
    window.navigator,
    'userAgent',
    ((value) => ({
        get() {
            return value;
        },
        set(v) {
            value = v;
        }
    }))(window.navigator.userAgent)
);

// Set the maxTouchPoints inside the navigator for touch devices
Object.defineProperty(
    window.navigator,
    'maxTouchPoints',
    ((value) => ({
        get() {
            return value;
        },
        set(v) {
            value = v;
        }
    }))(window.navigator.maxTouchPoints)
);

/**
 * Run a single snapshot test.
 *
 * @param {*} element the element to render
 * @param {*} name the name of the test
 */
export function snapshot(element, name) {
    test(name, () => {
        expect(render(element).container).toMatchSnapshot();
    });
}

/**
 * Run a single snapshot test of the parent element.
 *
 * @param {*} element the element to render
 * @param {*} name the name of the test
 */
export function snapshotParent(element, name) {
    test(name, () => {
        expect(render(element).container.parentElement).toMatchSnapshot();
    });
}

/**
 * Sets the browser user agent so it can simulate browsers. If its IOS adds touch setting to allow DomUtils.isTouchDevice.
 *
 * @param {*} name the name of the user agent.
 */
export function userAgent(name) {
    // Set the userAgent that you wanna test on your function
    global.navigator.userAgent = name;

    if (name.match(/iPhone|iPad|iPod/i)) {
        global.navigator.maxTouchPoints = 2;
    }
}
