import { useState, useRef } from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { Editor } from './Editor';

afterEach(cleanup);

describe('Editor', () => {
    // https://github.com/primefaces/primereact/issues/6067
    test('onTextChange handler does not reflect updated props', async () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        function BasicDemo() {
            const [state, setState] = useState(1);

            return (
                <>
                    <button data-testid="update-state" onClick={() => setState((p) => ++p)}>
                        add
                    </button>
                    state is: <span data-testid="state">{state}</span>
                    <BasicDemo1 state={state} />
                </>
            );
        }

        function BasicDemo1({ state }) {
            const [text, setText] = useState('');

            const ref = useRef();

            return (
                <div className="card">
                    <button
                        data-testid="update-editor"
                        onClick={() => {
                            ref.current.getQuill().setText('789');
                        }}
                    ></button>
                    <Editor
                        ref={ref}
                        value={text}
                        onTextChange={(e) => {
                            // eslint-disable-next-line no-console
                            console.log(`Editor. state is:${state}`);
                            setText(e.htmlValue);
                        }}
                        onLoad={(q) => {
                            q.setText('hi');
                        }}
                    />
                </div>
            );
        }

        const { getByTestId } = render(<BasicDemo />);

        fireEvent.click(getByTestId('update-state'));
        expect(getByTestId('state').textContent).toBe('2');
        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledWith('Editor. state is:2');
        });

        fireEvent.click(getByTestId('update-state'));
        fireEvent.click(getByTestId('update-editor'));
        expect(getByTestId('state').textContent).toBe('3');
        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledWith('Editor. state is:3');
        });
        consoleSpy.mockRestore();
    });
});
