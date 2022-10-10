import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flexDirection: 'row',
    width: '100%',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10
  },
  time: {
    color: 'gray'
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10
  }
});
export default styles;