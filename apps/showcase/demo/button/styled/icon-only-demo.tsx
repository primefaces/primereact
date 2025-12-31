'use client';

import { Button } from '@primereact/ui/button';
import { useState } from 'react';

export default function IconOnlyDemo() {
    /*const sizeOptions = useRef([
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' }
    ]);*/

    const [size] = useState<'small' | 'normal' | 'large'>('normal');

    return (
        <div>
            <div className="flex justify-center mb-8">
                {/*<SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />*/}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button.Root aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button.Root>
                <Button.Root severity="secondary" aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button.Root>
                <Button.Root severity="success" aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button.Root>
                <Button.Root severity="info" aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button.Root>
                <Button.Root severity="warn" aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button.Root>
                <Button.Root severity="help" aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button.Root>
                <Button.Root severity="danger" aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button.Root>
                <Button.Root severity="contrast" aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button.Root>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button.Root rounded aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button.Root>
                <Button.Root severity="secondary" rounded aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button.Root>
                <Button.Root severity="success" rounded aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button.Root>
                <Button.Root severity="info" rounded aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button.Root>
                <Button.Root severity="warn" rounded aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button.Root>
                <Button.Root severity="help" rounded aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button.Root>
                <Button.Root severity="danger" rounded aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button.Root>
                <Button.Root severity="contrast" rounded aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button.Root>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button.Root rounded variant="outlined" aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button.Root>
                <Button.Root severity="secondary" rounded variant="outlined" aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button.Root>
                <Button.Root severity="success" rounded variant="outlined" aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button.Root>
                <Button.Root severity="info" rounded variant="outlined" aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button.Root>
                <Button.Root severity="warn" rounded variant="outlined" aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button.Root>
                <Button.Root severity="help" rounded variant="outlined" aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button.Root>
                <Button.Root severity="danger" rounded variant="outlined" aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button.Root>
                <Button.Root severity="contrast" rounded variant="outlined" aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button.Root>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button.Root rounded raised aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button.Root>
                <Button.Root severity="secondary" rounded raised aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button.Root>
                <Button.Root severity="success" rounded raised aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button.Root>
                <Button.Root severity="info" rounded raised aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button.Root>
                <Button.Root severity="warn" rounded raised aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button.Root>
                <Button.Root severity="help" rounded raised aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button.Root>
                <Button.Root severity="danger" rounded raised aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button.Root>
                <Button.Root severity="contrast" rounded raised aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button.Root>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <Button.Root rounded variant="text" aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button.Root>
                <Button.Root severity="secondary" rounded variant="text" aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button.Root>
                <Button.Root severity="success" rounded variant="text" aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button.Root>
                <Button.Root severity="info" rounded variant="text" aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button.Root>
                <Button.Root severity="warn" rounded variant="text" aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button.Root>
                <Button.Root severity="help" rounded variant="text" aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button.Root>
                <Button.Root severity="danger" rounded variant="text" aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button.Root>
                <Button.Root severity="contrast" rounded variant="text" aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button.Root>
            </div>
        </div>
    );
}
