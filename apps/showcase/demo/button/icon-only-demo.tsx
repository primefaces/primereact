import { Button } from 'primereact/button';
import { useState } from 'react';

export default function IconOnlyDemo() {
    /*const sizeOptions = useRef([
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' }
    ]);*/

    const [size] = useState<'small' | 'normal' | 'large'>('normal');

    return (
        <div className="card">
            <div className="flex justify-center mb-8">{/*<SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />*/}</div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button>
                <Button severity="secondary" aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button>
                <Button severity="success" aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button>
                <Button severity="info" aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button>
                <Button severity="warn" aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button>
                <Button severity="help" aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button>
                <Button severity="danger" aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button>
                <Button severity="contrast" aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button rounded aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button>
                <Button severity="secondary" rounded aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button>
                <Button severity="success" rounded aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button>
                <Button severity="info" rounded aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button>
                <Button severity="warn" rounded aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button>
                <Button severity="help" rounded aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button>
                <Button severity="danger" rounded aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button>
                <Button severity="contrast" rounded aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button rounded outlined aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button>
                <Button severity="secondary" rounded outlined aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button>
                <Button severity="success" rounded outlined aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button>
                <Button severity="info" rounded outlined aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button>
                <Button severity="warn" rounded outlined aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button>
                <Button severity="help" rounded outlined aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button>
                <Button severity="danger" rounded outlined aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button>
                <Button severity="contrast" rounded outlined aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button rounded raised aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button>
                <Button severity="secondary" rounded raised aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button>
                <Button severity="success" rounded raised aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button>
                <Button severity="info" rounded raised aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button>
                <Button severity="warn" rounded raised aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button>
                <Button severity="help" rounded raised aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button>
                <Button severity="danger" rounded raised aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button>
                <Button severity="contrast" rounded raised aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <Button rounded text aria-label="Filter" size={size} iconOnly>
                    <i className="pi pi-check" />
                </Button>
                <Button severity="secondary" rounded text aria-label="Bookmark" size={size} iconOnly>
                    <i className="pi pi-bookmark" />
                </Button>
                <Button severity="success" rounded text aria-label="Search" size={size} iconOnly>
                    <i className="pi pi-search" />
                </Button>
                <Button severity="info" rounded text aria-label="User" size={size} iconOnly>
                    <i className="pi pi-user" />
                </Button>
                <Button severity="warn" rounded text aria-label="Notification" size={size} iconOnly>
                    <i className="pi pi-bell" />
                </Button>
                <Button severity="help" rounded text aria-label="Favorite" size={size} iconOnly>
                    <i className="pi pi-heart" />
                </Button>
                <Button severity="danger" rounded text aria-label="Cancel" size={size} iconOnly>
                    <i className="pi pi-times" />
                </Button>
                <Button severity="contrast" rounded text aria-label="Star" size={size} iconOnly>
                    <i className="pi pi-star" />
                </Button>
            </div>
        </div>
    );
}
