import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function SVGStringDoc(props) {
    const code = {
        basic: `
const svgMarkupString = "<svg xmlns=\\"http:\\/\\/www.w3.org\\/2000\\/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" >
    <g id=\\"chevron-down\\">
        <path d=\\"M12,15.25a.74.74,0,0,1-.53-.22l-5-5A.75.75,0,0,1,7.53,9L12,13.44,16.47,9A.75.75,0,0,1,17.53,10l-5,5A.74.74,0,0,1,12,15.25Z\\" \\/>
    <\\/g>
<\\/svg>";

<Dropdown dropdownIcon={(options) =>
    <span dangerouslySetInnerHTML={{ __html: svgMarkupString }} {...options.iconProps} />
} />
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>SVG markup strings can also be embedded as icons by using "i" or "span" tags.</p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
