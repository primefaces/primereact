import { PaginatorPagesInstance } from '@primereact/types/shared/paginator';
import { Paginator } from 'primereact/paginator';

function CustomizationDemo() {
    return (
        <div className="card flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5}>
                <Paginator.Content>
                    <Paginator.First className="min-w-auto px-3 py-2 rounded-md">First</Paginator.First>
                    <Paginator.Prev className="rounded-md border border-surface">
                        <i className="pi pi-arrow-left text-sm" />
                    </Paginator.Prev>
                    <Paginator.Pages>
                        {({ paginator }: PaginatorPagesInstance) =>
                            paginator?.pages.map((page, index) =>
                                page.type === 'page' ? (
                                    <Paginator.Page key={index} value={page.value} className="rounded-md border border-surface" />
                                ) : (
                                    <Paginator.Ellipsis key={index} />
                                )
                            )
                        }
                    </Paginator.Pages>
                    <Paginator.Next className="rounded-md border border-surface">
                        <i className="pi pi-arrow-right text-sm" />
                    </Paginator.Next>
                    <Paginator.Last className="min-w-auto px-3 py-2 rounded-md">Last</Paginator.Last>
                </Paginator.Content>
            </Paginator>
        </div>
    );
}

export default CustomizationDemo;
