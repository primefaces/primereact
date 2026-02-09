'use client';
import { TimesIcon } from '@primereact/icons/times';
import { Dialog } from '@primereact/ui/dialog';

const photos = Array.from({ length: 18 }, (_, i) => i + 1);

export default function FullScreenDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root modal fullScreen>
                <Dialog.Trigger>View Gallery</Dialog.Trigger>
                <Dialog.Backdrop />
                <Dialog.Portal>
                    <Dialog.Header>
                        <Dialog.Title>Photo Gallery</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close>
                                <TimesIcon />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                {photos.map((i) => (
                                    <div
                                        key={i}
                                        className="aspect-square rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center"
                                    >
                                        <i className="pi pi-image text-2xl text-surface-400" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-surface-500 dark:text-surface-400 mt-0 mb-0">Showing 18 of 64 photos</p>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
