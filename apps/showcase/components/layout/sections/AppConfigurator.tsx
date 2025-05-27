import { useApp } from '@/hooks/useApp';
import { useViewTransition } from '@primereact/hooks';
import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebutton';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Material from '@primeuix/themes/material';
import Nora from '@primeuix/themes/nora';
import { cn } from '@primeuix/utils';
import { Switch } from 'primereact/switch';
import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

const presets = {
    Aura,
    Material,
    Lara,
    Nora
} as const;

const surfaces = [
    {
        name: 'slate',
        palette: { 0: '#ffffff', 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617' }
    },
    {
        name: 'gray',
        palette: { 0: '#ffffff', 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827', 950: '#030712' }
    },
    {
        name: 'zinc',
        palette: { 0: '#ffffff', 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b' }
    },
    {
        name: 'neutral',
        palette: { 0: '#ffffff', 50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717', 950: '#0a0a0a' }
    },
    {
        name: 'stone',
        palette: { 0: '#ffffff', 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917', 950: '#0c0a09' }
    },
    {
        name: 'soho',
        palette: { 0: '#ffffff', 50: '#ececec', 100: '#dedfdf', 200: '#c4c4c6', 300: '#adaeb0', 400: '#97979b', 500: '#7f8084', 600: '#6a6b70', 700: '#55565b', 800: '#3f4046', 900: '#2c2c34', 950: '#16161d' }
    },
    {
        name: 'viva',
        palette: { 0: '#ffffff', 50: '#f3f3f3', 100: '#e7e7e8', 200: '#cfd0d0', 300: '#b7b8b9', 400: '#9fa1a1', 500: '#87898a', 600: '#6e7173', 700: '#565a5b', 800: '#3e4244', 900: '#262b2c', 950: '#0e1315' }
    },
    {
        name: 'ocean',
        palette: { 0: '#ffffff', 50: '#fbfcfc', 100: '#F7F9F8', 200: '#EFF3F2', 300: '#DADEDD', 400: '#B1B7B6', 500: '#828787', 600: '#5F7274', 700: '#415B61', 800: '#29444E', 900: '#183240', 950: '#0c1920' }
    }
];

export default function AppConfigurator() {
    const app = useApp();

    //const primereact = usePrimeReact();

    const selectedPrimaryColor = app.primary;
    const selectedSurfaceColor = app.surface;

    const getPalette = (preset = app.preset) => {
        const presetPalette = preset ? presets[preset].primitive : {};
        const colors = ['emerald', 'green', 'lime', 'orange', 'amber', 'yellow', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
        const palettes = [{ name: 'noir', palette: {} }];

        colors.forEach((color) => {
            palettes.push({
                name: color,
                palette: presetPalette[color]
            });
        });

        return palettes;
    };

    const primaryColors = React.useMemo(() => {
        return getPalette(app.preset);
    }, [app.preset]);

    const getPresetExt = (name, presetName) => {
        const color = getPalette(presetName).find((c) => c.name === name);

        if (color.name === 'noir') {
            document.documentElement.style.setProperty('--logo-color', 'var(--text-secondary-color)');

            return {
                semantic: {
                    primary: {
                        50: '{surface.50}',
                        100: '{surface.100}',
                        200: '{surface.200}',
                        300: '{surface.300}',
                        400: '{surface.400}',
                        500: '{surface.500}',
                        600: '{surface.600}',
                        700: '{surface.700}',
                        800: '{surface.800}',
                        900: '{surface.900}',
                        950: '{surface.950}'
                    },
                    colorScheme: {
                        light: {
                            primary: {
                                color: '{primary.950}',
                                contrastColor: '#ffffff',
                                hoverColor: '{primary.800}',
                                activeColor: '{primary.700}'
                            },
                            highlight: {
                                background: '{primary.950}',
                                focusBackground: '{primary.700}',
                                color: '#ffffff',
                                focusColor: '#ffffff'
                            }
                        },
                        dark: {
                            primary: {
                                color: '{primary.50}',
                                contrastColor: '{primary.950}',
                                hoverColor: '{primary.200}',
                                activeColor: '{primary.300}'
                            },
                            highlight: {
                                background: '{primary.50}',
                                focusBackground: '{primary.300}',
                                color: '{primary.950}',
                                focusColor: '{primary.950}'
                            }
                        }
                    }
                }
            };
        } else {
            document.documentElement.style.setProperty('--logo-color', 'var(--primary-color)');

            if (presetName === 'Nora') {
                return {
                    semantic: {
                        primary: color.palette,
                        colorScheme: {
                            light: {
                                primary: {
                                    color: '{primary.600}',
                                    contrastColor: '#ffffff',
                                    hoverColor: '{primary.700}',
                                    activeColor: '{primary.800}'
                                },
                                highlight: {
                                    background: '{primary.600}',
                                    focusBackground: '{primary.700}',
                                    color: '#ffffff',
                                    focusColor: '#ffffff'
                                }
                            },
                            dark: {
                                primary: {
                                    color: '{primary.500}',
                                    contrastColor: '{surface.900}',
                                    hoverColor: '{primary.400}',
                                    activeColor: '{primary.300}'
                                },
                                highlight: {
                                    background: '{primary.500}',
                                    focusBackground: '{primary.400}',
                                    color: '{surface.900}',
                                    focusColor: '{surface.900}'
                                }
                            }
                        }
                    }
                };
            } else if (presetName === 'Material') {
                return {
                    semantic: {
                        primary: color.palette,
                        colorScheme: {
                            light: {
                                primary: {
                                    color: '{primary.500}',
                                    contrastColor: '#ffffff',
                                    hoverColor: '{primary.400}',
                                    activeColor: '{primary.300}'
                                },
                                highlight: {
                                    background: 'color-mix(in srgb, {primary.color}, transparent 88%)',
                                    focusBackground: 'color-mix(in srgb, {primary.color}, transparent 76%)',
                                    color: '{primary.700}',
                                    focusColor: '{primary.800}'
                                }
                            },
                            dark: {
                                primary: {
                                    color: '{primary.400}',
                                    contrastColor: '{surface.900}',
                                    hoverColor: '{primary.300}',
                                    activeColor: '{primary.200}'
                                },
                                highlight: {
                                    background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                                    focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                                    color: 'rgba(255,255,255,.87)',
                                    focusColor: 'rgba(255,255,255,.87)'
                                }
                            }
                        }
                    }
                };
            } else {
                return {
                    semantic: {
                        primary: color.palette,
                        colorScheme: {
                            light: {
                                primary: {
                                    color: '{primary.500}',
                                    contrastColor: '#ffffff',
                                    hoverColor: '{primary.600}',
                                    activeColor: '{primary.700}'
                                },
                                highlight: {
                                    background: '{primary.50}',
                                    focusBackground: '{primary.100}',
                                    color: '{primary.700}',
                                    focusColor: '{primary.800}'
                                }
                            },
                            dark: {
                                primary: {
                                    color: '{primary.400}',
                                    contrastColor: '{surface.900}',
                                    hoverColor: '{primary.300}',
                                    activeColor: '{primary.200}'
                                },
                                highlight: {
                                    background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                                    focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                                    color: 'rgba(255,255,255,.87)',
                                    focusColor: 'rgba(255,255,255,.87)'
                                }
                            }
                        }
                    }
                };
            }
        }
    };

    const updateColors = (type, color) => {
        if (type === 'primary') {
            app.setPrimary(color.name);
        } else if (type === 'surface') {
            app.setSurface(color.name);
        }

        applyTheme(type, color);
    };

    const applyTheme = (type, color) => {
        if (type === 'primary') {
            updatePreset(getPresetExt(color.name));
        } else if (type === 'surface') {
            updateSurfacePalette(color.palette);
        }

        //EventBus.emit('theme-palette-change');
    };

    const onPresetChange = (e: ToggleButtonGroupValueChangeEvent) => {
        app.setPreset(e.value as string);
        const preset = presets[e.value];
        const surfacePalette = surfaces.find((s) => s.name === selectedSurfaceColor)?.palette;

        $t().preset(preset).preset(getPresetExt(selectedPrimaryColor, e.value)).surfacePalette(surfacePalette).use({ useDefaultOptions: true });
    };

    const onRTLChange = useViewTransition();

    const toggleRTL = (value: boolean) => {
        onRTLChange(() => {
            const htmlElement = document.documentElement;

            if (value) {
                htmlElement.setAttribute('dir', 'rtl');
            } else {
                htmlElement.removeAttribute('dir');
            }

            app.setRTL(value);
        });
    };

    return (
        <div className="config-panel hidden">
            <div className="config-panel-content">
                <div className="config-panel-colors">
                    <span className="config-panel-label">Primary</span>
                    <div>
                        {primaryColors.map((primaryColor) => (
                            <button
                                key={primaryColor.name}
                                type="button"
                                title={primaryColor.name}
                                onClick={() => updateColors('primary', primaryColor)}
                                className={cn({ 'active-color': selectedPrimaryColor === primaryColor.name })}
                                style={{ backgroundColor: `${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette?.['500']}` }}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="config-panel-colors">
                    <span className="config-panel-label">Surface</span>
                    <div>
                        {surfaces.map((surface) => (
                            <button
                                key={surface.name}
                                type="button"
                                title={surface.name}
                                onClick={() => updateColors('surface', surface)}
                                className={cn({ 'active-color': selectedSurfaceColor ? selectedSurfaceColor === surface.name : app.isDarkTheme ? surface.name === 'zinc' : surface.name === 'slate' })}
                                style={{ backgroundColor: `${surface.palette?.['500']}` }}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="config-panel-settings">
                    <span className="config-panel-label">Theme</span>
                    <ToggleButton.Group value={app.preset} onValueChange={onPresetChange} allowEmpty={false} size="small">
                        {Object.keys(presets).map((label) => (
                            <ToggleButton key={label} value={label}>
                                <ToggleButton.Indicator>{label}</ToggleButton.Indicator>
                            </ToggleButton>
                        ))}
                    </ToggleButton.Group>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <div className="config-panel-settings items-end">
                            <span className="config-panel-label">RTL</span>
                            <Switch
                                checked={app.isRTL}
                                onCheckedChange={(e: SwitchChangeEvent) => {
                                    toggleRTL(e.checked);
                                }}
                            >
                                <Switch.Thumb />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
