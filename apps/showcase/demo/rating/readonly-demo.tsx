import { Rating } from 'primereact/rating';

function ReadOnlyDemo() {
    return (
        <div className="card flex justify-center">
            <Rating modelValue={3} readOnly />
        </div>
    );
}

export default ReadOnlyDemo;
