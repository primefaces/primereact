import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { BasicDoc } from '../../components/doc/knob/basicdoc';
import { ReadOnlyDoc } from '../../components/doc/knob/readonlydoc';
import { DisabledDoc } from '../../components/doc/knob/disableddoc';
import { MinMaxDoc } from '../../components/doc/knob/minmaxdoc';
import { StepDoc } from '../../components/doc/knob/stepdoc';
import { TemplateDoc } from '../../components/doc/knob/templatedoc';
import { ImportDoc } from '../../components/doc/knob/importdoc';
import { StrokeDoc } from '../../components/doc/knob/strokedoc';
import { SizeDoc } from '../../components/doc/knob/sizedoc';
import { ColorDoc } from '../../components/doc/knob/colordoc';
import { ReactiveDoc } from '../../components/doc/knob/reactivedoc';
import { ApiDoc } from '../../components/doc/knob/apidoc';
import { AccessibilityDoc } from '../../components/doc/knob/accessibilitydoc';
import { StyleDoc } from '../../components/doc/knob/styledoc';
import { FormikDoc } from '../../components/doc/knob/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/knob/validation/hookformdoc';

const KnobDemo = () => {
    const docs = [
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
            id: 'readOnly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'minmax',
            label: 'Min/Max',
            component: MinMaxDoc
        },
        {
            id: 'step',
            label: 'Step',
            component: StepDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'stroke',
            label: 'Stroke',
            component: StrokeDoc
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
            id: 'reactive',
            label: 'Reactive',
            component: ReactiveDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            description: 'Validate using popular React validation libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Knob Component</title>
                <meta name="description" content="Knob is a form component to define number inputs with a dial." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Knob</h1>
                    <p>Knob is a form component to define number inputs with a dial.</p>
                </div>

                <DocActions github="konb/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>

            {/* <div className="content-section implementation">
                <div className="card">
                    <div className="grid formgrid text-center">
                        <div className="field col-12 md:col-4">
                            <h5>Basic</h5>
                            <Knob value={value1} onChange={(e) => setValue1(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5>Readonly</h5>
                            <Knob value={value2} readOnly />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5>Disabled</h5>
                            <Knob value={value3} disabled />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Min/Max</h5>
                            <Knob value={value4} min={-50} max={50} onChange={(e) => setValue4(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Step</h5>
                            <Knob value={value5} step={10} onChange={(e) => setValue5(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Template</h5>
                            <Knob value={value6} valueTemplate={'{value}%'} onChange={(e) => setValue6(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Stroke</h5>
                            <Knob value={value7} strokeWidth={5} onChange={(e) => setValue7(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Size</h5>
                            <Knob value={value8} size={200} onChange={(e) => setValue8(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Color</h5>
                            <Knob value={value9} valueColor={'SlateGray'} rangeColor={'MediumTurquoise'} onChange={(e) => setValue9(e.value)} />
                        </div>
                    </div>
                </div>

                <div className="card text-center">
                    <h5>Reactive Knob</h5>
                    <Knob value={value10} size={150} readOnly />
                    <Button label="Increment" onClick={increment} className="mr-2" disabled={disabledIncrementBtn} />
                    <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
                </div>
            </div>

            <KnobDoc /> */}
        </div>
    );
};

export default KnobDemo;
