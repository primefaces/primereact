import { Divider } from '../../lib/divider/Divider';
import { InputText } from '../../lib/inputtext/InputText';
import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function VerticalContentDoc(props) {
    const code = {
        basic: `
<div className="grid">
    <div className="col-5 flex align-items-center justify-content-center">
        <div className="p-fluid">
            <div className="field">
                <label htmlFor="username">Username</label>
                <InputText id="username" type="text" />
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <InputText id="password" type="password" />
            </div>
            <Button label="Login"></Button>
        </div>
    </div>
    <div className="col-2">
        <Divider layout="vertical">
            <b>OR</b>
        </Divider>
    </div>
    <div className="col-5 flex align-items-center justify-content-center">
        <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
    </div>
</div>
        `,
        javascript: `
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function VerticalContentDoc() {

    return (
        <div className="grid">
            <div className="col-5 flex align-items-center justify-content-center">
                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" type="password" />
                    </div>
                    <Button label="Login"></Button>
                </div>
            </div>
            <div className="col-2">
                <Divider layout="vertical">
                    <b>OR</b>
                </Divider>
            </div>
            <div className="col-5 flex align-items-center justify-content-center">
                <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
            </div>
        </div>
    )
}
        `,
        typescript: `
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function VerticalContentDoc() {

    return (
        <div className="grid">
            <div className="col-5 flex align-items-center justify-content-center">
                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" type="password" />
                    </div>
                    <Button label="Login"></Button>
                </div>
            </div>
            <div className="col-2">
                <Divider layout="vertical">
                    <b>OR</b>
                </Divider>
            </div>
            <div className="col-5 flex align-items-center justify-content-center">
                <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Vertical divider is enabled by setting the <i>layout</i> property as "vertical".
            </DocSectionText>
            <div className="card">
                <div className="grid">
                    <div className="col-5 flex align-items-center justify-content-center">
                        <div className="p-fluid">
                            <div className="field">
                                <label htmlFor="username">Username</label>
                                <InputText id="username" type="text" />
                            </div>
                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <InputText id="password" type="password" />
                            </div>
                            <Button label="Login"></Button>
                        </div>
                    </div>
                    <div className="col-2">
                        <Divider layout="vertical">
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
