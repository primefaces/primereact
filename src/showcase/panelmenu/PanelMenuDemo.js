import React, { Component } from 'react';
import { PanelMenu } from '../../components/panelmenu/PanelMenu';
import { AppInlineHeader } from '../../AppInlineHeader';
import { PanelMenuDoc } from './PanelMenuDoc';

export class PanelMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
               label:'File',
               icon:'pi pi-fw pi-file',
               items:[
                  {
                     label:'New',
                     icon:'pi pi-fw pi-plus',
                     items:[
                        {
                           label:'Bookmark',
                           icon:'pi pi-fw pi-bookmark'
                        },
                        {
                           label:'Video',
                           icon:'pi pi-fw pi-video'
                        }
                     ]
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-trash'
                  },
                  {
                     label:'Export',
                     icon:'pi pi-fw pi-external-link'
                  }
               ]
            },
            {
               label:'Edit',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Left',
                     icon:'pi pi-fw pi-align-left'
                  },
                  {
                     label:'Right',
                     icon:'pi pi-fw pi-align-right'
                  },
                  {
                     label:'Center',
                     icon:'pi pi-fw pi-align-center'
                  },
                  {
                     label:'Justify',
                     icon:'pi pi-fw pi-align-justify'
                  }
               ]
            },
            {
               label:'Users',
               icon:'pi pi-fw pi-user',
               items:[
                  {
                     label:'New',
                     icon:'pi pi-fw pi-user-plus'
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-user-minus'
                  },
                  {
                     label:'Search',
                     icon:'pi pi-fw pi-users',
                     items:[
                        {
                           label:'Filter',
                           icon:'pi pi-fw pi-filter',
                           items:[
                              {
                                 label:'Print',
                                 icon:'pi pi-fw pi-print'
                              }
                           ]
                        },
                        {
                           icon:'pi pi-fw pi-bars',
                           label:'List'
                        }
                     ]
                  }
               ]
            },
            {
               label:'Events',
               icon:'pi pi-fw pi-calendar',
               items:[
                  {
                     label:'Edit',
                     icon:'pi pi-fw pi-pencil',
                     items:[
                        {
                           label:'Save',
                           icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                           label:'Delete',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  },
                  {
                     label:'Archieve',
                     icon:'pi pi-fw pi-calendar-times',
                     items:[
                        {
                           label:'Remove',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  }
               ]
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="panelMenu">
                        <h1>PanelMenu</h1>
                        <p>PanelMenu is a hybrid of accordion-tree components.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <PanelMenu model={this.items} style={{ width: '22rem' }}/>
                    </div>
                </div>

                <PanelMenuDoc />
            </div>
        );
    }
}
