import { getScrollableParents } from '@primeuix/utils/dom';

export class ConnectedOverlayScrollHandler {
    private element: HTMLElement | null;
    private listener: (() => void) | null;
    private scrollableParents: Element[] | null = null;

    constructor(element: HTMLElement | null, listener: () => void = () => {}) {
        this.element = element;
        this.listener = listener;
    }

    bindScrollListener() {
        if (!this.element) return;

        this.scrollableParents = getScrollableParents(this.element);

        for (let i = 0; i < this.scrollableParents.length; i++) {
            const parent = this.scrollableParents[i];

            if (parent && this.listener) {
                parent.addEventListener('scroll', this.listener);
            }
        }
    }

    unbindScrollListener() {
        if (this.scrollableParents && this.listener) {
            for (let i = 0; i < this.scrollableParents.length; i++) {
                const parent = this.scrollableParents[i];

                if (parent) {
                    parent.removeEventListener('scroll', this.listener);
                }
            }
        }
    }

    destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
    }
}
