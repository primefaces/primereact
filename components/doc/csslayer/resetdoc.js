import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ResetDoc(props) {
    const code = {
        basic: `
/* Order */
@layer reset, primereact;

/* Reset CSS */
@layer reset {
    button,
    input {
        /* CSS to Reset */
    }
}
`
    };

    return (
        <DocSectionText {...props}>
            <p>
                Ease of customization may present an issue if you have global styles on HTML elements like inputs and buttons that are also utilized by PrimeReact because global styles with a broader scope e.g. <i>button {}</i> and no layer always
                override the PrimeReact components leading to unexpected results. A common use case for global styles applying to standard HTML elements is CSS reset utilities to remove the default styling of the browsers. In this case, best practice
                is wrapping your CSS in a layer like <i>reset</i> and make sure <i>primereact</i> comes after your layer since layers defined after has higher precedence. This way, your Reset CSS does not get in the way of PrimeReact components.
            </p>
            <DocSectionCode code={code} hideToggleCode importCode hideStackBlitz />
        </DocSectionText>
    );
}
