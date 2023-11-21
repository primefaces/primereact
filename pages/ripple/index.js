import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/ripple/accessibilitydoc';
import { BasicDoc } from '@/components/doc/ripple/basicdoc';
import { ConfigurationDoc } from '@/components/doc/ripple/configurationdoc';
import { ImportDoc } from '@/components/doc/ripple/importdoc';
import { StyledDoc } from '@/components/doc/ripple/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/ripple/theming/tailwinddoc';
import AppContentContext from '@/components/layout/appcontentcontext';
import { useContext, useEffect } from 'react';

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
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const appContentContext = useContext(AppContentContext);

    useEffect(() => {
        appContentContext.setDisabled(true);
        appContentContext.onRippleChange(true);

        return () => {
            appContentContext.setDisabled(false);
            appContentContext.onRippleChange(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return <DocComponent title="React Ripple Component" header="Ripple" description="Ripple component adds ripple effect to the host element." componentDocs={docs} apiDocs={['Ripple']} themingDocs={themingDocs} />;
};

export default RippleDemo;
