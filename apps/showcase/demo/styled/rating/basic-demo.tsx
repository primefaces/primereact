import { Rating } from '@primereact/ui/rating';

function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3.5}>
                <Rating.Option className="[&_svg]:size-5!" />
            </Rating.Root>
        </div>
    );
}

export default BasicDemo;
