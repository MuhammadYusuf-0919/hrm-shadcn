import React, { Suspense, ReactElement } from 'react';
import Loader from '../loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => (
  props: P
): ReactElement => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
