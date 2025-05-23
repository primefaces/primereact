import type { Metadata, Viewport } from 'next';

export interface AppConfig {
    preset?: string;
    primary?: string;
    surface?: string;
    isDarkTheme?: boolean;
    isNewsActive?: boolean;
    storageKey?: string;
    versions?: {
        name: string;
        url: string;
    }[];
    primereact?: {
        theme?: {
            preset?: unknown;
            options?: {
                darkModeSelector?: string;
            };
        };
        ripple?: boolean;
        locale?: string;
    };
    metadata?: Metadata;
    viewport?: Viewport;
}

export interface AppContextProps extends Omit<AppConfig, 'metadata' | 'viewport' | 'font'> {
    children?: React.ReactNode;
}

export interface AppProviderProps {
    preset?: string;
    setPreset: (preset: string) => void;
    primary?: string;
    setPrimary: (primary: string) => void;
    surface?: string;
    setSurface: (surface: string) => void;
    isDarkTheme?: boolean;
    setDarkTheme: (isDarkTheme: boolean) => void;
    isNewsActive?: boolean;
    setNewsActive: (isNewsActive: boolean) => void;
    storageKey?: string;
}

export interface AppTopbarProps {
    showMenuButton?: boolean;
    onMenuButtonClick?: () => void;
    children?: React.ReactNode;
}

export interface AppMenuProps {
    active?: boolean;
    children?: React.ReactNode;
}

export interface AppMenuItemData {
    href?: string;
    to?: string;
    icon?: string;
    name?: string;
    badge?: string;
    children?: AppMenuItemData[];
}

export interface AppMenuItemProps {
    root?: boolean;
    menu?: AppMenuItemData[];
}
