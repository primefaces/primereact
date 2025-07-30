import { Rating } from 'primereact/rating';

function BasicDemo() {
    return (
        <div className="card flex justify-center">
            <Rating modelValue={3.5}>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default BasicDemo;
