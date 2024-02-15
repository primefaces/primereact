export default class DomHandler {
    /**
     * All data- properties like data-test-id
     */
    static DATA_PROPS = ['data-'];
    /**
     * All ARIA properties like aria-label and focus-target for https://www.npmjs.com/package/@q42/floating-focus-a11y
     */
    static ARIA_PROPS = ['aria', 'focus-target'];

    static innerWidth(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            return width;
        }

        return 0;
    }

    static width(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            return width;
        }

        return 0;
    }

    static getBrowserLanguage() {
        return navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';
    }

    static getWindowScrollTop() {
        let doc = document.documentElement;

        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }

    static getWindowScrollLeft() {
        let doc = document.documentElement;

        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }

    static getOuterWidth(el, margin) {
        if (el) {
            let width = el.getBoundingClientRect().width || el.offsetWidth;

            if (margin) {
                let style = getComputedStyle(el);

                width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }

            return width;
        }

        return 0;
    }

    static getOuterHeight(el, margin) {
        if (el) {
            let height = el.getBoundingClientRect().height || el.offsetHeight;

            if (margin) {
                let style = getComputedStyle(el);

                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }

        return 0;
    }

    static getClientHeight(el, margin) {
        if (el) {
            let height = el.clientHeight;

            if (margin) {
                let style = getComputedStyle(el);

                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }

        return 0;
    }

    static getClientWidth(el, margin) {
        if (el) {
            let width = el.clientWidth;

            if (margin) {
                let style = getComputedStyle(el);

                width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }

            return width;
        }

        return 0;
    }

    static getViewport() {
        let win = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            w = win.innerWidth || e.clientWidth || g.clientWidth,
            h = win.innerHeight || e.clientHeight || g.clientHeight;

        return { width: w, height: h };
    }

    static getOffset(el) {
        if (el) {
            let rect = el.getBoundingClientRect();

            return {
                top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
            };
        }

        return {
            top: 'auto',
            left: 'auto'
        };
    }

    static index(element) {
        if (element) {
            let children = element.parentNode.childNodes;
            let num = 0;

            for (let i = 0; i < children.length; i++) {
                if (children[i] === element) return num;
                if (children[i].nodeType === 1) num++;
            }
        }

        return -1;
    }

    static addMultipleClasses(element, className) {
        if (element && className) {
            if (element.classList) {
                let styles = className.split(' ');

                for (let i = 0; i < styles.length; i++) {
                    element.classList.add(styles[i]);
                }
            } else {
                let styles = className.split(' ');

                for (let i = 0; i < styles.length; i++) {
                    element.className += ' ' + styles[i];
                }
            }
        }
    }

    static removeMultipleClasses(element, className) {
        if (element && className) {
            if (element.classList) {
                let styles = className.split(' ');

                for (let i = 0; i < styles.length; i++) {
                    element.classList.remove(styles[i]);
                }
            } else {
                let styles = className.split(' ');

                for (let i = 0; i < styles.length; i++) {
                    element.className = element.className.replace(new RegExp('(^|\\b)' + styles[i].split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }
    }

    static addClass(element, className) {
        if (element && className) {
            if (element.classList) element.classList.add(className);
            else element.className += ' ' + className;
        }
    }

    static removeClass(element, className) {
        if (element && className) {
            if (element.classList) element.classList.remove(className);
            else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    static hasClass(element, className) {
        if (element) {
            if (element.classList) return element.classList.contains(className);
            else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }

        return false;
    }

    static addStyles(element, styles = {}) {
        if (element) {
            Object.entries(styles).forEach(([key, value]) => (element.style[key] = value));
        }
    }

    static find(element, selector) {
        return element ? Array.from(element.querySelectorAll(selector)) : [];
    }

    static findSingle(element, selector) {
        if (element) {
            return element.querySelector(selector);
        }

        return null;
    }

    static setAttributes(element, attributes = {}) {
        if (element) {
            const computedStyles = (rule, value) => {
                const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];

                return [value].flat().reduce((cv, v) => {
                    if (v !== null && v !== undefined) {
                        const type = typeof v;

                        if (type === 'string' || type === 'number') {
                            cv.push(v);
                        } else if (type === 'object') {
                            const _cv = Array.isArray(v)
                                ? computedStyles(rule, v)
                                : Object.entries(v).map(([_k, _v]) => (rule === 'style' && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${_v}` : !!_v ? _k : undefined));

                            cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
                        }
                    }

                    return cv;
                }, styles);
            };

            Object.entries(attributes).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    const matchedEvent = key.match(/^on(.+)/);

                    if (matchedEvent) {
                        element.addEventListener(matchedEvent[1].toLowerCase(), value);
                    } else if (key === 'p-bind') {
                        this.setAttributes(element, value);
                    } else {
                        value = key === 'class' ? [...new Set(computedStyles('class', value))].join(' ').trim() : key === 'style' ? computedStyles('style', value).join(';').trim() : value;
                        (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
                        element.setAttribute(key, value);
                    }
                }
            });
        }
    }

    static getAttribute(element, name) {
        if (element) {
            const value = element.getAttribute(name);

            if (!isNaN(value)) {
                return +value;
            }

            if (value === 'true' || value === 'false') {
                return value === 'true';
            }

            return value;
        }

        return undefined;
    }

    static isAttributeEquals(element, name, value) {
        return element ? this.getAttribute(element, name) === value : false;
    }

    static isAttributeNotEquals(element, name, value) {
        return !this.isAttributeEquals(element, name, value);
    }

    static getHeight(el) {
        if (el) {
            let height = el.offsetHeight;
            let style = getComputedStyle(el);

            height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

            return height;
        }

        return 0;
    }

    static getWidth(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

            return width;
        }

        return 0;
    }

    static alignOverlay(overlay, target, appendTo, calculateMinWidth = true) {
        if (overlay && target) {
            if (appendTo === 'self') {
                this.relativePosition(overlay, target);
            } else {
                calculateMinWidth && (overlay.style.minWidth = DomHandler.getOuterWidth(target) + 'px');
                this.absolutePosition(overlay, target);
            }
        }
    }

    static absolutePosition(element, target, align = 'left') {
        if (element && target) {
            let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
            let elementOuterHeight = elementDimensions.height;
            let elementOuterWidth = elementDimensions.width;
            let targetOuterHeight = target.offsetHeight;
            let targetOuterWidth = target.offsetWidth;
            let targetOffset = target.getBoundingClientRect();
            let windowScrollTop = this.getWindowScrollTop();
            let windowScrollLeft = this.getWindowScrollLeft();
            let viewport = this.getViewport();
            let top, left;

            if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
                top = targetOffset.top + windowScrollTop - elementOuterHeight;

                if (top < 0) {
                    top = windowScrollTop;
                }

                element.style.transformOrigin = 'bottom';
            } else {
                top = targetOuterHeight + targetOffset.top + windowScrollTop;
                element.style.transformOrigin = 'top';
            }

            const targetOffsetPx = targetOffset.left;
            const alignOffset = align === 'left' ? 0 : elementOuterWidth - targetOuterWidth;

            if (targetOffsetPx + targetOuterWidth + elementOuterWidth > viewport.width) left = Math.max(0, targetOffsetPx + windowScrollLeft + targetOuterWidth - elementOuterWidth);
            else left = targetOffsetPx - alignOffset + windowScrollLeft;

            element.style.top = top + 'px';
            element.style.left = left + 'px';
        }
    }

    static relativePosition(element, target) {
        if (element && target) {
            let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
            const targetHeight = target.offsetHeight;
            const targetOffset = target.getBoundingClientRect();
            const viewport = this.getViewport();
            let top, left;

            if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
                top = -1 * elementDimensions.height;

                if (targetOffset.top + top < 0) {
                    top = -1 * targetOffset.top;
                }

                element.style.transformOrigin = 'bottom';
            } else {
                top = targetHeight;
                element.style.transformOrigin = 'top';
            }

            if (elementDimensions.width > viewport.width) {
                // element wider then viewport and cannot fit on screen (align at left side of viewport)
                left = targetOffset.left * -1;
            } else if (targetOffset.left + elementDimensions.width > viewport.width) {
                // element wider then viewport but can be fit on screen (align at right side of viewport)
                left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
            } else {
                // element fits on screen (align with target)
                left = 0;
            }

            element.style.top = top + 'px';
            element.style.left = left + 'px';
        }
    }

    static flipfitCollision(element, target, my = 'left top', at = 'left bottom', callback) {
        if (element && target) {
            const targetOffset = target.getBoundingClientRect();
            const viewport = this.getViewport();
            const myArr = my.split(' ');
            const atArr = at.split(' ');
            const getPositionValue = (arr, isOffset) => (isOffset ? +arr.substring(arr.search(/(\+|-)/g)) || 0 : arr.substring(0, arr.search(/(\+|-)/g)) || arr);
            const position = {
                my: {
                    x: getPositionValue(myArr[0]),
                    y: getPositionValue(myArr[1] || myArr[0]),
                    offsetX: getPositionValue(myArr[0], true),
                    offsetY: getPositionValue(myArr[1] || myArr[0], true)
                },
                at: {
                    x: getPositionValue(atArr[0]),
                    y: getPositionValue(atArr[1] || atArr[0]),
                    offsetX: getPositionValue(atArr[0], true),
                    offsetY: getPositionValue(atArr[1] || atArr[0], true)
                }
            };
            const myOffset = {
                left: () => {
                    const totalOffset = position.my.offsetX + position.at.offsetX;

                    return totalOffset + targetOffset.left + (position.my.x === 'left' ? 0 : -1 * (position.my.x === 'center' ? this.getOuterWidth(element) / 2 : this.getOuterWidth(element)));
                },
                top: () => {
                    const totalOffset = position.my.offsetY + position.at.offsetY;

                    return totalOffset + targetOffset.top + (position.my.y === 'top' ? 0 : -1 * (position.my.y === 'center' ? this.getOuterHeight(element) / 2 : this.getOuterHeight(element)));
                }
            };
            const alignWithAt = {
                count: {
                    x: 0,
                    y: 0
                },
                left: function () {
                    const left = myOffset.left();
                    const scrollLeft = DomHandler.getWindowScrollLeft();

                    element.style.left = left + scrollLeft + 'px';

                    if (this.count.x === 2) {
                        element.style.left = scrollLeft + 'px';
                        this.count.x = 0;
                    } else if (left < 0) {
                        this.count.x++;
                        position.my.x = 'left';
                        position.at.x = 'right';
                        position.my.offsetX *= -1;
                        position.at.offsetX *= -1;

                        this.right();
                    }
                },
                right: function () {
                    const left = myOffset.left() + DomHandler.getOuterWidth(target);
                    const scrollLeft = DomHandler.getWindowScrollLeft();

                    element.style.left = left + scrollLeft + 'px';

                    if (this.count.x === 2) {
                        element.style.left = viewport.width - DomHandler.getOuterWidth(element) + scrollLeft + 'px';
                        this.count.x = 0;
                    } else if (left + DomHandler.getOuterWidth(element) > viewport.width) {
                        this.count.x++;

                        position.my.x = 'right';
                        position.at.x = 'left';
                        position.my.offsetX *= -1;
                        position.at.offsetX *= -1;

                        this.left();
                    }
                },
                top: function () {
                    const top = myOffset.top();
                    const scrollTop = DomHandler.getWindowScrollTop();

                    element.style.top = top + scrollTop + 'px';

                    if (this.count.y === 2) {
                        element.style.left = scrollTop + 'px';
                        this.count.y = 0;
                    } else if (top < 0) {
                        this.count.y++;

                        position.my.y = 'top';
                        position.at.y = 'bottom';
                        position.my.offsetY *= -1;
                        position.at.offsetY *= -1;

                        this.bottom();
                    }
                },
                bottom: function () {
                    const top = myOffset.top() + DomHandler.getOuterHeight(target);
                    const scrollTop = DomHandler.getWindowScrollTop();

                    element.style.top = top + scrollTop + 'px';

                    if (this.count.y === 2) {
                        element.style.left = viewport.height - DomHandler.getOuterHeight(element) + scrollTop + 'px';
                        this.count.y = 0;
                    } else if (top + DomHandler.getOuterHeight(target) > viewport.height) {
                        this.count.y++;

                        position.my.y = 'bottom';
                        position.at.y = 'top';
                        position.my.offsetY *= -1;
                        position.at.offsetY *= -1;

                        this.top();
                    }
                },
                center: function (axis) {
                    if (axis === 'y') {
                        const top = myOffset.top() + DomHandler.getOuterHeight(target) / 2;

                        element.style.top = top + DomHandler.getWindowScrollTop() + 'px';

                        if (top < 0) {
                            this.bottom();
                        } else if (top + DomHandler.getOuterHeight(target) > viewport.height) {
                            this.top();
                        }
                    } else {
                        const left = myOffset.left() + DomHandler.getOuterWidth(target) / 2;

                        element.style.left = left + DomHandler.getWindowScrollLeft() + 'px';

                        if (left < 0) {
                            this.left();
                        } else if (left + DomHandler.getOuterWidth(element) > viewport.width) {
                            this.right();
                        }
                    }
                }
            };

            alignWithAt[position.at.x]('x');
            alignWithAt[position.at.y]('y');

            if (this.isFunction(callback)) {
                callback(position);
            }
        }
    }

    static findCollisionPosition(position) {
        if (position) {
            const isAxisY = position === 'top' || position === 'bottom';
            const myXPosition = position === 'left' ? 'right' : 'left';
            const myYPosition = position === 'top' ? 'bottom' : 'top';

            if (isAxisY) {
                return {
                    axis: 'y',
                    my: `center ${myYPosition}`,
                    at: `center ${position}`
                };
            }

            return {
                axis: 'x',
                my: `${myXPosition} center`,
                at: `${position} center`
            };
        }
    }

    static getParents(element, parents = []) {
        return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    }

    static getScrollableParents(element, hideOverlaysOnDocumentScrolling = false) {
        let scrollableParents = [];

        if (element) {
            let parents = this.getParents(element);
            const overflowRegex = /(auto|scroll)/;

            const overflowCheck = (node) => {
                let styleDeclaration = node ? getComputedStyle(node) : null;

                return (
                    styleDeclaration && (overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY')))
                );
            };

            const addScrollableParent = (node) => {
                if (hideOverlaysOnDocumentScrolling) {
                    // nodeType 9 is for document element
                    scrollableParents.push(node.nodeName === 'BODY' || node.nodeName === 'HTML' || node.nodeType === 9 ? window : node);
                } else {
                    scrollableParents.push(node);
                }
            };

            for (let parent of parents) {
                let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

                if (scrollSelectors) {
                    let selectors = scrollSelectors.split(',');

                    for (let selector of selectors) {
                        let el = this.findSingle(parent, selector);

                        if (el && overflowCheck(el)) {
                            addScrollableParent(el);
                        }
                    }
                }

                // BODY
                if (parent.nodeType === 1 && overflowCheck(parent)) {
                    addScrollableParent(parent);
                }
            }
        }

        // we should always at least have the body or window
        if (!scrollableParents.some((node) => node === document.body || node === window)) {
            scrollableParents.push(window);
        }

        return scrollableParents;
    }

    static getHiddenElementOuterHeight(element) {
        if (element) {
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            let elementHeight = element.offsetHeight;

            element.style.display = 'none';
            element.style.visibility = 'visible';

            return elementHeight;
        }

        return 0;
    }

    static getHiddenElementOuterWidth(element) {
        if (element) {
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            let elementWidth = element.offsetWidth;

            element.style.display = 'none';
            element.style.visibility = 'visible';

            return elementWidth;
        }

        return 0;
    }

    static getHiddenElementDimensions(element) {
        let dimensions = {};

        if (element) {
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            dimensions.width = element.offsetWidth;
            dimensions.height = element.offsetHeight;
            element.style.display = 'none';
            element.style.visibility = 'visible';
        }

        return dimensions;
    }

    static fadeIn(element, duration) {
        if (element) {
            element.style.opacity = 0;

            let last = +new Date();
            let opacity = 0;

            let tick = function () {
                opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
                element.style.opacity = opacity;
                last = +new Date();

                if (+opacity < 1) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                }
            };

            tick();
        }
    }

    static fadeOut(element, duration) {
        if (element) {
            let opacity = 1,
                interval = 50,
                gap = interval / duration;

            let fading = setInterval(() => {
                opacity -= gap;

                if (opacity <= 0) {
                    opacity = 0;
                    clearInterval(fading);
                }

                element.style.opacity = opacity;
            }, interval);
        }
    }

    static getUserAgent() {
        return navigator.userAgent;
    }

    static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }

    static isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    }

    static isChrome() {
        return /(chrome)/i.test(navigator.userAgent);
    }

    static isClient() {
        return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    }

    static isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    static appendChild(element, target) {
        if (this.isElement(target)) target.appendChild(element);
        else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);
        else throw new Error('Cannot append ' + target + ' to ' + element);
    }

    static removeChild(element, target) {
        if (this.isElement(target)) target.removeChild(element);
        else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);
        else throw new Error('Cannot remove ' + element + ' from ' + target);
    }

    static isElement(obj) {
        return typeof HTMLElement === 'object' ? obj instanceof HTMLElement : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }

    static scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);

        if (offset < 0) {
            container.scrollTop = scroll + offset;
        } else if (offset + itemHeight > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    }

    static clearSelection() {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        } else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            } catch (error) {
                //ignore IE bug
            }
        }
    }

    static calculateScrollbarWidth(el) {
        if (el) {
            let style = getComputedStyle(el);

            return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
        } else {
            if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;

            let scrollDiv = document.createElement('div');

            scrollDiv.className = 'p-scrollbar-measure';
            document.body.appendChild(scrollDiv);

            let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            document.body.removeChild(scrollDiv);

            this.calculatedScrollbarWidth = scrollbarWidth;

            return scrollbarWidth;
        }
    }

    static calculateBodyScrollbarWidth() {
        return window.innerWidth - document.documentElement.offsetWidth;
    }

    static getBrowser() {
        if (!this.browser) {
            let matched = this.resolveUserAgent();

            this.browser = {};

            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }

            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            } else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }

        return this.browser;
    }

    static resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) || [];

        return {
            browser: match[1] || '',
            version: match[2] || '0'
        };
    }

    static blockBodyScroll(className = 'p-overflow-hidden') {
        /* PR Ref: https://github.com/primefaces/primereact/pull/4976
         * @todo This method is called several times after this PR. Refactors will be made to prevent this in future releases.
         */
        const hasScrollbarWidth = !!document.body.style.getPropertyValue('--scrollbar-width');

        !hasScrollbarWidth && document.body.style.setProperty('--scrollbar-width', this.calculateBodyScrollbarWidth() + 'px');
        this.addClass(document.body, className);
    }

    static unblockBodyScroll(className = 'p-overflow-hidden') {
        document.body.style.removeProperty('--scrollbar-width');
        this.removeClass(document.body, className);
    }

    static isVisible(element) {
        // https://stackoverflow.com/a/59096915/502366 (in future use IntersectionObserver)
        return element && (element.clientHeight !== 0 || element.getClientRects().length !== 0 || getComputedStyle(element).display !== 'none');
    }

    static isExist(element) {
        return !!(element !== null && typeof element !== 'undefined' && element.nodeName && element.parentNode);
    }

    static getFocusableElements(element, selector = '') {
        let focusableElements = DomHandler.find(
            element,
            `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`
        );

        let visibleFocusableElements = [];

        for (let focusableElement of focusableElements) {
            if (getComputedStyle(focusableElement).display !== 'none' && getComputedStyle(focusableElement).visibility !== 'hidden') visibleFocusableElements.push(focusableElement);
        }

        return visibleFocusableElements;
    }

    static getFirstFocusableElement(element, selector) {
        const focusableElements = DomHandler.getFocusableElements(element, selector);

        return focusableElements.length > 0 ? focusableElements[0] : null;
    }

    static getLastFocusableElement(element, selector) {
        const focusableElements = DomHandler.getFocusableElements(element, selector);

        return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    }

    /**
     * Focus an input element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     */
    static focus(el, scrollTo) {
        const preventScroll = scrollTo === undefined ? true : !scrollTo;

        el && document.activeElement !== el && el.focus({ preventScroll });
    }

    /**
     * Focus the first focusable element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     * @return {HTMLElement | undefined} the first focusable HTML element found
     */
    static focusFirstElement(el, scrollTo) {
        if (!el) return;
        const firstFocusableElement = DomHandler.getFirstFocusableElement(el);

        firstFocusableElement && DomHandler.focus(firstFocusableElement, scrollTo);

        return firstFocusableElement;
    }

    static getCursorOffset(el, prevText, nextText, currentText) {
        if (el) {
            let style = getComputedStyle(el);
            let ghostDiv = document.createElement('div');

            ghostDiv.style.position = 'absolute';
            ghostDiv.style.top = '0px';
            ghostDiv.style.left = '0px';
            ghostDiv.style.visibility = 'hidden';
            ghostDiv.style.pointerEvents = 'none';
            ghostDiv.style.overflow = style.overflow;
            ghostDiv.style.width = style.width;
            ghostDiv.style.height = style.height;
            ghostDiv.style.padding = style.padding;
            ghostDiv.style.border = style.border;
            ghostDiv.style.overflowWrap = style.overflowWrap;
            ghostDiv.style.whiteSpace = style.whiteSpace;
            ghostDiv.style.lineHeight = style.lineHeight;
            ghostDiv.innerHTML = prevText.replace(/\r\n|\r|\n/g, '<br />');

            let ghostSpan = document.createElement('span');

            ghostSpan.textContent = currentText;
            ghostDiv.appendChild(ghostSpan);

            let text = document.createTextNode(nextText);

            ghostDiv.appendChild(text);
            document.body.appendChild(ghostDiv);

            const { offsetLeft, offsetTop, clientHeight } = ghostSpan;

            document.body.removeChild(ghostDiv);

            return {
                left: Math.abs(offsetLeft - el.scrollLeft),
                top: Math.abs(offsetTop - el.scrollTop) + clientHeight
            };
        }

        return {
            top: 'auto',
            left: 'auto'
        };
    }

    static invokeElementMethod(element, methodName, args) {
        element[methodName].apply(element, args);
    }

    static isClickable(element) {
        const targetNode = element.nodeName;
        const parentNode = element.parentElement && element.parentElement.nodeName;

        return (
            targetNode === 'INPUT' ||
            targetNode === 'TEXTAREA' ||
            targetNode === 'BUTTON' ||
            targetNode === 'A' ||
            parentNode === 'INPUT' ||
            parentNode === 'TEXTAREA' ||
            parentNode === 'BUTTON' ||
            parentNode === 'A' ||
            this.hasClass(element, 'p-button') ||
            this.hasClass(element.parentElement, 'p-button') ||
            this.hasClass(element.parentElement, 'p-checkbox') ||
            this.hasClass(element.parentElement, 'p-radiobutton')
        );
    }

    static applyStyle(element, style) {
        if (typeof style === 'string') {
            element.style.cssText = this.style;
        } else {
            for (let prop in this.style) {
                element.style[prop] = style[prop];
            }
        }
    }

    static exportCSV(csv, filename) {
        let blob = new Blob([csv], {
            type: 'application/csv;charset=utf-8;'
        });

        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename + '.csv');
        } else {
            const isDownloaded = DomHandler.saveAs({ name: filename + '.csv', src: URL.createObjectURL(blob) });

            if (!isDownloaded) {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
        }
    }

    static saveAs(file) {
        if (file) {
            let link = document.createElement('a');

            if (link.download !== undefined) {
                const { name, src } = file;

                link.setAttribute('href', src);
                link.setAttribute('download', name);
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                return true;
            }
        }

        return false;
    }

    static createInlineStyle(nonce, styleContainer) {
        let styleElement = document.createElement('style');

        DomHandler.addNonce(styleElement, nonce);

        if (!styleContainer) {
            styleContainer = document.head;
        }

        styleContainer.appendChild(styleElement);

        return styleElement;
    }

    static removeInlineStyle(styleElement) {
        if (this.isExist(styleElement)) {
            try {
                styleElement.parentNode.removeChild(styleElement);
            } catch (error) {
                // style element may have already been removed in a fast refresh
            }

            styleElement = null;
        }

        return styleElement;
    }

    static addNonce(styleElement, nonce) {
        try {
            if (!nonce) {
                nonce = process.env.REACT_APP_CSS_NONCE;
            }
        } catch (error) {
            // NOOP
        }

        nonce && styleElement.setAttribute('nonce', nonce);
    }

    static getTargetElement(target) {
        if (!target) return null;

        if (target === 'document') {
            return document;
        } else if (target === 'window') {
            return window;
        } else if (typeof target === 'object' && target.hasOwnProperty('current')) {
            return this.isExist(target.current) ? target.current : null;
        } else {
            const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
            const element = isFunction(target) ? target() : target;

            return (element && element.nodeType === 9) || this.isExist(element) ? element : null;
        }
    }

    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */
    static getAttributeNames(node) {
        let index, rv, attrs;

        rv = [];
        attrs = node.attributes;

        for (index = 0; index < attrs.length; ++index) {
            rv.push(attrs[index].nodeName);
        }

        rv.sort();

        return rv;
    }

    /**
     * Compare two elements for equality.  Even will compare if the style element
     * is out of order for example:
     *
     * elem1 = style="color: red; font-size: 28px"
     * elem2 = style="font-size: 28px; color: red"
     */
    static isEqualElement(elm1, elm2) {
        let attrs1, attrs2, name, node1, node2;

        // Compare attributes without order sensitivity
        attrs1 = DomHandler.getAttributeNames(elm1);
        attrs2 = DomHandler.getAttributeNames(elm2);

        if (attrs1.join(',') !== attrs2.join(',')) {
            // console.log("Found nodes with different sets of attributes; not equiv");
            return false;
        }

        // ...and values
        // unless you want to compare DOM0 event handlers
        // (onclick="...")
        for (let index = 0; index < attrs1.length; ++index) {
            name = attrs1[index];

            if (name === 'style') {
                const astyle = elm1.style;
                const bstyle = elm2.style;
                const rexDigitsOnly = /^\d+$/;

                for (const key of Object.keys(astyle)) {
                    if (!rexDigitsOnly.test(key) && astyle[key] !== bstyle[key]) {
                        // Not equivalent, stop
                        //console.log("Found nodes with mis-matched values for attribute '" + name + "'; not equiv");
                        return false;
                    }
                }
            } else {
                if (elm1.getAttribute(name) !== elm2.getAttribute(name)) {
                    // console.log("Found nodes with mis-matched values for attribute '" + name + "'; not equiv");
                    return false;
                }
            }
        }

        // Walk the children
        for (node1 = elm1.firstChild, node2 = elm2.firstChild; node1 && node2; node1 = node1.nextSibling, node2 = node2.nextSibling) {
            if (node1.nodeType !== node2.nodeType) {
                // display("Found nodes of different types; not equiv");
                return false;
            }

            if (node1.nodeType === 1) {
                // Element
                if (!DomHandler.isEqualElement(node1, node2)) {
                    return false;
                }
            } else if (node1.nodeValue !== node2.nodeValue) {
                // console.log("Found nodes with mis-matched nodeValues; not equiv");
                return false;
            }
        }

        if (node1 || node2) {
            // One of the elements had more nodes than the other
            // console.log("Found more children of one element than the other; not equivalent");
            return false;
        }

        // Seem the same
        return true;
    }

    static hasCSSAnimation(element) {
        if (element) {
            const style = getComputedStyle(element);
            const animationDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');

            return animationDuration > 0;
        }

        return false;
    }

    static hasCSSTransition(element) {
        if (element) {
            const style = getComputedStyle(element);
            const transitionDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');

            return transitionDuration > 0;
        }

        return false;
    }
}
