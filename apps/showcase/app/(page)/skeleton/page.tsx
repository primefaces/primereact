import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/skeleton/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Skeleton Component',
    description: 'Skeleton is a placeholder to display instead of the actual content.'
};

export default function SkeletonPage() {
    const docs = {
        features
    };

    return <DocComponent header="Skeleton" description={metadata.description} docs={docs} apiKeys={['Skeleton']} />;
}
