import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';

export default function GroupDemo() {
    return (
        <div className="flex justify-center">
            <ButtonGroup>
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
            </ButtonGroup>
        </div>
    );
}
