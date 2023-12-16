import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/icons/basicdoc';
import { ColorDoc } from '@/components/doc/icons/colordoc';
import { ConstantsDoc } from '@/components/doc/icons/constantsdoc';
import { DownloadDoc } from '@/components/doc/icons/downloaddoc';
import { ImportDoc } from '@/components/doc/icons/importdoc';
import { ListDoc } from '@/components/doc/icons/listdoc';
import { SizeDoc } from '@/components/doc/icons/sizedoc';
import { SpinDoc } from '@/components/doc/icons/spindoc';

const IconsDoc = () => {
    const docs = [
        {
            id: 'download',
            label: 'Download',
            component: DownloadDoc
        },
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'color',
            label: 'Color',
            component: ColorDoc
        },
        {
            id: 'spin',
            label: 'Spin',
            component: SpinDoc
        },
        {
            id: 'constants',
            label: 'Constants',
            component: ConstantsDoc
        },
        {
            id: 'list',
            label: 'List',
            component: ListDoc
        }
    ];

    return <DocComponent title="React Icon Library - PrimeReact" header="Icons" description="PrimeIcons is the default icon library of PrimeReact." componentDocs={docs} hideTabMenu />;
};

export default IconsDoc;
