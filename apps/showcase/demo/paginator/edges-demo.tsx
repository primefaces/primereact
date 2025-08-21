import { Paginator } from 'primereact/paginator';

function EdgesDemo() {
    return (
        <div className="card flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} page={6} edges={2}>
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

export default EdgesDemo;
