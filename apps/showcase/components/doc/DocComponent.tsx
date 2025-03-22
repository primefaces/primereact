'use client';
import type { DocComponentProps } from '@/types/Doc.types';
import { cn } from '@primeuix/utils';
import * as React from 'react';
import DocApiSection from './DocApiSection';
import DocSectionNav from './DocSectionNav';
import DocSections from './DocSections';

function FeaturesTab(props: DocComponentProps) {
    return (
        <>
            <div className="doc-main">
                <div className="doc-intro">
                    <h1>{props.header}</h1>
                    <p>{props.description}</p>
                </div>
                <DocSections docs={props.docs?.features} />
            </div>
            <DocSectionNav docs={props.docs?.features} />
        </>
    );
}

function ApiTab(props: DocComponentProps) {
    return <DocApiSection doc={props.docs?.api} header={props.header} />;
}

function ThemingTab(props: DocComponentProps) {
    return <div>Theming</div>;
}

function PtTab(props: DocComponentProps) {
    return <div>PT</div>;
}

const metadata = [
    { key: 'features', label: 'FEATURES', component: FeaturesTab },
    { key: 'api', label: 'API', component: ApiTab },
    { key: 'theming', label: 'THEMING', component: ThemingTab },
    { key: 'pt', label: 'PASS THROUGH', component: PtTab }
];

export default function DocComponent(props: DocComponentProps) {
    const [tab, setTab] = React.useState(0);
    const validDocs = React.useMemo(() => metadata.filter((data) => Object.keys(props.docs || {}).some((key) => key === data.key)), [props.docs]);

    return (
        <div className={cn('doc-component', props.className)}>
            <ul className="doc-tabmenu">
                {validDocs.map((doc, index) => (
                    <li key={index} className={cn({ 'doc-tabmenu-active': tab === index })}>
                        <button type="button" onClick={() => setTab(index)}>
                            {doc.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="doc-tabpanels">
                {validDocs.map(
                    (doc, index) =>
                        index === tab && (
                            <div className="doc-tabpanel" key={index}>
                                <doc.component {...props} />
                            </div>
                        )
                )}
            </div>
        </div>
    );
}
