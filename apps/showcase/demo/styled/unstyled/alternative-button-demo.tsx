import { Button } from '@primereact/ui/button';
import { Check } from '@primeicons/react/check';

export default function AlternativeButtonDemo() {
    return (
        <div className="flex justify-center">
            <Button unstyled>
                Check
                <Check />
            </Button>
        </div>
    );
}
