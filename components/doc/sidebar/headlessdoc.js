import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Sidebar } from '@/components/lib/sidebar/Sidebar';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Ripple } from '@/components/lib/ripple/Ripple';
import { useState, useRef } from 'react';
import { StyleClass } from '@/components/lib/styleclass/StyleClass';

export function HeadlessDoc(props) {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    const code = {
        basic: `
<Sidebar
    visible={visible}
    onHide={() => setVisible(false)}
    content={({ closeIconRef, hide }) => (
        <div className="min-h-screen flex relative lg:static surface-ground">
            <div id="app-sidebar-2" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                <div className="flex flex-column h-full">
                    <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span className="inline-flex align-items-center gap-2">
                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="..."
                                    fill="var(--primary-color)"
                                />
                                <path
                                    d="..."
                                    fill="var(--text-color)"
                                />
                            </svg>
                            <span className="font-semibold text-2xl text-primary">Your Logo</span>
                        </span>
                        <span>
                            <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                        </span>
                    </div>
                    <div className="overflow-y-auto">
                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                        <span className="font-medium">FAVORITES</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">Dashboard</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-bookmark mr-2"></i>
                                            <span className="font-medium">Bookmarks</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Reports</span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">Revenue</span>
                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">View</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">Search</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">Expenses</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-users mr-2"></i>
                                            <span className="font-medium">Team</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">Messages</span>
                                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                3
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Calendar</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                        <span className="font-medium">APPLICATION</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-folder mr-2"></i>
                                            <span className="font-medium">Projects</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-bar mr-2"></i>
                                            <span className="font-medium">Performance</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                        <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold">Amy Elsner</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )}
></Sidebar>
        `,
        javascript: `
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/Ripple';
import { StyleClass } from 'primereact/StyleClass';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={({ closeIconRef, hide }) => (
                    <div className="min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2">
                                        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                                fill="var(--primary-color)"
                                            />
                                            <path
                                                d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                                fill="var(--text-color)"
                                            />
                                        </svg>
                                        <span className="font-semibold text-2xl text-primary">Your Logo</span>
                                    </span>
                                    <span>
                                        <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Dashboard</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">Bookmarks</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Reports</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                                <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">Revenue</span>
                                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                    <Ripple />
                                                                </a>
                                                            </StyleClass>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">View</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">Search</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Expenses</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">Team</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">Messages</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                            3
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-calendar mr-2"></i>
                                                        <span className="font-medium">Calendar</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">APPLICATION</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-folder mr-2"></i>
                                                        <span className="font-medium">Projects</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-bar mr-2"></i>
                                                        <span className="font-medium">Performance</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/Ripple';
import { StyleClass } from 'primereact/StyleClass';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const btnRef1 = useRef<any>(null);
    const btnRef2 = useRef<any>(null);
    const btnRef3 = useRef<any>(null);
    const btnRef4 = useRef<any>(null);

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={({ closeIconRef, hide }) => (
                    <div className="min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2">
                                        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                                fill="var(--primary-color)"
                                            />
                                            <path
                                                d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                                fill="var(--text-color)"
                                            />
                                        </svg>
                                        <span className="font-semibold text-2xl text-primary">Your Logo</span>
                                    </span>
                                    <span>
                                        <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Dashboard</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">Bookmarks</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Reports</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                                <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">Revenue</span>
                                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                    <Ripple />
                                                                </a>
                                                            </StyleClass>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">View</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">Search</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Expenses</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">Team</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">Messages</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                            3
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-calendar mr-2"></i>
                                                        <span className="font-medium">Calendar</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">APPLICATION</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-folder mr-2"></i>
                                                        <span className="font-medium">Projects</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-bar mr-2"></i>
                                                        <span className="font-medium">Performance</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Sidebar is used as a container and visibility is controlled with a binding to <i>visible</i> and <i>onHide</i> event callback.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar
                    visible={visible}
                    onHide={() => setVisible(false)}
                    content={({ closeIconRef, hide }) => (
                        <div className="min-h-screen flex relative lg:static surface-ground">
                            <div id="app-sidebar-2" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                                <div className="flex flex-column h-full">
                                    <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                        <span className="inline-flex align-items-center gap-2">
                                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                                    fill="var(--primary-color)"
                                                />
                                                <path
                                                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                                    fill="var(--text-color)"
                                                />
                                            </svg>
                                            <span className="font-semibold text-2xl text-primary">Your Logo</span>
                                        </span>
                                        <span>
                                            <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                                        </span>
                                    </div>
                                    <div className="overflow-y-auto">
                                        <ul className="list-none p-3 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <span className="font-medium">FAVORITES</span>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>
                                                <ul className="list-none p-0 m-0 overflow-hidden">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-home mr-2"></i>
                                                            <span className="font-medium">Dashboard</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-bookmark mr-2"></i>
                                                            <span className="font-medium">Bookmarks</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                            <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Reports</span>
                                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                <Ripple />
                                                            </a>
                                                        </StyleClass>
                                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                                    <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-chart-line mr-2"></i>
                                                                        <span className="font-medium">Revenue</span>
                                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                        <Ripple />
                                                                    </a>
                                                                </StyleClass>
                                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                    <li>
                                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                            <i className="pi pi-table mr-2"></i>
                                                                            <span className="font-medium">View</span>
                                                                            <Ripple />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                            <i className="pi pi-search mr-2"></i>
                                                                            <span className="font-medium">Search</span>
                                                                            <Ripple />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">Expenses</span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-users mr-2"></i>
                                                            <span className="font-medium">Team</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-comments mr-2"></i>
                                                            <span className="font-medium">Messages</span>
                                                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                                3
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-calendar mr-2"></i>
                                                            <span className="font-medium">Calendar</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-cog mr-2"></i>
                                                            <span className="font-medium">Settings</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="list-none p-3 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <span className="font-medium">APPLICATION</span>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>
                                                <ul className="list-none p-0 m-0 overflow-hidden">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-folder mr-2"></i>
                                                            <span className="font-medium">Projects</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-bar mr-2"></i>
                                                            <span className="font-medium">Performance</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-cog mr-2"></i>
                                                            <span className="font-medium">Settings</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-auto">
                                        <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                        <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                                            <span className="font-bold">Amy Elsner</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                ></Sidebar>
                <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
