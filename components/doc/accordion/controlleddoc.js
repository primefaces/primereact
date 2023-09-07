import { useState } from 'react';
import { Accordion, AccordionTab } from '../../lib/accordion/Accordion';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ControlledDoc(props) {
    const [activeIndex, setActiveIndex] = useState(null);

    const onClick = (itemIndex) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        } else {
            const index = _activeIndex.indexOf(itemIndex);

            if (index === -1) _activeIndex.push(itemIndex);
            else _activeIndex.splice(index, 1);
        }

        setActiveIndex(_activeIndex);
    };

    const code = {
        basic: `
<div className="flex flex-wrap gap-2 mb-3">
    <Button icon={activeIndex && activeIndex.some((index) => index === 0) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 1st" onClick={() => onClick(0)} className="p-button-text" />
    <Button icon={activeIndex && activeIndex.some((index) => index === 1) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 2nd" onClick={() => onClick(1)} className="p-button-text" />
    <Button icon={activeIndex && activeIndex.some((index) => index === 2) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 3rd" onClick={() => onClick(2)} className="p-button-text" />
</div>
<Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <AccordionTab header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>
        `,
        javascript: `
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

export default function ControlledDoc() {
    const [activeIndex, setActiveIndex] = useState();

    const onClick = (itemIndex) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        }
        else {
            const index = _activeIndex.indexOf(itemIndex);
            
            if (index === -1)
                _activeIndex.push(itemIndex);
            else
                _activeIndex.splice(index, 1);
        }

        setActiveIndex(_activeIndex);
    }

    return (
        <div className="card">
            <div className="flex flex-wrap gap-2 mb-3">
                <Button icon={activeIndex && activeIndex.some((index) => index === 0) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 1st" onClick={() => onClick(0)} className="p-button-text" />
                <Button icon={activeIndex && activeIndex.some((index) => index === 1) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 2nd" onClick={() => onClick(1)} className="p-button-text" />
                <Button icon={activeIndex && activeIndex.some((index) => index === 2) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 3rd" onClick={() => onClick(2)} className="p-button-text" />
            </div>
            <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

export default function ControlledDoc() {
    const [activeIndex, setActiveIndex] = useState<number | number[]>(null);

    const onClick = (itemIndex: number) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        }
        else {
            const index = _activeIndex.indexOf(itemIndex);
            
            if (index === -1)
                _activeIndex.push(itemIndex);
            else
                _activeIndex.splice(index, 1);
        }

        setActiveIndex(_activeIndex);
    }

    return (
        <div className="card">
            <div className="flex flex-wrap gap-2 mb-3">
                <Button icon={activeIndex && activeIndex.some((index) => index === 0) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 1st" onClick={() => onClick(0)} className="p-button-text" />
                <Button icon={activeIndex && activeIndex.some((index) => index === 1) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 2nd" onClick={() => onClick(1)} className="p-button-text" />
                <Button icon={activeIndex && activeIndex.some((index) => index === 2) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 3rd" onClick={() => onClick(2)} className="p-button-text" />
            </div>
            <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Accordion can be controlled programmatically using a binding to <i>activeIndex</i> along with <i>onTabChange</i> event to update the active index.
                </p>
            </DocSectionText>
            <div className="accordion-demo">
                <div className="card">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <Button icon={activeIndex && activeIndex.some((index) => index === 0) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 1st" onClick={() => onClick(0)} className="p-button-text" />
                        <Button icon={activeIndex && activeIndex.some((index) => index === 1) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 2nd" onClick={() => onClick(1)} className="p-button-text" />
                        <Button icon={activeIndex && activeIndex.some((index) => index === 2) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 3rd" onClick={() => onClick(2)} className="p-button-text" />
                    </div>
                    <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                        <AccordionTab header="Header I">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p className="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p className="m-0">
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
