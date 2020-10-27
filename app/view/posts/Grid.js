Ext.define('SL.view.posts.Grid', {
  extend: 'Ext.grid.Panel',
  reference: 'mainGrid',
  bind: '{posts}',



  columns: [{
    text: 'ID',
    width: 50,
    dataIndex: 'id'
  }, {
    text: 'user ID',
    dataIndex: 'userId',
    flex: 1,
  }, {
    text: 'Title',
    dataIndex: 'title',
    flex: 1
  }, {
    text: 'Body',
    dataIndex: 'body',
    flex: 2
  }],
  listeners: {
    itemdblclick: 'openTab'
  }
});
