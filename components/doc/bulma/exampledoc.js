import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ExampleDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Demonstration of various PrimeReact components like input field, button, table and panel styled with Bulma utilities.</p>
                <div className="flex justify-content-center">
                    <iframe className="w-full h-full" style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '2px', minHeight: '800px' }} src="https://stackblitz.com/edit/react-w9xywf?file=src%2FApp.js" allowfullscreen></iframe>
                </div>
            </DocSectionText>
        </>
    );
}
