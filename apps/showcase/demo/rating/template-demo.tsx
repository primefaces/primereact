import { Rating } from 'primereact/rating';

function TemplateDemo() {
    return (
        <div className="card flex justify-center">
            <Rating modelValue={3} allowHalf={false}>
                <Rating.Option
                    onIcon={
                        <span className="w-6 h-6">
                            <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" className="w-6 h-6" />
                        </span>
                    }
                    offIcon={
                        <span className="w-6 h-6">
                            <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" />
                        </span>
                    }
                />
            </Rating>
        </div>
    );
}

export default TemplateDemo;
