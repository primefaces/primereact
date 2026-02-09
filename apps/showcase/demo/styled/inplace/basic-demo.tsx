import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Divider } from '@primereact/ui/divider';
import { Inplace } from '@primereact/ui/inplace';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Password } from '@primereact/ui/password';

export default function BasicDemo() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider.Root />
            <div className="space-y-4">
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                    <Inplace.Display className="w-full text-sm">John Doe</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Email</div>
                    <Inplace.Display className="w-full text-sm">john.doe@example.com</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter email" className="flex-1" fluid autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Password</div>
                    <Inplace.Display className="w-full text-sm">********</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <Password placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
            </div>
        </div>
    );
}
