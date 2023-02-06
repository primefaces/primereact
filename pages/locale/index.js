import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AddLocaleDoc } from '../../components/doc/locale/addlocaledoc';
import { APIDoc } from '../../components/doc/locale/apidoc';
import { ImportDoc } from '../../components/doc/locale/importdoc';
import { RepositoryDoc } from '../../components/doc/locale/repositorydoc';
import { SetLocaleDoc } from '../../components/doc/locale/setlocaledoc';

const LocalePage = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'setlocale',
            label: 'Set Locale',
            component: SetLocaleDoc
        },
        {
            id: 'addlocale',
            label: 'Add Locale',
            component: AddLocaleDoc
        },
        {
            id: 'repositorydoc',
            label: 'Repository',
            component: RepositoryDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: APIDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Locale - PrimeReact</title>
                <meta name="description" content="The Locale API allows setting i18n and l7n options globally for the components." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Internationalization and Localization</h1>
                        <p>The Locale API allows setting i18n and l7n options globally for the components.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default LocalePage;
