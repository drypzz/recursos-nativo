import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10
  },
  center:{
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: 'center',
  },
  contentTextStyle: {
    padding: 5,
    textAlignVertical: 'center',
    minHeight: 50,
    backgroundColor: '#969',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  content:{
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(120, 100, 161, .7)',
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    padding: 2,
    paddingLeft: 12,
  },
  title:{
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#888',
    paddingHorizontal: 25,
    padding: 20,
  },
  header: {
    paddingTop: 30,
    backgroundColor: "#606",
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  boxBattery: {
    width: 300,
    height: 50,
    borderRadius: 10,
  },
});

export default styles;