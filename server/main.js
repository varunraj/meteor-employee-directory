// All code here is executed only in server

import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import {Employees} from '../imports/collections/employees'
import {image, helpers} from 'faker' // fake data


Meteor.startup(() => {
  
  const numberRecords = Employees.find({}).count();
  
  console.log("records", numberRecords)

  if(!numberRecords){

    //times will call cb n number times.
    _.times(5000,()=>{
        const {name, email, phone} = helpers.createCard();
        Employees.insert({
            name,
            email,
            phone,
            avatar: image.avatar()
        })
      })

  }


  // set publication of data here. clients will subscribe to pubs
  // we also disabled auto publish using command 'meteor remove autopublish'

  Meteor.publish('employees', function(per_page){
    return Employees.find({}, { limit : per_page }); // this is cursor to data and not actual data
  })



});
