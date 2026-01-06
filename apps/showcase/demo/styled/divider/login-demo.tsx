'use client';

import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function LoginDemo() {
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
                    <div className="flex flex-col gap-2">
                        <Label.Root htmlFor="username">Username</Label.Root>
                        <InputText id="username" type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label.Root htmlFor="password">Password</Label.Root>
                        <InputText id="password" type="password" />
                    </div>
                    <div className="flex">
                        <Button.Root className="w-full max-w-[17.35rem] mx-auto">
                            Login
                            <i className="pi pi-user" />
                        </Button.Root>
                    </div>
                </div>
                <div className="w-full md:w-2/12">
                    <Divider.Root orientation="vertical" className="hidden md:flex" />
                    <Divider.Root orientation="horizontal" className="flex md:hidden" align="center">
                        <Divider.Content>
                            <b>OR</b>
                        </Divider.Content>
                    </Divider.Root>
                </div>
                <div className="w-full md:w-5/12 flex items-center justify-center py-5">
                    <Button.Root severity="success" className="w-full max-w-[17.35rem] mx-auto">
                        <i className="pi pi-user-plus" />
                        Sign Up
                    </Button.Root>
                </div>
            </div>
        </div>
    );
}
