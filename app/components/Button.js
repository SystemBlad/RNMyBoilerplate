// @flow
import * as React from 'react';
import { Button as PaperButton } from 'react-native-paper';

export default function FancyButton(props: Object) {
  return <PaperButton mode="contained" {...props} />;
}
