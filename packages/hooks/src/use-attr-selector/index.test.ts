import { renderHook } from '@testing-library/react';
import { useAttrSelector } from '.';

describe('useAttrSelector', () => {
    it('should return the unique attribute selector', () => {
        const { result } = renderHook(() => useAttrSelector());

        expect(result.current).toBeDefined();
    });

    it('should return the unique attribute selector with a prefix', () => {
        const { result } = renderHook(() => useAttrSelector('foo'));

        expect(result.current).toMatch(/^foo/);
    });
});
