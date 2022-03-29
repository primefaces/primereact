import React, { useRef } from 'react';
import { Menu } from '../../components/lib/menu/Menu';
import { Button } from '../../components/lib/button/Button';
import { Toast } from '../../components/lib/toast/Toast';
import MenuDoc from '../../components/doc/menu';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import Link from 'next/link';

const MenuDemo = () => {

    const menu = useRef(null);
    const toast = useRef(null);

    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    template: (item, options) => {
                        return (
                            <Link href="/fileupload">
                                <a className={options.className} target={item.target}>
                                    <span className="p-menuitem-icon pi pi-upload"></span>
                                    <span className="p-menuitem-text">{item.label}</span>
                                </a>
                            </Link>
                        );
                    }
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Menu Component</title>
                <meta name="description" content="Menu is a navigation/command component that supports dynamic and static positioning." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Menu</h1>
                    <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                </div>
                <DocActions github="menu/index.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast}></Toast>

                <div className="card">
                    <h5>Inline</h5>
                    <Menu model={items} />

                    <h5>Overlay</h5>
                    <Menu model={items} popup ref={menu} id="popup_menu" />
                    <Button label="Show" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
                </div>
            </div>

            <MenuDoc />
        </div>
    )
}

export default MenuDemo;
