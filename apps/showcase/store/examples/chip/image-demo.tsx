import { Chip } from 'primereact/chip';

export default function ImageDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Chip.Label>Amy Elsner</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                <Chip.Label>Asiya Javayant</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                <Chip.Label>Onyama Limba</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                <Chip.Label>Xuxue Feng</Chip.Label>
                <Chip.RemoveIcon />
            </Chip>
        </div>
    );
}
