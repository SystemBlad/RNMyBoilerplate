import { Platform } from 'react-native';

import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  name: 'React Native APP',
  host: Platform.OS === 'ios' ? '192.168.5.37' : '192.168.5.210',
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect()
  .clear();
