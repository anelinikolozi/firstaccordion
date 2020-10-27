Ext.define('SL.view.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  requires: 'SL.model.Post',




  stores: {
    posts: {
      model: 'SL.model.Post',
      autoLoad:true
    } ,
  // comments:{
  //     model:'SL.model.Comment',
  // }
  }



})
