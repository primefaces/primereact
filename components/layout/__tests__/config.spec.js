import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Config from '@/components/layout/config';
import { AppConfigProvider, scales } from '@/components/context/AppConfigContext';
import { themeSchema } from '@/components/layout/themeSchema';

// setup render
const linkElementId = 'theme';
const componentProps = { active: true, onHide: jest.fn() };

const Wrapper = (props) => {
    return <AppConfigProvider linkElementId={linkElementId} {...props} />;
};

const renderConfig = (options) => {
    const user = userEvent.setup();
    const result = render(<Config {...componentProps} {...options?.props} />, {
        wrapper: (wrapperProps) => <Wrapper {...wrapperProps} {...options?.wrapperProps} />,
    });

    return {
        ...result,
        user,
    };
};

// setup helpers
const getConfigFromStorage = () => JSON.parse(localStorage.__STORE__['primereact:config']);

const dispatchThemeLoadEvent = () => {
    const clonedLinkElement = document.getElementById(`${linkElementId}-clone`);

    if (clonedLinkElement) {
        const loadEvent = new Event('load');

        clonedLinkElement.dispatchEvent(loadEvent);
    }
};

const waitForThemeLoad = () => new Promise((resolve) => {
    const clonedLinkElement = document.getElementById(`${linkElementId}-clone`);

    clonedLinkElement.addEventListener('load', resolve, { once: true });

    dispatchThemeLoadEvent();
});

const addLinkElement = () => {
    const linkElement = document.createElement('link');

    linkElement.setAttribute('id', linkElementId);
    linkElement.setAttribute('href', '/lara-light-cyan/theme.css');

    document.head.appendChild(linkElement);
};

const removeLinkElement = () => {
    document.head.removeChild(document.getElementById(linkElementId));

    const clonedLinkElement = document.getElementById(`${linkElementId}-clone`);

    if (clonedLinkElement) {
        document.head.removeChild(clonedLinkElement);
    }
};

// cleanup
afterEach(() => {
    localStorage.clear();
});

