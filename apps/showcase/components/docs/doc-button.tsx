'use client';
import { Button } from '@primereact/ui/button';

function DocButton({ ...props }: React.ComponentProps<typeof Button.Root>) {
    return <Button {...props} />;
}

export default DocButton;
