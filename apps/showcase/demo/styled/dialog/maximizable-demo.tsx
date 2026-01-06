'use client';

import { Dialog } from 'primereact/dialog';

export default function MaximizableDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root modal>
                <Dialog.Trigger>Show</Dialog.Trigger>
                <Dialog.Portal style={{ width: '50rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Header</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Maximizable />
                            <Dialog.Close />
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
