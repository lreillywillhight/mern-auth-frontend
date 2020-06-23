const db = require('./models')

const errorHandler = error => {
  console.log('error')
  console.log(error)
}


// db.user.create({
//   firstName: 'Steve',
//   lastName: 'Peters',
//   age: 44,
//   email: 'stpets@bigdaddybezos.com'
// }).then(userData => {
//   console.log('woop woop')
//   console.log(userData)
// }).catch(errorHandler)

// console.log('i want an emoji')

// db.user.findOne({
//   where: {
//     id: 1
//   }
// }).then(foundUser => {
//   console.log(`found ${foundUser.firstName}. ${foundUser.firstName} is ${foundUser.age} years old.`)
// })
console.log('🐧🐧🐧🐧🐧🐧')

// db.user.findOrCreate({
//   where: {
//     email: 'b.hague@ga.co'
//   },
//   defaults: {
//     firstName: 'Brian',
//     lastName: 'Hague'
//   }
// }).spread((user,created) => {
//   console.log(`🗺 ${user.firstName} was ${created ? 'created' : 'found'}!`)
// }).catch(errorHandler)


// db.user.findAll().then(users => {
//   users.forEach(user => console.log(`🐔 hallo ${user.firstName}`))
// }).catch(errorHandler)

//UPDATE users SET age = 99 WHERE email = 'b.hague@ga.co'
// db.user.update({
//   age: 99
// }, {
//   where: {
//     email: 'b.hague@ga.co'
//   }
// }).then(updated => {
//   console.log(`🏴‍☠️`)
//   console.log(updated)
// }).catch(errorHandler)

//DESTROY
// db.user.destroy({
//   where: {
//     firstName: 'Brian'
//   }
// }).then(deleted => {
//   console.log(`🐕`)
//   console.log(deleted)
// }).catch(errorHandler)


///////////////////////////ADDING PETS

//createMode11
// db.user.findOne().then(user => {
//   user.createPet({
//     name: 'Gracie',
//     species: 'Mutt Dog',
//       description: 'Cute but neurotic pooch who bites people'
//   }).then(pet => {
//         console.log(`🐕 Hello there ${pet.name}`)
//       }).catch(errorHandler)
// }).catch(errorHandler)

//getModels
// get a user
// db.user.findOne().then(steve => {
//   steve.getPets().then(pets => {
//     pets.forEach(pet => console.log(`🐕 ${pet.name}} is a ${pet.species}`))
//   }).catch(errorHandler)
// }).catch(errorHandler)

//setModel
// db.pet.findOrCreate({
//   where: {
//     name: 'Simbuttbutt',
//     species: 'Ginger Cat'
//   },
//   defaults: {
//     description: 'Traumatized by an aussie, but very cute.'
//   }
// }).then(([pet, created]) => {
//   db.user.findOne().then(user => {
//     user.addPet(pet)
//     console.log(`🐈 user ${user.firstName} is the owner of ${pet.name}`)
//   })
// }).catch(errorHandler)



//include statement
db.user.findAll({
  include: [db.pet]
}).then(users => {
  //each user object iwll have a pets key iwth array of pets
  console.log(`${users[0].firstName} has ${users[0].pets.length} pets`)
}).catch(errorHandler)




console.log('🐧🐧🐧🐧🐧🐧')

