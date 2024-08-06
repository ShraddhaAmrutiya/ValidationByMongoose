// const mongoose =require('mongoose');
// const uri= 'mongodb://localhost:27017/MyData'
// mongoose.connect(uri).then(console.log("Connected to MongoDb."))
// .catch((err=>{console.error("Error occured in connection.")}))
// const User = require('./userModels');

// async function insertUser() {
//     try {
//         const newUser= await User.create({
//             name:'john Doy',
//             email:'johndoy@gmail.com',
//             age:34,
//         })
//         console.log('inserted user;',newUser);
        
        
//     } catch (error) {
//         console.error(error);
        
//     }
    
// }
// insertUser();


// async function updateUser() {
//     try {
//         const updateUser= await User.findOneAndUpdate(
//            { name:'john Doy'},
//             {age:12},
//         )
//         console.log('updated user:',updateUser);
        
        
//     } catch (error) {
//         console.error(error);
        
//     }finally {
//         mongoose.connection.close()
//           .then(() => console.log('Connection closed.'))
//           .catch((err) => console.error('Error closing connection:', err));
//       }
// }
// updateUser()


////////// run functions in sequence => create function main 

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/MyData';
const User = require('./userModels');


async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (err) {
    console.error("Error occurred during connection:", err);
    
  }
}

async function insertUser() {
  try {
    const newUser = await User.create({
      name: 'John Doy',
      email: 'johndoy12@gmail.com',
      age: 18,
      phone:123456789
    });
    console.log('Inserted user:', newUser);
  } catch (error) {
    console.error('Error inserting user:', error);
  }
}

async function findUser() {
    try {
      const findUser = await User.findOne(
        { name: 'John Doy' }
        
      );
      console.log('founded user:',findUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

async function updateUser() {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { name: 'John Doy' },
      { age: 12 }, 
      { new: true } 
    );
    console.log('Updated user:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}
async function deleteUser() {
    try {
      const deletedUser = await User.deleteOne({ name: 'John Doy' });
        console.log('Deleted user:', deletedUser);
      
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

async function main() {
  await connectToDatabase();
  await insertUser(); 
  await findUser(); 
  await updateUser(); 
  await deleteUser(); 
  try {
    await mongoose.connection.close();
    console.log('Connection closed.');
  } catch (err) {
    console.error('Error closing connection:', err);
  }
}

main();

console.log("change for github")