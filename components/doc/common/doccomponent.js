import { classNames } from '@/components/lib/utils/Utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DocApiSection } from './docapisection';
import { DocSectionNav } from './docsectionnav';
import { DocSections } from './docsections';

export function DocComponent(props) {
    const [tab, setTab] = useState(0);
    const router = useRouter();
    let header;

    if (props.header.startsWith('use')) header = 'HOOK';
    else if (props.header === 'PassThrough' || props.header === 'Configuration') header = 'OVERVIEW';
    else header = 'FEATURES';

    const activateTab = (i) => {
        setTab(i);
        router.replace(router.pathname);
    };

    useEffect(() => {
        if (router.asPath.includes('#api')) setTab(1);
        if (router.asPath.includes('#pt')) setTab(3);
    }, [router.asPath]);

    return (
        <div className={classNames(props.className, 'doc-component')}>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            {!props.hideTabMenu ? (
                <ul className="doc-tabmenu">
                    <li className={classNames({ 'doc-tabmenu-active': tab === 0 })}>
                        <button type="button" onClick={() => activateTab(0)}>
                            {header}
                        </button>
                    </li>
                    <li className={classNames({ 'doc-tabmenu-active': tab === 1 })}>
                        <button type="button" onClick={() => activateTab(1)}>
                            API
                        </button>
                    </li>
                    {props.themingDocs ? (
                        <li className={classNames({ 'doc-tabmenu-active': tab === 2 })}>
                            <button type="button" onClick={() => activateTab(2)}>
                                THEMING
                            </button>
                        </li>
                    ) : null}
                    {props.ptDocs ? (
                        <li className={classNames({ 'doc-tabmenu-active': tab === 3 })}>
                            <button type="button" onClick={() => activateTab(3)}>
                                PASS THROUGH
                            </button>
                        </li>
                    ) : null}
                </ul>
            ) : null}
            <div className="doc-tabpanels">
                {tab === 0 ? (
                    <div className="doc-tabpanel">
                        <div className="doc-main">
                            <div className="doc-intro">
                                <h1>{props.header}</h1>
                                <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
                            </div>
                            <DocSections docs={props.componentDocs} />
                        </div>
                        <DocSectionNav docs={props.componentDocs} />
                    </div>
                ) : null}
                {tab === 1 ? (
                    <div className="doc-tabpanel">
                        {props.apiDocs ? (
                            <DocApiSection header={props.header} doc={props.apiDocs} apiExclude={props.apiExclude} />
                        ) : (
                            <>
                                <div className="doc-main">
                                    <div className="doc-intro">
                                        <h1>{props.header} API</h1>
                                        <p>{props.header} is a CSS feature so does not provide a Javascript API</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ) : null}
                {tab === 2 ? (
                    <>
                        {props.themingDocs ? (
                            <div className="doc-tabpanel">
                                <div className="doc-main">
                                    <div className="doc-intro">
                                        <h1>{props.header} Theming</h1>
                                    </div>
                                    <DocSections docs={props.themingDocs} />
                                </div>
                                <DocSectionNav docs={props.themingDocs} />
                            </div>
                        ) : null}
                    </>
                ) : null}
                {tab === 3 ? (
                    <>
                        {props.ptDocs ? (
                            <div className="doc-tabpanel">
                                <div className="doc-main">
                                    <div className="doc-intro">
                                        <h1>{props.header} Pass Through</h1>
                                        <p>{props.ptDescription}</p>
                                    </div>
                                    <DocSections docs={props.ptDocs} />
                                </div>
                                <DocSectionNav docs={props.ptDocs} />
                            </div>
                        ) : null}
                    </>
                ) : null}
            </div>
        </div>
    );
}
