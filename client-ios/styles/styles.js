import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  containerTest: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: -250,
    marginLeft: 200,
    marginRight: 20,
    position: 'absolute'
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    flex: 1
  },
  listContainer: {
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: '#F5FCFF',
    position: 'absolute',
    left: 100,
    right: 100,
    paddingTop: 30,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,50,255,1)',
    borderRadius: 6,
    // backgroundColor: 'rgba(255,255,255,.2)',
    // color: '#ffffff'
  },

  swipeoutContainer: {
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: '#F5FCFF',
    position: 'absolute',
    left: 100,
    right: 100,
    paddingTop: 30,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(50,255,255,1)',
    borderRadius: 6,
    // backgroundColor: 'rgba(255,255,255,.2)',
    // color: '#ffffff'
  },

// Background of the listView (aka when scrolling)
  singleListContainer: {
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: '#F5FCFF',
    left: -170,
    right: 90,
    top: -250,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0)',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },

  buttonImage: {
    height: 45,
    width: 45,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightArrow: {
    height: 20,
    width: 20
  },

  followButtonImage: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  followButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 2,
    marginRight: 2,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  navigationBar: {
    backgroundColor: 'rgba(255,255,255,.5)',

  },

  navigationBarText: {
    color: 'white'
  },
  /*********************************
  Add Screen Specific Styles
  *********************************/
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  settingsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },

  autocompleteContainerWithKeyboard: {
    marginTop: -50,
    // flex: 1,
    left: -10,
    marginLeft: 200,
    position: 'absolute',
    right: -150,
    top: 20
  },

  autocompleteContainerWithoutKeyboard: {
    // flex: 1,
    left: -10,
    marginLeft: 200,
    position: 'absolute',
    right: -150,
    top: 20
  },

  autocompleteInputContainer: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,.2)'
  },

  autocompleteInputContainerTextInput: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,.2)',
    color: '#ffffff'
  },

  autocompleteSuggestionText: {
    fontSize: 18,
    color: '#ffffff'
  },

  buttonContainerWithKeyboard: {
    marginTop: -65,
    marginBottom: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#F5FCFF',
    top: 190,
    left: 180,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: -100,
    paddingRight: -100
    // borderColor: '#000000',
    // borderWidth: 1
  },

  buttonContainerWithoutKeyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#F5FCFF',
    top: 190,
    left: 180,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: -100,
    paddingRight: -100
    // borderColor: '#000000',
    // borderWidth: 1
  },

  mainButton: {
    height: 85,
    width: 105,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.5)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },

  mainButtonItemAdded: {
    height: 85,
    width: 105,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(0,128,128,.9)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },

  buttonCategoryText: {
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    // position: 'relative',
    // marginBottom: 20
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffffff'
  },


  /**********************************
  Icon Swipe Description Feature
  **********************************/

  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  /*********************************
  ListView Specific Styles
  *********************************/

  rightContainer: {
      flex: 1
  },
  thumbnail: {
      width: 53,
      height: 81,
      marginRight: 10
  },
  musicThumbnail: {
      width: 81,
      height: 81,
      marginRight: 10
  },
  listContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,.25)',
      padding: 10,
  },
  listTitle: {
      fontSize: 20,
      marginBottom: 8,
      color: '#ffffff',
      fontWeight: 'bold'
  },
  listTitleCrossedOff: {
    fontSize: 20,
    marginBottom: 8,
    color: '#ffffff',
    textDecorationLine: 'line-through'
  },
  listAuthor: {
      color: '#ffffff'
  },
  listAuthorCrossedOff: {
    color: '#656565',
    textDecorationLine: 'line-through'
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  listView: {
    // marginTop: 60,
    width: 340
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  /*********************************
  Signup Screen Specific Styles
  *********************************/
  signUpContainerWithKeyboard: {
    justifyContent: 'center',
    marginTop: -80,
    padding: 20,
    // backgroundColor: '#ffffff',
  },
  signUpContainerWithoutKeyboard: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    // backgroundColor: '#ffffff',
  },
  signUpTitle: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#ffffff'
  },

  signUpPrompt: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#ffffff'
  },

  /*********************************
  Form Specific Styles
  *********************************/
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  inputField: {
    height: 30,
    width: 200,
    padding: 4,
    flex: 4,
    fontSize: 14,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,.2)',
    color: '#ffffff'
  },
  loginButton: {
    height: 30,
    width: 200,
    padding: 4,
    flex: 4,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.5)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },

  /*********************************
  Typograph Specific Styles
  *********************************/
  text: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    alignSelf: 'center'
  },
  h4: {
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  description: {
    marginBottom: 7,
    fontSize: 14,
    textAlign: 'center',
    color: '#656565'
  },
  error: {
    marginBottom: 20,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },

  /*********************************
  Button Common Styles
  *********************************/
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  disabledButton: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center'
  },
  buttonErrorText: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  },
  icon: {
    height: 25,
    width: 25
  },

  /*********************************
  List Screen Specific Styles
  *********************************/
  innerContainer: {
    alignItems: 'center'
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainerTransparent: {
    backgroundColor: '#fff',
    padding: 20
  },
  innerContainerText: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  modalButton: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  modalImage: {
    width: 200,
    height: 280,
    marginBottom: 20
  },
  modalMuiscImage: {
    width: 280,
    height: 280,
    marginBottom: 20
  },
  datePicker: {
    backgroundColor: 'white',
    borderRadius:15
  },

  /*********************************
  follower Screen Specific Styles
  *********************************/
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },

  categoryButton: {
    flex: 1,
    flexDirection: 'row',
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 2,
    marginTop: 5,
    marginBottom: 5,
    padding: 4,
    marginRight: 2,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  signUpButtonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },
  searchInput: {
    flex:5,
    height: 36,
    padding: 4,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,.2)',
    color: '#ffffff',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  followIcon: {
    flex:1
  },
  followInfo: {
    flex: 4,
    paddingLeft: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  columnContainer: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'stretch'
  },
  followResultContainer: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: '#656565',
    borderRadius: 8
  },
  followingListContainer: {
    flex: 3,
    marginTop: 10,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: '#656565',
    borderRadius: 8
  },
  recommendationTextContainer: {
    width: 100,
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  recommendationText: {
    width: 100,
  }
});
