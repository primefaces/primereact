import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Toolbar } from '@primereact/ui/toolbar';
import { Plus } from '@primeicons/react/plus';
import { Search } from '@primeicons/react/search';
import { Upload } from '@primeicons/react/upload';

export default function ToolbarPT() {
    return (
        <Toolbar.Root className="w-full">
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
                <Button className="mr-2" severity="secondary" variant="text">
                    <Search></Search>
                </Button>
            </Toolbar.End>
        </Toolbar.Root>
    );
}
