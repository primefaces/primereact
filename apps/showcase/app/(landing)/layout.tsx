import LandingLayout from '@/components/layout/LandingLayout';

export default function Landing({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <LandingLayout>{children}</LandingLayout>;
}
