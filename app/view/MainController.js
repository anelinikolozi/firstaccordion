Ext.define('SL.view.MainController', {
    extend: 'Ext.app.ViewController',

    search: function () {
        const form = this.lookup('mainForm');
        const values = form.getForm().getValues();
        const store = this.getViewModel().getStore('posts');

        for (let v in values) {
            if (!values[v]) {
                delete values[v]
            }
        }
        store.load({
            params: values
        });
    },

    postWindowAfterRender:function(){
        const form = this.lookup('ViewPostForm');

        let post=this.lookup('actualForm').getPost();

        form.loadRecord(post);

    },

    openTab: function (view, record) {
        const tabPanel = this.lookup('mainTabPanel');
        const title=record.get('title');

        let tab = Ext.create('SL.view.posts.ViewPostWindow', {
            closable: true,
            post: record,
            title:title
        });
        tabPanel.add(tab);
        tabPanel.setActiveTab(tab);
    },
});