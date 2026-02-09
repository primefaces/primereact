import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/buttongroup';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Trash } from '@primeicons/react/trash';

export default function GroupDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
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
            <ButtonGroup>
                <Button variant="outlined">
                    <Check />
                    Save
                </Button>
                <Button variant="outlined">
                    <Trash />
                    Delete
                </Button>
                <Button variant="outlined">
                    <Times />
                    Cancel
                </Button>
            </ButtonGroup>
        </div>
    );
}
