export const navigation = [
    {
        name: 'General',
        icon: 'pi pi-bullseye',
        to: '/docs/general'
    },
    {
        name: 'Components',
        icon: 'pi pi-compass',
        to: '/docs/components',
        items: [
            {
                name: 'Styled',
                icon: 'pi-palette',
                to: '/docs/styled'
            },
            {
                name: 'Tailwind',
                icon: 'pi pi-hammer',
                to: '/docs/tailwind'
            }
        ]
    },
    {
        name: 'Add-ons',
        icon: 'pi pi-eye',
        to: '/docs/addons'
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
                    to: '/docs/general/gettingstarted/introduction'
                },
                {
                    name: 'Setup',
                    to: '/docs/general/gettingstarted/setup'
                }
            ]
        },
        {
            name: 'LLMs.txt',
            icon: 'pi pi-file',
            to: '/docs/general/llms'
        },
        {
            name: 'Pass Through',
            icon: 'pi pi-directions',
            to: '/docs/general/passthrough'
        },
        {
            name: 'Tailwind CSS',
            icon: 'pi pi-star',
            to: '/docs/general/tailwind'
        },
        {
            name: 'Icons',
            icon: 'pi pi-eye',
            children: [
                {
                    name: 'Prime Icons',
                    to: '/docs/general/icons/primeicons'
                },
                {
                    name: 'Custom Icons',
                    to: '/docs/general/icons/customicons'
                }
            ]
        },
        {
            name: 'Hooks',
            icon: 'pi pi-hammer',
            children: [
                {
                    name: 'useKeyFilter',
                    to: '/docs/general/hooks/usekeyfilter'
                },
                {
                    name: 'useMask',
                    to: '/docs/general/hooks/usemask'
                },
                {
                    name: 'useScrollTop',
                    to: '/docs/general/hooks/usescrolltop'
                }
            ]
        },
        {
            name: 'Guides',
            icon: 'pi pi-book',
            children: [
                {
                    name: 'Accessibility',
                    to: '/docs/general/guides/accessibility'
                },
                {
                    name: 'PrimeTV',
                    href: 'https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw'
                },
                {
                    name: 'RTL',
                    to: '/docs/general/guides/rtl'
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
                    to: '/support'
                }
            ]
        },
        {
            name: 'Discover',
            icon: 'pi pi-search',
            children: [
                {
                    name: 'About Us',
                    to: '/team'
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
                    to: '/docs/general/discover/contribution',
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
                    to: '/docs/styled/installation/vite'
                },
                {
                    name: 'Next.js',
                    to: '/docs/styled/installation/nextjs'
                }
            ]
        },
        {
            name: 'Configuration',
            icon: 'pi pi-cog',
            to: '/docs/styled/configuration'
        },
        {
            name: 'Theming',
            icon: 'pi pi-palette',
            children: [
                {
                    name: 'Styled Mode',
                    to: '/docs/styled/theming/styled'
                },
                {
                    name: 'Unstyled Mode',
                    to: '/docs/styled/theming/unstyled'
                }
            ]
        },
        {
            name: 'Components',
            icon: 'pi pi-compass',
            children: [
                {
                    name: 'Form',
                    children: [
                        {
                            name: 'Checkbox',
                            to: '/docs/styled/components/checkbox'
                        },
                        {
                            name: 'ColorPicker',
                            to: '/docs/styled/components/colorpicker',
                            badge: 'New'
                        },
                        {
                            name: 'InputText',
                            to: '/docs/styled/components/inputtext'
                        },
                        {
                            name: 'DatePicker',
                            to: '/docs/styled/components/datepicker'
                        },
                        {
                            name: 'FloatLabel',
                            to: '/docs/styled/components/floatlabel'
                        },
                        {
                            name: 'IconField',
                            to: '/docs/styled/components/iconfield'
                        },
                        {
                            name: 'IftaLabel',
                            to: '/docs/styled/components/iftalabel'
                        },
                        {
                            name: 'InputGroup',
                            to: '/docs/styled/components/inputgroup'
                        },
                        {
                            name: 'InputNumber',
                            to: '/docs/styled/components/inputnumber',
                            badge: 'New'
                        },
                        {
                            name: 'InputOtp',
                            to: '/docs/styled/components/inputotp'
                        },
                        {
                            name: 'InputTags',
                            to: '/docs/styled/components/inputtags'
                        },
                        {
                            name: 'Knob',
                            to: '/docs/styled/components/knob'
                        },
                        {
                            name: 'Listbox',
                            to: '/docs/styled/components/listbox'
                        },
                        {
                            name: 'Password',
                            to: '/docs/styled/components/password'
                        },
                        {
                            name: 'RadioButton',
                            to: '/docs/styled/components/radiobutton'
                        },
                        {
                            name: 'Rating',
                            to: '/docs/styled/components/rating'
                        },
                        {
                            name: 'Slider',
                            to: '/docs/styled/components/slider'
                        },
                        {
                            name: 'Switch',
                            to: '/docs/styled/components/switch'
                        },
                        {
                            name: 'Textarea',
                            to: '/docs/styled/components/textarea'
                        },
                        {
                            name: 'ToggleButton',
                            to: '/docs/styled/components/togglebutton'
                        }
                    ]
                },
                {
                    name: 'Button',
                    children: [
                        {
                            name: 'Button',
                            to: '/docs/styled/components/button'
                        },
                        {
                            name: 'SpeedDial',
                            to: '/docs/styled/components/speeddial'
                        }
                    ]
                },
                {
                    name: 'Data',
                    children: [
                        {
                            name: 'DataView',
                            to: '/docs/styled/components/dataview'
                        },
                        {
                            name: 'OrgChart',
                            to: '/docs/styled/components/orgchart',
                            badge: 'New'
                        },
                        {
                            name: 'Paginator',
                            to: '/docs/styled/components/paginator'
                        },
                        {
                            name: 'Timeline',
                            to: '/docs/styled/components/timeline'
                        },
                        {
                            name: 'Tree',
                            to: '/docs/styled/components/tree'
                        }
                    ]
                },
                {
                    name: 'Panel',
                    children: [
                        {
                            name: 'Accordion',
                            to: '/docs/styled/components/accordion'
                        },
                        {
                            name: 'Card',
                            to: '/docs/styled/components/card'
                        },
                        {
                            name: 'Divider',
                            to: '/docs/styled/components/divider'
                        },
                        {
                            name: 'Fieldset',
                            to: '/docs/styled/components/fieldset'
                        },
                        {
                            name: 'Panel',
                            to: '/docs/styled/components/panel'
                        },
                        {
                            name: 'ScrollArea',
                            to: '/docs/styled/components/scrollarea'
                        },
                        {
                            name: 'Splitter',
                            to: '/docs/styled/components/splitter'
                        },
                        {
                            name: 'Stepper',
                            to: '/docs/styled/components/stepper'
                        },
                        {
                            name: 'Tabs',
                            to: '/docs/styled/components/tabs'
                        },
                        {
                            name: 'Toolbar',
                            to: '/docs/styled/components/toolbar'
                        }
                    ]
                },
                {
                    name: 'Overlay',
                    children: [
                        {
                            name: 'ConfirmDialog',
                            to: '/docs/styled/components/confirmdialog'
                        },
                        {
                            name: 'ConfirmPopup',
                            to: '/docs/styled/components/confirmpopup'
                        },
                        {
                            name: 'Dialog',
                            to: '/docs/styled/components/dialog'
                        },
                        {
                            name: 'Drawer',
                            to: '/docs/styled/components/drawer'
                        },
                        {
                            name: 'Popover',
                            to: '/docs/styled/components/popover'
                        },
                        {
                            name: 'Tooltip',
                            to: '/docs/styled/components/tooltip'
                        }
                    ]
                },
                {
                    name: 'File',
                    children: [
                        {
                            name: 'Upload',
                            to: '/docs/styled/components/fileupload'
                        }
                    ]
                },
                {
                    name: 'Menu',
                    children: [
                        {
                            name: 'Breadcrumb',
                            to: '/docs/styled/components/breadcrumb'
                        },
                        {
                            name: 'ContextMenu',
                            to: '/docs/styled/components/contextmenu'
                        },
                        {
                            name: 'CommandMenu',
                            to: '/docs/styled/components/commandmenu'
                        },
                        {
                            name: 'Menu',
                            to: '/docs/styled/components/menu'
                        }
                    ]
                },
                {
                    name: 'Messages',
                    children: [
                        {
                            name: 'Message',
                            to: '/docs/styled/components/message'
                        },
                        {
                            name: 'Toast',
                            to: '/docs/styled/components/toast',
                            badge: 'New'
                        }
                    ]
                },
                {
                    name: 'Media',
                    children: [
                        {
                            name: 'ImageCompare',
                            to: '/docs/styled/components/imagecompare'
                        },
                        {
                            name: 'Carousel',
                            to: '/docs/styled/components/carousel'
                        },
                        {
                            name: 'Gallery',
                            to: '/docs/styled/components/gallery'
                        }
                    ]
                },
                {
                    name: 'Misc',
                    children: [
                        {
                            name: 'AnimateOnScroll',
                            to: '/docs/styled/components/animateonscroll'
                        },
                        {
                            name: 'Avatar',
                            to: '/docs/styled/components/avatar'
                        },
                        {
                            name: 'Inplace',
                            to: '/docs/styled/components/inplace'
                        },
                        {
                            name: 'Badge',
                            to: '/docs/styled/components/badge'
                        },
                        {
                            name: 'Chip',
                            to: '/docs/styled/components/chip'
                        },
                        {
                            name: 'Fluid',
                            to: '/docs/styled/components/fluid'
                        },
                        {
                            name: 'FocusTrap',
                            to: '/docs/styled/components/focustrap'
                        },
                        {
                            name: 'MeterGroup',
                            to: '/docs/styled/components/metergroup'
                        },
                        {
                            name: 'ProgressBar',
                            to: '/docs/styled/components/progressbar'
                        },
                        {
                            name: 'ProgressSpinner',
                            to: '/docs/styled/components/progressspinner'
                        },
                        {
                            name: 'Skeleton',
                            to: '/docs/styled/components/skeleton'
                        },
                        {
                            name: 'Tag',
                            to: '/docs/styled/components/tag'
                        },
                        {
                            name: 'Terminal',
                            to: '/docs/styled/components/terminal'
                        }
                    ]
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
                    to: '/docs/tailwind/installation/vite'
                },
                {
                    name: 'Next.js',
                    to: '/docs/tailwind/installation/nextjs'
                }
            ]
        },
        {
            name: 'Components',
            icon: 'pi pi-compass',
            children: [
                {
                    name: 'Form',
                    children: [
                        {
                            name: 'ColorPicker',
                            to: '/docs/tailwind/components/colorpicker',
                            badge: 'New'
                        },
                        {
                            name: 'InputText',
                            to: '/docs/tailwind/components/inputtext'
                        },
                        {
                            name: 'Switch',
                            to: '/docs/tailwind/components/switch'
                        }
                    ]
                },
                {
                    name: 'Button',
                    children: [
                        {
                            name: 'Button',
                            to: '/docs/tailwind/components/button'
                        },
                        {
                            name: 'SpeedDial',
                            to: '/docs/tailwind/components/speeddial'
                        }
                    ]
                }
            ]
        }
    ],
    addons: []
};
