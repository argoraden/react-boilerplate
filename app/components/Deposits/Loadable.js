/**
 *
 * Asynchronously loads the component for Deposits
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
