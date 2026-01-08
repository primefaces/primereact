import { Rating } from '@primereact/ui/rating';

function StarsDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root stars={10}>
                <Rating.Option className="[&_svg]:size-5!" />
            </Rating.Root>
        </div>
    );
}

export default StarsDemo;
