import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function PrimeFlexDoc(props) {
    const code = {
        basic: `
<div className="flex flex-column md:flex-row justify-content-between my-5">
    <Button type="button" label="Button 1" className="mb-3 md:mb-0"></Button>
    <Button type="button" label="Button 2" className="p-button-secondary mb-3 md:mb-0"></Button>
    <Button type="button" label="Button 3" className="p-button-help"></Button>
</div>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://primeflex.org">PrimeFlex</a> is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well. PrimeReact can be used with any CSS utility library like bootstrap and
                    tailwind however PrimeFlex has benefits like integration with PrimeReact themes usign CSS variables so that colors classes e.g. <i>bg-blue-500</i> receive the color code from the PrimeReact theme being used. PrimeReact follows the
                    CSS utility approach of PrimeFlex and currently does not provide an extended style property like <i>sx</i>. Same approach is also utilized in <a href="https://blocks.primereact.org">PrimeBlocks for PrimeReact</a> project as well.
                </p>

                <p>Here is an example to demonstrate how to align 3 buttons horizontally on bigger screens and display them as stacked on smaller ones.</p>
            </DocSectionText>
            <div className="card flex flex-column md:flex-row justify-content-between my-5">
                <Button type="button" label="Button 1" className="mb-3 md:mb-0"></Button>
                <Button type="button" label="Button 2" className="p-button-secondary mb-3 md:mb-0"></Button>
                <Button type="button" label="Button 3" className="p-button-help"></Button>
            </div>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
