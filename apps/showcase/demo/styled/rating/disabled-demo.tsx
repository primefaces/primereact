import { Rating } from '@primereact/ui/rating';

function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} disabled>
                <Rating.Option className="[&_svg]:size-5!" />
            </Rating.Root>
        </div>
    );
}

export default DisabledDemo;
