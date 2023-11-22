import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ExampleDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    As an example, <a href="https://getbootstrap.com/docs/4.0/components/modal/">Modal</a> and <a href="https://getbootstrap.com/docs/4.0/components/buttons/">Button</a> styles of Bootstrap are used to style PrimeReact Button and
                    Dialog.
                </p>

                <div className="flex justify-content-center">
                    <iframe className="w-full h-full" style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '2px', minHeight: '800px' }} src="https://stackblitz.com/edit/stackblitz-starters-waigrp?file=src%2FApp.js" allowfullscreen></iframe>
                </div>
            </DocSectionText>
        </>
    );
}
