import React, { useContext } from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/ripple/accessibilitydoc';
import { BasicDoc } from '../../components/doc/ripple/basicdoc';
import { ConfigurationDoc } from '../../components/doc/ripple/configurationdoc';
import { ImportDoc } from '../../components/doc/ripple/importdoc';
import { StyleDoc } from '../../components/doc/ripple/styledoc';
import AppContentContext from '../../components/layout/appcontentcontext';

const RippleDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'configuration',
            label: 'ConfigurationDoc',
            component: ConfigurationDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const appContentContext = useContext(AppContentContext);

    appContentContext.onRippleChange(true);

    return <DocComponent title="React Ripple Component" header="Ripple" description="Ripple component adds ripple effect to the host element." componentDocs={docs} apiDocs={[{ name: 'Ripple', pathname: '/modules/ripple.html' }]} />;
};

export default RippleDemo;
