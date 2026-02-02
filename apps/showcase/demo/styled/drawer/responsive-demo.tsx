'use client';
import { CheckIcon } from '@primereact/icons/check';
import { TimesIcon } from '@primereact/icons/times';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { Drawer } from '@primereact/ui/drawer';
import { Label } from '@primereact/ui/label';
import { InputText } from '@primereact/ui/inputtext';
import { Password } from '@primereact/ui/password';

export default function ResponsiveDemo() {
    return (
        <div className="flex justify-center">
            <Drawer.Root>
                <Drawer.Trigger>Log in</Drawer.Trigger>
                <Drawer.Portal className="w-80 sm:w-96 md:w-md lg:w-120">
                    <Drawer.Header>
                        <Drawer.Title>Responsive Drawer</Drawer.Title>
                        <Drawer.Close>
                            <TimesIcon />
                        </Drawer.Close>
                    </Drawer.Header>
                    <Drawer.Content>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="font-medium text-sm">
                                    Email
                                </Label>
                                <InputText id="email" placeholder="Enter your email" className="w-full" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password" className="font-medium text-sm">
                                    Password
                                </Label>
                                <Password inputId="password" placeholder="Enter your password" className="w-full" toggleMask />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox.Root inputId="remember" value="remember">
                                    <Checkbox.Box>
                                        <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                                    </Checkbox.Box>
                                </Checkbox.Root>
                                <Label htmlFor="remember" className="text-sm">
                                    Remember me
                                </Label>
                            </div>
                            <Button className="w-full">Sign In</Button>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}
