import React, { Component } from 'react';
import DomHandler from '../utils/DomHandler';
import PrimeReact from '../api/PrimeReact';

export class Ripple extends Component {

    constructor(props) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
    }

    getTarget() {
        return this.ink && this.ink.parentElement;
    }

    bindEvents() {
        if (this.target) {
            this.target.addEventListener('mousedown', this.onMouseDown);
        }
    }

    unbindEvents() {
        if (this.target) {
            this.target.removeEventListener('mousedown', this.onMouseDown);
        }
    }

    onMouseDown(event) {
        if (!this.ink || getComputedStyle(this.ink, null).display === 'none') {
            return;
        }

        DomHandler.removeClass(this.ink, 'p-ink-active');
        if (!DomHandler.getHeight(this.ink) && !DomHandler.getWidth(this.ink)) {
            let d = Math.max(DomHandler.getOuterWidth(this.target), DomHandler.getOuterHeight(this.target));
            this.ink.style.height = d + 'px';
            this.ink.style.width = d + 'px';
        }

        let offset = DomHandler.getOffset(this.target);
        let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(this.ink) / 2;
        let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(this.ink) / 2;

        this.ink.style.top = y + 'px';
        this.ink.style.left = x + 'px';
        DomHandler.addClass(this.ink, 'p-ink-active');
    }

    onAnimationEnd(event) {
        DomHandler.removeClass(event.currentTarget, 'p-ink-active');
    }

    componentDidMount() {
        if (this.ink) {
            this.target = this.getTarget();
            this.bindEvents();
        }
    }

    componentDidUpdate() {
        if (this.ink && !this.target) {
            this.target = this.getTarget();
            this.bindEvents();
        }
    }

    componentWillUnmount() {
        if (this.ink) {
            this.target = null;
            this.unbindEvents();
        }
    }

    render() {
        return PrimeReact.ripple && (<span ref={(el => this.ink = el)} className="p-ink" onAnimationEnd={this.onAnimationEnd}></span>);
    }
}
