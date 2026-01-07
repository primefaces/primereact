import { Button } from '@primereact/ui/button';
import { Inplace } from '@primereact/ui/inplace';
import { InputText } from '@primereact/ui/inputtext';

export default function InputDemo() {
    return (
        <div>
            <Inplace.Root>
                <Inplace.Display>Click to Edit</Inplace.Display>
                <Inplace.Content>
                    <span className="inline-flex items-center gap-2">
                        <InputText autoFocus />
                        <Inplace.Close as={Button} iconOnly role="button" text severity="danger">
                            <i className="pi pi-times"></i>
                        </Inplace.Close>
                    </span>
                </Inplace.Content>
            </Inplace.Root>
        </div>
    );
}
