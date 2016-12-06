/**
 * Created by rocky on 2015/6/16.
 */
var infoBox, infoBoxTimeoutId, LoadingBox;
var selected_row_ids = "";

var CtrlEnum = {
  ckeditor : {
    //imageBrowser_listUrl: '/api/v1/ckeditor/gallery',
    //filebrowserBrowseUrl: '/api/v1/ckeditor/files',
    filebrowserImageUploadUrl: '/api/file/ckeditoruploadfile',
    filebrowserUploadUrl: '/api/file/ckeditoruploadfile',
    toolBar : [
      {name : 'document', items : [ 'Source', '-', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates' ]},
      {name : 'clipboard', items : [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ]},
      {name : 'editing', items : [ 'Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt' ]},
      '/',
      {
        name : 'basicstyles',
        items : [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ]
      },
      {
        name : 'paragraph',
        items : [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
          '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ]
      },
      {name : 'links', items : [ 'Link', 'Unlink', 'Anchor' ]},
      {
        name : 'insert',
        items : [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ]
      },
      '/',
      {name : 'styles', items : [ 'Styles', 'Format', 'Font', 'FontSize' ]},
      {name : 'colors', items : [ 'TextColor', 'BGColor' ]},
      {name : 'tools', items : [ 'Maximize', 'ShowBlocks' ]}
    ],


    toolBarText : [

      {
        name : 'basicstyles',
        items : [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ]
      },
      {
        name : 'insert',
        items : [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak']
      },
      {name : 'clipboard', items : [ 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ]},
      {
        name : 'paragraph',
        items : [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
          '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
      },
      {name : 'links', items : [ 'Link', 'Unlink', 'Anchor' ]},
      {name : 'document', items : [ 'Source', 'Preview', 'Templates' ]},
      '/',
      {name : 'styles', items : [ 'Styles', 'Format', 'Font', 'FontSize' ]},
      {name : 'colors', items : [ 'TextColor', 'BGColor' ]},
      {name : 'tools', items : [ 'Maximize', 'ShowBlocks' ]}
    ],


    basicToolBar : [
      {
        name : 'basicstyles',
        items : [ 'Source', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ]
      }
    ]
  }
};

var MosEnum = {
  /*
   * 启用禁用标志
   * */
  isEnable : [
    {value : 0, name : "禁用"},
    {value : 1, name : "启用"}
  ],
  isOpen : [
    {value : 0, name : "开启"},
    {value : 1, name : "关闭"}
  ],
  isYes : [
    {value : 0, name : "否"},
    {value : 1, name : "是"}
  ],
  searchWhereDateItem : [
    {value : 11, name : "范围"},
    {value : 12, name : ">="},
    {value : 13, name : "<="},
    {value : 14, name : ">"},
    {value : 15, name : "<"},
    {value : 16, name : "等于"}
  ],
  searchWhereStrItem : [
    {value : 21, name : "包含"},
    {value : 26, name : "等于"},
    {value : 22, name : "不等于"},
    {value : 23, name : "开头"},
    {value : 24, name : "结尾"}
  ],
  searchWhereIntItem : [
    {value : 31, name : "范围"},
    {value : 36, name : "等于"},
    {value : 37, name : "不等于"},
    {value : 32, name : ">="},
    {value : 33, name : "<="},
    {value : 34, name : ">"},
    {value : 35, name : "<"}
  ],
  momentLocales:{
    cancelLabel: ' 取消 ',
    "format": "YYYY-MM-DD",
    "separator": " / ",
    "applyLabel": " 确认 ",
    "customRangeLabel": "自定义"
  },
  timeLocales:{
    format: "YYYY-MM-DD HH:mm:ss",
    cancelLabel:"取消",
    applyLabel:"确认"
  },
  momentRanges:{
    '今天': [moment(), moment()],
    '昨天': [moment().subtract(1,'days'), moment().subtract(1,'days')],
    '最后7天': [moment().subtract(7,'days'), moment()],
    '最后30天': [moment().subtract(30,'days'), moment()],
    '本月': [moment().startOf('month'), moment().endOf('month')]
  },
  momentTimepicker:{
    timePicker: false,
    autoUpdateInput: false,
    //showDropdowns: true,
    timePicker24Hour: true,
    timePickerSeconds: true
  },
  timeTimepicker:{
    timePicker: true,
    autoUpdateInput: false,
    timePickerIncrement: 1,
    timePicker24Hour: true
  },
  mbiPermission:{
    region:[{value: 1, name: "新增区域"},{value: 2, name: "编辑区域"},{value: 4, name: "删除区域"},{value: 8, name: "隐藏区域"}],
    button:[{value: 1, name: "自动获取勾选数据"}, {value: 2, name: "必须有选择数据"}, {value: 4, name: "支持多选"}, {value: 8, name: "接口地址交互"}]
  }
};

/*
 * 显示Loading
 */
function showLoading() {
  if (!LoadingBox)
    LoadingBox = $('.loading')[0];
  LoadingBox.style.visibility = 'visible';
  LoadingBox.classList.remove('aHide');
  LoadingBox.classList.add('aShow');
}

/*
 * 隐藏Loading
 */
function hideLoading() {
  if (!LoadingBox)
    LoadingBox = $('.loading')[0];
  setTimeout(function () {
    LoadingBox.classList.remove('aShow');
    LoadingBox.classList.add('aHide');
  }, 0);
}

/*
 * 显示信息框
 * */
function _showInfoBox(info_txt) {
  $('.ht-info-text').html(info_txt);
  if (!infoBox)
    infoBox = $('.ht-info-box')[0];
  infoBox.style.visibility = 'visible';
  infoBox.classList.remove('aHide');
  infoBox.classList.add('aShow');
  if (infoBoxTimeoutId) {
    clearTimeout(infoBoxTimeoutId);
    infoBoxTimeoutId = undefined;
  }
  infoBoxTimeoutId = setTimeout(function () {
    infoBox.classList.remove('aShow');
    infoBox.classList.add('aHide');
    infoBoxTimeoutId = undefined;
  }, 3000);
}

/*
 * 显示成功提示框
 * */
function showSuccess(txt) {
  if (!txt)
    return;
  var _txt = txt.trim();
  if (_txt.length == 0)
    return;

  _showInfoBox('<span class="txt-success">' + _txt + '</span>');
}

/*
 * 显示错误框
 * */
function showError(txt) {
  if (!txt)
    return;
  var _txt = txt.trim();
  if (_txt.length == 0)
    return;

  _showInfoBox('<span class="txt-error">' + _txt + '</span>');
}

/*
 * 显示信息提示框
 * */
function showInfo(txt) {
  if (!txt)
    return;
  var _txt = txt.trim();
  if (_txt.length == 0)
    return;

  _showInfoBox(_txt);
}
var isAjaxToIO = false;
function postDataTransform(data) {
  return $.param(data);
}

function formatPostData(obj){
  var ret = {};
  var pattern = new RegExp(/^((\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1]))|(\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1]) ([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d)|(([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d))$/);
  var pattern_rang = new RegExp(/^(\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1])) \/ (\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1]))$/);

  for(var k in obj){
    var item = obj[k];

    // 时间或日期格式
    if(typeof item=="string" && pattern.test(item))
      ret[k] = moment(item).utc().toISOString();

    // 日期区间格式
    else if(typeof item=="string" && pattern_rang.test(item)) {
      var itemAB = item.split(" / ");
      itemAB[0] = moment(itemAB[0]).utc().toISOString();
      itemAB[1] = moment(itemAB[1]).utc().toISOString();
      ret[k] = itemAB[0] + " / " + itemAB[1];
    }

    // 非时间字串
    else
      ret[k] = item;
  }
  return ret;
}

function httpSend(type, http, url, model, title, successCB, errorCB, isNotShowMsg) {
  var _send = angular.noop;
  var _title = title || '';
  var _isNotShowMsg = isNotShowMsg || false;
  var option = {
    withCredentials: true,
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    transformRequest: postDataTransform
  };
  switch (type) {
    case 'post':
      _send = http.post;
      break;
    case 'delete':
      _send = http.delete;
      break;
    case 'put':
      _send = http.put;
      break;
    case 'get':
    default:
      delete option.transformRequest;
      _send = http.get;
  }
  //var _successCB = successCB;
  //var successCB = function (data) {
  //  setTimeout(function () {
  //    _successCB(data);
  //  },0);
  //};
  showLoading();
  _send.call(http, url, formatPostData(model), option).success(function (ret) {
    hideLoading();
    if (ret.hasOwnProperty('code')) {
      if (ret.code == 0) {
        if (!_isNotShowMsg) {
          showInfo(ret.message);//showInfo(_title+'成功 '+ret.message);
        }
        if (successCB)
          successCB(ret.data);
      }
      else {
        if (!_isNotShowMsg) {
          showError(ret.message);//showError(_title+'失败 '+ret.message);
        }
        console.error(ret.message);
        if (errorCB)
          errorCB(ret);
        return;
      }
    }
    else {
      if (!_isNotShowMsg) {
        showInfo(ret.message);//showInfo(_title+'成功 '+ret.message);
      }
      if (successCB)
        successCB(ret);
    }

  }).error(function (err, statusCode) {

    if (statusCode == 401) {
      showError(err);
      setTimeout(function () {
        self.location = '/public#/login';
      }, 3000);
      return;
    }
    hideLoading();
    var errMsg = angular.isObject(err) ? ( err.message ? err.message : err.summary) : err;
    if (!_isNotShowMsg) {
      showError(errMsg);//showError(_title+'失败 '+errMsg);
    }
    console.error(errMsg);
    if (errorCB)
      errorCB(err);
  });
}

function ioSend(type, url, model, title, successCB, errorCB, isNotShowMsg) {
  var _iosend = angular.noop;
  var scope = this;
  var _title = title || '';
  var _isNotShowMsg = isNotShowMsg || false;
  switch (type) {
    case 'post':
      _iosend = mq.sails.post;
      break;
    case 'delete':
      _iosend = mq.sails.delete;
      break;
    case 'put':
      _iosend = mq.sails.put;
      break;
    case 'get':
    default:
      _iosend = mq.sails.get;
  }
  showLoading();
  _iosend.call(mq.sails, url, formatPostData(model), function (ret, jwr) {
    hideLoading();
    if (jwr.statusCode == 401) {
      showError(ret);
      setTimeout(function () {
        self.location = '/public#/login';
      }, 3000);
      return;
    }
    if (jwr.statusCode != 200) {
      //var errMsg = angular.isString(ret) ? ret : ret.message;//err.message ? err.message : err.summary;
      //var msg = errMsg;//title + '失败 ' + errMsg;
      //if (!_isNotShowMsg) {
      //  showError(msg);
      //}
      console.error(msg);
      if (errorCB)
        errorCB(ret, jwr);
      return;
    }
    if (ret.hasOwnProperty('code')) {
      if (ret.code == 0) {
        if (!_isNotShowMsg) {
          showInfo(ret.message);//showInfo(_title+'成功 '+ret.message);
        }
        if (successCB)
          successCB(ret.data, jwr);
      }
      else {
        if (!_isNotShowMsg) {
          showError(ret.message);//showError(_title+'失败 '+ret.message);
        }
        console.error(ret.message);
        if (errorCB)
          errorCB(ret, jwr);
        return;
      }
    }
    else {
      if (!_isNotShowMsg) {
        showInfo(ret.message);//showInfo(_title+'成功 '+ret.message);
      }
      if (successCB)
        successCB(ret, jwr);
    }
    if (scope && scope.$digest) {
      //console.log('ioSend scope.$digest();');
      scope.$digest();
    }
  });
}

/*
 * 提交Post到URL mq.sails
 * @http http对象
 * @url 发送到的地址
 * @model 要发送的数据
 * @title 收发提示的标题
 * @successCB 成功回调
 * @errorCB 错误回调
 * */
function ajaxPost(http, url, model, title, successCB, errorCB, isNotShowMsg) {
  if (isAjaxToIO && mq.isConnected) {
    ioSend.call(this, 'post', url, model, title, successCB, errorCB, isNotShowMsg);
    return;
  }
  httpSend.call(this, 'post', http, url, model, title, successCB, errorCB, isNotShowMsg);
}

/* 提交delete到URL
 * @http http对象
 * @url 发送到的地址
 * @model 要发送的数据
 * @title 收发提示的标题
 * @successCB 成功回调
 * @errorCB 错误回调
 */
function ajaxDelete(http, url, model, title, successCB, errorCB, isNotShowMsg) {
  title = '删除' + title;
  if (isAjaxToIO && mq.isConnected) {
    ioSend.call(this, 'delete', url, model, title, successCB, errorCB, false);
    return;
  }
  httpSend.call(this, 'delete', http, url, model, title, successCB, errorCB, false);
}

/* 提交get到URL
 * @http http对象
 * @url 发送到的地址
 * @model 要发送的数据
 * @title 收发提示的标题
 * @successCB 成功回调
 * @errorCB 错误回调
 */
function ajaxGet(http, url, model, title, successCB, errorCB, isNotShowMsg) {
  if (isAjaxToIO && mq.isConnected) {
    ioSend.call(this, 'get', url, model, title, successCB, errorCB, isNotShowMsg);
    return;
  }
  httpSend.call(this, 'get', http, url, model, title, successCB, errorCB, isNotShowMsg);
}

/*提交put到URL
 * @http http对象
 * @url 发送到的地址
 * @model 要发送的数据
 * @title 收发提示的标题
 * @successCB 成功回调
 * @errorCB 错误回调
 * */
function ajaxPut(http, url, model, title, successCB, errorCB, isNotShowMsg) {
  if (isAjaxToIO && mq.isConnected) {
    ioSend.call(this, 'put', url, model, title, successCB, errorCB, false);
    return;
  }
  httpSend.call(this, 'put', http, url, model, title, successCB, errorCB, false);
}

/*
 * 删除前的确认
 * */
function mosDelConfirm(title, CB) {
  var dialog = BootstrapDialog.confirm({
    //size: 'modal-sm',
    type: BootstrapDialog.TYPE_DANGER,
    title: '警告',
    message: '确认删除' + title + '?',
    closable: true,
    draggable: true,
    btnCancelLabel: '取消',
    btnOKLabel: '删除',
    btnOKClass: 'btn-danger',
    callback: function (result) {
      if (result) {
        CB && CB();
      }
    }
  });
  dialog.setSize(BootstrapDialog.SIZE_SMALL);
}
///HTML打印图片下载
function printhtml2img(img, html) {
  var pwin = window.open("", "winispprint", '');
  var writeStr = '<!DOCTYPE html><html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />'
    + '<link href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" type="text/css" rel="stylesheet" />'
    + '<link href="//cdn.bootcss.com/semantic-ui/2.1.8/semantic.min.css" type="text/css" rel="stylesheet" />'
    + '<link href="/styles/bootstrap-table.min.css" type="text/css" rel="stylesheet" />'
    + '<link href="/styles/app.css" type="text/css" rel="stylesheet" />'
    + '<link href="/styles/z-importer.css" type="text/css" rel="stylesheet" />'

    + '<script src="//cdn.bootcss.com/jquery/2.1.4/jquery.js" type="text/javascript" ><' + '/script>'
    + '<script src="/js/html2canvas.js" type="text/javascript" ><' + '/script>'
    + '<script type="text/javascript" >' +
    '$(function() {' +
    'html2canvas($("#editformDiv"), { ' +
    'onrendered: function(canvas) { ' +
    'var a = document.createElement("a"); ' +
    'a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");' +
    'a.download = "' + img + '";' +
    'a.click(); } }); });<' + '/script>'
    + '</head><body><div class="ng-scope">'
    + html
    + '</div></body></html>';
  pwin.document.write(writeStr);
  pwin.focus();
  writeStr = null;
  pwin.document.close();
}
/*
 * 替换字符串
 * */
String.prototype.replaceAll = function (pattern, replaceValue) {
  replaceValue = replaceValue || '';
  if (this.replace) {
    return this.replace(new RegExp(pattern, "gm"), replaceValue);
  }
  else
    return "";
};

/*
 * 删除前后空格
 * */
String.prototype.Trim = function () {
  if (this.match) {
    var m = this.match(/^\s*(\S+(\s+\S+)*)\s*$/);
    return (m == null) ? "" : m[1];
  }
  else
    return "";
};

//加法
Number.prototype.add = function (arg) {
  var r1, r2, m;
  try {
    r1 = this.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return (this * m + arg * m) / m
}

//减法
Number.prototype.sub = function (arg) {
  return this.add(-arg);
}

//乘法
Number.prototype.mul = function (arg) {
  var m = 0, s1 = this.toString(), s2 = arg.toString();
  try {
    m += s1.split(".")[1].length
  } catch (e) {
  }
  try {
    m += s2.split(".")[1].length
  } catch (e) {
  }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

//除法
Number.prototype.div = function (arg) {
  var t1 = 0, t2 = 0, r1, r2;
  try {
    t1 = this.toString().split(".")[1].length
  } catch (e) {
  }
  try {
    t2 = arg.toString().split(".")[1].length
  } catch (e) {
  }
  with (Math) {
    r1 = Number(this.toString().replace(".", ""))
    r2 = Number(arg.toString().replace(".", ""))
    return (r1 / r2) * pow(10, t2 - t1);
  }
}
/*
 * 格式化数字，保留fix位小数
 * */
Number.prototype.format = function (fix) {
  re = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
  return this.toFixed(fix).replace(re, "$1,");
};

/*
 * 格式化金额
 * @return string
 * */
Number.prototype.ToMoney = function (fixed) {
  if (isNaN(fixed))
    fixed = 2;
  var ret = this.format(fixed) + "";
  var indexsub = ret.indexOf("-");
  return (indexsub < 0 ? "￥" : "-￥") + ret.replace("-", "");
};

/*
 * 格式化百分比
 * @return string
 * */
Number.prototype.ToPercent = function (fixed) {
  if (isNaN(fixed))
    fixed = 3;
  return this.format(fixed) + '%';
};

/*
 * 日期格式化
 * */
Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(),    //day
    "h+": this.getHours(),   //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
    "S": this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) if (new RegExp("(" + k + ")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));

  return format;
};
///获取查询日期默认日期段
function getQueryDate(type) {
  switch (type) {
    case 1:
      return moment().format('YYYY-MM-DD') + ' / ' + moment().format('YYYY-MM-DD');//今天
      break;
    case 2:
      return moment().subtract(1, 'days').format('YYYY-MM-DD') + ' / ' + moment().subtract(1, 'days').format('YYYY-MM-DD');//昨天
      break;
    case 3:
      return moment().subtract(7, 'days').format('YYYY-MM-DD') + ' / ' + moment().format('YYYY-MM-DD');//最后7天
      break;
    case 4:
      return moment().subtract(30, 'days').format('YYYY-MM-DD') + ' / ' + moment().format('YYYY-MM-DD');//最后30天
      break;
    case 5:
      return moment().startOf('month').format('YYYY-MM-DD') + ' / ' + moment().endOf('month').format('YYYY-MM-DD');//本月
      break;
    default:
      return moment().subtract(7, 'days').format('YYYY-MM-DD') + ' / ' + moment().format('YYYY-MM-DD');//最后7天
      break;
  }
}
//获取前一个月的时间
function getPreMonth() {
  var da = new Date();
  var va = da.format("yyyy-MM-dd");
  var arr = va.split('-');
  var year = arr[0]; //获取当前日期的年份
  var month = arr[1]; //获取当前日期的月份
  var day = arr[2]; //获取当前日期的日
  var days = new Date(year, month, 0);
  days = days.getDate(); //获取当前日期中月的天数
  var year2 = year;
  var month2 = parseInt(month) - 1;
  if (month2 == 0) {
    year2 = parseInt(year2) - 1;
    month2 = 12;
  }
  var day2 = day;
  var days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = '0' + month2;
  }
  var t2 = year2 + '-' + month2 + '-' + day2;
  return t2;
}

function htmlEncode(str) {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&gt;");
  s = s.replace(/ </g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/    /g, "&nbsp;");
  s = s.replace(/\'/g, "'");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, " <br>");
  return s;
}
function htmlDecode(str) {
  var s = "";
  if (str.length == 0) return "";
  //s = str.replace(/&gt;/g, "&");
  s = str.replace(/&lt;/g, " <");
  s = s.replace(/&gt;/g, ">");
  s = s.replace(/&nbsp;/g, "    ");
  s = s.replace(/'/g, "\'");
  s = s.replace(/&#39;/g, "\'");
  s = s.replace(/&quot;/g, "\"");
  s = s.replace(/ <br>/g, "\n");
  return s;
}

// return -$1,000
function int2Money(value) {
  if (isNaN(value))
    value = 0;
  if (value == '-')
    return value;
  var fix = value >= 0 ? "￥" : "-￥";

  return fix + "" + Number(value).format(0).replace("-", "");
}

// return -1000
function money2Int(txt) {
  if (isNULL(txt))
    return '';
  if (txt == '-')
    return txt;

  return parseInt(txt.replace("￥", "").replaceAll(",", "").replace(" ", ""));
}

// return -$1,000.31
function Number2Money(value, fixed) {

  if (isNaN(value))
    value = 0;
  if (value == '-')
    return value;
  var fix = value >= 0 ? "￥" : "-￥";

  if (isNULL(fixed) || isNaN(fixed))
    fixed = 2;

  return fix + "" + Number(value).format(fixed).replace("-", "");
}

// return -1000.31
function Money2Number(txt) {
  if (isNULL(txt))
    return '';
  if (txt == '-')
    return txt;

  return parseFloat(txt.replace("￥", "").replaceAll(",", "").replace(" ", ""));
}

// return 3.456%
function Number2Percent(value, fixed) {
  if (isNaN(value))
    value = 0;
  if (value == '-')
    return value;
  var fix = "%";

  if (isNULL(fixed) || isNaN(fixed))
    fixed = 3;

  return Number(value).format(fixed) + fix;
}

// return 3.456
function Percent2Number(txt) {
  if (isNULL(txt))
    return '';
  if (txt == '-')
    return txt;

  return parseFloat(txt.replace("%", "").replaceAll(",", "").replace(" ", ""));
}


/*
 * 判断是否空对象
 * */
function isNULL(value) {
  return (value == undefined || value == null || value == '');
}

/*
 * obj是否未Object类型
 * */
function isObject(obj) {
  return typeof obj == "object"
}


/*
 * 表单错误提示
 * */
function showFormErrorList() {
  setTimeout(function () {
    var errList = $('.has-error label');//.text();//.replaceAll('\r', ' ');
    var errTitle = '';
    for (var i = 0; i < errList.length; i++) {
      var tmp = errList[i];
      errTitle += $(tmp).text().replace('：', '').replace(':', '') + ',&nbsp;';
    }
    showInfo('请填写项目: ' + errTitle);
  }, 100);
}

function isCheckSelected(id) {
  return $("#" + id)[0].checked;
}

//复制对象
function deepCopy(source) {
  var result = {};
  for (var key in source) {
    result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
  }
  return result;
}

//根据枚举值，显示枚举描述
function showEnumByValue(type, value) {
  var list = MosEnum[type];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    if (value === item.value)
      return item.name;
  }
}

//表格项显示文字
function getValue(thisModel, row) {
  if (this.field.indexOf('.') > 0) {
    var fields = this.field.split('.');
    var tmpValue = row;
    for (var i = 0; i < fields.length; i++) {
      var tmpField = fields[i];
      tmpValue = tmpValue[tmpField];
    }
    return tmpValue;
  } else
    return row[this.field];
}
//报表排序字段处理
function GetTableOrderSort(p, modelsort) {
  if (!_.isUndefined(p.sort) && !_.isEmpty(p.sort)) {
    var tmporder = p.sort + ',' + (p.order ? p.order : 'desc');
    if (!_.isUndefined(modelsort) && _.isString(modelsort) && modelsort.indexOf(',') != -1) {
      var paramorder = modelsort.split(',');
      var j = 0;
      for (var i = 0; i < paramorder.length; i++) {
        if (!_.isEmpty(paramorder[i]) && paramorder[i] != p.sort) {
          tmporder += ',' + paramorder[i] + ',' + paramorder[i + 1];
          j++;
        }
        if (j > 1)
          break;
        i++;
      }
    }
    return tmporder;
  } else {
    return modelsort;
  }
}
//报表排序字段处理
function GetNgTableOrderSort(p, modelsort) {
  var psort = "", porder = "desc";
  if (_.isObject(p)) {
    if (_.isArray(p)) {
      if (p.length > 0 && p[0] != '' && p[0].length > 1) {
        psort = p[0].substring(1);
        porder = p[0].substring(0, 1) == '-' ? 'desc' : 'asc';
      }
    } else {
      _.forEach(p, function (value, key) {
        psort = key;
        porder = value;
      });
    }
  }
  if (psort != "") {
    var tmporder = psort + ',' + porder;
    if (!_.isUndefined(modelsort) && _.isString(modelsort) && modelsort.indexOf(',') != -1) {
      var paramorder = modelsort.split(',');
      var j = 0;
      for (var i = 0; i < paramorder.length; i++) {
        if (!_.isEmpty(paramorder[i]) && paramorder[i] != psort) {
          tmporder += ',' + paramorder[i] + ',' + paramorder[i + 1];
          j++;
        }
        if (j > 1)
          break;
        i++;
      }
    }
    return tmporder;
  } else {
    return modelsort;
  }
}
//编辑页面表单初始数据处理
function GetDefaultEditData() {
  var schema = GetAngularFun('#editCtrl', 'editschema');
  var data = {};
  if (!_.isUndefined(schema)) {
    angular.forEach(schema.properties, function (value, key) {
      if (key == "fileImgUrl") {
        data[key] = [];
      } else if (key.indexOf("ImgUrl") == key.length - 6) {
      } else if (!angular.isUndefined(value.default)) {
        data[key] = value.default;
      }
    });
  }
  return data;
}
/*根据排序确定升序还是降序排序，解决排序时上下移的处理*/
function GetSortnoSequType(order, sort) {
  var rettype = 0;//升序排列
  if (!_.isUndefined(order) && order.indexOf(',') != -1) {
    var tmpsort = order.split(',');
    if (tmpsort.length > 1) {
      if (tmpsort[1].toLowerCase() == 'desc')
        rettype = 1;
      for (var j = 0; j < tmpsort.length; j++) {
        if (tmpsort[j] == 'sortno') {
          if (tmpsort[j + 1].toLowerCase() == 'desc')
            rettype = 1;
          else
            rettype = 0;
          break;
        }
        j++;
      }
    }
  }
  if (rettype == 1) {
    if (sort == 1)
      sort = 0;
    else
      sort = 1;
  }
  return sort;
}

/*根据排序确定升序还是降序排序，解决排序时上下移的处理*/
function GetNgSortnoSequType(scope, sort) {
  var rettype = 0;//升序排列
  if (!_.isUndefined(scope.ngtable_params) && !_.isUndefined(scope.ngtable_params.orderBy)) {
    var p = scope.ngtable_params.orderBy()
    if (_.isArray(p) && p.length > 0 && p[0] != '') {
      if (p[0].substring(0, 1) == '-')
        rettype = 1;
      else
        rettype = 0;
    }
  }
  if (rettype == 1) {
    if (sort == 1)
      sort = 0;
    else
      sort = 1;
  }
  return sort;
}
/*
 * type:第1位表示是否自动获取选择数据ID，第2位表示是否必选，第3位表示是否多选，第4位表示URL交互(1,2,4,8)
 * */
function DataOptionEvent(opt) {
  switch (opt.type) {
    case 64:
      opt.$scope.model.delFlag = 1;
      opt.$scope.search_postdata["delFlag"] = 1;
      opt.$scope.search_postdata["offset"] = 0;
      RefreshBootstrapTableData(opt);
      break;
    case 128:
      opt.$scope.model.delFlag = 0;
      delete opt.$scope.search_postdata["delFlag"];
      opt.$scope.search_postdata["offset"] = 0;
      RefreshBootstrapTableData(opt);
      break;
    default:
      if (_.isObject(opt.data) && opt.data.id) {
        opt.id = opt.data.id;
      }
      if (angular.isUndefined(opt.id) || opt.id == null)
        opt.id = '';
      else
        opt.id = opt.id.toString();
      if ((opt.type && 1) == 1 && opt.id == '') {
        if (!_.isUndefined(opt.$scope) && !_.isUndefined(opt.$scope.ngtable_params)) {
          var selectnum = 0;
          angular.forEach(opt.$scope.ngtable_params.data, function (value, key) {
            if (value.selected) {
              if (selectnum > 0)
                opt.id += ",";
              opt.id += value.id.toString();
              selectnum++;
            }
          });
          if (selectnum > 1 && (opt.type >> 2 & 1) == 0 && (opt.mpType != 4)) {
            return showInfo('只能单选操作');
          }
        } else if ($('#tbl_datapage_list').length == 1) {
          if ($('#tbl_datapage_list').bootstrapTable('getSelections').length > 1 && (opt.type >> 2 & 1) == 0 && (opt.mpType != 4)) {
            return showInfo('只能单选操作');
          }
          var keepGoing = true;
          angular.forEach($('#tbl_datapage_list').bootstrapTable('getSelections'), function (value, key) {
            if (keepGoing) {
              opt.id += value.id.toString();
              if ((opt.type >> 2 & 1) == 1) {
                opt.id += ',';
              } else {
                keepGoing = false;
              }
            }
          });
        } else if (typeof selected_row_ids != "undefined") {
          opt.id = selected_row_ids;
        }
      }
      if ((opt.type >> 1 & 1) == 1 && opt.id == '') {
        showError("必须要选择一条的数据记录.");
        return false;
      }
      if (opt.id != '' && (opt.type >> 2 & 1) == 0 && opt.id.indexOf(',') != -1)
        opt.id = opt.id.substring(0, opt.id.length - 1);
      if ((opt.type >> 3 & 1) == 1) {
        if (opt.noconfirm) {
          if (opt.id == '' || opt.url.indexOf('/addData') != -1)
            delete opt['data'].id;

          ajaxPost.call(opt.$scope, opt.$http, opt.url, opt.data, opt.title, function (data) {
            if (opt.cb) {
              opt.cb(opt, data);
            } else {
              if ($('#tbl_datapage_list:visible').length == 1 || (!_.isUndefined(opt.$scope) && !_.isUndefined(opt.$scope.ngtable_params))) {
                $('#myModal').modal('hide');
                RefreshBootstrapTableData(opt);
              }
            }
          }, opt.errCb);
        } else {
          BootstrapDialog.confirm(_.isString(opt.title) ? '确认' + opt.title + (opt.id == '' ? '' : '指定') + '数据?' : '确认？', function (result) {
            if (result) {
              if (_.isObject(opt.data)) {
                if (opt.id != '' && opt.url.indexOf('/addData') == -1)
                  opt['data'].id = opt.id;
              } else {
                opt['data'] = {id: opt.id};
                if (opt.id == '' || opt.url.indexOf('/addData') != -1)
                  delete opt['data'].id;
              }
              ajaxPost.call(opt.$scope, opt.$http, opt.url, opt.data, opt.title, function (data) {
                if (opt.cb) {
                  opt.cb(opt, data);
                } else {
                  if ($('#myModal:visible').length > 0)
                    $('#myModal').modal('hide');
                  if ($('#tbl_datapage_list:visible').length == 1 || (!_.isUndefined(opt.$scope) && !_.isUndefined(opt.$scope.ngtable_params))) {
                    RefreshBootstrapTableData(opt);
                  } else if (!_.isUndefined(opt.$scope.$parent) && !_.isUndefined(opt.$scope.$parent.LoadTreeGridData)) {
                    return opt.$scope.$parent.LoadTreeGridData();
                  }
                }
              }, opt.errCb);
            } else {
              setTimeout(function () {
                $('body').addClass('modal-open');
              }, 200);
            }
          });
        }
      } else {
        if (!angular.isUndefined(opt.cb))
          eval(opt.cb)(opt);
        else
          EditWindowOpen(opt);
      }
      break;
  }
}
//
function getngtableselected($scope, keyname, ismul) {
  var selectnum = 0;
  keyname = keyname || 'id';
  var sid = '';
  angular.forEach($scope.ngtable_params.data, function (value, key) {
    if (value.selected && value[keyname]) {
      if (selectnum > 0)
        sid += ",";
      sid += _.isObject(value[keyname]) ? value[keyname].id.toString() : value[keyname].toString();
      selectnum++;
    }
  });
  if (!ismul && sid.indexOf(',') != -1) {
    sid = sid.substring(0, sid.indexOf(','));
  }
  return sid;
}
/*
 * 在ng-include里打开页面数据处理
 * */
function RefreshBootstrapTableData(opt) {
  var tblid = '#tbl_datapage_list';
  var page = 1;
  if (!_.isUndefined(opt)) {
    if (!_.isUndefined(opt.$scope) && !_.isUndefined(opt.$scope.LoadTreeGridData)) {
      return opt.$scope.LoadTreeGridData();
    }
    if (!_.isUndefined(opt.$scope) && !_.isUndefined(opt.$scope.ngtable_params) && !_.isUndefined(opt.$scope.ngtable_params.reload)) {
      console.log('opt.$scope.ngtable_params.reload');
      return opt.$scope.ngtable_params.reload();
    }
    if (!_.isUndefined(opt.$scope) && !_.isUndefined(opt.$scope.$parent.ngtable_params) && !_.isUndefined(opt.$scope.$parent.ngtable_params.reload)) {
      console.log('opt.$scope.$parent.ngtable_params.reload');
      return opt.$scope.$parent.ngtable_params.reload();
    }
    if (!_.isUndefined(opt.tblname))
      tblid = opt.tblname;
    if (!_.isUndefined(opt.page) && opt.page > 0)
      page = opt.page;
  }
  var tblopt = $(tblid).bootstrapTable('getOptions');
  if (!_.isUndefined(tblopt) && !_.isUndefined(tblopt.pageNumber)) {
    if (tblopt.pageNumber == page)
      $(tblid).bootstrapTable('refresh');
    else
      $(tblid).bootstrapTable('selectPage', page);
  } else {
    $(tblid).bootstrapTable('selectPage', page);
  }
}
/*
 * 在ng-include里打开页面数据处理
 * */
function EditWindowOpen(opt) {
  opt.url += (opt.id == "" ? "" : (opt.url.indexOf('?') == -1 ? '?' : '&') + 'id=' + opt.id);
  opt.url += (opt.userId ? (opt.url.indexOf('?') == -1 ? '?' : '&') + 'userId=' + opt.userId : "" );
  opt.url += (opt.abiId ? (opt.url.indexOf('?') == -1 ? '?' : '&') + 'abiId=' + opt.abiId : "" );
  if (!_.isUndefined(opt.$scope.$parent.setwindowincludeurl))
    opt.$scope.$parent.setwindowincludeurl(UrlUpdateRadom(opt.url));
  else
    opt.$scope.windowincludeurl = UrlUpdateRadom(opt.url);
  if (opt.backdrop == 'staticadd') {
    $("#myModal").attr("aria-hidden", "false");
    $("#myModal").attr("data-backdrop", "static");
    $("#myModal").modal({keyboard: false, backdrop: 'static'});
    /*} else if (opt.backdrop == 'static') {
     $("[data-dismiss='modal']").click();
     $("#myModal").modal("hide");
     setTimeout(function(){
     opt.$scope.windowincludeurl = UrlUpdateRadom(opt.url + (opt.id == "" ? "" : (opt.url.indexOf('?') == -1 ? '?' : '&') + 'id=' + opt.id));
     $("#myModal").modal({keyboard:false, show: true, backdrop:'static'});
     }, 800);*/
  } else {
    $("#myModal").modal("show");
    setTimeout(function () {
      $(".modal-content").attr("height", (document.body.clientHeight - 50) + "px");
    }, 1000);
  }
  $('#myModal').data('editdataoption', opt);
  $('#myModalLabel').html(opt.title);
}

///防页面缓存URL加随机数据处理
function UrlUpdateRadom(obj) {
  if (obj.indexOf("?") == -1) {
    obj += "?t=" + (new Date().getTime());
  }
  else {
    if (obj.indexOf("?t=") == -1 && obj.indexOf("&t=") == -1)
      obj += "&t=" + (new Date().getTime());
    else {
      if (obj.indexOf("?t=") != -1) {
        var objTem = obj.substring(obj.indexOf("?t=") + 3);
        if (objTem.indexOf("&") == -1)
          obj = obj.substring(0, obj.indexOf("?t=") + 3) + (new Date().getTime());
        else
          obj = obj.substring(0, obj.indexOf("?t=") + 3) + (new Date().getTime()) + objTem.substring(objTem.indexOf("&") + 1);
      } else if (obj.indexOf("&t=") != -1) {
        var objTem = obj.substring(obj.indexOf("&t=") + 3);
        if (objTem.indexOf("&") == -1)
          obj = obj.substring(0, obj.indexOf("&t=") + 3) + (new Date().getTime());
        else
          obj = obj.substring(0, obj.indexOf("&t=") + 3) + (new Date().getTime()) + objTem.substring(objTem.indexOf("&"));
      }
    }
  }
  return obj;
}
//取Angular的方法名或对象名，注意，取值类形是无法赋值的
function GetAngularFun(elementId, fun) {
  try {
    return angular.element($(elementId)).scope()[fun];
  }
  catch (ex) {
    var title = document.title;
    console.error('GetAngularFun Error:: PageTitle=' + title + ', elementId=' + elementId + ', fun=' + fun);
  }
}

//解析ＵＲＬ里的参数成数组,如index.aspx?item=222&opt=sdfaqwe通过此函数得到{item:'222';opt:'sdfaqwe'};
function GetUrlParsFun(url) {
  var strAry = {};
  if (_.isUndefined(url) || _.isNull(url) || !_.isString(url) || url == '')
    url = location.href;
  if (url.indexOf('?') != -1) {
    url = url.substring(url.indexOf('?') + 1);
  }
  if (url.indexOf('&') == 0) {
    url = url.substring(1);
  }
  if (url.indexOf('=') != -1) {
    var temstr = url.split('&');
    for (var i = 0; i < temstr.length; i++) {
      if (temstr[i].indexOf('=') != -1) {
        strAry[temstr[i].substring(0, temstr[i].indexOf('='))] = temstr[i].substring(temstr[i].indexOf('=') + 1);
      }
    }
  }
  return strAry;
}

///获取基础数据下拉选项列表
function GetDictSelectDataList(type, code, cb) {
  var url = '/api/sysdictionaryinfo/getList';
  var data = {};
  switch (type) {
    case 601:
      url = '/api/goodsclassinfo/getList';
      break;
    default :
      data = {type: code};
      break;
  }
  $.post(url, data, function (data) {
    if (_.isArray(data)) {
      cb(data);
    } else {
      cb([]);
    }
  });
}
///获取行政区域数据下拉选项列表
function GetAreaSelectDataList(opt, cb) {
  $.post('/api/' + (angular.isUndefined(opt.model) ? 'sysareainfo' : opt.model) + '/getList', opt, function (data) {
    if (_.isArray(data)) {
      cb(data);
    } else {
      cb([]);
    }
  });
}

///下拉列表中选项对象取ID值转换,数据提交时使用
function ArrayObjectToIntData(obj) {
  if (!_.isUndefined(obj) && _.isObject(obj)) {
    _.forEach(obj, function (value, key) {
      if (_.isUndefined(value) || _.isNull(value)) {
        delete obj[key];
      } else if (_.isArray(value)) {
        if (value.length > 0 && _.isObject(value[0])) {
          if (_.endsWith(key, '_model')) {
            delete obj[key];
            if (!_.isUndefined(value[0].value) && !_.isUndefined(value[0].name)) {
              obj[key.substring(0, key.lastIndexOf('_model'))] = _.map(value, function (o) {
                return o.value.toString();
              }).join(',');
            } else {
              obj[key.substring(0, key.lastIndexOf('_model'))] = _.map(value, function (o) {
                return o.id.toString();
              }).join(',');
            }
          } else if (!_.endsWith(key, '_list') && (!_.isUndefined(value[0].id) || (!_.isUndefined(value[0].value) && !_.isUndefined(value[0].name)))) {
            if (!_.isUndefined(value[0].value) && !_.isUndefined(value[0].name)) {
              obj[key] = _.map(value, function (o) {
                return o.value.toString();
              }).join(',');
            } else {
              obj[key] = _.map(value, function (o) {
                return o.id.toString();
              }).join(',');
            }
          }
        } else if (value.length > 0 && _.isString(value[0]) && value[0] != '') {
          obj[key] = _.map(value, function (o) {
            return o;
          }).join(',');
        } else if (value.length > 0 && _.isNumber(value[0]) && value[0].toString() != '') {
          obj[key] = _.map(value, function (o) {
            return o.toString();
          }).join(',');
        } else {
          delete obj[key];
        }
      } else if (_.isObject(value) && !_.endsWith(key, '_list') && (!_.isUndefined(value.id) || (!_.isUndefined(value.value) && !_.isUndefined(value.name)))) {
        if (_.endsWith(key, '_model')) {
          delete obj[key];
          obj[key.substring(0, key.lastIndexOf('_model'))] = (!_.isUndefined(value.value) && !_.isUndefined(value.name)) ? value.value : value.id;
        } else {
          obj[key] = (!_.isUndefined(value.value) && !_.isUndefined(value.name)) ? value.value : value.id;
        }
      }
    });
  }
}

//清除获取实体数据中属性为NULL对象属性
function ClearNullJsonData(obj) {
  if (angular.isObject(obj)) {
    angular.forEach(obj, function (value, key) {
      if (angular.isUndefined(value) || value == null)
        delete obj[key];
      else if (key == 'fileImgUrl') {
        if (!angular.isString(obj[key]) || obj[key] == '')
          obj[key] = [];
        else
          obj[key] = value.split(',');
      }
    });
    return obj;
  }
  return {};
}

//上传多个文件组件的删除方法
function uploadMultipleDelete(files, file) {
  _.remove(files, function (img) {
    return file === img;
  });
}

//上传多个文件的初始化方法
function uploadMultipleInit(datas, thisModel) {
  if (!datas)
    datas = [];
  if (!thisModel)
    thisModel = [];
  var len = thisModel.length;
  if (len > 0) {
    angular.forEach(thisModel, function (s) {
      datas.unshift({url: s});
    });
  }
}

//上传多个文件
function uploadMultiple(Upload, datas, form, cb, scope, thisModel, maxlen) {
  if (!datas)
    return;

  var len = thisModel.length;
  var len2 = datas.length;
  maxlen = maxlen ? maxlen : 10;
  if (len + len2 > maxlen) {
    showError('上传图片超过了' + maxlen + '张，请检查！');
    return;
  }

  angular.forEach(datas, function (data, index) {
    if (data) {
      uploadUsing(Upload, data, form, function (ret) {
        thisModel[index + len] = ret.url || '/img/loading.gif';
        cb(ret);
      }, scope);
    }
  });

  if (len > 0) {
    angular.forEach(thisModel, function (s) {
      datas.unshift({url: s});
    });
  }
}

//上传单个文件
function uploadUsing(Upload, data, form, cb, scope) {

  var url = '/api/file/uploadFile';
  console.log('click upload...');

  if (!data)
    return;

  var file = {image: data};
  var ret = {};
  var _cb = function (r) {
    scope.$apply(function () {
      angular.extend(data, ret);
      cb(r);
    });
  };

  ret[form.errorMsgKey] = null;
  ret[form.resultKey] = null;
  ret[form.progressKey] = 0;

  Upload.upload({
    url: url,
    //resumeSizeUrl: url+'?file=' + file[form.imageKey].name, // uploaded file size so far on the server.
    //headers: {
    //  'optional-header': 'header-value'
    //},
    //resumeChunkSize: 100000,
    data: file
  }).then(function (response) {
    setTimeout(function () {
      ret[form.resultKey] = response.data;
      _cb(ret);
    }, 0);
  }, function (response) {
    setTimeout(function () {
      if (response.status > 0)
        ret[form.errorMsgKey] = response.status + ': ' + response.data;
      _cb(ret);
    }, 0);
  }, function (evt) {
    setTimeout(function () {
      ret[form.progressKey] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      _cb(ret);
    }, 0);
  });
}
//检查手机号格式
function CheckPhoneFormat(val) {
  var patter = /((^(13\d|14[579]|15[^4,\D]|17[13678]|18\d)\d{8}|170[059]\d{7})$)/;
  if (!patter.test(val)) {
    return false;
  }
  return true
}
///檢查指定字符是否是大于或等于0的数字，当max不为空时为限定最大数，返回布尔值
function CheckNumber(objStr, max) {
  if (/^\d{1,5}$/.test(objStr)) {
    if (objStr.length > 1 && objStr.substring(0, 1) == '0') {
      return false;
    }
    if (typeof max != 'undefined' && parseInt(objStr) > max)
      return false;
    return true;
  } else {
    return false;
  }
}
///檢查指定字符是否是大于0的数字，并限定数字的最小和最大范围，返回布尔值
function CheckNumberSize(objStr, min, max) {
  if (/^[1-9]\d{0,5}$/.test(objStr)) {
    var blRet = false;
    if (typeof min == 'undefined' && typeof max == 'undefined') {
      blRet = true;
    } else {
      if (typeof min != 'undefined') {
        if (parseInt(objStr) >= min)
          blRet = true;
        else
          return false;
      }
      if (typeof max != 'undefined') {
        if (parseInt(objStr) <= max)
          blRet = true;
        else
          return false;
      }
    }
    return blRet;
  } else {
    return false;
  }
}

//身份证格式校验
function IdentityCodeValid(code) {
  var pass = true;

  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    pass = false;
  } else if (_.indexOf(["11", "12", "13", "14", "15", "21", "22", "23", "31", "32", "33", "34", "35", "36", "37", "41", "42", "43", "44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63", "64", "65", "71", "81", "82", "91"], code.substr(0, 2)) == -1) {
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != code[17]) {
        pass = false;
      }
    }
  }
  return pass;
}
//邮件格式校验
function EmailValid(str) {
  if (str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
  } else {
    return false;
  }
}
/*指定范围随机整数*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function tableSelectAll(event) {

  console.log('call selectAll====' + this.checkedAll);

  if (event.target.checked == undefined)
    return;

  var _checkedAll = this.checkedAll;
  angular.forEach(this.tableParams.data, function (item) {
    item.selected = _checkedAll;
  });
}

function tableSelectOne(event) {

  console.log('call selectOne');

  if (event.target.checked == undefined)
    return;

  var _checkedAll = true;

  angular.forEach(this.tableParams.data, function (item) {
    if (!item.selected)
      _checkedAll = false;
  });

  this.checkedAll = _checkedAll;
}


//生成图片URL地址
function getImageHtmlUrl(v, w, h) {
  var url = '';
  if (typeof v != 'undefined' && v != '') {
    var opt = {url: v};
    if (w)
      opt['w'] = w;
    if (h)
      opt['h'] = h;
    url = getImageUrl(opt);
  }
  return url;
}

/*
 * 输出aliyun图片URL
 * @param relative_url 数据库中的相对路径
 * @param size 尺寸(宽度，高度自适应)
 * */
function formatImgUrl(relative_url, size) {
  if (!relative_url || relative_url.length == 0)
    relative_url = gbiImgUrl;
  if (relative_url) {
    var _size = size || 32;
    var _imgBaseurl = API_imgbaseurl || '';
    _imgBaseurl += relative_url;// + '@' + _size + '_1l';

    // if (_imgBaseurl.indexOf('oss-cn-shenzhen.aliyuncs.com') > -1)
    //   return _imgBaseurl + '@' + _size + 'w_1l';
    return _imgBaseurl;
  }
  return '';
}

/**
 * 输出aliyun图片URL
 * @param dbImgUrl 数据库中图片的路径
 */
function formatDbImgUrl(dbImgUrl, size) {

  if (!dbImgUrl || dbImgUrl.length == 0)
    dbImgUrl = "";
  if (dbImgUrl.indexOf('http://') >= 0)
    return dbImgUrl;

  var _imgBaseurl = API_imgbaseurl || '';
  if (!dbImgUrl || dbImgUrl.length == 0 || dbImgUrl.Trim() == '')
    return formatImgUrl(dbImgUrl, size);

  var images = dbImgUrl.split(",");

  if (images.length > 0)
    dbImgUrl = images[0];

  return formatImgUrl(dbImgUrl, size);
}
//生成附件文件地址列表
function getFileUrl(opt) {
  var url = '';// 'http://img'+getRandomInt(1,5)+ '.zgj.com/'+
  if (angular.isObject(opt) && !angular.isUndefined(opt.url) && opt.url != null) {
    var tmpurl = null;
    if (angular.isArray(opt.url) && opt.url.length > 0 && angular.isString(opt.url[0]) && opt.url[0] != "")
      tmpurl = opt.url;
    if (angular.isString(opt.url) && opt.url != "") {
      tmpurl = opt.url.split(',');
    }
    if (tmpurl != null) {
      if (tmpurl.length == 1)
        url = '<a href="' + opt.url + '" target="_blank">附件</a>';
      else {
        var tmpI = 1;
        angular.forEach(tmpurl, function (value, key) {
          if (tmpI != 1)
            url += ',';
          url += '<a href="' + value + '"  target="_blank">附件' + tmpI + '</a>';
          tmpI++;
        });
      }
    }
  }
  return url;
}

function getImageUrl(opt) {
  var url = '';// 'http://img'+getRandomInt(1,5)+ '.zgj.com/'+
  if (typeof opt != 'undefined' && typeof opt.url != 'undefined' && opt.url != null && opt.url != '') {
    if (angular.isString(opt.url) && opt.url != "")
      return '<a href="' + opt.url + '" class="thumbnail" rel="fancyboxable_group"><img src="' + opt.url + '" width="65" height="65"></a>';
    else if (angular.isArray(opt.url) && opt.url.length > 0 && angular.isString(opt.url[0]) && opt.url[0] != "") {
      angular.forEach(opt.url, function (value, key) {
        url += '<a href="' + value + '" class="thumbnail" rel="fancyboxable_group"><img src="' + value + '" width="65" height="65"></a>';
      });
      return url;
    }
    return '<a href="' + opt.url + '" class="thumbnail" rel="fancyboxable_group"><img src="' + opt.url + '"></a>';
    // var tmpdemo = 'http://img' + getRandomInt(1, 5).toString() + '.zgj.com/' + opt.url;
    // url = '<a href="' + tmpdemo + '" target="_blank" class="thumbnail"><img src="' + tmpdemo;
    // var tmpext = '';
    // if (typeof opt.w != 'undefined')
    //   tmpext += opt.w.toString() + 'w';
    // if (typeof opt.h != 'undefined')
    //   tmpext += opt.h.toString() + 'h';
    // if (typeof opt.ext != 'undefined' && opt.ext != '')
    //   tmpext += (opt.ext.indexOf('.') == 0 ? '' : '.') + opt.ext;
    // if (tmpext != '')
    //   url += '@' + tmpext;
    // url += '"></a>';
  }
  return url;
}
//阻止enter键入事件冒泡
function stopEnterEvent(event) {
  var ev = (typeof event != 'undefined') ? window.event : e;
  if (ev.keyCode == 13) {
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    } else {
      // Part of the hack for browsers that don't support Event#stopImmediatePropagation
      event.propagationStopped = true;
    }
    event.stopPropagation();
    event.preventDefault();
    return false;
  }
  return true;
}
//阻止click事件冒泡
function stopClickEvent(event) {
  if (event.stopImmediatePropagation) {
    event.stopImmediatePropagation();
  } else {
    // Part of the hack for browsers that don't support Event#stopImmediatePropagation
    event.propagationStopped = true;
  }
  event.stopPropagation();
  event.preventDefault();
  return false;
}

