import { Inplace } from 'primereact/inplace';

export default function ImageDemo() {
    return (
        <div className="card">
            <Inplace>
                <Inplace.Display>
                    <span className="pi pi-image mr-2"></span>
                    <span>View Photo</span>
                </Inplace.Display>
                <Inplace.Content>
                    <img className="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
                </Inplace.Content>
            </Inplace>
        </div>
    );
}
