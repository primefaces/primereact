import { Button } from '../../lib/button/Button';
import { Divider } from '../../lib/divider/Divider';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LoginDoc(props) {
    const code = {
        basic: `
<div className="flex flex-column md:flex-row">
    <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="username" className="w-6rem">
                Username
            </label>
            <InputText id="username" type="text" />
        </div>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="password" className="w-6rem">
                Password
            </label>
            <InputText id="password" type="password" />
        </div>
        <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
    </div>
    <div className="w-full md:w-2">
        <Divider layout="vertical" className="hidden md:flex">
            <b>OR</b>
        </Divider>
        <Divider layout="horizontal" className="flex md:hidden" align="center">
            <b>OR</b>
        </Divider>
    </div>
    <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
        <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
    </div>
</div>
        `,
        javascript: `
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function LoginDemo() {
    return (
        <div className="card">
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="username" className="w-6rem">
                            Username
                        </label>
                        <InputText id="username" type="text" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">
                            Password
                        </label>
                        <InputText id="password" type="password" />
                    </div>
                    <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function LoginDemo() {
    return (
        <div className="card">
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="username" className="w-6rem">
                            Username
                        </label>
                        <InputText id="username" type="text" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">
                            Password
                        </label>
                        <InputText id="password" type="password" />
                    </div>
                    <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
                </div>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sample implementation of a login form using a divider with content.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-column md:flex-row">
                    <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                            <label htmlFor="username" className="w-6rem">
                                Username
                            </label>
                            <InputText id="username" type="text" />
                        </div>
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                            <label htmlFor="password" className="w-6rem">
                                Password
                            </label>
                            <InputText id="password" type="password" />
                        </div>
                        <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                    </div>
                    <div className="w-full md:w-2">
                        <Divider layout="vertical" className="hidden md:flex">
                            <b>OR</b>
                        </Divider>
                        <Divider layout="horizontal" className="flex md:hidden" align="center">
                            <b>OR</b>
                        </Divider>
                    </div>
                    <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                        <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
