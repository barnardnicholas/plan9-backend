const fs = require("fs");
const path = require("path");
const Twit = require("twit");
// const { twitterConfig } = require("../auth/twitter-config.js");
const twitterConfig = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

// Import Firebase
const firebase = require("firebase");

// Auth variables
const { firebaseConfig } = require("../auth/firebase-auth");
// import * as auth from "../env_variables/env";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Twitter
const twitterInstance = new Twit(twitterConfig);

const sendTweet = (cb, status) => {
  console.log("reached model");
  twitterInstance.post(
    "statuses/update",
    { status: status },
    (err, data, response) => {
      if (err) {
        console.log(`ERROR: Failed to post "${status}"`);
        console.dir(err);
        // console.log(data);
        cb(err);
      } else {
        console.log(`Successfully posted "${status}"`);
        // console.log("RESPONSE: ", response);
        // console.log(data);
        cb(null, response);
      }
    }
  );
};

const tweetImage = (cb, options) => {
  console.log("reached model");
  twitterInstance.post(
    "statuses/update",
    { status: status },
    (err, data, response) => {
      if (err) {
        console.log(`ERROR: Failed to post "${status}"`);
        console.dir(err);
        // console.log(data);
        cb(err);
      } else {
        console.log(`Successfully posted "${status}"`);
        // console.log("RESPONSE: ", response);
        // console.log(data);
        cb(null, response);
      }
    }
  );
};

// const sendTweet = cb => {
//   console.log("reached model");
//   // Read files in owners folder and make array
//   fs.readdir(__dirname + "/../data/owners", (err, ownersList) => {
//     if (err) cb(err);
//     else {
//       console.log("Reading files in owners directory...");
//       const ownersArray = [];
//       let count = 0;
//       // iterate through array, parse each file, add to response array
//       ownersList.forEach(owner => {
//         fs.readFile(
//           __dirname + `/../data/owners/${owner}`,
//           (err, ownerFile) => {
//             if (err) throw err;
//             else {
//               console.log(`Fetching ${owner}`);
//               count++;
//               const thisOwner = JSON.parse(ownerFile);
//               ownersArray.push(thisOwner);
//               if (count === ownersList.length) {
//                 // invoke cb with response when all owners have been found
//                 console.log("Found all owners, invoking callback");
//                 cb(null, ownersArray);
//               }
//             }
//           }
//         );
//       });
//     }
//   });
// };

// const fetchAllPets = cb => {
//   console.log("Reached model");
//   // Read files in owners folder and make array
//   fs.readdir(__dirname + "/../data/pets", (err, petsList) => {
//     if (err) cb(err);
//     else {
//       console.log("Reading files in pets directory...");
//       const petsArray = [];
//       let count = 0;
//       // iterate through array, parse each file, add to response array
//       petsList.forEach(pet => {
//         fs.readFile(__dirname + `/../data/pets/${pet}`, (err, petFile) => {
//           if (err) throw err;
//           else {
//             console.log(`Reading file ${pet}`);
//             count++;
//             const thisPet = JSON.parse(petFile);
//             petsArray.push(thisPet);
//             if (count === petsList.length) {
//               // invoke cb with response when all owners have been found
//               console.log("Found all pets, invoking callback");
//               cb(null, petsArray);
//             }
//           }
//         });
//       });
//     }
//   });
// };

// const fetchOwnerById = (ownerId, cb) => {
//   console.log("Reached model");
//   // Read correct owner file
//   fs.readFile(
//     __dirname + `/../data/owners/${ownerId}.json`,
//     (err, ownerFile) => {
//       if (err) cb(err);
//       else {
//         console.log(`Reading file ${ownerId}.json`);
//         // Parse into object
//         const thisOwner = JSON.parse(ownerFile);
//         console.log("Parsed file into object. Invoking callback");
//         // Invoke Callback
//         cb(null, thisOwner);
//       }
//     }
//   );
// };

// const fetchPetById = (petId, cb) => {
//   console.log("Reached model");
//   // Read correct pet file
//   fs.readFile(__dirname + `/../data/pets/${petId}.json`, (err, petFile) => {
//     if (err) cb(err);
//     else {
//       console.log(`Reading file ${petId}.json`);
//       // Parse into object
//       const thisPet = JSON.parse(petFile);
//       console.log("Parsed file into object. Invoking callback");
//       // Invoke Callback
//       cb(null, thisPet);
//     }
//   });
// };

// const fetchPetsByOwnerId = (ownerId, cb) => {
//   console.log("Reached model");
//   // Read all pet files in folder, create array
//   fs.readdir(__dirname + "/../data/pets", (err, petsList) => {
//     if (err) cb(err);
//     else {
//       console.log("Reading files in pets directory...");
//       console.log(petsList.length);
//       let thisOwnersPets = [];
//       let count = 0;
//       // Iterate through array, parse each pet into object, if owner matches, add to result array
//       petsList.forEach(pet => {
//         count++;
//         console.log(count);
//         fs.readFile(__dirname + `/../data/pets/${pet}`, (err, petFile) => {
//           console.log(`Reading file ${pet}`);
//           const thisPet = JSON.parse(petFile);
//           if (thisPet.owner === ownerId) {
//             console.log(`-- Found match! Adding to basket`);
//             thisOwnersPets.push(thisPet);
//             console.log(thisOwnersPets);
//           }
//         });
//         if (count === petsList.length) {
//           console.log("Checked all files. Invoking callback");
//           // Invoke callback
//           console.log("finsl result", thisOwnersPets);
//           cb(null, thisOwnersPets);
//         }
//       });
//     }
//   });
// };

module.exports = {
  // fetchAllOwners,
  // fetchAllPets,
  // fetchOwnerById,
  // fetchPetById,
  // fetchPetsByOwnerId
  sendTweet,
  tweetImage,
};
