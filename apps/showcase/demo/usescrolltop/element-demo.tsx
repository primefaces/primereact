'use client';

import { useScrollTop } from '@primereact/hooks';
import { Button } from 'primereact/button';
import * as React from 'react';

export default function ElementDemo() {
    const [target, setTarget] = React.useState<HTMLDivElement | null>(null);

    const { scrollToTop, visible } = useScrollTop({
        target,
        threshold: 100
    });

    return (
        <div className="flex justify-center">
            <div ref={setTarget} className="overflow-y-scroll" style={{ width: '250px', height: '200px', scrollbarWidth: 'thin' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
                    et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo
                    laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed
                    vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida
                    hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
                    ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac
                    turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                    viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor
                    nec.
                </p>
                {visible && (
                    <Button.Root
                        onClick={scrollToTop}
                        iconOnly
                        rounded
                        className="sticky flex ms-auto [inset-block-end:20px] [inset-inline-end:20px]"
                    >
                        <i className="pi pi-arrow-up" />
                    </Button.Root>
                )}
            </div>
        </div>
    );
}