function GetEditPageDataInitialize($scope, $http, url, sbiId) {
  var tmpPar = GetUrlParsFun();
  if (!_.isUndefined(tmpPar.opt)) {
    var tmpdata = {url: url, id: (_.isUndefined(tmpPar.id) ? '' : tmpPar.id)};
    if (tmpPar.opt == 'add') {
      tmpdata.title = "新增";
      tmpdata.type = 2;
      if (!_.isUndefined(tmpPar.sortno))
        $scope.editmodel.sortno = _.parseInt(tmpPar.sortno);
    } else if (tmpdata.id != '') {
      if (tmpPar.opt == 'edit') {
        tmpdata.title = "编辑";
        tmpdata.type = 3;
      } else {
        tmpdata.title = "浏览";
        tmpdata.type = 1;
      }
    }
    if (!_.isUndefined(tmpdata.title)) {
      $scope.itemmodel.data_item_type = tmpdata.type;
      $http.post(tmpdata.url, {id: tmpdata.id, sbiId: sbiId}).success(function (data) {
        if (data && !_.isUndefined(data.id)) {
          ClearNullJsonData(data);
          $scope.editmodel = $.extend({}, data);
          $scope.itemmodel = $.extend($scope.itemmodel, $scope.editmodel);
        }
      });
    }
  }
}
///根据数组获取树型列表
function getTree(data, primaryIdName, parentIdName, pid, expanded) {
//    debugger;
  if (!data || data.length == 0 || !primaryIdName || !parentIdName)
    return [];

  var tree = [],
    rootIds = [],
    item = data[0],
    primaryKey = item[primaryIdName],
    treeObjs = {},
    parentId,
    parent,
    len = data.length,
    i = 0;

  _(data).forEach(function (value) {
    if (value[parentIdName] == null || _.findIndex(data, function (o) {
        return _.isObject(o[parentIdName]) && o[parentIdName][primaryIdName] == value[primaryIdName];
      }) != -1) {
      if (expanded)
        value.expanded = true;
      treeObjs[value[primaryIdName]] = value;
    }
  });
//    debugger;
  while (i < len) {
    item = data[i++];
    primaryKey = item[primaryIdName];
    treeObjs[primaryKey] = item;
    parentId = _.isObject(item[parentIdName]) ? item[parentIdName].id : item[parentIdName];

    if (parentId) {
      parent = treeObjs[parentId];
      if (parent) {
        if (parent.children) {
          parent.children.push(item);
        }
        else {
          parent.children = [item];
        }
      } else {
        rootIds.push(primaryKey);
      }
    }
    else {
      rootIds.push(primaryKey);
    }
  }

  for (var i = 0; i < rootIds.length; i++) {
    treeObjs[rootIds[i]].expanded = true;
    tree.push(treeObjs[rootIds[i]]);
  }

  return tree;
}
//取path字段数据
function getPathArray(val, idx) {
  if (_.isString(val) && val != null && val.indexOf(',')) {
    var tmpval = val.split(',');
    if (tmpval.length > idx)
      return tmpval[idx];
  }
  return "";
}
function filtercatchtitleMap(val1, val2) {
  if (_.isArray(val2) && val2.length > 0) {
    var tmpval = [];
    _(val1).forEach(function (val) {
      if (_.findIndex(val2, function (o) {
          return o.id == val.id;
        }) == -1) {
        tmpval.push(val);
      }
    });
    return tmpval;
  } else {
    return val1;
  }
}
var baseSpecificationHeader = ["销售价", "成本价", "分销最低价", "分销最高价", "市场价", "商品编码", "库存", "销量"];
var viewSpecificationHeader = ["销售价", "成本价", "分销最低价", "分销最高价", "销售积分", "商品编码", "库存", "销量"];
var viewMarketHeader = ["零售价", "销售积分", "库存", "销量"];
var distributorArr = ["初级分销商返积分百分比", "中级分销商返积分百分比", "高级分销商返积分百分比"];
var userRateArr = ["一级佣金百分比", "二级佣金百分比", "三级佣金百分比", "四级佣金百分比", "五级佣金百分比"];
/**
 * 获取商品的sku
 * @param speci
 * @param querySpec
 * @param dataType  1.浏览  2.新增 3.编辑
 * @param userInfo
 * @param gbiSource  1.本司商品   2.市场商品
 * @returns {*}
 */
