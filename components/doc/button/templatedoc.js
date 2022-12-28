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
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function TemplateDoc() {

    return (
        <div className="card button-demo">
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
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function TemplateDoc() {

    return (
        <div className="card button-demo">
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
        </div>
    )
}
        `,
        exitFiles: {
            'ButtonDemo.css': `
/* ButtonDemo.css */

.button-demo .p-button {
    margin-right: 0.5rem;
}

.button-demo .template .p-button i {
    line-height: 2.25rem;
}
.button-demo .template .p-button.google {
    background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--purple-700);
}
.button-demo .template .p-button.google:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.google i {
    background-color: var(--purple-700);
}
.button-demo .template .p-button.google:focus {
    box-shadow: 0 0 0 1px var(--purple-400);
}
.button-demo .template .p-button.youtube {
    background: linear-gradient(to left, var(--pink-600) 50%, var(--pink-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--pink-700);
}
.button-demo .template .p-button.youtube:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.youtube i {
    background-color: var(--pink-700);
}
.button-demo .template .p-button.youtube:focus {
    box-shadow: 0 0 0 1px var(--pink-400);
}
.button-demo .template .p-button.vimeo {
    background: linear-gradient(to left, var(--green-200) 50%, var(--green-300) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--green-300);
}
.button-demo .template .p-button.vimeo:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.vimeo i {
    background-color: var(--green-300);
}
.button-demo .template .p-button.vimeo:focus {
    box-shadow: 0 0 0 1px var(--green-400);
}
.button-demo .template .p-button.facebook {
    background: linear-gradient(to left, var(--indigo-600) 50%, var(--indigo-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--indigo-700);
}
.button-demo .template .p-button.facebook:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.facebook i {
    background-color: var(--indigo-700);
}
.button-demo .template .p-button.facebook:focus {
    box-shadow: 0 0 0 1px var(--indigo-400);
}
.button-demo .template .p-button.twitter {
    background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--blue-500);
}
.button-demo .template .p-button.twitter:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.twitter i {
    background-color: var(--blue-500);
}
.button-demo .template .p-button.twitter:focus {
    box-shadow: 0 0 0 1px var(--blue-200);
}
.button-demo .template .p-button.slack {
    background: linear-gradient(to left, var(--orange-400) 50%, var(--orange-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--orange-500);
}
.button-demo .template .p-button.slack:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.slack i {
    background-color: var(--orange-500);
}
.button-demo .template .p-button.slack:focus {
    box-shadow: 0 0 0 1px var(--orange-200);
}
.button-demo .template .p-button.amazon {
    background: linear-gradient(to left, var(--yellow-400) 50%, var(--yellow-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #000;
    border-color: var(--yellow-500);
}
.button-demo .template .p-button.amazon:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.amazon i {
    background-color: var(--yellow-500);
}
.button-demo .template .p-button.amazon:focus {
    box-shadow: 0 0 0 1px var(--yellow-200);
}
.button-demo .template .p-button.discord {
    background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--bluegray-800);
}
.button-demo .template .p-button.discord:hover {
    background-position: left bottom;
}
.button-demo .template .p-button.discord i {
    background-color: var(--bluegray-800);
}
.button-demo .template .p-button.discord:focus {
    box-shadow: 0 0 0 1px var(--bluegray-500);
}
@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }
}         
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Template</p>
            </DocSectionText>
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
