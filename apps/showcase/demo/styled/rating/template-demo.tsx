import { Rating } from '@primereact/ui/rating';

function TemplateDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Rating.Root value={3}>
                <Rating.Option
                    onIcon={<span className="text-surface-950 dark:text-surface-0 font-medium text-2xl select-none">A</span>}
                    offIcon={<span className="text-surface-300 dark:text-surface-700 font-medium text-2xl select-none">A</span>}
                />
            </Rating.Root>
            <Rating.Root value={3} allowHalf={false}>
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
            </Rating.Root>
        </div>
    );
}

export default TemplateDemo;
