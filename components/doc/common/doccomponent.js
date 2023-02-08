import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { classNames } from '../../lib/utils/Utils';
import { DocApiSection } from './docapisection';
import { DocSectionNav } from './docsectionnav';
import { DocSections } from './docsections';

export function DocComponent(props) {
    const [tab, setTab] = useState(0);
    const router = useRouter();

    const activateTab = (i) => {
        setTab(i);
        router.replace(router.pathname);
    };

    return (
        <div className="doc-component">
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.title} />
            </Head>
            <ul className="doc-tabmenu">
                <li className={classNames({ 'doc-tabmenu-active': tab === 0 })}>
                    <button type="button" onClick={() => activateTab(0)}>
                        {props.header.startsWith('use') ? 'HOOK' : 'COMPONENT'}
                    </button>
                </li>
                <li className={classNames({ 'doc-tabmenu-active': tab === 1 })}>
                    <button type="button" onClick={() => activateTab(1)}>
                        API
                    </button>
                </li>
            </ul>
            <div className="doc-tabpanels">
                {tab === 0 ? (
                    <div className="doc-tabpanel">
                        <div className="doc-main">
                            <div className="doc-intro">
                                <h1>{props.header}</h1>
                                <p>{props.description}</p>
                            </div>
                            <DocSections docs={props.componentDocs} />
                        </div>
                        <DocSectionNav docs={props.componentDocs} />
                    </div>
                ) : null}
                {tab === 1 ? (
                    <div className="doc-tabpanel">
                        <DocApiSection doc={props.apiDocs} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}
