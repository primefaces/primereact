import { createWorkerFactory } from '@shopify/react-web-worker';

const createWorkerDataTableUtils = createWorkerFactory(() => import('./datatable-utils'));

export { createWorkerDataTableUtils };
