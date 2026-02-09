import { Button } from '@/components/ui/button';
import { Check } from '@primeicons/react/check';
import { Home } from '@primeicons/react/home';
import { Refresh } from '@primeicons/react/refresh';
import { Search } from '@primeicons/react/search';
import { User } from '@primeicons/react/user';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
                <Button aria-label="Save">
                    <Home />
                </Button>
                <Button>
                    <User />
                    Profile
                </Button>
                <Button>
                    Save
                    <Check />
                </Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <Button className="flex-col">
                    <Search />
                    Search
                </Button>
                <Button className="flex-col">
                    Update
                    <Refresh />
                </Button>
            </div>
        </div>
    );
}
