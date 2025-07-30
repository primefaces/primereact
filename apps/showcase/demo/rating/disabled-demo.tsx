import { Rating } from 'primereact/rating';

function DisabledDemo() {
    return (
        <div className="card flex justify-center">
            <Rating modelValue={3} disabled>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default DisabledDemo;
