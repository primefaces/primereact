import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Badge } from '@/components/lib/badge/Badge';
import { TabPanel, TabView } from '@/components/lib/tabview/TabView';

export function TemplateDoc(props) {
    const tab1HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
        );
    };

    const tab2HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Onyama Limba</span>
            </div>
        );
    };

    const tab3HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                <Badge value="2" />
            </div>
        );
    };

    const code = {
        basic: `
<TabView>
    <TabPanel header="Header I" headerTemplate={tab1HeaderTemplate}>
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
        `,
        javascript: `
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const tab1HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
        );
    };

    const tab2HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Onyama Limba</span>
            </div>
        )
    };

    const tab3HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                <Badge value="2" />
            </div>
        )
    };

    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" headerTemplate={tab1HeaderTemplate}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
                <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const tab1HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
        );
    };

    const tab2HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Onyama Limba</span>
            </div>
        )
    };

    const tab3HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                <Badge value="2" />
            </div>
        )
    };

    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" headerTemplate={tab1HeaderTemplate}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
                <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Title section of a tab is customized with the <i>header</i> property that takes a <i>TabPanelHeaderTemplateOptions</i> object as a parameter and returns content.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TabView>
                    <TabPanel header="Header I" headerTemplate={tab1HeaderTemplate}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </TabPanel>
                    <TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabView>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
