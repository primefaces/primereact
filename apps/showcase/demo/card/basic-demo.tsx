'use client';

import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function BasicDemo() {
    return (
        <Card.Root className="mb-4 max-w-sm mx-auto p-1.5">
            <Card.Body className="space-y-4">
                <Card.Caption>
                    <Card.Title>Welcome back</Card.Title>
                    <Card.Subtitle>Sign in with your email to continue.</Card.Subtitle>
                </Card.Caption>
                <Card.Content>
                    <form className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <Label.Root htmlFor="email">Email</Label.Root>
                            <InputText id="email" type="email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <Label.Root htmlFor="password" className="flex-1">
                                    Password
                                </Label.Root>
                                <Button.Root as={Link} href="/forgot-password" variant="link" className="p-0">
                                    Forgot password?
                                </Button.Root>
                            </div>
                            <InputText id="password" type="password" />
                        </div>
                    </form>
                </Card.Content>
                <Card.Footer className="flex flex-col gap-4">
                    <Button.Root>Login</Button.Root>
                    <Button.Root severity="secondary" variant="outlined">
                        Login with Google
                    </Button.Root>
                    <div className="mt-2 text-center text-surface-500">
                        Don’t have an account?{' '}
                        <Button.Root as={Link} href="/signup" variant="link" className="p-0">
                            Sign up
                        </Button.Root>
                    </div>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