function getSpecification(speci, querySpec, dataType, userInfo, gbiSource) {
  //设置sku其他默认值
  var subSpecOtherValue = {
    "gscPrice": null,
    "gscUniformIncrement": null,
    "gscMarketPrice": null,
    "gscMinPrice": null,
    "gscMaxPrice": null,
    "gscNo": null,
    "gscStocks": 0,
    "gscSales": 0
  };
  var distributorRateHead = [];
  var userRateHead = [];
  var viewDistributorRateHead = [];
  var viewUserRateHead = [];

  //分销模式设置
  switch (userInfo.distributorModel) {
    case 1://多级分销模式
      //分销商返积分设置
      if (userInfo.distributorRateType > 0) {
        switch (userInfo.distributorRateType) {
          case 1://开启初级
            distributorRateHead = distributorArr.slice(0, 1);
            viewDistributorRateHead = distributorArr.slice(0, 1);
            _.extend(subSpecOtherValue, {primaryRate: null});
            break;
          case 2://开启中级
            distributorRateHead = distributorArr.slice(0, 2);
            viewDistributorRateHead = distributorArr.slice(0, 2);
            _.extend(subSpecOtherValue, {primaryRate: null, intermediateRate: null});
            break;
          case 3://开启高级
            distributorRateHead = distributorArr.slice(0, 3);
            viewDistributorRateHead = distributorArr.slice(0, 3);
            _.extend(subSpecOtherValue, {primaryRate: null, intermediateRate: null, seniorRate: null});
            break;
        }
      }
      //用户返积分设置
      if (userInfo.userRateType > 0) {
        switch (userInfo.userRateType) {
          case 1://开启一级
            userRateHead = userRateArr.slice(1, 2);
            viewUserRateHead = userRateArr.slice(1, 2);
            //_.extend(subSpecOtherValue,{directlyRate:null});
            break;
          case 2://开启二级
            userRateHead = userRateArr.slice(1, 3);
            viewUserRateHead = userRateArr.slice(1, 3);
            //_.extend(subSpecOtherValue,{directlyRate:null,superiorRate:null});
            _.extend(subSpecOtherValue, {superiorRate: null});
            break;
          case 3://开启三级
            userRateHead = userRateArr.slice(1, 4);
            viewUserRateHead = userRateArr.slice(1, 4);
            //_.extend(subSpecOtherValue,{directlyRate:null,superiorRate:null,threeRate:null});
            _.extend(subSpecOtherValue, {superiorRate: null, threeRate: null});
            break;
          case 4://开启四级
            userRateHead = userRateArr.slice(1, 5);
            viewUserRateHead = userRateArr.slice(1, 5);
            //_.extend(subSpecOtherValue,{directlyRate:null,superiorRate: null,threeRate:null,fourRate:null});
            _.extend(subSpecOtherValue, {superiorRate: null, threeRate: null, fourRate: null});
            break;
        }
      }
      break;
    case 2://店长店员模式
      //分销商返积分设置
      if (userInfo.distributorRateType > 0) {
        switch (userInfo.distributorRateType) {
          case 1://开启初级
            distributorRateHead = distributorArr.slice(0, 1);
            viewDistributorRateHead = distributorArr.slice(0, 1);
            _.extend(subSpecOtherValue, {primaryRate: null});
            break;
          case 2://开启中级
            distributorRateHead = distributorArr.slice(0, 2);
            viewDistributorRateHead = distributorArr.slice(0, 2);
            _.extend(subSpecOtherValue, {primaryRate: null, intermediateRate: null});
            break;
          case 3://开启高级
            distributorRateHead = distributorArr.slice(0, 3);
            viewDistributorRateHead = distributorArr.slice(0, 3);
            _.extend(subSpecOtherValue, {primaryRate: null, intermediateRate: null, seniorRate: null});
            break;
        }
      }
      break;
    case 3://全员开店模式
      //分销商返积分设置
      if (userInfo.distributorRateType > 0) {
        switch (userInfo.distributorRateType) {
          case 1://开启初级
            distributorRateHead = distributorArr.slice(0, 1);
            viewDistributorRateHead = distributorArr.slice(0, 1);
            _.extend(subSpecOtherValue, {primaryRate: null});
            break;
          case 2://开启中级
            distributorRateHead = distributorArr.slice(0, 2);
            viewDistributorRateHead = distributorArr.slice(0, 2);
            _.extend(subSpecOtherValue, {primaryRate: null, intermediateRate: null});
            break;
          case 3://开启高级
            distributorRateHead = distributorArr.slice(0, 3);
            viewDistributorRateHead = distributorArr.slice(0, 3);
            _.extend(subSpecOtherValue, {primaryRate: null, intermediateRate: null, seniorRate: null});
            break;
        }
      }
      break;
    default:
      break;
  }

  var _items = [];//[[ "16G", "32G" ],[ "金色", "银色","银色" ],[ "金色", "银色" ]];
  var skuValue = [];
  var currHeader = [];
  var skuHead = [];
  try {
    for (var x = 0; x < speci.length; x++) {
      var item = speci[x];
      if (item.name.length > 0 && item.value.length != 0) {
        currHeader.push(item.name);
      }
    }

  } catch (err) {

  }

  if (_.isUndefined(currHeader[0])) {
    switch (gbiSource) {
      case 2://市场商品
        skuHead = currHeader.concat(viewMarketHeader).concat(distributorRateHead).concat(userRateHead);
        break;
      default://本司商品
        skuHead = baseSpecificationHeader.concat(distributorRateHead).concat(userRateHead);
        break;
    }
  } else {
    switch (gbiSource) {
      case 2://市场商品
        skuHead = currHeader.concat(viewMarketHeader).concat(distributorRateHead).concat(userRateHead);
        break;
      default://本司商品
        skuHead = currHeader.concat(baseSpecificationHeader).concat(distributorRateHead).concat(userRateHead);
        break;
    }

  }
  for (var i = 0; i < querySpec.length; i++) {
    if (typeof querySpec[i].gscSku == "string") {
      querySpec[i].gscSku = JSON.parse(querySpec[i].gscSku);
    }
  }
  if (dataType == 1) {
    var returnData = null;
    switch (gbiSource) {
      case 1://本司商品
        returnData = {
          header: currHeader.concat(viewSpecificationHeader).concat(viewDistributorRateHead).concat(viewUserRateHead),
          data: querySpec,
          user: userInfo
        };
        break;
      case 2://市场商品
        returnData = {
          header: currHeader.concat(viewMarketHeader).concat(distributorRateHead).concat(userRateHead),
          data: querySpec,
          user: userInfo
        };
        break;
    }
    return returnData;
  }

  var items = {};
  var len = _items.length;

  try {
    for (var m = 0; m < speci.length; m++) {
      var item = speci[m];
      if (item.value.length != 0)
        _items.push(item.value);
    }

    var formater = function (index, key, arr) {
      if (_items.length == index) {
        //skuValue.push({gscSku:angular.extend([],arr)});
        skuValue.push($.extend({gscSku: angular.extend([], arr)}, subSpecOtherValue));
        return true;
      }

      for (var j = 0; j < _items[index].length; j++) {
        var jItem = _items[index][j];
        var tmpkey = key + '_' + j;
        var tmpArr = angular.extend([], arr);

        tmpArr.push(jItem);

        if (_items.length == index + 1) {
          items[tmpkey] = angular.extend([], tmpArr);
          //sku的值
          skuValue.push($.extend({gscSku: angular.extend([], tmpArr)}, subSpecOtherValue));

          var first = items[tmpkey][0];
        }
        else {
          formater(index + 1, tmpkey, tmpArr);
        }
      }

    };

    for (var i = 0; i < _items[0].length; i++) {
      var subItem = _items[0][i];
      var tmpArr = [subItem];
      var end = formater(1, '' + i, tmpArr);
    }
  } catch (err) {
    skuValue = [];
  }

  if (dataType == 2) {//新增
    for (var a = 0; a < skuValue.length; a++) {
      for (var b = 0; b < querySpec.data.length; b++) {
        if (skuValue[a].gscSku.toString() == querySpec.data[b].gscSku.toString()) {
          skuValue[a] = querySpec.data[b];
        }
      }
    }

  }
  if (dataType == 3) {//编辑
    for (var a = 0; a < skuValue.length; a++) {
      for (var b = 0; b < querySpec.length; b++) {
        if (skuValue[a].gscSku.toString() == querySpec[b].gscSku.toString()) {
          skuValue[a] = querySpec[b];
        }
      }
    }
  }

  return {header: skuHead, data: skuValue, user: userInfo};
}

