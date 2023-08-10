import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { SetupDoc } from '../../components/doc/tailwind/setupdoc';
import { CustomizationDocDoc } from '../../components/doc/tailwind/customizationdoc';
import { ExampleDoc } from '../../components/doc/tailwind/exampledoc';

const TerminalDemo = () => {
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

    return (
        <DocComponent
            title="Tailwind - PrimeReact"
            header="Tailwind CSS"
            description="Tailwind is a popular utility-first CSS library that fits perfectly to the unstyled mode of PrimeReact. A <b>built-in Tailwind theme</b> is even available to get started in no time."
            componentDocs={docs}
            hideTabMenu
        />
    );
};

export default TerminalDemo;
