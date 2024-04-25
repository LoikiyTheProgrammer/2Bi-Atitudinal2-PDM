import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  header: {
    width: '90%',
    height: '25%',
  },

  headerImageBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerImage: {
    width: '50%',
    height: '50%',
  },

  mainContent: {
    width: '90%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleSignIn: {
    width: '100%',
    height: 'auto',
    color: '#000',
    fontSize: 32,
  },

  Input: {
    width: '100%',
    height: '10%',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
  },

  navButton: {
    width: '100%',
    height: '10%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0047AB',
  },

  navButtonText: {
    color: '#fff',
    fontSize: 24,
  },

  galleryImageLine: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    },

    galleryImageBox1: {
        width: '25%',
        height: '25%',
    },

    galleryImageBox2: {
        width: '25%',
        height: '25%',
    },

    galleryImageBox3: {
        width: '25%',
        height: '25%',
    },

    galleryImage: {
        width: 'auto',
        height: '100%',
    },
});

export default styles;