
# Notes

- faker npm module is used to create fake data
- "meteor remove autopublish" -> This will prevent meteor from publishing complete data from server
- We create publications (server/main.js) of subscription of data. 
- Added package : react-addons-pure-render-mixin and react-meteor-data. => These are required to get data from sever as a batch. A container for collection will be created. When data in collection changes, data in react side is refreshed. 