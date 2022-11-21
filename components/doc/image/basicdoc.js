import { Image } from '../../lib/image/Image';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import getConfig from 'next/config';

export function BasicDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />
        `,
        javascript: `
import { Image } from 'primereact/image';

export default function BasicDoc() {

    return (
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />
    )
}
        `,
        typescript: `
import { Image } from 'primereact/image';

export default function BasicDoc() {

    return (
        <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Image is used as the native <i>img</i> element and supports all properties that the native element has.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`${contextPath}/images/galleria/galleria7.jpg`} alt="Image" width="250" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
