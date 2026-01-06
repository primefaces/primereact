'use client';
import { Button } from '@primereact/ui/button';

function DocButton({ ...props }: React.ComponentProps<typeof Button.Root>) {
    return <Button.Root {...props} />;
}

export default DocButton;
