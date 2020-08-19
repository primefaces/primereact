import React, { Component } from 'react';
import { Menu } from '../../components/menu/Menu';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { Toast } from '../../components/toast/Toast';
import { MenuDoc } from './MenuDoc';

export class MenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.toast.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
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
                        icon: 'pi pi-upload',
                        command:(e) => {
                            window.location.hash = "/fileupload"
                        }
                    }
                ]
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="menu">
                        <h1>Menu</h1>
                        <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => { this.toast = el; }}></Toast>

                    <div className="card">
                        <h5>Inline</h5>
                        <Menu model={this.items} />

                        <h5>Overlay</h5>
                        <Menu model={this.items} popup ref={el => this.menu = el} id="popup_menu" />
                        <Button label="Show" icon="pi pi-bars" onClick={(event) => this.menu.toggle(event)} aria-controls="popup_menu" aria-haspopup />
                    </div>
                </div>

                <MenuDoc />
            </div>
        )
    }
}
