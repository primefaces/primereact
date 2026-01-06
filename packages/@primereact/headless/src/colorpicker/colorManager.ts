import type { Color2DAxes, Color3DAxes, ColorChannel, ColorChannelRange, ColorInputChannel, ColorInstance, ColorOutput, ColorSliderChannel, ColorSpace } from '@primereact/types/shared/colorpicker';

// CONSTANTS
const HSB_REGEX = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
const HSL_REGEX = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
const HEX_REGEX = /^#?([a-fA-F0-9]{3,8})$/;
const RGB_REGEX = /^rgba?\(\s*([^)]+)\s*\)$/;
const OKLCH_REGEX = /oklch\(\s*([\d.]+)%?\s+([\d.]+)\s+([\d.]+)(deg)?(?:\s*\/\s*([\d.]+))?\)/i;

// UTILS
function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export const isEqual = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

const multiplyMatrices = (A: number[], B: number[]) => {
    return [A[0] * B[0] + A[1] * B[1] + A[2] * B[2], A[3] * B[0] + A[4] * B[1] + A[5] * B[2], A[6] * B[0] + A[7] * B[1] + A[8] * B[2]];
};

/**
 * Snaps a value to the nearest step increment within min/max bounds
 * @example snap(23.7, 0, 100, 5) => 25
 * @example snap(0.234, 0, 1, 0.01) => 0.23
 */
function snap(value: number, min: number, max: number, step: number) {
    const clamped = clamp(value, min, max);

    const offset = clamped - min;
    const steps = Math.round(offset / step);

    const snapped = min + steps * step;

    const precision = (step.toString().split('.')[1] || '').length;

    return parseFloat(snapped.toFixed(precision));
}

abstract class Color {
    abstract clone(): ColorInstance;
    abstract toString(format: ColorOutput): string;
    abstract toFormat(format: ColorSpace): ColorInstance;
    abstract toJSON(): Record<string, number>;
    abstract getChannelRange(channel: ColorChannel): ColorChannelRange;
    abstract getFormat(): ColorSpace;
    abstract getChannels(): [ColorChannel, ColorChannel, ColorChannel];

    getChannelValue(channel: ColorChannel): number {
        if (channel in this) {
            return this[channel as keyof this] as number;
        }

        throw new Error(`Channel ${channel} not found`);
    }

    withChannelValue(channel: ColorChannel, value: number): ColorInstance {
        const { min, max } = this.getChannelRange(channel);

        if (channel in this) {
            const cloned = this.clone();

            // @ts-expect-error - channel
            cloned[channel] = clamp(value, min, max);

            return cloned;
        }

        throw new Error(`Channel ${channel} not found`);
    }

    getSpaceAxes(xyChannels: Color2DAxes): Color3DAxes {
        const { xChannel, yChannel } = xyChannels;

        if (xChannel === yChannel) {
            throw new Error('xChannel and yChannel cannot be the same');
        }

        const zChannel = this.getChannels().find((channel) => channel !== xChannel && channel !== yChannel);

        if (!zChannel) {
            throw new Error('zChannel not found');
        }

        return { xChannel, yChannel, zChannel };
    }

    incChannelValue(channel: ColorChannel, step: number): ColorInstance {
        const { min, max, step: availableStep } = this.getChannelRange(channel);

        const value = snap(clamp(this.getChannelValue(channel) + step, min, max), min, max, availableStep);

        return this.withChannelValue(channel, value);
    }

    decChannelValue(channel: ColorChannel, step: number): ColorInstance {
        return this.incChannelValue(channel, -step);
    }
}

export class HSBColor extends Color {
    private hue: number;
    private saturation: number;
    private brightness: number;
    private alpha: number;

