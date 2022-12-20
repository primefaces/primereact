import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ScrollPanel } from '../../lib/scrollpanel/ScrollPanel';
import { ScrollTop } from '../../lib/scrolltop/ScrollTop';

export function ElementDoc(props) {
    const code = {
        basic: `
<ScrollPanel style={{width: '250px', height: '200px'}}>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Vitae et leo duis ut diam.
        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
        Mattis aliquam faucibus purus in massa tempor nec.
    </p>
    <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round-md bg-primary" icon="pi pi-arrow-up text-base" />
</ScrollPanel>
        `,
        javascript: `
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';

export const ElementDoc = () => {

    return (
        <ScrollPanel style={{width: '250px', height: '200px'}}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae et leo duis ut diam.
                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round-md bg-primary" icon="pi pi-arrow-up text-base" />
        </ScrollPanel>
    );
}
        `,
        typescript: `
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';

export const ElementDoc = () => {

    return (
        <ScrollPanel style={{width: '250px', height: '200px'}}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae et leo duis ut diam.
                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round-md bg-primary" icon="pi pi-arrow-up text-base" />
        </ScrollPanel>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Scroll down the page to display the ScrollTo component.</p>
                <p>Without any configuration, ScrollTop listens window scroll.</p>
            </DocSectionText>
            <div className="card">
                <ScrollPanel style={{ width: '250px', height: '200px' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                        adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                        augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                        nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                        viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                    <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round-md bg-primary" icon="pi pi-arrow-up text-base" />
                </ScrollPanel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
