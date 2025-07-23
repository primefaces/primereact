import { Rating } from 'primereact/rating';

function TemplateDemo() {
    return (
        <div className="card flex justify-center">
            <Rating
                modelValue={3}
                onIcon={<img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />}
                offIcon={<img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />}
            />
        </div>
    );
}

export default TemplateDemo;
