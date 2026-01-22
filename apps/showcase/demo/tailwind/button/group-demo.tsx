import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';

export default function GroupDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
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
            <ButtonGroup>
                <Button variant="outlined">
                    <i className="pi pi-check" />
                    Save
                </Button>
                <Button variant="outlined">
                    <i className="pi pi-trash" />
                    Delete
                </Button>
                <Button variant="outlined">
                    <i className="pi pi-times" />
                    Cancel
                </Button>
            </ButtonGroup>
        </div>
    );
}