/*
 * angular App对象
 * */
var mosApp = angular.module('mosApp',
  ['ngTable', 'ui.select', 'schemaForm',
    'ngSanitize', 'angularjs-dropdown-multiselect', 'ui.bootstrap',
    'schemaForm-datepicker', 'schemaForm-datetimepicker', 'schemaForm-timepicker',
    'colorpicker.module', 'ngFileUpload', 'ngJsTree',
    'dndLists', 'ui.router', 'ngAnimate', 'ngBootstrap', 'treeGrid'])
  .config([
    '$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|sms|tel|mailto|javascript|chrome-extension):/);
      // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
  ])
  // 金额格式化 <input currency ng-model="myMoney" /> or <input currency="2" ng-model="myMoney" />
  .directive('currency', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var numberFixed = attrs.hasOwnProperty('currency') ? parseInt(attrs.currency) : 2;
        ngModelCtrl.$formatters.push(function (val) {
          if (typeof val == "number")
            return val.ToMoney(numberFixed);
          return Number2Money(val);
        });
        element.focus(function () {
          if (this.value == "¥0.00")
            this.value = "";
          else
            this.value = Money2Number(this.value);
        });
        element.blur(function () {
          var val = this.value;
          if (typeof val == "string") {
            val = parseFloat(val.replace("¥", "").replaceAll(",", "").replace(" ", ""))
            val = Number2Money(val, numberFixed);
          }
          if (typeof val == "number")
            this.value = val.ToMoney(numberFixed);
          else
            this.value = Number2Money(Money2Number(val), numberFixed);
        });
      }
    }
  })
  // 金额格式化 <div>{{myMoney | currency : 2}}</div> or <div>{{myMoney | currency}}</div>
  .filter('currency', function () {
    var filter = function (money, fixed) {
      fixed = fixed || 2;
      return Number2Money(money, fixed);
    };
    return filter;
  })

  .filter('formatImgUrl', function () {
    return function (url, size) {
      return formatImgUrl(url, size);
    };
  })

  .filter('formatDateTime', function () {
    return function (dt, ft) {
      if (dt) {
        if (!ft)
          ft = 'YYYY-MM-DD HH:mm:ss';
        return moment(dt).format(ft);
      }
      return '';
    };
  })

  .filter('formatDbImgUrl', function () {
    var filter = function (url, size) {
      return formatDbImgUrl(url, size);
    };
    return filter;
  })

  // 颜色格式化 用法 <input moscolor ng-model="myColor"/>
  .directive('moscolor', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$formatters.push(function (val) {
          if (val.indexOf('#') == 0)
            return val.toUpperCase();
          return '#' + val.toUpperCase();
        });
        element.focus(function () {
          this.value = this.value.toUpperCase();
        });
        element.blur(function () {
          this.value = this.value.toUpperCase();
        });
      }
    }
  })

  // 导出Table数据
  .directive('exportTable', function () {
    /*
     * //用法：In controller
     $scope.exportAction = function(){
     switch($scope.export_action){
     case ‘pdf’: $scope.$broadcast(‘export-pdf’, {});
     break;
     case ‘excel’: $scope.$broadcast(‘export-excel’, {});
     break;
     case ‘doc’: $scope.$broadcast(‘export-doc’, {});
     break;
     default: console.log(‘no event caught’);
     }
     }*/
    var link = function ($scope, elem, attr) {


      elem.bind('click', function (e) {

        var t = e.target.title;
        if (!t)
          return;
        //$('.table-hover').tableExport({type: t, escape: false});
        $('.table-hover').tableExport({
          type: t, tableName: '导出',
          worksheetName: '导出',
          fileName: '导出'
        });
      });

    };
    return {
      restrict: 'C',
      link: link
    }
  })

  .filter('unsafe', ['$sce', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }])

  // 高级过滤器，用法：<div ng-repeat="item in list | propsFilter : <filterFunction>(<param>)">
  .filter('propsFilter', function () {
    return function (items, props) {
      var out = [];
      // console.log('items:'+JSON.stringify(items));

      if (angular.isArray(items) && props) {
        var j = 0;
        _.forEach(props, function(value, key) {
          if(!angular.isUndefined(value) && value != null && value != ''){
            j++;
          }
          // console.log('value:'+value +',key:'+key +',j='+j);
        });
        if(j == 0){
          out = items;
        }else {
          items.forEach(function (item) {
            var itemMatches = false;
            if (props) {
              var keys = Object.keys(props);
              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                if (item[prop]) {
                  if (_.isObject(props[prop])) {
                    if (_.isArray(props[prop]['!'])) {
                      if (_.indexOf(props[prop]['!'], item[prop]) == -1) {
                        itemMatches = true;
                        break;
                      }
                    } else if (_.isArray(props[prop]['='])) {
                      if (_.indexOf(props[prop]['='], item[prop]) == -1) {
                        itemMatches = true;
                        break;
                      }
                    }
                  } else {
                    var text = props[prop].toLowerCase();
                    if ((text != '' || keys.length == 1) && item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                      itemMatches = true;
                      break;
                    }
                  }
                }
              }
            }
            else
              itemMatches = true;
            if (itemMatches) {
              out.push(item);
            }
          });
        }
      } else {
        // Let the output be the input untouched
        out = items;
      }
      return out;
    }
  })

  .filter('floor', function () {
    return function (input) {
      return Math.floor(input);
    };
  })
  .filter('ceil', function () {
    return function (input) {
      return Math.ceil(input);
    };
  })
  //弹窗显示的树形选择控件的Ctrl
  .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', 'form',
    function ($scope, $uibModalInstance, items, form) {

      $scope.items = items;
      $scope.form = form;
      $scope.tree = {};

      $scope.ok = function () {
        $uibModalInstance.close($scope.items);
      };
      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

    }])

  //模块页面的控制器
  .controller('pageCtrl', ["$scope", "$http", "Upload", "$sce", "$timeout", "NgTableParams", "$q", function ($scope, $http, Upload, $sce, $timeout, NgTableParams, $q) {
    pageCtrl($scope, $http, Upload, $sce, $timeout, NgTableParams, $q);
  }])

  //模块编辑页的控制器
  .controller('editCtrl', ["$scope", "$http", "Upload", "$sce", "$timeout", "NgTableParams", "$q", function ($scope, $http, Upload, $sce, $timeout, NgTableParams, $q) {
    editCtrl($scope, $http, Upload, $sce, $timeout, NgTableParams, $q);
  }])
  //模块编辑页的控制器
  .controller('popoverCtrl', ["$scope", "$http", "Upload", "$sce", "$timeout", "NgTableParams", "$q", function ($scope, $http, Upload, $sce, $timeout, NgTableParams, $q) {
    popoverCtrl($scope, $http, Upload, $sce, $timeout, NgTableParams, $q);
  }]);


