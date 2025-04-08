import DocComponent from '@/components/doc/DocComponent';
import features from '@/doc/metergroup/features';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React MeterGroup Component',
    description: 'MeterGroup displays scalar measurements within a known range.'
};

export default function MeterGroupPage() {
    const docs = {
        features
    };

    return <DocComponent header="MeterGroup" description={metadata.description} docs={docs} apiKeys={['MeterGroup']} />;
}
