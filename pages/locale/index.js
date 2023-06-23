import React from 'react';
import { AddLocaleDoc } from '../../components/doc/locale/addlocaledoc';
import { ImportDoc } from '../../components/doc/locale/importdoc';
import { RepositoryDoc } from '../../components/doc/locale/repositorydoc';
import { SetLocaleDoc } from '../../components/doc/locale/setlocaledoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

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
        }
    ];

    return (
        <DocComponent
            title="Locale - PrimeReact"
            header="Internationalization and Localization"
            description="The Locale API allows setting i18n and l7n options globally for the components."
            componentDocs={docs}
            apiDocs={['API']}
            apiExclude={{ interfaces: ['PrimeIconsOptions', 'APIOptions', 'ContextAPIOptions', 'FilterMatchModeOptions', 'ZIndexOptions', 'PrimeReactPTOptions'], types: 'excludeAll' }}
        />
    );
};

export default LocalePage;
