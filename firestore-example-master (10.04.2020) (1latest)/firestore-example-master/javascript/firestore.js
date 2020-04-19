
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDTRj_yXju2fOO0J3G_02vyZPkYRzOHkdU",
  authDomain: "year2project-93756.firebaseapp.com",
  databaseURL: "https://year2project-93756.firebaseio.com",
  projectId: "year2project-93756",
  storageBucket: "year2project-93756.appspot.com",
  messagingSenderId: "654773655428",
  appId: "1:654773655428:web:a99efbbaedaa8959cbefd1" //,
  
  // Use for Google analytics
  //measurementId: ""
};

// name of the the Firebase collection to be used
const FB_COLLECTION = "Genre";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Uncomment if using google analytics
// firebase.analytics();

// Get a reference to the database service
let database = firebase.firestore();

/*
    Get all messages
*/
async function getMessagesAsync() {
    // Declare empty array
    let messages = [];
  
    // await calls must be made in try-catch blocks
    try {
      // Get a snapshot of the products collection
      let snapshot = await database.collection(FB_COLLECTION).get();
  
      // use map() to retrieve product document objects from the snapshot - storing each in the array
      // map returns each document from the firestore snapshot
      messages = snapshot.docs.map(doc => {
        return doc;
      });
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    // return the messages array
    return messages;
  }

/*
    Get single message by id from a firebase collection
*/
async function getMessageByIdAsync(id) {
    // Declare empty product
    let message;
  
    // await calls must be made in try-catch blocks
    try {
      // Get product document which matches id
      product = await database.doc(`${FB_COLLECTION}/${id}`).get();
  
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    // return the products array
    return message;
  }


  /*
    Delete single message by id from a firebase collection
*/
async function deleteMessageByIdAsync(id) {
  
    // await calls must be made in try-catch blocks
    try {
      // Get product document which matches id
      await database.doc(`${FB_COLLECTION}/${id}`).delete();
      return true;
  
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    return false;
  }