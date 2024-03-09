import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/ripple/accessibilitydoc';
import { BasicDoc } from '@/components/doc/ripple/basicdoc';
import { ConfigurationDoc } from '@/components/doc/ripple/configurationdoc';
import { CustomDoc } from '@/components/doc/ripple/customdoc';
import { ImportDoc } from '@/components/doc/ripple/importdoc';
import { StyledDoc } from '@/components/doc/ripple/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/ripple/theming/tailwinddoc';
import { PrimeReactContext } from '@/components/lib/api/PrimeReactContext';
import { useContext, useEffect, useRef } from 'react';

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
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const { ripple, setRipple } = useContext(PrimeReactContext);
    const userRippleValue = useRef(ripple);

    useEffect(() => {
        setRipple(true);

        const currentRipple = userRippleValue.current;

        return () => {
            setRipple(currentRipple);
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
