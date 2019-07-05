// @flow
import * as React from 'react';
import { TextInput as TextInputPaper } from 'react-native-paper';
import AppStyles from '../config/styles';

type Props = {};
type ElementType = {};
const Input = React.forwardRef<Props, ElementType>((props: any, ref: any) => (
  <TextInputPaper
    underlineColor={AppStyles.colors.underlineColor}
    ref={ref}
    // theme={{ fonts: { medium: 'Open Sans' } }}
    {...props}
  />
));

Input.displayName = 'Input';

export default Input;
