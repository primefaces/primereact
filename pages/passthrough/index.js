import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { BasicDoc } from '../../components/doc/passthrough/basicdoc';
import { GlobalPTDoc } from '../../components/doc/passthrough/globalptdoc';

const PassThroughDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'globalpt',
            label: 'Global',
            component: GlobalPTDoc
        }
    ];

    return (
        <DocComponent
            title="PrimeReact - PassThrough"
            header="Pass Through"
            description="The Pass Through props is an API to access the internal DOM Structure of the components."
            componentDocs={docs}
            apiDocs={['API']}
            apiExclude={{ interfaces: ['PrimeIconsOptions', 'APIOptions', 'ContextAPIOptions', 'FilterMatchModeOptions', 'ZIndexOptions', 'LocaleOptions'], types: 'excludeAll' }}
        />
    );
};

export default PassThroughDemo;
