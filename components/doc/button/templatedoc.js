import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplateDoc(props) {
    const code = {
        basic: `
<Button className="google p-0" aria-label="Google"><i className="pi pi-google px-2"></i><span className="px-3">Google</span></Button>
<Button className="youtube p-0" aria-label="Youtube"><i className="pi pi-youtube px-2"></i><span className="px-3">Youtube</span></Button>
<Button className="vimeo p-0" aria-label="Vimeo"><i className="pi pi-vimeo px-2"></i><span className="px-3">Vimeo</span></Button>
<Button className="facebook p-0" aria-label="Facebook"><i className="pi pi-facebook px-2"></i><span className="px-3">Facebook</span></Button>
<Button className="twitter p-0" aria-label="Twitter"><i className="pi pi-twitter px-2"></i><span className="px-3">Twitter</span></Button>
<Button className="slack p-0" aria-label="Slack"><i className="pi pi-slack px-2"></i><span className="px-3">Slack</span></Button>
<Button className="amazon p-0" aria-label="Amazon"><i className="pi pi-amazon px-2"></i><span className="px-3">Amazon</span></Button>
<Button className="discord p-0" aria-label="Discord"><i className="pi pi-discord px-2"></i><span className="px-3">Discord</span></Button>
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function TemplateDoc() {

    return (
        <div className="template">
            <Button className="google p-0" aria-label="Google">
                <i className="pi pi-google px-2"></i>
                <span className="px-3">Google</span>
            </Button>
            <Button className="youtube p-0" aria-label="Youtube">
                <i className="pi pi-youtube px-2"></i>
                <span className="px-3">Youtube</span>
            </Button>
            <Button className="vimeo p-0" aria-label="Vimeo">
                <i className="pi pi-vimeo px-2"></i>
                <span className="px-3">Vimeo</span>
            </Button>
            <Button className="facebook p-0" aria-label="Facebook">
                <i className="pi pi-facebook px-2"></i>
                <span className="px-3">Facebook</span>
            </Button>
            <Button className="twitter p-0" aria-label="Twitter">
                <i className="pi pi-twitter px-2"></i>
                <span className="px-3">Twitter</span>
            </Button>
            <Button className="slack p-0" aria-label="Slack">
                <i className="pi pi-slack px-2"></i>
                <span className="px-3">Slack</span>
            </Button>
            <Button className="amazon p-0" aria-label="Amazon">
                <i className="pi pi-amazon px-2"></i>
                <span className="px-3">Amazon</span>
            </Button>
            <Button className="discord p-0" aria-label="Discord">
                <i className="pi pi-discord px-2"></i>
                <span className="px-3">Discord</span>
            </Button>
        </div>
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function TemplateDoc() {

    return (
        <div className="template">
            <Button className="google p-0" aria-label="Google">
                <i className="pi pi-google px-2"></i>
                <span className="px-3">Google</span>
            </Button>
            <Button className="youtube p-0" aria-label="Youtube">
                <i className="pi pi-youtube px-2"></i>
                <span className="px-3">Youtube</span>
            </Button>
            <Button className="vimeo p-0" aria-label="Vimeo">
                <i className="pi pi-vimeo px-2"></i>
                <span className="px-3">Vimeo</span>
            </Button>
            <Button className="facebook p-0" aria-label="Facebook">
                <i className="pi pi-facebook px-2"></i>
                <span className="px-3">Facebook</span>
            </Button>
            <Button className="twitter p-0" aria-label="Twitter">
                <i className="pi pi-twitter px-2"></i>
                <span className="px-3">Twitter</span>
            </Button>
            <Button className="slack p-0" aria-label="Slack">
                <i className="pi pi-slack px-2"></i>
                <span className="px-3">Slack</span>
            </Button>
            <Button className="amazon p-0" aria-label="Amazon">
                <i className="pi pi-amazon px-2"></i>
                <span className="px-3">Amazon</span>
            </Button>
            <Button className="discord p-0" aria-label="Discord">
                <i className="pi pi-discord px-2"></i>
                <span className="px-3">Discord</span>
            </Button>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Template</DocSectionText>
            <div className="card template">
                <Button className="google p-0" aria-label="Google">
                    <i className="pi pi-google px-2"></i>
                    <span className="px-3">Google</span>
                </Button>
                <Button className="youtube p-0" aria-label="Youtube">
                    <i className="pi pi-youtube px-2"></i>
                    <span className="px-3">Youtube</span>
                </Button>
                <Button className="vimeo p-0" aria-label="Vimeo">
                    <i className="pi pi-vimeo px-2"></i>
                    <span className="px-3">Vimeo</span>
                </Button>
                <Button className="facebook p-0" aria-label="Facebook">
                    <i className="pi pi-facebook px-2"></i>
                    <span className="px-3">Facebook</span>
                </Button>
                <Button className="twitter p-0" aria-label="Twitter">
                    <i className="pi pi-twitter px-2"></i>
                    <span className="px-3">Twitter</span>
                </Button>
                <Button className="slack p-0" aria-label="Slack">
                    <i className="pi pi-slack px-2"></i>
                    <span className="px-3">Slack</span>
                </Button>
                <Button className="amazon p-0" aria-label="Amazon">
                    <i className="pi pi-amazon px-2"></i>
                    <span className="px-3">Amazon</span>
                </Button>
                <Button className="discord p-0" aria-label="Discord">
                    <i className="pi pi-discord px-2"></i>
                    <span className="px-3">Discord</span>
                </Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
