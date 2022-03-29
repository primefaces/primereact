export default function EventBus() {
    const allHandlers = new Map();

    return {
        on(type, handler) {
            let handlers = allHandlers.get(type);
            if (!handlers)
                handlers = [handler];
            else
                handlers.push(handler);

            allHandlers.set(type, handlers);
        },
        off(type, handler) {
            let handlers = allHandlers.get(type);
            handlers && handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        },
        emit(type, evt) {
            let handlers = allHandlers.get(type);
            handlers && handlers.slice().forEach(handler => handler(evt));
        }
    }
}
