/**
 * AMD CONFIG
 */
require.config({
  // urlArgs: 'v0.0.2562',
  paths: {
    jquery: "http://static.qiakr.com/plugins/jquery2.0.min",
    jquery_1_9:'http://static.qiakr.com/js/jquery-1.9.1.min',
    cookie: "http://static.qiakr.com/plugins/jquery.cookie.min",
    avalon:"avalon",
    mmHistory:"http://static.qiakr.com/source/avalon/mmHistory",
    mmPromise:"http://static.qiakr.com/source/avalon/mmPromise",
    mmRouter:"http://static.qiakr.com/source/avalon/mmRouter",
    common:'http://static.qiakr.com/source/qk.common.min',
    utils:'qk.utils',

    moment:'http://static.qiakr.com/plugins/moment',
    maxlength:"http://static.qiakr.com/source/bootstrap_maxlength/bootstrap-maxlength.min",
    tagsinput:"http://static.qiakr.com/source/bootstrap_tagsinput/bootstrap-tagsinput.min",
    summernote:"http://static.qiakr.com/source/summernote/summernote.min",
    webuploader: "http://static.qiakr.com/js/webuploader.min",
    io: "http://static.qiakr.com/js/socket.io",
    daterangepicker: "http://static.qiakr.com/plugins/daterangepicker2",
    niceV:'http://static.qiakr.com/plugins/jquery.validator',
    validate:'http://static.qiakr.com/plugins/jquery.validate.min',
    location:'http://static.qiakr.com/js/location',

    swiper:'http://static.qiakr.com/plugins/swiper.min',
    charcount:'http://static.qiakr.com/plugins/jquery.charcount',
    qrcode:'http://static.qiakr.com/wx/qrcode',
    jqueryui:'http://static.qiakr.com/plugins/jquery-ui.min',
    kindeditor:'kindeditor/kindeditor-min2',
    

    m_decoration:'admin/m_decoration',
    m_uploader:'admin/m_uploder',
    mod_decorationMods:'admin/mod_decorationMods',
    xss:'http://static.qiakr.com/source/xss',
    sltStore:'admin/m_sltStore'
  },
  shim:{
    common:{deps:['jquery']},
    cookie:{deps:['jquery']},
    niceV:{deps:['jquery']},
    validate:{deps:['jquery']},
    maxlength:{deps:['jquery']},
    tagsinput:{deps:['jquery']},
    summernote:{deps:['jquery']},
    jqueryui:{deps:['jquery']},
    charcount:{deps:['jquery']},
    kindeditor:{deps:['webuploader']}
  },
  debug:false,
  charset: 'utf-8'
});


/**
 * GLOBAL CONFIG
 */
var GLOBAL_CONFIG={
  host:location.hostname.indexOf("qiakr") >-1 ? "http://"+location.hostname+"/" : "http://"+location.hostname+"/xmall/",
  cdn:"http://static.qiakr.com/",
  cdns:"https://o561topwo.qnssl.com/",
  cdnPrivate:"http://export.qiakr.com/",
  defaultAavatar:'http://static.qiakr.com/mall/default-photo.png',
  defaultProduct:'http://static.qiakr.com/admin/placeholer_300x300.gif',
  defaultVideo:'http://static.qiakr.com/website/video_pic_ph.jpg',
  kuaichaId:"108386",
  kuaichaSecret:"e5f4bb052cc515e85f217f7fc9d7d580",
};

var ERRMSG={
  '100':'服务器繁忙，请稍候再试!'
}



