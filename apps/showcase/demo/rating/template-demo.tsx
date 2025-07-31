import { Rating } from 'primereact/rating';

function TemplateDemo() {
    return (
        <div className="card flex flex-col gap-6 justify-center">
            <Rating value={3}>
                <Rating.Option onIcon={<span className="text-surface-950 dark:text-surface-0 text-2xl select-none">A</span>} offIcon={<span className="text-surface-300 dark:text-surface-700 text-2xl select-none">A</span>} />
            </Rating>
            <Rating value={3} allowHalf={false}>
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
