import { Rating } from 'primereact/rating';

function AllowHalfDemo() {
    return (
        <div className="card flex justify-center">
            <Rating modelValue={3} allowHalf={false}>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default AllowHalfDemo;
