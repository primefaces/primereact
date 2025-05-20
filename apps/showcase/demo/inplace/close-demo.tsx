import { Button } from 'primereact/button';
import { Inplace } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default function InputDemo() {
    return (
        <div className="card">
            <Inplace>
                <Inplace.Display>Click to Edit</Inplace.Display>
                <Inplace.Content>
                    <span className="inline-flex items-center gap-2">
                        <InputText autoFocus />
                        <Inplace.Close as={Button} iconOnly role="button" text severity="danger">
                            <i className="pi pi-times"></i>
                        </Inplace.Close>
                    </span>
                </Inplace.Content>
            </Inplace>
        </div>
    );
}
