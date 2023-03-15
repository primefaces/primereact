import Star from 'primeicons/raw-svg/star.svg';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SVGDoc(props) {
    const code = {
        basic: `
import Star from 'primeicons/raw-svg/star.svg';

export default function SVGDemo() {
    return (
        <Star style={{ width: '4rem' }} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Icons are also available in SVG format, using <a href="https://react-svgr.com/docs/getting-started">React SVGR</a> library an icon can be imported as SVG as an alternative to font-icon. Note that in SVG imports,
                    <i>primeicons.css</i> does not need to be included.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Star style={{ width: '4rem' }} />
            </div>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