describe('layout/config', () => {
    beforeEach(() => {
        addLinkElement();
    });

    afterEach(() => {
        removeLinkElement();
    });

    it('renders all sections correctly', () => {
        renderConfig();

        const sidebar = within(screen.getByRole('complementary'));

        // Scale section
        expect(sidebar.getByRole('heading', { name: 'Scale' })).toBeInTheDocument();
        expect(sidebar.getByRole('group', { name: 'Scale' })).toBeInTheDocument();
        expect(sidebar.getByRole('button', { name: 'Decrease scale' })).toBeInTheDocument();
        expect(sidebar.getByRole('button', { name: 'Increase scale' })).toBeInTheDocument();
        scales.forEach((scale) => {
            expect(sidebar.getByLabelText(new RegExp(`Scale level ${scale}px`))).toBeInTheDocument();
        });

        // Input style section
        expect(sidebar.getByRole('heading', { name: 'Input Style' })).toBeInTheDocument();
        expect(sidebar.getByRole('group', { name: 'Input Style' })).toBeInTheDocument();
        expect(sidebar.getByRole('button', { name: 'Outlined' })).toBeInTheDocument();
        expect(sidebar.getByRole('button', { name: 'Filled' })).toBeInTheDocument();

        // Ripple effect section
        expect(sidebar.getByRole('switch', { name: 'Ripple Effect' })).toBeInTheDocument();

        // Dark mode section
        expect(sidebar.getByRole('switch', { name: 'Dark Mode' })).toBeInTheDocument();

        // Themes section
        expect(sidebar.getByRole('heading', { name: 'Themes' })).toBeInTheDocument();

        Object.values(themeSchema).forEach((theme) => {
            const group = within(sidebar.getByRole('radiogroup', { name: theme.name }));

            // eslint-disable-next-line max-nested-callbacks
            theme.colors.forEach((color) => {
                expect(group.getByLabelText(color.label)).toBeInTheDocument();
            });
        });
    });

    it('updates scale', async () => {
        const { user } = renderConfig();

        // Decrease scale
        await user.click(screen.getByRole('button', { name: 'Decrease scale' }));
        expect(screen.getByLabelText('Scale level 13px, current level')).toBeInTheDocument();

        // Increase scale
        await user.dblClick(screen.getByRole('button', { name: 'Increase scale' }));
        expect(screen.getByLabelText('Scale level 15px, current level')).toBeInTheDocument();

        expect(getConfigFromStorage()).toMatchObject({ scale: 15 });
    });

    it('updates input style', async () => {
        const { user } = renderConfig();

        await user.click(screen.getByRole('button', { name: 'Filled' }));
        expect(getConfigFromStorage()).toMatchObject({ inputStyle: 'filled' });
    });

    it('switches ripple', async () => {
        const { user } = renderConfig();

        await user.click(screen.getByRole('switch', { name: 'Ripple Effect' }));
        expect(getConfigFromStorage()).toMatchObject({ ripple: false });
    });

    it('changes theme and dark mode', async () => {
        // Lara theme with dark mode configuration
        const theme = themeSchema.lara;
        const themeColor = theme.colors[1];
        const themeStorageName = `${theme.id}-${themeColor.value}`;
        const themeStorageKey = 'primeTheme';
        const lightThemeName = `${theme.id}-light-${themeColor.value}`;
        const darkThemeName = `${theme.id}-dark-${themeColor.value}`;

        const { user } = renderConfig({ wrapperProps: { themeStorageKey } });

        // Change theme
        const laraThemeOption = screen.getByRole('radio', { name: themeColor.label });

        await user.click(laraThemeOption);
        expect(laraThemeOption).toBeChecked();
        expect(getConfigFromStorage()).toMatchObject({ [themeStorageKey]: themeStorageName });

        await waitForThemeLoad();
        await waitFor(() => {
            expect(document.getElementById(linkElementId).getAttribute('href')).toBe(`/${lightThemeName}/theme.css`);
        });

        // Change dark mode
        await user.click(screen.getByRole('switch', { name: 'Dark Mode' }));
        expect(getConfigFromStorage()).toMatchObject({ themeMode: 'dark' });

        await waitForThemeLoad();
        await waitFor(() => {
            expect(document.getElementById(linkElementId).getAttribute('href')).toBe(`/${darkThemeName}/theme.css`);
        });
    });

    it('changes material design theme correctly', async () => {
        // Material theme with dark mode and condensed configuration
        const theme = themeSchema.material;
        const themeColor = theme.colors[1];
        const themeStorageName = `${theme.id}-${themeColor.value}`;
        const themeStorageKey = 'appTheme';
        const lightThemeName = `${theme.id}-light-${themeColor.value}`;
        const condensedLightThemeName = `${theme.id}c-light-${themeColor.value}`;
        const condensedDarkThemeName = `${theme.id}c-dark-${themeColor.value}`;

        const { user } = renderConfig({ wrapperProps: { themeStorageKey } });

        // Change theme
        const materialThemeOption = screen.getByRole('radio', { name: themeColor.label });

        await user.click(materialThemeOption);
        expect(materialThemeOption).toBeChecked();
        expect(getConfigFromStorage()).toMatchObject({ [themeStorageKey]: themeStorageName });

        await waitForThemeLoad();
        await waitFor(() => {
            expect(document.getElementById(linkElementId).getAttribute('href')).toBe(`/${lightThemeName}/theme.css`);
        });

        // Change condensed mode
        await user.click(screen.getByRole('switch', { name: 'Condensed' }));

        await waitForThemeLoad();
        await waitFor(() => {
            expect(document.getElementById(linkElementId).getAttribute('href')).toBe(`/${condensedLightThemeName}/theme.css`);
        });

        // Change dark mode
        await user.click(screen.getByRole('switch', { name: 'Dark Mode' }));

        await waitForThemeLoad();
        await waitFor(() => {
            expect(document.getElementById(linkElementId).getAttribute('href')).toBe(`/${condensedDarkThemeName}/theme.css`);
        });
    });
});
