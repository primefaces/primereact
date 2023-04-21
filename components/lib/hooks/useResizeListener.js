import { useEventListener } from './useEventListener';

export const useResizeListener = ({ listener, when = true }) =>
    useEventListener({
        target: 'window',
        type: 'resize',
        listener,
        when
    });
