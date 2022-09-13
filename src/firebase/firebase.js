import * as firebase from 'firebase';
 const firebaseConfig = {
  apiKey: "AIzaSyA3vfpH6WU98QLgcENHYoBrT9OZAYMfCCQ",
  authDomain: "budget-tracker-9f7c9.firebaseapp.com",
  databaseURL: "https://budget-tracker-9f7c9-default-rtdb.firebaseio.com",
  projectId: "budget-tracker-9f7c9",
  storageBucket: "budget-tracker-9f7c9.appspot.com",
  messagingSenderId: "580372633138",
  appId: "1:580372633138:web:29d712e5c5d2764182ce2b",
  measurementId: "G-N9LNRLJWDE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { firebase, db as default };


// db.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val()); //gets triggered when a data is deleted
// });

// db.ref('expenses').on('child_changed', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val());  //gets triggered when a data is changed 
// })

// // db.ref('expenses').once('value').then((snapshot)=>{
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// // db.ref('expenses').push({
// //     description: 'gass bill',
// //     note: 'payment for gass bill',
// //     amount: 20128,
// //     createdAt: 10/5/2022
// // });



// // // fetching data with 'on' that allow fetching of data a multiple time
// // db.ref().on('value', (snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })

// // // reading data from firebase database using 'once' which allows us to fetch data a single time 
// // db.ref().once('value').then((snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((e)=>{
// //     console.log('error fetching data', e);
// // });

// // db.ref().set({
// //     name: 'chidi joe',
// //     age: 30,
// //     stresslevel: 7,
// //     job: {
// //         title: 'software developer',
// //         company: 'google',
// //     },
// //     isSingle: false,
// //     location:{
// //         city: 'abuja',
// //         country: 'nigeria'
// //     }
// // });

// // db.ref("attributes").set({
// //     height: 75,
// //     weight: 130
// // });

// // db.ref().update({
// //     stresslevel: 9,
// //     'job/company': 'amazon',
// //     'location/country': 'seattle'
// // })

// // db.ref('isSingle').remove().then(()=>{
// //     console.log('success')
// // }).catch((e)=>{
// //     console.log('something went wrong', e);
// // })

