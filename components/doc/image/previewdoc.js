import { Image } from '../../lib/image/Image';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import getConfig from 'next/config';

export function PreviewDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
        `,
        javascript: `
import { Image } from 'primereact/image';

export default function PreviewDoc() {

    return (
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
    )
}
        `,
        typescript: `
import { Image } from 'primereact/image';

export default function PreviewDoc() {

    return (
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" preview />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`${contextPath}/images/galleria/galleria12.jpg`} alt="Image" width="250" preview />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
