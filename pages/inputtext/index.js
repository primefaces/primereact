import React from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { GettingStartedDoc } from '../../components/doc/inputtext/gettingstarteddoc';
import { FloatLabelDoc } from '../../components/doc/inputtext/floatlabeldoc';
import { IconsDoc } from '../../components/doc/inputtext/iconsdoc';
import { HelpTextDoc } from '../../components/doc/inputtext/helptextdoc';
import { InvalidDoc } from '../../components/doc/inputtext/invaliddoc';
import { ApiDoc } from '../../components/doc/inputtext/apidoc';
import { KeyFilterDoc } from '../../components/doc/inputtext/keyfilterdoc';
import { DisabledDoc } from '../../components/doc/inputtext/disableddoc';
import { SizesDoc } from '../../components/doc/inputtext/sizesdoc';
import { ImportDoc } from '../../components/doc/inputtext/importdoc';

const InputTextDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'gettingstarted',
            label: 'Getting Started',
            component: GettingStartedDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDoc 
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'api',
            label: 'API',
            type: 'api',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React InputText Component</title>
                <meta name="description" content="InputText is an extension to standard input element with theming and keyfiltering." />
            </Head>
            
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputText</h1>
                    <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputTextDemo;
