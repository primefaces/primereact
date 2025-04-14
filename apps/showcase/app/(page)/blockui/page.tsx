import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/blockui/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React BlockUI Component',
    description: 'BlockUI can either block other components or the whole page.'
};

export default function BlockUIPage() {
    const docs = {
        features
    };

    return <DocComponent header="BlockUI" description={metadata.description} docs={docs} apiKeys={['BlockUI']} />;
}