    constructor(hue: number, saturation: number, brightness: number, alpha: number) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.brightness = brightness;
        this.alpha = alpha;
    }

    static parse(value: string): HSBColor | undefined {
        const match = value.match(HSB_REGEX);

        if (!match) return undefined;

        const [h, s, b, a] = (match[1] ?? match[2]).split(',').map((n) => Number(n.trim().replace('%', '')));

        return new HSBColor(h % 360, clamp(s, 0, 100), clamp(b, 0, 100), clamp(a ?? 1, 0, 1));
    }

    private toRGB(): RGBColor {
        const h = this.hue;
        const s = this.saturation / 100;
        const b = this.brightness / 100;

        function f(n: number) {
            const k = (n + h / 60) % 6;

            return b - b * s * Math.max(0, Math.min(k, 4 - k, 1));
        }

        const scale = 255;

        return new RGBColor(Math.round(f(5) * scale), Math.round(f(3) * scale), Math.round(f(1) * scale), Number(this.alpha.toFixed(2)));
    }

    private toHSL(): HSLColor {
        const h = this.hue;
        let s = this.saturation / 100;
        const b = this.brightness / 100;

        const l = b * (1 - s / 2);

        if (l === 0 || l === 1) {
            s = 0;
        } else {
            s = (b - l) / Math.min(l, 1 - l);
        }

        return new HSLColor(Number(h.toFixed(2)), Number((s * 100).toFixed(2)), Number((l * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    toFormat(format: ColorSpace): ColorInstance {
        switch (format) {
            case 'hsba':
                return this;
            case 'rgba':
                return this.toRGB();
            case 'hsla':
                return this.toHSL();
            case 'oklcha':
                return this.toRGB().toFormat('oklcha');
            default:
                throw new Error(`Invalid format: ${format}`);
        }
    }

    toString(format: ColorOutput): string {
        switch (format) {
            case 'css':
                return this.toHSL().toString('css');
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsb':
                return `hsb(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.brightness.toFixed(2)}%)`;
            case 'hsba':
                return `hsba(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.brightness.toFixed(2)}%, ${this.alpha})`;
            case 'hsl':
                return this.toHSL().toString('hsl');
            case 'rgb':
                return this.toRGB().toString('rgb');
            case 'oklch':
                return this.toRGB().toFormat('oklcha').toString('oklch');
            default:
                return this.toFormat(format).toString(format);
        }
    }

    toJSON() {
        return {
            hue: this.hue,
            saturation: this.saturation,
            brightness: this.brightness,
            alpha: this.alpha
        };
    }

    clone(): ColorInstance {
        return new HSBColor(this.hue, this.saturation, this.brightness, this.alpha);
    }

    getChannelRange(channel: ColorChannel): ColorChannelRange {
        switch (channel) {
            case 'hue':
                return { min: 0, max: 360, step: 1 };
            case 'saturation':
            case 'brightness':
                return { min: 0, max: 100, step: 1 };
            case 'alpha':
                return { min: 0, max: 1, step: 0.01 };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }

    getFormat(): ColorSpace {
        return 'hsba';
    }

    getChannels(): [ColorChannel, ColorChannel, ColorChannel] {
        return ['hue', 'saturation', 'brightness'];
    }
}

export class HSLColor extends Color {
    private hue: number;
    private saturation: number;
    private lightness: number;
    private alpha: number;

    constructor(hue: number, saturation: number, lightness: number, alpha: number) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha;
    }

    static parse(value: string): HSLColor | undefined {
        const match = value.match(HSL_REGEX);

        if (!match) return undefined;

        const [h, s, l, a] = (match[1] || match[2])?.split(',').map((n) => Number(n.trim().replace('%', ''))) ?? [];

        return new HSLColor(h % 360, clamp(s, 0, 100), clamp(l, 0, 100), clamp(a ?? 1, 0, 1));
    }

    private toRGB(): RGBColor {
        const h = this.hue;
        const s = this.saturation / 100;
        const l = this.lightness / 100;

        function f(n: number) {
            const k = (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);

            return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
        }

        const scale = 255;

        return new RGBColor(Math.round(f(0) * scale), Math.round(f(8) * scale), Math.round(f(4) * scale), Number(this.alpha.toFixed(2)));
    }

    private toHSB(): HSBColor {
        const h = this.hue;
        let s = this.saturation / 100;
        const l = this.lightness / 100;

        const b = l + s * Math.min(l, 1 - l);

        if (b === 0) {
            s = 0;
        } else {
            s = 2 * (1 - l / b);
        }

        return new HSBColor(Number(h.toFixed(2)), Number((s * 100).toFixed(2)), Number((b * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    toFormat(format: ColorSpace): ColorInstance {
        switch (format) {
            case 'hsla':
                return this;
            case 'rgba':
                return this.toRGB();
            case 'hsba':
                return this.toHSB();
            case 'oklcha':
                return this.toRGB().toFormat('oklcha');
            default:
                throw new Error(`Invalid format: ${format}`);
        }
    }

    toString(format: ColorOutput): string {
        switch (format) {
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsl':
                return `hsl(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.lightness.toFixed(2)}%)`;
            case 'css':
            case 'hsla':
                return `hsla(${this.hue}, ${this.saturation.toFixed(2)}%, ${this.lightness.toFixed(2)}%, ${this.alpha})`;
            case 'rgb':
                return this.toRGB().toString('rgb');
            case 'hsb':
                return this.toHSB().toString('hsb');
            case 'oklch':
                return this.toRGB().toFormat('oklcha').toString('oklch');
            default:
                return this.toFormat(format).toString(format);
        }
    }

    toJSON(): Record<string, number> {
        return {
            hue: this.hue,
            saturation: this.saturation,
            lightness: this.lightness,
            alpha: this.alpha
        };
    }

    clone(): ColorInstance {
        return new HSLColor(this.hue, this.saturation, this.lightness, this.alpha);
    }

    getChannelRange(channel: ColorChannel): ColorChannelRange {
        switch (channel) {
            case 'hue':
                return { min: 0, max: 360, step: 1 };
            case 'saturation':
            case 'lightness':
                return { min: 0, max: 100, step: 1 };
            case 'alpha':
                return { min: 0, max: 1, step: 0.01 };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }

    getFormat(): ColorSpace {
        return 'hsla';
    }

    getChannels(): [ColorChannel, ColorChannel, ColorChannel] {
        return ['hue', 'saturation', 'lightness'];
    }
}

export class RGBColor extends Color {
    private red: number;
    private green: number;
    private blue: number;
    private alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        super();
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    static parse(value: string): RGBColor | undefined {
        if (!value) return undefined;

        const input = value.trim();

        return this.parseHexColor(input) ?? this.parseRgbFunction(input);
    }

    private static parseHexColor(input: string): RGBColor | undefined {
        const match = input.match(HEX_REGEX);

        if (!match) return undefined;

        let hex = match[1];

        // Expand shorthand (#abc -> #aabbcc)
        if (hex.length <= 4) {
            hex = hex
                .split('')
                .map((c) => c + c)
                .join('');
        }

        if (![6, 8].includes(hex.length)) return undefined;

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;

        return new RGBColor(r, g, b, a);
    }

    private static parseRgbFunction(input: string): RGBColor | undefined {
        const match = input.match(RGB_REGEX);

        if (!match?.[1]) return undefined;

        const [rStr, gStr, bStr, aStr] = match[1].split(',').map((v) => v.trim());

        const r = clamp(Number(rStr), 0, 255);
        const g = clamp(Number(gStr), 0, 255);
        const b = clamp(Number(bStr), 0, 255);
        const a = aStr !== undefined ? clamp(Number(aStr), 0, 1) : 1;

        if ([r, g, b, a].some((v) => Number.isNaN(v))) return undefined;

        return new RGBColor(r, g, b, a);
    }

    private toHSB(): HSBColor {
        const scale = 255;
        const [r, g, b] = [this.red / scale, this.green / scale, this.blue / scale];

        const mmax = Math.max(r, g, b);
        const mmin = Math.min(r, g, b);

        const chroma = mmax - mmin;
        const brightness = mmax;

        const saturation = mmax === 0 ? 0 : chroma / mmax;

        let hue = 0;

        if (chroma !== 0) {
            switch (mmax) {
                case r:
                    hue = ((g - b) / chroma) % 6;
                    break;
                case g:
                    hue = (b - r) / chroma + 2;
                    break;
                case b:
                    hue = (r - g) / chroma + 4;
                    break;
            }

            hue *= 60;

            if (hue < 0) {
                hue += 360;
            }
        }

        return new HSBColor(Number(hue.toFixed(2)), Number((saturation * 100).toFixed(2)), Number((brightness * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    private toHSL(): HSLColor {
        const scale = 255;
        const [r, g, b] = [this.red / scale, this.green / scale, this.blue / scale];

        const mmax = Math.max(r, g, b);
        const mmin = Math.min(r, g, b);

        const lightness = (mmax + mmin) / 2;
        const chroma = mmax - mmin;

        let hue = 0;
        let saturation = -1;

        if (chroma !== 0) {
            switch (mmax) {
                case r:
                    hue = ((g - b) / chroma) % 6;
                    break;
                case g:
                    hue = (b - r) / chroma + 2;
                    break;
                case b:
                    hue = (r - g) / chroma + 4;
                    break;
            }

            hue *= 60;

            if (hue < 0) {
                hue += 360;
            }
        }

        if (lightness === 0 || lightness === 1) {
            saturation = 0;
        } else {
            saturation = chroma / (1 - Math.abs(2 * mmax - chroma - 1));
        }

        return new HSLColor(Number(hue.toFixed(2)), Number((saturation * 100).toFixed(2)), Number((lightness * 100).toFixed(2)), Number(this.alpha.toFixed(2)));
    }

    private toOKLCH(): OKLCHColor {
        const rgb = [this.red / 255, this.green / 255, this.blue / 255];

        const rgbLinear = rgb.map((c) => (Math.abs(c) <= 0.04045 ? c / 12.92 : (c < 0 ? -1 : 1) * ((Math.abs(c) + 0.055) / 1.055) ** 2.4));

        const xyz = multiplyMatrices([0.41239079926595934, 0.357584339383878, 0.1804807884018343, 0.21263900587151027, 0.715168678767756, 0.07219231536073371, 0.01933081871559182, 0.11919477979462598, 0.9505321522496607], rgbLinear);

        const LMS = multiplyMatrices([0.819022437996703, 0.3619062600528904, -0.1288737815209879, 0.0329836539323885, 0.9292868615863434, 0.0361446663506424, 0.0481771893596242, 0.2642395317527308, 0.6335478284694309], xyz);

        const LMSg = LMS.map((val) => Math.cbrt(val));

        const [L, a, b] = multiplyMatrices([0.210454268309314, 0.7936177747023054, -0.0040720430116193, 1.9779985324311684, -2.4285922420485799, 0.450593709617411, 0.0259040424655478, 0.7827717124575296, -0.8086757549230774], LMSg);

        const C = Math.sqrt(a ** 2 + b ** 2);
        const H = Math.abs(a) < 0.0002 && Math.abs(b) < 0.0002 ? NaN : ((((Math.atan2(b, a) * 180) / Math.PI) % 360) + 360) % 360;

        const outL = Number(Math.min(1, Math.max(0, L)).toFixed(4));

        const outC = Number(C.toFixed(4));

        const outH = Number.isNaN(H) ? NaN : Number(H.toFixed(2));

        return new OKLCHColor(outL, outC, outH, Number(this.alpha.toFixed(2)));
    }

    toHexInt(): number {
        return (this.red << 16) | (this.green << 8) | this.blue;
    }

    toFormat(format: ColorSpace): ColorInstance {
        switch (format) {
            case 'rgba':
                return this;
            case 'hsla':
                return this.toHSL();
            case 'hsba':
                return this.toHSB();
            case 'oklcha':
                return this.toOKLCH();
            default:
                throw new Error(`Invalid format: ${format}`);
        }
    }

    toString(format: ColorOutput): string {
        switch (format) {
            case 'hex':
                return `#${this.red.toString(16).padStart(2, '0')}${this.green.toString(16).padStart(2, '0')}${this.blue.toString(16).padStart(2, '0')}`;
            case 'hexa':
                return `#${this.red.toString(16).padStart(2, '0')}${this.green.toString(16).padStart(2, '0')}${this.blue.toString(16).padStart(2, '0')}${Math.round(this.alpha * 255)
                    .toString(16)
                    .padStart(2, '0')}`;
            case 'rgb':
                return `rgb(${this.red}, ${this.green}, ${this.blue})`;
            case 'rgba':
            case 'css':
                return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
            case 'hsl':
                return this.toHSL().toString('hsl');
            case 'hsb':
                return this.toHSB().toString('hsb');
            case 'oklch':
                return this.toOKLCH().toString('oklch');
            default:
                return this.toFormat(format).toString(format);
        }
    }

    toJSON(): Record<string, number> {
        return {
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        };
    }

    clone(): ColorInstance {
        return new RGBColor(this.red, this.green, this.blue, this.alpha);
    }

    getChannelRange(channel: ColorChannel): ColorChannelRange {
        switch (channel) {
            case 'red':
            case 'green':
            case 'blue':
                return { min: 0, max: 255, step: 1 };
            case 'alpha':
                return { min: 0, max: 1, step: 0.01 };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }

    getFormat(): ColorSpace {
        return 'rgba';
    }

    getChannels(): [ColorChannel, ColorChannel, ColorChannel] {
        return ['red', 'green', 'blue'];
    }
}

export class OKLCHColor extends Color {
    private L: number; // 0–1
    private C: number; // ~0–0.4 typical usable range
    private H: number; // 0–360
    private alpha: number; // 0–1

    constructor(L: number, C: number, H: number, alpha: number) {
        super();
        this.L = L;
        this.C = C;
        this.H = H;
        this.alpha = alpha;
    }

    static parse(value: string): OKLCHColor | undefined {
        if (!value) return undefined;

        const m = value.trim().match(OKLCH_REGEX);

        if (!m) return;

        const l = Number(m[1]) / 100;
        const c = Number(m[2]);
        const h = Number(m[3]);
        const alpha = m[5] !== undefined ? Number(m[5]) : 1;

        return new OKLCHColor(l, c, h, alpha);
    }

    private toRGB(): RGBColor {
        const L = this.L;
        const a = Number.isNaN(this.H) ? 0 : this.C * Math.cos((this.H * Math.PI) / 180);
        const b = Number.isNaN(this.H) ? 0 : this.C * Math.sin((this.H * Math.PI) / 180);

        const LMSg = multiplyMatrices([1, 0.3963377774, 0.2158037573, 1, -0.1055613458, -0.0638541728, 1, -0.0894841775, -1.291485548], [L, a, b]);

        const LMS = LMSg.map((v) => v ** 3);

        const xyz = multiplyMatrices([1.2268798758, -0.5578149945, 0.2813910457, -0.0405757452, 1.1122868033, -0.0717110581, -0.0763729367, -0.4214933324, 1.5869240198], LMS);

        let [r, g, b2] = multiplyMatrices([3.240969942, -1.537383178, -0.49861076, -0.969243636, 1.875967502, 0.041555057, 0.05563008, -0.203976959, 1.056971514], xyz);

        [r, g, b2] = [r, g, b2].map((c) => (Math.abs(c) > 0.0031308 ? (c < 0 ? -1 : 1) * (1.055 * Math.abs(c) ** (1 / 2.4) - 0.055) : 12.92 * c));

        return new RGBColor(Math.round(clamp(r, 0, 1) * 255), Math.round(clamp(g, 0, 1) * 255), Math.round(clamp(b2, 0, 1) * 255), Number(this.alpha.toFixed(2)));
    }

    toJSON(): Record<string, number> {
        return {
            L: this.L,
            C: this.C,
            H: this.H,
            alpha: this.alpha
        };
    }

    clone(): ColorInstance {
        return new OKLCHColor(this.L, this.C, this.H, this.alpha);
    }

    toFormat(format: ColorSpace): ColorInstance {
        switch (format) {
            case 'oklcha':
                return this;
            case 'rgba':
                return this.toRGB();
            case 'hsla':
                return this.toRGB().toFormat('hsla');
            case 'hsba':
                return this.toRGB().toFormat('hsba');
            default:
                throw new Error(`Invalid format: ${format}`);
        }
    }

    toString(format: ColorOutput): string {
        switch (format) {
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');

            case 'oklch': {
                const l = Number.isNaN(this.L) ? 0 : Number((this.L * 100).toFixed(2));
                const c = Number.isNaN(this.C) ? 0 : Number(this.C.toFixed(4));
                const h = Number.isNaN(this.H) ? 0 : Number(this.H.toFixed(2));

                return `oklch(${l}% ${c} ${h})`;
            }

            case 'oklcha':

            case 'css': {
                const l = Number.isNaN(this.L) ? 0 : Number((this.L * 100).toFixed(2));
                const c = Number.isNaN(this.C) ? 0 : Number(this.C.toFixed(4));
                const h = Number.isNaN(this.H) ? 0 : Number(this.H.toFixed(2));
                const a = Number.isNaN(this.alpha) ? 1 : Number(this.alpha.toFixed(2));

                return `oklch(${l}% ${c} ${h} / ${a})`;
            }

            case 'hsl':
                return this.toRGB().toString('hsl');
            case 'hsb':
                return this.toRGB().toString('hsb');
            case 'rgb':
                return this.toRGB().toString('rgb');
            default:
                return this.toFormat(format).toString(format);
        }
    }

    getChannelRange(channel: ColorChannel): ColorChannelRange {
        switch (channel) {
            case 'L':
                return { min: 0, max: 1, step: 0.01 };
            case 'C':
                return { min: 0, max: 0.4, step: 0.01 };
            case 'H':
                return { min: 0, max: 360, step: 1 };
            case 'alpha':
                return { min: 0, max: 1, step: 0.01 };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }

    getFormat(): ColorSpace {
        return 'oklcha';
    }

    getChannels(): [ColorChannel, ColorChannel, ColorChannel] {
        return ['L', 'C', 'H'];
    }
}

export const parseColor = (color: string): ColorInstance => {
    const parsedColor = RGBColor.parse(color) ?? HSLColor.parse(color) ?? HSBColor.parse(color) ?? undefined;

    if (!parsedColor) {
        throw new Error(`Invalid color: ${color}`);
    }

    return parsedColor;
};

export function getChannelGradient(channel: ColorSliderChannel, value: ColorInstance, orientation: 'horizontal' | 'vertical') {
    const { min, max } = value.getChannelRange(channel);

    const direction = orientation === 'horizontal' ? 'right' : 'bottom';

    switch (channel) {
        case 'hue':
            return `linear-gradient(to ${direction}, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)`;

        case 'lightness': {
            const start = value.withChannelValue(channel, min).toString('css');
            const middle = value.withChannelValue(channel, (max - min) / 2).toString('css');
            const end = value.withChannelValue(channel, max).toString('css');

            return `linear-gradient(to ${direction}, ${start}, ${middle}, ${end})`;
        }

        case 'red':
        case 'green':
        case 'blue':
        case 'saturation':
        case 'brightness':

        case 'alpha': {
            const start = value.withChannelValue(channel, min).toString('css');
            const end = value.withChannelValue(channel, max).toString('css');

            return `linear-gradient(to ${direction}, ${start}, ${end})`;
        }

        default:
            throw new Error(`Unknown color channel: ${channel}`);
    }
}

export function getChannelColor(color: ColorInstance, channel: ColorChannel) {
    switch (channel) {
        case 'hue':
            return parseColor(`hsl(${color.getChannelValue('hue')}, 100%, 50%)`);

        case 'red':
        case 'green':
        case 'blue':
        case 'lightness':
        case 'brightness':
        case 'saturation':
            return color.withChannelValue('alpha', 1);

        case 'alpha': {
            return color;
        }

        default:
            throw new Error('Unknown color channel: ' + channel);
    }
}

const channelGenerators = {
    hue: (color: ColorInstance) => [0, 60, 120, 180, 240, 300, 360].map((h) => color.withChannelValue('hue', h).toString('css')).join(', '),

    saturation: (color: ColorInstance) => `${color.withChannelValue('saturation', 0).toString('css')}, transparent`,

    lightness: () => 'black, transparent, white',
    brightness: () => 'black, transparent'
};

export function getAreaGradient(color: ColorInstance, axes: Color2DAxes) {
    const { xChannel, zChannel } = color.getSpaceAxes(axes);
    const zValue = color.getChannelValue(zChannel);
    const baseFormat = color.getFormat();

    const format = baseFormat === 'rgba' || baseFormat === 'oklcha' ? 'hsba' : baseFormat;

    const base = (format === 'hsla' ? parseColor('hsl(0, 100%, 50%)') : parseColor('hsb(0, 100%, 100%)')).withChannelValue(zChannel, zValue);

    const channels = color.getChannels();

    const direction = (c: string) => (c === xChannel ? 'right' : 'top');

    const layers = channels
        .filter((c) => c !== zChannel)
        .map((c) => `linear-gradient(to ${direction(c)}, ${channelGenerators[c as keyof typeof channelGenerators](base)})`)
        .reverse();

    if (zChannel === 'hue') {
        layers.push(base.toString('css'));
    }

    return {
        '--area-gradient': layers.join(', ')
    };
}

export function getInputChannelValue(color: ColorInstance, channel: ColorInputChannel, format: ColorSpace = 'hsba') {
    const isHSL = color.getFormat() === 'hsla';

    switch (channel) {
        case 'hex': {
            if (color.getChannelValue('alpha') < color.getChannelRange('alpha').max) {
                return color.toString('hexa');
            }

            return color.toString('hex');
        }

        case 'css':
            return color.toFormat(format).toString('css');

        case 'red':
        case 'green':
        case 'blue':
            return color.toFormat('rgba').getChannelValue(channel).toString();

        case 'hue':
            return color
                .toFormat(isHSL ? 'hsla' : 'hsba')
                .getChannelValue('hue')
                .toString();

        case 'saturation':
            return color
                .toFormat(isHSL ? 'hsla' : 'hsba')
                .getChannelValue('saturation')
                .toString();

        case 'lightness':
            return color.toFormat('hsla').getChannelValue('lightness').toString();

        case 'brightness':
            return color.toFormat('hsba').getChannelValue('brightness').toString();

        case 'C':
            return color.toFormat('oklcha').getChannelValue('C').toString();
        case 'H':
            return color.toFormat('oklcha').getChannelValue('H').toString();
        case 'L':
            return color.toFormat('oklcha').getChannelValue('L').toString();
        default:
            return color.getChannelValue(channel).toString();
    }
}

export function getInputChannelRange(color: ColorInstance, channel: ColorInputChannel = 'hex'): ColorChannelRange | undefined {
    switch (channel) {
        case 'hex': {
            return {
                min: (parseColor('#000000') as RGBColor).toHexInt(),
                max: (parseColor('#FFFFFF') as RGBColor).toHexInt(),
                step: 1
            };
        }

        case 'css':
            return undefined;

        case 'red':
        case 'green':
        case 'blue':
            return color.toFormat('rgba').getChannelRange(channel);

        case 'hue':
        case 'lightness':
        case 'saturation':
            return color.toFormat('hsla').getChannelRange(channel);

        case 'brightness':
            return color.toFormat('hsba').getChannelRange(channel);

        case 'L':
        case 'C':
        case 'H':
            return color.toFormat('oklcha').getChannelRange(channel);

        default:
            return color.getChannelRange(channel);
    }
}
