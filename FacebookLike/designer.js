(function() {

    var widget = Widget.FacebookLike.inherit(WAF.require('waf-behavior/studio'));
    
    //add Attributes:
    widget.addAttributes([{
        name: 'data-appID',
        description: 'App ID',
        type: 'string'
    },{
        name: 'data-page',
        description: 'Facebook Page',
        type: 'textarea',
        defaultValue:'http://www.facebook.com/wakandasoft'
    },{
        name: 'data-width',
        description: 'Width',
        type: 'string',
        defaultValue:'300'
    },{
        name: 'data-height',
        description: 'Height',
        type: 'string',
        defaultValue:'300'
    },{
        name: 'data-colorscheme',
        description: 'Style',
        type: 'dropdown',
        options: ['dark', 'light'],
        defaultValue:'dark'
    },{
    	name:'data-show_faces',
    	description:'Show Friends Faces',
    	type:'checkbox',
    	defaultValue:'true'
    },
    {
    	name:'data-show_border',
    	description:'Show Border',
    	type:'checkbox',
    	defaultValue:'true'
    },{
    	name:'data-header',
    	description:'Show Header',
    	type:'checkbox',
    	defaultValue:'true'
    },{
    	name:'data-stream',
    	description:'Show Posts',
    	type:'checkbox',
    	defaultValue:'false'
    }]);

})();