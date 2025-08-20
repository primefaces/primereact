import { Button } from 'primereact/button';
import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-col md:flex-row gap-4">
            <InputGroup>
                <Button>Search</Button>
                <InputText placeholder="Keyword" />
            </InputGroup>

            <InputGroup>
                <InputText placeholder="Keyword" />
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text">
                        <i className="pi pi-search" />
                    </Button>
                </InputGroup.Addon>
            </InputGroup>

            <InputGroup>
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
            </InputGroup>
        </div>
    );
}
