'use client';
import { TimesIcon } from '@primereact/icons/times';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';

export default function DeleteDemo() {
    return (
        <div className="flex justify-center">
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger severity="danger" variant="outlined">
                    <i className="pi pi-trash" />
                    Delete Product
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal style={{ width: '28rem' }}>
                    <ConfirmDialog.Header>
                        <ConfirmDialog.Title>Delete Product</ConfirmDialog.Title>
                        <ConfirmDialog.Close>
                            <TimesIcon />
                        </ConfirmDialog.Close>
                    </ConfirmDialog.Header>
                    <ConfirmDialog.Content>
                        <div className="flex flex-col gap-4 py-2">
                            <div className="flex items-center gap-4 p-4 bg-surface-50 dark:bg-surface-800 rounded-xl">
                                <Image
                                    src="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg"
                                    alt="Bamboo Watch"
                                    width={80}
                                    height={80}
                                    className="rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-semibold text-surface-700 dark:text-surface-200 m-0">Bamboo Watch</h4>
                                        <Tag severity="success" className="text-xs">
                                            In Stock
                                        </Tag>
                                    </div>
                                    <p className="text-surface-500 dark:text-surface-400 text-sm m-0">Product Code: f230fh0g3</p>
                                    <p className="text-primary font-semibold mt-2 mb-0">$65.00</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                                <i className="pi pi-exclamation-triangle text-orange-500 mt-0.5" />
                                <div>
                                    <p className="font-medium text-orange-700 dark:text-orange-300 text-sm m-0">Warning</p>
                                    <p className="text-orange-600 dark:text-orange-400 text-xs mt-1 mb-0">
                                        This will remove the product from your inventory and cannot be recovered.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ConfirmDialog.Content>
                    <ConfirmDialog.Footer>
                        <ConfirmDialog.Cancel variant="outlined">Cancel</ConfirmDialog.Cancel>
                        <ConfirmDialog.Action severity="danger">
                            <i className="pi pi-trash" />
                            Delete Product
                        </ConfirmDialog.Action>
                    </ConfirmDialog.Footer>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
