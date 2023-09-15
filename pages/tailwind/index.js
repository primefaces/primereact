import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { CustomizationDocDoc } from '../../components/doc/tailwind/customizationdoc';
import { ExampleDoc } from '../../components/doc/tailwind/exampledoc';
import { SetupDoc } from '../../components/doc/tailwind/setupdoc';

const TailwindDemo = () => {
    const docs = [
        {
            id: 'setup',
            label: 'Setup',
            component: SetupDoc
        },
        {
            id: 'customization',
            label: 'Customization',
            component: CustomizationDocDoc
        },
        {
            id: 'example',
            label: 'Example',
            component: ExampleDoc
        }
    ];

    const description = `
    The exclusive Tailwind integration of PrimeReact is a great choice for developers who want the flexibility of Tailwind with the convenience of a UI Component library. Tailwind simply fits perfectly to the unstyled mode of PrimeReact to implement design systems. A <b> built-in Tailwind theme </b> based on <a href="/uikit" class="font-semibold hover:underline text-primary"> PrimeOne Design </a> is even available to get started in no time. In the upcoming iterations, PrimeReact will provide more presets to implement various design systems.
    `;

    return <DocComponent title="Tailwind - PrimeReact" header="Tailwind CSS" description={description} componentDocs={docs} hideTabMenu />;
};

export default TailwindDemo;
