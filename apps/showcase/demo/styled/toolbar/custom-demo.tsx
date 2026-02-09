import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Toolbar } from '@primereact/ui/toolbar';
import { Search } from '@primeicons/react/search';

export default function CustomDemo() {
    return (
        <Toolbar.Root style={{ borderRadius: '3rem', padding: '0.75rem 1rem 0.75rem 1.5rem', background: 'var(--p-surface-900)', border: 'none' }}>
            <Toolbar.Start>
                <div className="flex items-center gap-1">
                    <i className="pi pi-prime text-xl" style={{ color: 'var(--p-primary-400)' }} />
                    <span className="font-bold text-lg ml-2" style={{ color: 'var(--p-surface-0)' }}>
                        Brand
                    </span>
                </div>
                <div className="ml-6 flex gap-1">
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Products
                    </Button>
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Solutions
                    </Button>
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Resources
                    </Button>
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Pricing
                    </Button>
                </div>
            </Toolbar.Start>
            <Toolbar.End>
                <div className="flex items-center gap-2">
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        <Search />
                    </Button>
                    <Button severity="contrast" size="small">
                        Get Started
                    </Button>
                    <Avatar.Root shape="circle" size="normal">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        <Avatar.Fallback>A</Avatar.Fallback>
                    </Avatar.Root>
                </div>
            </Toolbar.End>
        </Toolbar.Root>
    );
}
