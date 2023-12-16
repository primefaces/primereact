import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ScrollTop } from '@/components/lib/scrolltop/ScrollTop';

export function PTDoc(props) {
    const code = {
        basic: `
<ScrollTop
    pt={{
        root: { className: 'w-2rem h-2rem bg-primary' },
        icon: { className: 'w-1rem h-1rem' }
    }}
/>
        `,
        javascript: `
import React from 'react';
import { ScrollTop } from 'primereact/scrolltop';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <div style={{ width: '250px', height: '200px', overflow: 'auto' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                    adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                    augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                    nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                    viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop
                    pt={{
                        root: { className: 'w-2rem h-2rem bg-primary' },
                        icon: { className: 'w-1rem h-1rem' }
                    }}
                    target="parent"
                    threshold={100}
                />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ScrollTop } from 'primereact/scrolltop';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <div style={{ width: '250px', height: '200px', overflow: 'auto' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                    adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                    augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                    nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                    viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop
                    pt={{
                        root: { className: 'w-2rem h-2rem bg-primary' },
                        icon: { className: 'w-1rem h-1rem' }
                    }}
                    target="parent"
                    threshold={100}
                />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <div style={{ width: '250px', height: '200px', overflow: 'auto' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                        adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                        augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                        nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                        viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                    <ScrollTop
                        pt={{
                            root: { className: 'w-2rem h-2rem bg-primary' },
                            icon: { className: 'w-1rem h-1rem' }
                        }}
                        target="parent"
                        threshold={100}
                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
