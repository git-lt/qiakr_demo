// 页面基础模块 base.js
// AMD & Router CONFIG
avalon.config({
    paths: {
        jquery: "http://libs.baidu.com/jquery/2.0.0/jquery.min",
        dialog: "http://static.qiakr.com/js/dialog-min",
        template: "http://static.qiakr.com/js/artTemplate",
        webuploader: "http://static.qiakr.com/js/webuploader.min",
        io : "http://static.qiakr.com/js/socket.io",
        avalon:'avalon',
        echarts: 'http://static.qiakr.com/plugins/echarts-all',
        bootstrap : "http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min",
        daterangepicker : "http://static.qiakr.com/plugins/daterangepicker",

        dataOfCustomer:'../qiakr/dataOfCustomer',   //会员
        dataOverview:'../qiakr/dataOverview',       //概览
        dataOfSales:'../qiakr/dataOfSales',         //导购
        dataOfSupplier:'../qiakr/dataOfSupplier',   //商户
        dataOfStock:'../qiakr/dataOfStock'          //商品
    },
    shim:{
        bootstrap: {deps:['jquery']},
        echarts: {deps:['avalon']},
        daterangepicker: {deps:['jquery']},
        pagination: {deps:['jquery']}

    },
    charset: 'utf-8'
});

require(["mmRouter",'domReady!'], function() {
    var mainVM = avalon.define({
        $id: "pageRoot",
        oldPage:'',
        currPage: 'dataOverview',
        params: {}, //Url参数
        renderedFn: function(){
            if(mainVM.$model.oldPage!= mainVM.$model.currPage ){
                mainVM.$model.oldPage = mainVM.$model.currPage;

                // 加载相应的模块
                require(['../qiakr/'+mainVM.$model.currPage], function(pageModel){
                    pageModel && pageModel['init'] && pageModel['init']();
                });

                // 选中对应的菜单
            }
        }
    })

    function callback() {
        this.params.page && (mainVM.currPage = this.params.page);
        mainVM.params = this.query;
    }
    avalon.router.get('/:page', callback);
    avalon.history.start({ basepath: "/"});

    avalon.scan();
});

