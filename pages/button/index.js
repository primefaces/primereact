import { AccessibilityDoc } from '@/components/doc/button/accessibilitydoc';
import { BadgesDoc } from '@/components/doc/button/badgesdoc';
import { BasicDoc } from '@/components/doc/button/basicdoc';
import { ButtonSetDoc } from '@/components/doc/button/buttonsetdoc';
import { DisabledDoc } from '@/components/doc/button/disableddoc';
import { IconOnlyDoc } from '@/components/doc/button/icononlydoc';
import { IconsDoc } from '@/components/doc/button/iconsdoc';
import { ImportDoc } from '@/components/doc/button/importdoc';
import { LinkDoc } from '@/components/doc/button/linkdoc';
import { LoadingDoc } from '@/components/doc/button/loadingdoc';
import { OutlinedDoc } from '@/components/doc/button/outlineddoc';
import { PTDoc } from '@/components/doc/button/pt/ptdoc';
import { Wireframe } from '@/components/doc/button/pt/wireframe';
import { RaisedDoc } from '@/components/doc/button/raiseddoc';
import { RaisedTextDoc } from '@/components/doc/button/raisedtextdoc';
import { RoundedDoc } from '@/components/doc/button/roundeddoc';
import { SeverityDoc } from '@/components/doc/button/severitydoc';
import { SizesDoc } from '@/components/doc/button/sizesdoc';
import { TemplateDoc } from '@/components/doc/button/templatedoc';
import { TextDoc } from '@/components/doc/button/textdoc';
import { StyledDoc } from '@/components/doc/button/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/button/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const ButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'link',
            label: 'Link',
            component: LinkDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'raised',
            label: 'Raised',
            component: RaisedDoc
        },
        {
            id: 'rounded',
            label: 'Rounded',
            component: RoundedDoc
        },
        {
            id: 'text',
            label: 'Text',
            component: TextDoc
        },
        {
            id: 'raisedtext',
            label: 'Raised Text',
            component: RaisedTextDoc
        },
        {
            id: 'outlined',
            label: 'Outlined',
            component: OutlinedDoc
        },
        {
            id: 'icononly',
            label: 'Icon Only',
            component: IconOnlyDoc
        },
        {
            id: 'badges',
            label: 'Badges',
            component: BadgesDoc
        },
        {
            id: 'buttonset',
            label: 'Button Set',
            component: ButtonSetDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },

        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.button.options',
            label: 'Button PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

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

    return <DocComponent title="React Button Component" header="Button" description="Button is an extension to standard input element with icons and theming." componentDocs={docs} apiDocs={['Button']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ButtonDemo;
