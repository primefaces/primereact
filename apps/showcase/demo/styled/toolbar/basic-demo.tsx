import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Toolbar } from '@primereact/ui/toolbar';
import { Plus } from '@primeicons/react/plus';
import { Upload } from '@primeicons/react/upload';

export default function BasicDemo() {
    return (
        <div>
            <Toolbar.Root>
                <Toolbar.Start>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <Plus></Plus>
                    </Button>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print" />
                    </Button>
                    <Button severity="secondary" variant="text">
                        <Upload></Upload>
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
