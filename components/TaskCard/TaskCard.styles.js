import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#7da453',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'baseline',
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  item_left: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item_text: {
    maxWidth: '80%',
  },
});
