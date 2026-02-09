import { Button } from '@primereact/ui/button';
import { Check } from '@primeicons/react/check';

export default function SizeDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="small">
                <Check />
                Small
            </Button>
            <Button>
                <Check />
                Normal
            </Button>
            <Button size="large">
                <Check />
                Large
            </Button>
        </div>
    );
}
