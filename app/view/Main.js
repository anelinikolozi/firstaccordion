Ext.define('SL.view.Main', {
    extend: 'Ext.panel.Panel',
    requiers: 'SL.view.posts.Grid',
    layout: 'border',
    controller: {
        xclass: 'SL.view.MainController',
    },
    viewModel: {
        xclass: 'SL.view.MainViewModel'
    },

    items: [{
        xtype: 'tabpanel',
        reference: 'mainTabPanel',
        region: 'center',

        items: [
            {
                title: 'kkk',
                xtype: 'panel',


                items: [
                    {
                        xtype: 'form',
                        reference: 'mainForm',
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'


                        },


                        items: [{
                            xtype: 'numberfield',
                            name: 'userId',
                            fieldLabel: 'User ID',
                            flex: 1

                        }, {
                            xtype: 'textfield',
                            name: 'title',
                            fieldLabel: 'Title',
                            flex: 1

                        }, {
                            xtype: 'textfield',
                            name: 'body',
                            fieldLabel: 'Body',
                            flex: 1
                        }, {
                            xtype: 'button',
                            text: 'search',
                            handler: 'search'
                        }]

                    },
                    {

                        xclass: 'SL.view.posts.Grid'


                    }]


            }]


    }]


});
