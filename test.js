const  faker =  require('faker')

const {name, email, phone} = faker.helpers.createCard();
const avatar =  faker.image.avatar()

console.log(name, email, phone)
console.log(avatar)