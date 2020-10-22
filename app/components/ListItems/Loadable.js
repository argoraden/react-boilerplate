/**
 *
 * Asynchronously loads the component for ListItems
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
