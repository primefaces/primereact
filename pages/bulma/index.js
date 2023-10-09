import React from 'react';
import { ExampleDoc } from '../../components/doc/bulma/exampledoc';
import { SetupDoc } from '../../components/doc/bulma/setupdoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const BulmaDemo = () => {
    const docs = [
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
    ];

    const description = `
    <a href="https://bulma.io/" class="font-semibold hover:underline text-primary">Bulma</a> is a free, open source framework that provides ready-to-use frontend components and utilities.
    `;

    return <DocComponent title="Bulma - PrimeReact" header="Bulma" description={description} componentDocs={docs} hideTabMenu></DocComponent>;
};

export default BulmaDemo;
