import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { BasicDoc } from '../../components/doc/menumodel/basicdoc';
import { TemplateDoc } from '../../components/doc/menumodel/templatedoc';
import { CommandDoc } from '../../components/doc/menumodel/commandoc';
import { NavigationDoc } from '../../components/doc/menumodel/navigationdoc';

const MenuModelDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'command',
            label: 'Command',
            component: CommandDoc
        },
        {
            id: 'navigation',
            label: 'Navigation',
            component: NavigationDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>MenuModel - PrimeReact</title>
                <meta name="description" content="PrimeReact menus components share a common api to specify the menuitems and submenus." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>MenuModel API</h1>
                    <p>PrimeReact menus components share a common api to specify the menuitems and submenus.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MenuModelDemo;
