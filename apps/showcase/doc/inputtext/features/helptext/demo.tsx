import { InputText } from 'primereact/inputtext';

export default function HelpTextDemo() {
    return (
        <div className="card flex justify-center">
            <div className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" defaultValue={''} aria-describedby="username-help" />
                {/* <Message size="small" severity="secondary" variant="simple">
                    Enter your username to reset your password.
                </Message> */}
            </div>
        </div>
    );
}
