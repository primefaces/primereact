import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AppendToDoc } from '../../components/doc/configuration/appendtodoc';
import { CSSTransitionDoc } from '../../components/doc/configuration/csstransitiondoc';
import { FilterMatchModeDoc } from '../../components/doc/configuration/filtermatchmodedoc';
import { ImportDoc } from '../../components/doc/configuration/importdoc';
import { InputStyleDoc } from '../../components/doc/configuration/inputstyledoc';
import { LocaleDoc } from '../../components/doc/configuration/localedoc';
import { NonceDoc } from '../../components/doc/configuration/noncedoc';
import { RippleDoc } from '../../components/doc/configuration/rippledoc';
import { ZIndexDoc } from '../../components/doc/configuration/zindexdoc';

const InstallationPage = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'appendto',
            label: 'AppendTo',
            component: AppendToDoc
        },
        {
            id: 'csstransition',
            label: 'CSS Transition',
            component: CSSTransitionDoc
        },
        {
            id: 'filtermatchmode',
            label: 'Filter Mode',
            component: FilterMatchModeDoc
        },
        {
            id: 'inputstyle',
            label: 'InputStyle',
            component: InputStyleDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'nonce',
            label: 'Nonce',
            component: NonceDoc
        },
        {
            id: 'ripple',
            label: 'Ripple',
            component: RippleDoc
        },
        {
            id: 'zindex',
            label: 'ZIndex',
            component: ZIndexDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Configuration - PrimeReact</title>
                <meta name="description" content="Global configuration options of the components." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Configuration</h1>
                        <p>Global configuration options of the components.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InstallationPage;
