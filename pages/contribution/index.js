import { IntroductionDoc } from '@/components/doc/contribution/introductiondoc';
import { DocSectionNav } from '@/components/doc/common/docsectionnav';
import { DocSections } from '@/components/doc/common/docsections';
import Head from 'next/head';
import { HelpNeededDoc } from '@/components/doc/contribution/helpneededdoc';
import { KeyPointsDoc } from '@/components/doc/contribution/keypointsdoc';
import { CommunicationDoc } from '@/components/doc/contribution/communicationdoc';
import { PathwayDoc } from '@/components/doc/contribution/pathwaydoc';
import { BenefitsDoc } from '@/components/doc/contribution/benefitsdoc';


const ContributionPage = () => {
    const docs = [
        {
            id: 'introduction',
            label: 'Introduction',
            component: IntroductionDoc
        },
        {
            id: 'helpneeded',
            label: 'Help Needed',
            component: HelpNeededDoc
        },
        {
            id: 'keypoints',
            label: 'Key Points',
            component: KeyPointsDoc
        },
        {
            id: 'communication',
            label: 'Communication',
            component: CommunicationDoc
        },
        {
            id: 'pathway',
            label: 'Pathway',
            component: PathwayDoc
        },
        {
            id: 'benefits',
            label: 'Benefits',
            component: BenefitsDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Contribution - PrimeReact</title>
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Contribution Guide</h1>
                        <p>Welcome to the PrimeReact Contribution Guide and thank you for considering contributing.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ContributionPage;
