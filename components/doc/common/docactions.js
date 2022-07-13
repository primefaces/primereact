import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Menu } from '../../lib/menu/Menu';
import DomHandler from '../../lib/utils/DomHandler';
import { useLiveEditor } from './liveeditor';

export const DocActions = (props) => {
    const menu = useRef(null);
    const liveEditor = useRef(null);

    useEffect(() => {
        /* eslint-disable */
        liveEditor.current = useLiveEditor();
        /* eslint-enable */
    }, []);

    const items = [
        {
            label: 'Hooks Source Demo',
            command: () => liveEditor.current.postSandboxParameters('hooks')
        },
        {
            label: 'Class Source Demo',
            command: () => liveEditor.current.postSandboxParameters('class')
        },
        {
            label: 'TS Source Demo',
            command: () => liveEditor.current.postSandboxParameters('ts')
        },
        {
            label: 'Browser Source Demo',
            command: () => liveEditor.current.postSandboxParameters('browser')
        }
    ];

    const toggleMenu = (event) => {
        menu.current.toggle(event);
    }

    const scrollToDocs = () => {
        const top = DomHandler.getOffset(document.getElementById('app-doc')).top - DomHandler.getOuterHeight(document.getElementsByClassName('layout-topbar')[0], true);

        window.scroll({
            top,
            behavior: 'smooth'
        });
    }

    const viewOnGitHub = () => {
        window.open('https://github.com/primefaces/primereact/blob/master/pages/' + props.github, '_blank');
    }

    return (
        <div className="app-demoactions flex align-items-end justify-content-end mt-3">
            <Button className="p-button-text p-button-rounded p-button-plain p-button-lg p-button-icon-only" onClick={toggleMenu}>
                <svg role="img" viewBox="0 0 24 24" width={17} height={17} fill={'var(--text-color-secondary)'} style={{ display: 'block' }}>
                    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
                </svg>
            </Button>
            <Button icon="pi pi-github" className="p-button-text p-button-rounded p-button-plain p-button-lg ml-2" onClick={viewOnGitHub} ></Button >
            <Button icon="pi pi-info-circle" className="p-button-text p-button-rounded p-button-plain p-button-lg ml-2" onClick={scrollToDocs} ></Button >
            <Menu ref={menu} model={items} popup style={{ width: '14rem' }} />
        </div>
    )
}

