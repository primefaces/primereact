import { Button } from '@primereact/ui/button';
import { ButtonGroup } from '@primereact/ui/buttongroup';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Trash } from '@primeicons/react/trash';

export default function GroupDemo() {
    return (
        <div className="flex justify-center">
            <ButtonGroup>
                <Button>
                    <Check />
                    Save
                </Button>
                <Button>
                    <Trash />
                    Delete
                </Button>
                <Button>
                    <Times />
                    Cancel
                </Button>
            </ButtonGroup>
        </div>
    );
}
