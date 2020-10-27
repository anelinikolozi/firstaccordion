Ext.define('SL.view.posts.ViewPostWindow', {
    extend: 'Ext.panel.Panel',
    config: {
        post: null
    },
    reference: 'actualForm',
layout:{
        type:'hbox',
    align:'stretch'
},
    items: [{
        flex:1,
        xtype: 'form',
        reference: 'ViewPostForm',
        region:'west',
        listeners: {
            afterrender: 'postWindowAfterRender'
        },
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaultType: 'displayfield',
        items: [{
            name: 'id',
            fieldLabel: 'Id',
            flex:1
        }, {
            name: 'userId',
            fieldLabel: 'user ID',
            flex:1
        }, {
            name: 'title',
            fieldLabel: 'Title',
            flex:1
        }, {
            name: 'body',
            fieldLabel: 'Body',
            flex:2
        }
        ],
    },
        {
            region:'east',
            width: 300,
            height: 300,
            defaults: {

                bodyStyle: 'padding:15px'
            },
            layout: {

                type: 'accordion',
                titleCollapse: false,
                animate: true,
                activeOnTop: true
            },
            items: [{
                title: 'Panel 1',
                html: 'Panel content!'
            },{
                title: 'Panel 2',
                html: 'Panel content!'
            },{
                title: 'Panel 3',
                html: 'Panel content!'
            }],}
    ]



// layout: {
//   type: 'vbox',
//   align: 'stretch',
// },
// width: 800,
// height: 600,
// config: {
//   post: null,
// },
// requires: ['SL.model.Comment'],
// viewModel: {
//   stores: {
//     comments: {
//       model: 'SL.model.Comment',
//     },
//   },
// },
//
// controller: {
//   xclass: 'SL.view.posts.ViewPostWindowController',
// },
// items: [{
//   xtype: 'form',
//   reference: 'form',
//   bodyPadding: 10,
//   // model: 'SL.model.Post',
//   fieldDefaults: {
//     anchor: '100%',
//     allowBlank: false,
//   },
//   listeners: {
//     afterrender: 'formAfterRender',
//   },
//   defaultType: 'displayfield',
//   items: [{
//     name: 'userId',
//     fieldLabel: 'User ID',
//   }, {
//     name: 'title',
//     fieldLabel: 'Title',
//   }, {
//     name: 'body',
//     fieldLabel: 'Body',
//   }],
// }, {
//   xtype: 'grid',
//   flex: 1,
//   title: 'კომენტარები',
//   bind: '{comments}',
//   columns: [{
//     text: 'ID',
//     dataIndex: 'id',
//   }, {
//     text: 'Name',
//     dataIndex: 'name',
//     flex: 1,
//   }, {
//     text: 'Body',
//     dataIndex: 'body',
//     flex: 2,
//   }, {
//     text: 'email',
//     dataIndex: 'email',
//     flex: 1,
//   }],
// }],
// buttons: [{
//   text: 'რედაქტირება',
//   handler: 'openEditPostWindow',
// }, {
//   text: 'დახურვა',
//   handler: 'close',
// }],
})
;
