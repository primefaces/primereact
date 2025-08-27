import { Fluid } from 'primereact/fluid';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function BasicDemo() {
    return (
        <div className="card flex flex-col gap-6">
            <div>
                <Label htmlFor="non-fluid" className="font-bold mb-2 block">
                    Non-Fluid
                </Label>
                <InputText id="non-fluid" />
            </div>

            <div>
                <Label htmlFor="fluid" className="font-bold mb-2 block">
                    Fluid Prop
                </Label>
                <InputText id="fluid" fluid />
            </div>

            <Fluid>
                <span className="font-bold mb-2 block">Fluid Container</span>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <InputText />
                    </div>
                    <div>
                        <InputText />
                    </div>
                    <div className="col-span-full">
                        <InputText />
                    </div>
                    <div>
                        <InputText fluid={false} placeholder="Non-Fluid" />
                    </div>
                </div>
            </Fluid>
        </div>
    );
}
