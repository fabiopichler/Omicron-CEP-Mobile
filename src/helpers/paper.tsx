import React, { FC } from 'react';
import { Portal } from 'react-native-paper';

export const withPortal = <P,>(Component: FC<P>) => (props: P) => (
  <Portal>
    <Component {...props} />
  </Portal>
);
