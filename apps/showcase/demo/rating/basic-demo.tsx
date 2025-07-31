import { Rating } from 'primereact/rating';

function BasicDemo() {
    return (
        <div className="card flex justify-center">
            <Rating value={3.5}>
                <Rating.Option />
            </Rating>
        </div>
    );
}

export default BasicDemo;
