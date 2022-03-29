/* eslint-disable */
import { useEffect } from 'react';

export const useUnmountEffect = (fn) => useEffect(() => fn, []);
/* eslint-enable */
