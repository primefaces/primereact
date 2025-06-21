import { Button } from 'primereact/button';

export default function GroupDemo() {
    return (
        <div className="card flex justify-center">
            <Button.Group>
                <Button>
                    <i className="pi pi-check" />
                    Save
                </Button>
                <Button>
                    <i className="pi pi-trash" />
                    Delete
                </Button>
                <Button>
                    <i className="pi pi-times" />
                    Cancel
                </Button>
            </Button.Group>
        </div>
    );
}
