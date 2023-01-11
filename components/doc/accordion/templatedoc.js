import React from 'react';
import { Accordion, AccordionTab } from '../../lib/accordion/Accordion';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplateDoc(props) {
    const code = {
        basic: `
<Accordion activeIndex={0}>
    <AccordionTab header={<React.Fragment><i className="pi pi-calendar mr-2"></i><span className='vertical-align-middle'>Header I</span></React.Fragment>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </AccordionTab>
    <AccordionTab header={<React.Fragment><i className="pi pi-user mr-2"></i><span className='vertical-align-middle'>Header II</span></React.Fragment>}>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
    </AccordionTab>
    <AccordionTab header={<React.Fragment><i className="pi pi-search mr-2"></i><span className='vertical-align-middle'>Header III</span><i className="pi pi-cog ml-2"></i></React.Fragment>}>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
    </AccordionTab>
</Accordion>
        `,
        javascript: `
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import './AccordionDemo.css';

export default function TemplateDoc() {

    return (
        <div className="accordion-demo">
            <div className="card">
                <Accordion activeIndex={0}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-calendar mr-2"></i><span className='vertical-align-middle'>Header I</span></React.Fragment>}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionTab>
                    <AccordionTab header={<React.Fragment><i className="pi pi-user mr-2"></i><span className='vertical-align-middle'>Header II</span></React.Fragment>}>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </AccordionTab>
                    <AccordionTab header={<React.Fragment><i className="pi pi-search mr-2"></i><span className='vertical-align-middle'>Header III</span><i className="pi pi-cog ml-2"></i></React.Fragment>}>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import './AccordionDemo.css';

export default function TemplateDoc() {

    return (
        <div className="accordion-demo">
            <div className="card">
                <Accordion activeIndex={0}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-calendar mr-2"></i><span className='vertical-align-middle'>Header I</span></React.Fragment>}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionTab>
                    <AccordionTab header={<React.Fragment><i className="pi pi-user mr-2"></i><span className='vertical-align-middle'>Header II</span></React.Fragment>}>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </AccordionTab>
                    <AccordionTab header={<React.Fragment><i className="pi pi-search mr-2"></i><span className='vertical-align-middle'>Header III</span><i className="pi pi-cog ml-2"></i></React.Fragment>}>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
}
        `,
        extFiles: {
            'AccordionDemo.css': `
/* AccordionDemo.css */

.accordion-demo .p-accordion p {
line-height: 1.5;
margin: 0;}
    `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Custom Header Doc</p>
            </DocSectionText>
            <div className="accordion-demo">
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab
                            header={
                                <React.Fragment>
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="vertical-align-middle">Header I</span>
                                </React.Fragment>
                            }
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </AccordionTab>
                        <AccordionTab
                            header={
                                <React.Fragment>
                                    <i className="pi pi-user mr-2"></i>
                                    <span className="vertical-align-middle">Header II</span>
                                </React.Fragment>
                            }
                        >
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
                        </AccordionTab>
                        <AccordionTab
                            header={
                                <React.Fragment>
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="vertical-align-middle">Header III</span>
                                    <i className="pi pi-cog ml-2 ml-2"></i>
                                </React.Fragment>
                            }
                        >
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                minus.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
