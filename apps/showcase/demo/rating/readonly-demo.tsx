import { Rating } from 'primereact/rating';

function ReadOnlyDemo() {
    return (
        <div className="card flex justify-center">
            <Rating modelValue={3} readOnly>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default ReadOnlyDemo;
