import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/passthrough/basicdoc';
import { CustomCSSDoc } from '@/components/doc/passthrough/customcss';
import { GlobalPTDoc } from '@/components/doc/passthrough/globalptdoc';
import { LifeCyleDoc } from '@/components/doc/passthrough/lifecycle';
import { UsePassThroughDoc } from '@/components/doc/passthrough/usepassthroughdoc';

const PassThroughDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'lifecycle',
            label: 'Lifecycle',
            component: LifeCyleDoc
        },
        {
            id: 'globalpt',
            label: 'Global',
            component: GlobalPTDoc
        },
        {
            id: 'customcss',
            label: 'Custom CSS',
            component: CustomCSSDoc
        },
        {
            id: 'usepassthrough',
            label: 'UsePassThrough',
            component: UsePassThroughDoc
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
