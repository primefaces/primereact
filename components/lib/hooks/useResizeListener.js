import { useEventListener } from './useEventListener';

export const useResizeListener = ({ listener }) => useEventListener({ target: 'window', type: 'resize', listener });
