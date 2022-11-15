import '@testing-library/jest-dom';
import { snapshot } from '../../test';
import { Splitter, SplitterPanel } from './Splitter';

describe('Splitter', () => {
    snapshot(
        <>
            <Splitter style={{ height: '300px' }} className="mb-5">
                <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
            </Splitter>
        </>,
        'Splitter requires two SplitterPanel components to wrap.'
    );
    snapshot(
        <>
            <Splitter style={{ height: '300px' }} layout="vertical">
                <SplitterPanel>Panel 1</SplitterPanel>
                <SplitterPanel>Panel 2</SplitterPanel>
            </Splitter>
        </>,
        'Vertical layout'
    );
    snapshot(
        <>
            <Splitter style={{ height: '300px' }}>
                <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                    Panel 1
                </SplitterPanel>
                <SplitterPanel size={80}>
                    <Splitter layout="vertical">
                        <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                            Panel 2
                        </SplitterPanel>
                        <SplitterPanel size={85}>
                            <Splitter>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                    Panel 3
                                </SplitterPanel>
                                <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                    Panel 4
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>
        </>,
        'Nested'
    );
    snapshot(
        <>
            <Splitter style={{ height: '300px' }} layout="vertical">
                <SplitterPanel size={5}>Panel 1</SplitterPanel>
            </Splitter>
        </>,
        'Single Panel with size'
    );
    snapshot(
        <>
            <Splitter style={{ height: '300px' }} layout="vertical">
                <SplitterPanel>Panel 1</SplitterPanel>
            </Splitter>
        </>,
        'Single Panel without size'
    );
    snapshot(
        <>
            <Splitter style={{ height: '300px' }} layout="vertical"></Splitter>
        </>,
        'Without panels'
    );
});
