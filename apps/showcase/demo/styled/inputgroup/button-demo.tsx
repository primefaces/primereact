import { Button } from '@primereact/ui/button';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Check } from '@primeicons/react/check';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';

export default function ButtonDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <Button>Search</Button>
                <InputText placeholder="Keyword" className="border-r-0" />
                <InputGroup.Addon className="text-xs">8 results</InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputText placeholder="Keyword" />
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text" iconOnly>
                        <Search />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Button severity="secondary" iconOnly>
                        <Check />
                    </Button>
                </InputGroup.Addon>
                <InputText placeholder="Vote" />
                <InputGroup.Addon>
                    <Button severity="secondary" iconOnly>
                        <Times />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
