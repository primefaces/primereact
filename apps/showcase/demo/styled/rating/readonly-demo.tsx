import { Rating } from '@primereact/ui/rating';

function ReadOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} readOnly>
                <Rating.Option className="[&_svg]:size-5!" />
            </Rating.Root>
        </div>
    );
}

export default ReadOnlyDemo;
