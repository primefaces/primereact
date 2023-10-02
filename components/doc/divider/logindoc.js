import { Button } from '../../lib/button/Button';
import { Divider } from '../../lib/divider/Divider';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LoginDoc(props) {
    const code = {
        basic: `
<div className="card">
    <div className="grid">
        <div className="col-5 flex align-items-center justify-content-center">
            <div className="p-fluid">
                <div className="field">
                    <label for="username">Username</label>
                    <InputText id="username" type="text" />
                </div>
                <div className="field">
                    <label for="password">Password</label>
                    <InputText id="password" type="password" />
                </div>
                <Button label="Login"></Button>
            </div>
        </div>
        <div className="col-2">
            <Divider layout="vertical" className="hidden md:flex">
                <b>OR</b>
            </Divider>
            <Divider layout="horizontal" className="flex md:hidden" align="center">
                <b>OR</b>
            </Divider>
        </div>
        <div className="col-5 flex align-items-center justify-content-center">
            <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"><Button>
        </div>
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
            <div className="grid">
                <div className="col-5 flex align-items-center justify-content-center">
                    <div className="p-fluid">
                        <div className="field">
                            <label for="username">Username</label>
                            <InputText id="username" type="text" />
                        </div>
                        <div className="field">
                            <label for="password">Password</label>
                            <InputText id="password" type="password" />
                        </div>
                        <Button label="Login"></Button>
                    </div>
                </div>
                <div className="col-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="col-5 flex align-items-center justify-content-center">
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
            <div className="grid">
                <div className="col-5 flex align-items-center justify-content-center">
                    <div className="p-fluid">
                        <div className="field">
                            <label for="username">Username</label>
                            <InputText id="username" type="text" />
                        </div>
                        <div className="field">
                            <label for="password">Password</label>
                            <InputText id="password" type="password" />
                        </div>
                        <Button label="Login"></Button>
                    </div>
                </div>
                <div className="col-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="col-5 flex align-items-center justify-content-center">
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
                <div className="grid">
                    <div className="col-5 flex align-items-center justify-content-center">
                        <div className="p-fluid">
                            <div className="field">
                                <label for="username">Username</label>
                                <InputText id="username" type="text" />
                            </div>
                            <div className="field">
                                <label for="password">Password</label>
                                <InputText id="password" type="password" />
                            </div>
                            <Button label="Login"></Button>
                        </div>
                    </div>
                    <div className="col-2">
                        <Divider layout="vertical" className="hidden md:flex">
                            <b>OR</b>
                        </Divider>
                        <Divider layout="horizontal" className="flex md:hidden" align="center">
                            <b>OR</b>
                        </Divider>
                    </div>
                    <div className="col-5 flex align-items-center justify-content-center">
                        <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
                    </div>
                </div>
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
