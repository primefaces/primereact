import { Button } from '@primereact/ui/button';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function ButtonDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <Button>Search</Button>
                <InputText placeholder="Keyword" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputText placeholder="Keyword" />
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text">
                        <i className="pi pi-search" />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Button severity="secondary">
                        <i className="pi pi-check" />
                    </Button>
                </InputGroup.Addon>
                <InputText placeholder="Vote" />
                <InputGroup.Addon>
                    <Button severity="secondary">
                        <i className="pi pi-times" />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
