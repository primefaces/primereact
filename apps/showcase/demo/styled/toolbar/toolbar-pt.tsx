import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Toolbar } from '@primereact/ui/toolbar';

export default function ToolbarPT() {
    return (
        <Toolbar.Root className="w-full">
            <Toolbar.Start>
                <Button className="mr-2" severity="secondary" variant="text">
                    <i className="pi pi-plus"></i>
                </Button>
                <Button className="mr-2" severity="secondary" variant="text">
                    <i className="pi pi-print"></i>
                </Button>
                <Button severity="secondary" variant="text">
                    <i className="pi pi-upload"></i>
                </Button>
            </Toolbar.Start>
            <Toolbar.Center>
                <InputText placeholder="Search" />
            </Toolbar.Center>
            <Toolbar.End>
                <Button className="mr-2" severity="secondary" variant="text">
                    <i className="pi pi-search"></i>
                </Button>
            </Toolbar.End>
        </Toolbar.Root>
    );
}
