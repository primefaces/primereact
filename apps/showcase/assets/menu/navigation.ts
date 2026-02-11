export const navigation = [
    {
        name: 'General',
        icon: 'pi pi-book',
        href: '/docs/general'
    },
    {
        name: 'Styled',
        icon: 'pi-palette',
        href: '/docs/styled'
    },
    {
        name: 'Tailwind',
        icon: 'tailwind',
        href: '/docs/tailwind',
        disabled: true,
        badge: 'Upcoming'
    },
    {
        name: 'Headless',
        icon: 'pi pi-hammer',
        href: '/docs/headless',
        disabled: true,
        badge: 'Upcoming'
    },
    {
        name: 'Primitives',
        icon: 'pi pi-bullseye',
        href: '/docs/primitives',
        disabled: true,
        badge: 'Upcoming'
    }
];

export const menu = {
    general: [
        {
            name: 'Getting Started',
            icon: 'pi pi-home',
            children: [
                {
                    name: 'Introduction',
                    href: '/docs/general/gettingstarted/introduction'
                },
                {
                    name: 'Setup',
                    href: '/docs/general/gettingstarted/setup'
                },
                {
                    name: 'LLMs.txt',
                    icon: 'pi pi-file',
                    href: '/docs/general/llms'
                },
                {
                    name: 'Pass Through',
                    icon: 'pi pi-directions',
                    href: '/docs/general/passthrough'
                },
                {
                    name: 'Tailwind CSS',
                    icon: 'pi pi-star',
                    href: '/docs/general/tailwind'
                }
            ]
        },
        {
            name: 'Icons',
            icon: 'pi pi-eye',
            children: [
                {
                    name: 'Prime Icons',
                    href: '/docs/general/icons/primeicons'
                },
                {
                    name: 'Custom Icons',
                    href: '/docs/general/icons/customicons'
                }
            ]
        },
        {
            name: 'Hooks',
            icon: 'pi pi-hammer',
            children: [
                {
                    name: 'useKeyFilter',
                    href: '/docs/general/hooks/usekeyfilter'
                },
                {
                    name: 'useMask',
                    href: '/docs/general/hooks/usemask'
                },
                {
                    name: 'useScrollTop',
                    href: '/docs/general/hooks/usescrolltop'
                }
            ]
        },
        {
            name: 'Guides',
            icon: 'pi pi-book',
            children: [
                {
                    name: 'Accessibility',
                    href: '/docs/general/guides/accessibility'
                },
                {
                    name: 'PrimeTV',
                    href: 'https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw'
                },
                {
                    name: 'RTL',
                    href: '/docs/general/guides/rtl'
                }
            ]
        },
        {
            name: 'Support',
            icon: 'pi pi-question',
            children: [
                {
                    name: 'Discord',
                    href: 'https://discord.gg/gzKFYnpmCY'
                },
                {
                    name: 'Forum',
                    href: 'https://github.com/orgs/primefaces/discussions'
                },
                {
                    name: 'PRO Support',
                    href: '/support'
                }
            ]
        },
        {
            name: 'Discover',
            icon: 'pi pi-search',
            children: [
                {
                    name: 'About Us',
                    href: '/team'
                },
                {
                    name: 'Source Code',
                    href: 'https://github.com/primefaces/primereact'
                },
                {
                    name: 'Changelog',
                    href: 'https://github.com/primefaces/primereact/blob/master/CHANGELOG.md'
                },
                {
                    name: 'Contribution',
                    href: '/docs/general/discover/contribution',
                    icon: 'pi pi-users'
                },
                {
                    name: 'Store',
                    href: 'https://primeui.store'
                },
                {
                    name: 'Twitter',
                    href: 'https://twitter.com/primereact'
                },
                {
                    name: 'Newsletter',
                    href: 'https://www.primefaces.org/newsletter'
                },
                {
                    name: 'PrimeGear',
                    href: 'https://gear.primefaces.org'
                }
            ]
        }
    ],
    styled: [
        {
            name: 'Installation',
            icon: 'pi pi-cloud-download',
            children: [
                {
                    name: 'Vite',
                    href: '/docs/styled/installation/vite'
                },
                {
                    name: 'Next.js',
                    href: '/docs/styled/installation/nextjs'
                },
                {
                    name: 'Configuration',
                    href: '/docs/styled/installation/configuration'
                }
            ]
        },
        {
            name: 'Theming',
            icon: 'pi pi-palette',
            children: [
                {
                    name: 'Styled Mode',
                    href: '/docs/styled/theming/styled'
                },
                {
                    name: 'Unstyled Mode',
                    href: '/docs/styled/theming/unstyled'
                }
            ]
        },
        {
            name: 'Form',
            children: [
                {
                    name: 'AutoComplete',
                    href: '/docs/styled/components/autocomplete'
                },
                {
                    name: 'Checkbox',
                    href: '/docs/styled/components/checkbox'
                },
                {
                    name: 'CheckboxGroup',
                    href: '/docs/styled/components/checkboxgroup'
                },
                {
                    name: 'ColorPicker',
                    href: '/docs/styled/components/colorpicker',
                    badge: 'New'
                },
                {
                    name: 'InputText',
                    href: '/docs/styled/components/inputtext'
                },
                {
                    name: 'DatePicker',
                    href: '/docs/styled/components/datepicker'
                },
                {
                    name: 'FloatLabel',
                    href: '/docs/styled/components/floatlabel'
                },
                {
                    name: 'IconField',
                    href: '/docs/styled/components/iconfield'
                },
                {
                    name: 'IftaLabel',
                    href: '/docs/styled/components/iftalabel'
                },
                {
                    name: 'InputGroup',
                    href: '/docs/styled/components/inputgroup'
                },
                {
                    name: 'InputNumber',
                    href: '/docs/styled/components/inputnumber',
                    badge: 'New'
                },
                {
                    name: 'InputOtp',
                    href: '/docs/styled/components/inputotp'
                },
                {
                    name: 'InputTags',
                    href: '/docs/styled/components/inputtags'
                },
                {
                    name: 'Knob',
                    href: '/docs/styled/components/knob'
                },
                {
                    name: 'Listbox',
                    href: '/docs/styled/components/listbox'
                },
                {
                    name: 'Password',
                    href: '/docs/styled/components/password'
                },
                {
                    name: 'RadioButton',
                    href: '/docs/styled/components/radiobutton'
                },
                {
                    name: 'Rating',
                    href: '/docs/styled/components/rating'
                },
                {
                    name: 'Select',
                    href: '/docs/styled/components/select'
                },
                {
                    name: 'Slider',
                    href: '/docs/styled/components/slider'
                },
                {
                    name: 'Switch',
                    href: '/docs/styled/components/switch'
                },
                {
                    name: 'Textarea',
                    href: '/docs/styled/components/textarea'
                },
                {
                    name: 'ToggleButton',
                    href: '/docs/styled/components/togglebutton'
                },
                {
                    name: 'ToggleButtonGroup',
                    href: '/docs/styled/components/togglebuttongroup'
                }
            ]
        },
        {
            name: 'Button',
            children: [
                {
                    name: 'Button',
                    href: '/docs/styled/components/button'
                },
                {
                    name: 'SpeedDial',
                    href: '/docs/styled/components/speeddial'
                }
            ]
        },
        {
            name: 'Data',
            children: [
                {
                    name: 'DataView',
                    href: '/docs/styled/components/dataview'
                },
                {
                    name: 'OrgChart',
                    href: '/docs/styled/components/orgchart',
                    badge: 'New'
                },
                {
                    name: 'Paginator',
                    href: '/docs/styled/components/paginator'
                },
                {
                    name: 'Timeline',
                    href: '/docs/styled/components/timeline'
                },
                {
                    name: 'Tree',
                    href: '/docs/styled/components/tree'
                }
            ]
        },
        {
            name: 'Panel',
            children: [
                {
                    name: 'Accordion',
                    href: '/docs/styled/components/accordion'
                },
                {
                    name: 'Card',
                    href: '/docs/styled/components/card'
                },
                {
                    name: 'Divider',
                    href: '/docs/styled/components/divider'
                },
                {
                    name: 'Fieldset',
                    href: '/docs/styled/components/fieldset'
                },
                {
                    name: 'Panel',
                    href: '/docs/styled/components/panel'
                },
                {
                    name: 'ScrollArea',
                    href: '/docs/styled/components/scrollarea'
                },
                {
                    name: 'Splitter',
                    href: '/docs/styled/components/splitter'
                },
                {
                    name: 'Stepper',
                    href: '/docs/styled/components/stepper'
                },
                {
                    name: 'Tabs',
                    href: '/docs/styled/components/tabs'
                },
                {
                    name: 'Toolbar',
                    href: '/docs/styled/components/toolbar'
                }
            ]
        },
        {
            name: 'Overlay',
            children: [
                {
                    name: 'ConfirmDialog',
                    href: '/docs/styled/components/confirmdialog'
                },
                {
                    name: 'ConfirmPopup',
                    href: '/docs/styled/components/confirmpopup'
                },
                {
                    name: 'Dialog',
                    href: '/docs/styled/components/dialog'
                },
                {
                    name: 'Drawer',
                    href: '/docs/styled/components/drawer'
                },
                {
                    name: 'Popover',
                    href: '/docs/styled/components/popover'
                },
                {
                    name: 'Tooltip',
                    href: '/docs/styled/components/tooltip'
                }
            ]
        },
        {
            name: 'File',
            children: [
                {
                    name: 'Upload',
                    href: '/docs/styled/components/fileupload'
                }
            ]
        },
        {
            name: 'Menu',
            children: [
                {
                    name: 'Breadcrumb',
                    href: '/docs/styled/components/breadcrumb'
                },
                {
                    name: 'ContextMenu',
                    href: '/docs/styled/components/contextmenu'
                },
                {
                    name: 'CommandMenu',
                    href: '/docs/styled/components/commandmenu'
                },
                {
                    name: 'Menu',
                    href: '/docs/styled/components/menu'
                }
            ]
        },
        {
            name: 'Messages',
            children: [
                {
                    name: 'Message',
                    href: '/docs/styled/components/message'
                },
                {
                    name: 'Toast',
                    href: '/docs/styled/components/toast',
                    badge: 'New'
                }
            ]
        },
        {
            name: 'Media',
            children: [
                {
                    name: 'Carousel',
                    href: '/docs/styled/components/carousel'
                },
                {
                    name: 'Compare',
                    href: '/docs/styled/components/compare'
                },
                {
                    name: 'Gallery',
                    href: '/docs/styled/components/gallery'
                }
            ]
        },
        {
            name: 'Misc',
            children: [
                {
                    name: 'AnimateOnScroll',
                    href: '/docs/styled/components/animateonscroll'
                },
                {
                    name: 'Avatar',
                    href: '/docs/styled/components/avatar'
                },
                {
                    name: 'Inplace',
                    href: '/docs/styled/components/inplace'
                },
                {
                    name: 'Badge',
                    href: '/docs/styled/components/badge'
                },
                {
                    name: 'Chip',
                    href: '/docs/styled/components/chip'
                },
                {
                    name: 'Fluid',
                    href: '/docs/styled/components/fluid'
                },
                {
                    name: 'FocusTrap',
                    href: '/docs/styled/components/focustrap'
                },
                {
                    name: 'MeterGroup',
                    href: '/docs/styled/components/metergroup'
                },
                {
                    name: 'ProgressBar',
                    href: '/docs/styled/components/progressbar'
                },
                {
                    name: 'ProgressSpinner',
                    href: '/docs/styled/components/progressspinner'
                },
                {
                    name: 'Skeleton',
                    href: '/docs/styled/components/skeleton'
                },
                {
                    name: 'Tag',
                    href: '/docs/styled/components/tag'
                },
                {
                    name: 'Terminal',
                    href: '/docs/styled/components/terminal'
                }
            ]
        }
    ],
    tailwind: [
        {
            name: 'Installation',
            icon: 'pi pi-cloud-download',
            children: [
                {
                    name: 'Vite',
                    href: '/docs/tailwind/installation/vite'
                },
                {
                    name: 'Next.js',
                    href: '/docs/tailwind/installation/nextjs'
                }
            ]
        },
        {
            name: 'Form',
            children: [
                {
                    name: 'Checkbox',
                    href: '/docs/tailwind/components/checkbox'
                },
                {
                    name: 'CheckboxGroup',
                    href: '/docs/tailwind/components/checkboxgroup'
                },
                {
                    name: 'ColorPicker',
                    href: '/docs/tailwind/components/colorpicker',
                    badge: 'New'
                },
                {
                    name: 'InputText',
                    href: '/docs/tailwind/components/inputtext'
                },
                {
                    name: 'RadioButton',
                    href: '/docs/tailwind/components/radiobutton'
                },
                {
                    name: 'Switch',
                    href: '/docs/tailwind/components/switch'
                }
            ]
        },
        {
            name: 'Button',
            children: [
                {
                    name: 'Button',
                    href: '/docs/tailwind/components/button'
                },
                {
                    name: 'SpeedDial',
                    href: '/docs/tailwind/components/speeddial'
                }
            ]
        },
        {
            name: 'Media',
            children: [
                {
                    name: 'Carousel',
                    href: '/docs/tailwind/components/carousel'
                }
            ]
        },
        {
            name: 'Misc',
            children: [
                {
                    name: 'Avatar',
                    href: '/docs/tailwind/components/avatar'
                }
            ]
        }
    ],
    addons: []
};
