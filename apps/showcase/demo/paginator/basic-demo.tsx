import { Paginator } from 'primereact/paginator';

function BasicDemo() {
    return (
        <div className="card flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} edges={0}>
                <Paginator.Content>
                    <Paginator.First />
                    <Paginator.Prev />
                    <Paginator.Pages />
                    <Paginator.Next />
                    <Paginator.Last />
                </Paginator.Content>
            </Paginator>
        </div>
    );
}

export default BasicDemo;
