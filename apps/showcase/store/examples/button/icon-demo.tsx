import { Button } from 'primereact/button';

export default function IconDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
                <Button aria-label="Save">
                    <i className="pi pi-home" />
                </Button>
                <Button>
                    <i className="pi pi-user" />
                    Profile
                </Button>
                <Button>
                    Save
                    <i className="pi pi-check" />
                </Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <Button className="flex-col">
                    <i className="pi pi-search" />
                    Search
                </Button>
                <Button className="flex-col">
                    Update
                    <i className="pi pi-refresh" />
                </Button>
            </div>
        </div>
    );
}
