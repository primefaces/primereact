import React, { useRef } from 'react';
import { TieredMenu } from '../../components/lib/tieredmenu/TieredMenu';
import { Button } from '../../components/lib/button/Button';
import TieredMenuDoc from '../../components/doc/tieredmenu';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TieredMenuDemo = () => {

    const menu = useRef(null)

    const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },
                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div>
            <Head>
                <title>React TieredMenu Component</title>
                <meta name="description" content="TieredMenu displays submenus in nested overlays." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>TieredMenu</h1>
                    <p>TieredMenu displays submenus in nested overlays.</p>
                </div>
                <DocActions github="tieredmenu/index.js" />
            </div>
            <div className="content-section implementation">
                <div className="card">
                    <h5>Inline</h5>
                    <TieredMenu model={items} />

                    <h5>Overlay</h5>
                    <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
                    <Button label="Show" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-haspopup aria-controls="overlay_tmenu" />
                </div>
            </div>

            <TieredMenuDoc />
        </div>
    );
}

export default TieredMenuDemo;
