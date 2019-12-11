import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export class AppMenu extends Component {

    constructor() {
        super();
        this.state = { activeMenu: -1 };
    }

    toggleMenu(val) {
        let active = this.state.activeMenu === val;

        this.setState({ activeMenu: active ? -1 : val });
    }

    render() {

        const menu = [
            {
                "sectionLabel": "Input",
                "buttonId":"menu_input",
                "iconAltText":"input",
                "iconActive": "showcase/resources/images/mono/input-active.svg",
                "iconInactive": "showcase/resources/images/mono/input.svg",
                "items": [
                    {
                        "url": "/autocomplete",
                        "label": "AutoComplete"
                    },
                    {
                        "url": "/calendar",
                        "label": "Calendar"
                    },
                    {
                        "url": "/checkbox",
                        "label": "Checkbox"
                    },
                    {
                        "url": "/colorpicker",
                        "label": "ColorPicker"
                    },
                    {
                        "url": "/chips",
                        "label": "Chips"
                    },
                    {
                        "url": "/dropdown",
                        "label": "Dropdown"
                    },
                    {
                        "url": "/editor",
                        "label": "Editor"
                    },
                    {
                        "url": "/inputmask",
                        "label": "InputMask"
                    },
                    {
                        "url": "/inputgroup",
                        "label": "InputGroup"
                    },
                    {
                        "url": "/inputswitch",
                        "label": "InputSwitch"
                    },
                    {
                        "url": "/inputtext",
                        "label": "InputText"
                    },
                    {
                        "url": "/inputtextarea",
                        "label": "InputTextarea"
                    },
                    {
                        "url": "/keyfilter",
                        "label": "KeyFilter"
                    },
                    {
                        "url": "/listbox",
                        "label": "Listbox"
                    },
                    {
                        "url": "/multiselect",
                        "label": "MultiSelect"
                    },
                    {
                        "url": "/password",
                        "label": "Password"
                    },
                    {
                        "url": "/radiobutton",
                        "label": "RadioButton"
                    },
                    {
                        "url": "/rating",
                        "label": "Rating"
                    },
                    {
                        "url": "/selectbutton",
                        "label": "SelectButton"
                    },
                    {
                        "url": "/slider",
                        "label": "Slider"
                    },
                    {
                        "url": "/spinner",
                        "label": "Spinner"
                    },
                    {
                        "url": "/tristatecheckbox",
                        "label": "TriState"
                    },
                    {
                        "url": "/togglebutton",
                        "label": "ToggleButton"
                    }
                ]
            },
            {
                "sectionLabel": "Button",
                "buttonId":"button_menutitle",
                "iconAltText":"button",
                "iconActive": "showcase/resources/images/mono/button-active.svg",
                "iconInactive": "showcase/resources/images/mono/button.svg",
                "items": [
                    {
                        "url": "/button",
                        "label": "Button"
                    },
                    {
                        "url": "/splitbutton",
                        "label": "SplitButton"
                    },

                ]
            },
            {
                "sectionLabel": "Data",
                "buttonId":"data_menutitle",
                "iconAltText":"data",
                "iconActive": "showcase/resources/images/mono/data-active.svg",
                "iconInactive": "showcase/resources/images/mono/data.svg",
                "items": [
                    {
                        "url": "/carousel",
                        "label": "Carousel"
                    },
                    {
                        "url": "/dataview",
                        "label": "DataView"
                    },
                    {
                        "url": "/datatable",
                        "label": "DataTable"
                    },
                    {
                        "url": "/datascroller",
                        "label": "DataScroller"
                    },
                    {
                        "url": "/gmap",
                        "label": "Google Maps"
                    },
                    {
                        "url": "/fullcalendar",
                        "label": "FullCalendar"
                    },
                    {
                        "url": "/orderlist",
                        "label": "OrderList"
                    },
                    {
                        "url": "/organizationchart",
                        "label": "Org Chart"
                    },
                    {
                        "url": "/paginator",
                        "label": "Paginator"
                    },
                    {
                        "url": "/picklist",
                        "label": "PickList"
                    },
                    {
                        "url": "/tree",
                        "label": "Tree"
                    },
                    {
                        "url": "/treetable",
                        "label": "TreeTable"
                    },

                ]
            },
            {
                "sectionLabel": "Panel",
                "buttonId":"menu_panel",
                "iconAltText":"panel",
                "iconActive": "showcase/resources/images/mono/panel-active.svg",
                "iconInactive": "showcase/resources/images/mono/panel.svg",
                "items": [
                    {
                        "url": "/accordion",
                        "label": "Accordion"
                    },
                    {
                        "url": "/card",
                        "label": "Card"
                    },
                    {
                        "url": "/deferredcontent",
                        "label": "Deferred"
                    },
                    {
                        "url": "/fieldset",
                        "label": "Fieldset"
                    },
                    {
                        "url": "/panel",
                        "label": "Panel"
                    },
                    {
                        "url": "/flexgrid",
                        "label": "FlexGrid"
                    },
                    {
                        "url": "/scrollpanel",
                        "label": "ScrollPanel"
                    },
                    {
                        "url": "/tabview",
                        "label": "TabView"
                    },
                    {
                        "url": "/toolbar",
                        "label": "Toolbar"
                    }
                ]
            },
            {
                "sectionLabel": "Overlay",
                "buttonId":"menu_overlay",
                "iconAltText":"overlay",
                "iconActive": "showcase/resources/images/mono/overlay-active.svg",
                "iconInactive": "showcase/resources/images/mono/overlay.svg",
                "items": [
                    {
                        "url": "/dialog",
                        "label": "Dialog"
                    },
                    {
                        "url": "/lightbox",
                        "label": "Lightbox"
                    },
                    {
                        "url": "/overlaypanel",
                        "label": "OverlayPanel"
                    },
                    {
                        "url": "/sidebar",
                        "label": "Sidebar"
                    },
                    {
                        "url": "/tooltip",
                        "label": "Tooltip"
                    },

                ]
            },
            {
                "sectionLabel": "File",
                "buttonId":"menu_file",
                "iconAltText":"file",
                "iconActive": "showcase/resources/images/mono/file-active.svg",
                "iconInactive": "showcase/resources/images/mono/file.svg",
                "items": [
                    {
                        "url": "/fileupload",
                        "label": "Upload"
                    }
                ]
            },
            {
                "sectionLabel": "Menu",
                "buttonId":"menu_menu",
                "iconAltText":"menu",
                "iconActive": "showcase/resources/images/mono/menu-active.svg",
                "iconInactive": "showcase/resources/images/mono/menu.svg",
                "items": [
                    {
                        "url": "/menumodel",
                        "label": "MenuModel"
                    },
                    {
                        "url": "/menu",
                        "label": "Menu"
                    },
                    {
                        "url": "/tabmenu",
                        "label": "TabMenu"
                    },
                    {
                        "url": "/breadcrumb",
                        "label": "Breadcrumb"
                    },
                    {
                        "url": "/tieredmenu",
                        "label": "TieredMenu"
                    },
                    {
                        "url": "/menubar",
                        "label": "Menubar"
                    },
                    {
                        "url": "/contextmenu",
                        "label": "ContextMenu"
                    },
                    {
                        "url": "/panelmenu",
                        "label": "PanelMenu"
                    },
                    {
                        "url": "/steps",
                        "label": "Steps"
                    },
                    {
                        "url": "/megamenu",
                        "label": "MegaMenu"
                    },
                    {
                        "url": "/slidemenu",
                        "label": "SlideMenu"
                    },

                ]
            },
            {
                "sectionLabel": "Chart",
                "buttonId":"menu_chart",
                "iconAltText":"charts",
                "iconActive": "showcase/resources/images/mono/charts-active.svg",
                "iconInactive": "showcase/resources/images/mono/charts.svg",
                "items": [
                    {
                        "url": "/chartdemo",
                        "label": "ChartModel"
                    },
                    {
                        "url": "/piechart",
                        "label": "Pie"
                    },
                    {
                        "url": "/doughnutchart",
                        "label": "Doughnut"
                    },
                    {
                        "url": "/barchart",
                        "label": "Bar"
                    },
                    {
                        "url": "/linechart",
                        "label": "Line"
                    },
                    {
                        "url": "/polarareachart",
                        "label": "PolarArea"
                    },
                    {
                        "url": "/radarchart",
                        "label": "Radar"
                    },
                    {
                        "url": "/combochart",
                        "label": "Combo"
                    },

                ]
            },
            {
                "sectionLabel": "Messages",
                "buttonId":"menu_messages",
                "iconAltText":"message",
                "iconActive": "showcase/resources/images/mono/message-active.svg",
                "iconInactive": "showcase/resources/images/mono/message.svg",
                "items": [
                    {
                        "url": "/messages",
                        "label": "Messages"
                    },
                    {
                        "url": "/growl",
                        "label": "Growl"
                    },

                ]
            },
            {
                "sectionLabel": "Misc",
                "buttonId":"menu_misc",
                "iconAltText":"misc",
                "iconActive": "showcase/resources/images/mono/misc-active.svg",
                "iconInactive": "showcase/resources/images/mono/misc.svg",
                "items": [
                    {
                        "url": "/progressbar",
                        "label": "ProgressBar"
                    },
                    {
                        "url": "/captcha",
                        "label": "Captcha"
                    },
                    {
                        "url": "/inplace",
                        "label": "Inplace"
                    },
                    {
                        "url": "/progressspinner",
                        "label": "ProgressSpinner"
                    },

                ]
            },
        ]
        return (
            <div className="layout-menu">
                {
                    (menu.map((entry, index) => {
                        return (
                            <>
                                <button id={entry.buttonId} onClick={() => this.toggleMenu(index)} className={classNames({ 'active-menuitem': this.state.activeMenu === index })}>
                                    <img alt={entry.iconAltText} className="layout-menu-icon-inactive" src={entry.iconInactive}></img>
                                    <img alt={entry.iconAltText} className="layout-menu-icon-active" src={entry.iconActive}></img>
                                    <span>{entry.sectionLabel}</span>
                                </button>
                                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === index}>
                                    <div className="layout-submenu">
                                        <div>
                                            {
                                                entry.items.map(subItem => {
                                                    return (<Link to={subItem.url}>&#9679; {subItem.label}</Link>)
                                                })
                                            }
                                        </div>
                                    </div>
                                </CSSTransition>
                            </>
                        )
                    })
                    )
                }
            </div>
        );
    }
}