//
function NgTableGetData($scope, $defer, params, url, callback) {
  $scope.ngtable_params = params;
  var count = params.count();
  var page = params.page();
  $scope.search_postdata["limit"] = page * count;
  $scope.search_postdata["sort"] = GetNgTableOrderSort(params.orderBy(), $scope.search_postdata["sort"]);
  var search_postdata = angular.copy($scope.search_postdata);
  if (_.isUndefined(search_postdata.offset))
    search_postdata['offset'] = (page - 1) * count;
  else
    delete $scope.search_postdata.offset;
  $scope.search_postdata['page'] = page;
  search_postdata['page'] = $scope.search_postdata['page'];
  ArrayObjectToIntData(search_postdata);
  $scope.DataOptionEvent({
    type: 12,
    // url: '/api/uploadfileinfo/getData',
    url: url,
    data: search_postdata,
    noconfirm: true,
    cb: function (opt, data) {
      //总数
      params.total(data.totalCnt);

      //把数据装到Model中
      $scope.model.tb = data.queryData;
      $defer.resolve($scope.model.tb);
      if (callback)
        callback(data);
    }
  });
  // return search_postdata;
}


/// <summary>
/// 计算两点间的距离
/// </summary>
/// <param name="lng1">开始经度</param>
/// <param name="lat1">开始纬度</param>
/// <param name="lng2">结束经度</param>
/// <param name="lat2">结束纬度</param>
/// <returns>两点间距离</returns>
function AnalyseDistance(lng1, lat1, lng2, lat2) {
  var rad = Math.PI / 180.0;
  var radLat1 = rad * lat1;
  var radLat2 = rad * lat2;
  var a = radLat1 - radLat2;
  var b = rad * lng1 - rad * lng2;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = Math.floor(s * 6378137);
  if (s < 50)
    return '< 50米';
  if (s < 1000)
    return s + '米';
  if (s >= 1000)
    return (Math.floor(s / 100.0) / 10.0) + '千米';

  return s;
}
//计算一个时间段所跨的周
function getWeekInterval(timePeriod) {
  if (timePeriod.indexOf(" / ") == -1) {
    showError("请输入正确的时间段");
  } else {
    timePeriod = timePeriod.split(" / ");
    var start = new Date(Date.parse(timePeriod[0].replace(/-/g, "/"))).getTime();
    var end = new Date(Date.parse(timePeriod[1].replace(/-/g, "/"))).getTime();
    var days = (end - start) / (86400000);
    var timeArr = [];
    var k = 0;
    timeArr[k] = new Date(start).format("yyyy-MM-dd");
    if (start == end) {
      timeArr[k] += "/" + new Date(end).format("yyyy-MM-dd");
    }
    for (var i = 0; i < days; i++) {
      console.log(start + (i + 1) * 86400000);
      var day = new Date(start + (i + 1) * 86400000).getDay();
      if (day == 0 || i == (days - 1)) {
        timeArr[k] += "/" + new Date(start + (i + 1) * 86400000).format("yyyy-MM-dd");
        k++;
        if (i != (days - 1))
          timeArr[k] = new Date(start + (i + 2) * 86400000).format("yyyy-MM-dd");
      } else if (i == (days - 1)) {
        timeArr[k] += "/" + new Date(start + (i + 1) * 86400000).format("yyyy-MM-dd");
      }
    }
    return timeArr;
  }
}
