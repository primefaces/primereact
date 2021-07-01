export interface TerminalServiceOptions {
    on(action: string, fn: any): void;
    emit(action: string, params?: any): void;
    off(action: string, fn: any): void;
}

export declare const TerminalService: TerminalServiceOptions;
