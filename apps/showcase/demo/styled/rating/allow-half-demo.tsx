import { Rating } from '@primereact/ui/rating';

function AllowHalfDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} allowHalf={false}>
                <Rating.Option className="[&_svg]:size-5!" />
            </Rating.Root>
        </div>
    );
}

export default AllowHalfDemo;
