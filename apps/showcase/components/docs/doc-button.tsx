'use client';
import { Button } from 'primereact/button';

function DocButton({ ...props }: React.ComponentProps<typeof Button>) {
    return <Button {...props} />;
}

export default DocButton;
