import { DocComponent } from '@/components/doc/common/doccomponent';
import { CSSLayerDoc } from '@/components/doc/tailwind/csslayerdoc';
import { ExampleDoc } from '@/components/doc/tailwind/unstyledmode/exampledoc';
import { SetupDoc } from '@/components/doc/tailwind/unstyledmode/setupdoc';

const TailwindDemo = () => {
    const docs = [
        {
            id: 'csslayer',
            label: 'CSS Layer',
            component: CSSLayerDoc
        },
        {
            id: 'unstyledmode',
            label: 'Unstyled Mode',
            description:
                'In unstyled mode, the exclusive Tailwind integration of PrimeReact is a great choice for developers who want the flexibility of Tailwind with the convenience of a UI Component library. Tailwind is a perfect match for the unstyled mode of PrimeReact to implement design systems. A built-in Tailwind theme as a pass through preset based on PrimeOne Design is even available to get started in no time. In upcoming iterations, a preset gallery will be available to share implementations developed by the PrimeReact community.',
            children: [
                {
                    id: 'setup',
                    label: 'Setup',
                    component: SetupDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                }
            ]
        }
    ];

    const description = `
    Tailwind CSS is a popular utility first CSS library that fits perfectly to the unstyled mode to skin the entire UI suite with a design system of your choice.
    `;

    return <DocComponent title="Tailwind - PrimeReact" header="Tailwind CSS" description={description} componentDocs={docs} hideTabMenu />;
};

export default TailwindDemo;
