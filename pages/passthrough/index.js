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
            label: 'Global PassThrough Options',
            component: GlobalPTDoc
        }
    ];

    return (
        <DocComponent
            title="PrimeReact - PassThrough"
            header="PassThrough"
            description="The Pass Through feature enables direct implementation of all relevant attributes (e.g., style, classnames) within the respective HTML tag."
            componentDocs={docs}
            apiDocs={['API']}
            apiExclude={{ interfaces: ['PrimeIconsOptions', 'APIOptions', 'ContextAPIOptions', 'FilterMatchModeOptions', 'ZIndexOptions'], types: 'excludeAll' }}
        />
    );
};

export default PassThroughDemo;
