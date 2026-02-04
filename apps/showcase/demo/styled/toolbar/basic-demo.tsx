import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Toolbar } from '@primereact/ui/toolbar';

export default function BasicDemo() {
    return (
        <div>
            <Toolbar.Root>
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
                    <Button severity="secondary" variant="outlined" size="small">
                        Cancel
                    </Button>
                    <Button size="small" className="ml-2">
                        Save
                    </Button>
                </Toolbar.End>
            </Toolbar.Root>
        </div>
    );
}
