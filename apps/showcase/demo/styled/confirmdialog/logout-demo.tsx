import { SignOut } from '@primeicons/react';
import { Times } from '@primeicons/react/times';
import { Avatar } from '@primereact/ui/avatar';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';

export default function LogoutDemo() {
    return (
        <div className="flex justify-center">
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger variant="text" severity="secondary">
                    <SignOut />
                    Sign Out
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal style={{ width: '24rem' }}>
                    <ConfirmDialog.Header>
                        <ConfirmDialog.Title>Sign Out</ConfirmDialog.Title>
                        <ConfirmDialog.Close>
                            <Times />
                        </ConfirmDialog.Close>
                    </ConfirmDialog.Header>
                    <ConfirmDialog.Content>
                        <div className="flex flex-col items-center gap-5 py-4">
                            <Avatar.Root size="xlarge" shape="circle" className="ring-4 ring-surface-200 dark:ring-surface-700">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                                <Avatar.Fallback>IB</Avatar.Fallback>
                            </Avatar.Root>
                            <div className="text-center">
                                <p className="font-semibold text-surface-700 dark:text-surface-200 text-lg m-0">Ioni Bowcher</p>
                                <p className="text-surface-500 dark:text-surface-400 text-sm mt-1 mb-0">ioni.bowcher@example.com</p>
                            </div>
                            <ConfirmDialog.Message className="text-surface-600 dark:text-surface-300 text-center">
                                Are you sure you want to sign out of your account?
                            </ConfirmDialog.Message>
                        </div>
                    </ConfirmDialog.Content>
                    <ConfirmDialog.Footer className="flex-col gap-2">
                        <ConfirmDialog.Action className="w-full justify-center">
                            <SignOut />
                            Sign Out
                        </ConfirmDialog.Action>
                        <ConfirmDialog.Cancel variant="text" className="w-full justify-center">
                            Stay Signed In
                        </ConfirmDialog.Cancel>
                    </ConfirmDialog.Footer>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
