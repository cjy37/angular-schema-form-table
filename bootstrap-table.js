angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/table/bs-table.html","<div ng-class=\"form.htmlClass\" style=\"clear: both\">\r\n    <div ng-attr-id=\"{{ form.options.id }}-toolbar\" class=\"ng-table-toolbar\" ng-if=\"!form.hideTopToggle\">\r\n        <div id=\"toolbar_btnoption_list\" class=\"pull-left\">\r\n            <div class=\"btnlist-inner\">\r\n                <button ng-repeat=\"btn in form.toolbar\" class=\"btn btn-default\" ng-class=\"btn.htmlClass\" \r\n                    type=\"button\" ng-if=\"btn.condition ? btn.condition() : true\"\r\n                    ng-click=\"btn.action()\">\r\n                    <i ng-if=\"btn.icon\" ng-class=\"btn.icon\"></i>\r\n                    <span>{{btn.name}}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"pull-right\"></div>\r\n    </div>\r\n    <table ng-attr-id=\"{{ form.options.id }}\" bs-table-control=\"form.options\"></table>\r\n</div>");
$templateCache.put("directives/decorators/bootstrap/table/ckeditor.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\">\r\n    <!--<div ng-class=\"form.fieldHtmlClass\" ckeditor=\"form.options\" ng-model=\"$$value$$\" ready=\"form.onReady()\" schema-validate=\"form\"></div>-->\r\n    <textarea froala=\"form.options\" ng-model=\"$$value$$\" schema-validate=\"form\"></textarea>\r\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/cutuploadpic.html","<div class=\"upload-button form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n    <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\r\n      <div class=\"uploadimgbody\"><div ng-style=\"{\'background\':\'url(\'+($$value$$|formatImgUrl:form.options.suffix)+\') left top / 100% 100% no-repeat\'}\" class=\"uploadimgcls\"></div></div><div class=\"uploadimgcontent\">\r\n      <div class=\"uploadimgbuttom\" file-button file-change=\"$$value$$=image\" fl-title=\"剪裁\"\r\n           fl-image-format=\"form.options.imageFormat\" fl-aspect-ratio=\"form.options.aspectRatio\">\r\n        <span class=\'btn {{form.btnHtmlClass || \"btn-success\"}}\'>{{form.btn_title || \'选择图片\'}}</span>\r\n      </div>\r\n      <span class=\"uploadimglabel\" ng-if=\"form.options.suggestlabel\" ng-bind-html=\"form.options.suggestlabel\"></span></div>\r\n      <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/cutuploadpics.html","<div class=\"upload-buttons form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\r\n    <div class=\"upload-img-one\" ng-repeat=\"pic in $$value$$ track by $index\">\r\n      <div ng-style=\"{\'background\':\'url(\'+(pic|formatImgUrl:form.options.suffix)+\') left top / 100% 100% no-repeat\'}\" class=\"uploadimgscls\"></div>\r\n      <div class=\"icon icon-activities_icon_close file-del\" ng-click=\"$$value$$.splice($index, 1)\"></div>\r\n    </div>\r\n    <div class=\"uploadimgscontent\"><div class=\"uploadimgsbuttom\" ng-if=\"form.options.maxNum ? form.options.maxNum > $$value$$.length : true\"\r\n         class=\"upload-img-one upload-btn\" file-button file-change=\"$$value$$.push(image)\"\r\n         fl-title=\"剪裁\" fl-image-format=\"form.options.imageFormat\" fl-aspect-ratio=\"form.options.aspectRatio\">\r\n      <span class=\'btn {{form.btnHtmlClass || \"btn-success\"}}\'>{{form.btn_title || \'选择图片\'}}</span>\r\n    </div>\r\n    <span class=\"uploadimgslabel\" ng-if=\"form.options.suggestlabel\" ng-bind-html=\"form.options.suggestlabel\"></span></div>\r\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/date-range.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\"  ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol {{form.fieldHtmlClass}}\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\r\n    <input\r\n      type=\"daterange\"\r\n      id=\"{{form.key.slice(-1)[0]}}\"\r\n      placeholder=\"{{form.placeholder}}\"\r\n      class=\"form-control {{form.fieldHtmlClass}}\"\r\n      sf-changed=\"form\"\r\n      ng-model-options=\"form.ngModelOptions\"\r\n      ng-model=\"$$value$$\"\r\n      enabletimepicker=\"form.enabletimepicker||MosEnum.momentTimepicker\"\r\n      single-date-picker=\"form.singleDatePicker\"\r\n      min-date=\"form.minDate\"\r\n      max-date=\"form.maxDate\"\r\n      limit=\"form.limit\"\r\n      format=\"form.locale.format\"\r\n      separator=\"form.locale.separator\"\r\n      locale=\"form.locale||MosEnum.momentLocales\"\r\n      ranges=\"form.ranges||MosEnum.momentRanges\"\r\n      ng-disabled=\"{{form.readonly}}\"\r\n      schema-validate=\"form\"\r\n      aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"/>\r\n    <span ng-if=\"form.fieldAddonRight && form.fieldAddonRight.type!=\'button\'\"\r\n          class=\"input-group-addon  {{form.fieldAddonRight.htmlClass}}\"> </span>\r\n    <span ng-if=\"form.feedback !== false\"\r\n          class=\"form-control-feedback\"\r\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\r\n          aria-hidden=\"true\"></span>\r\n    <span ng-if=\"hasError() || hasSuccess()\"\r\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\r\n          class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\r\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-array.html","<div sf-array=\"form\" class=\"form-group-sm {{form.htmlClass}}\" style=\"margin-bottom:15px\"\r\n     ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\">\r\n  <div style=\"padding-right:0;width:100%\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"modelArray\">\r\n    <sf-decorator ng-repeat=\"tmpform in form.items\" ng-init=\"tmpform.notitle = true\" class=\"{{tmpform.htmlClass}}\" form=\"tmpform\"></sf-decorator>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-button-group.html","<div class=\"btn-group\" ng-model=\"$$value$$\" >\r\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle {{form.htmlClass}}\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    {{form.title}} <span class=\"caret\"></span>\r\n  </button>\r\n  <ul class=\"dropdown-menu dropdown-menu-right\">\r\n    <li ng-repeat=\"item in form.actions\" role=\"{{item.title}}\" class=\"{{item.title!=\'separator\' ? \'\' : \'divider\'}}\">\r\n      <a href=\"#.\" ng-click=\"item.onClick($event)\" ng-hide=\"item.title==\'separator\'\">{{item.title}}</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-color.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\r\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\"><input colorpicker type=\"text\"\r\n         sf-changed=\"form\"\r\n         placeholder=\"{{form.placeholder}}\"\r\n         class=\"form-control {{form.fieldHtmlClass}}\"\r\n         ng-model=\"$$value$$\"\r\n         ng-disabled=\"{{form.readonly}}\"\r\n         schema-validate=\"form\" ><div class=\"help-block\" sf-message=\"form.description\"></div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-commit-info.html","<div class=\"form-group {{form.htmlClass}}\">\r\n  <label class=\"control-label\" ng-bind-html=\"form.title + \'：\'\"></label>\r\n  <div class=\"joininputcol\"><div class=\"list-group-item\">\r\n    <span ng-bind-html=\"JSON.stringify($$value$$)\"></span>\r\n    <div class=\"form-group {{form.fieldHtmlClass}} schema-form-string\" ng-repeat=\"item in $$value$$\" ng-model=\"$$value$$\">\r\n      <span ng-if=\"item.isRequire\" style=\"color: red;\">*&nbsp;</span><label class=\"control-label\" ng-bind-html=\"item.sciTitle + \'：\'\"></label>\r\n      <input ng-if=\"item.sciType && item.sciType.value == 0\" ng-disabled=\"form.readonly\" class=\"form-control\" type=\"string\" ng-model=\"item.srciValue\">\r\n      <select ng-if=\"item.sciType && item.sciType.value == 1\"\r\n              ng-model=\"item.srciValue\"\r\n              ng-model-options=\"form.ngModelOptions\"\r\n              sf-changed=\"form\"\r\n              ng-disabled=\"form.readonly\"\r\n              class=\"form-control  ng-valid-schema-form ng-touched\"\r\n              schema-validate=\"form\" name=\"noenum{{$index}}\"\r\n              ng-options=\"option.scoiNum as option.name  for option in item.options\" >\r\n      </select>\r\n      <div ng-if=\"item.sciType && item.sciType.value == 2\">\r\n        <div class=\"radio\" ng-repeat=\"option in item.options\">\r\n          <label>\r\n            <input type=\"radio\" class=\"\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"item.srciValue\"\r\n                   ng-value=\"option.scoiNum\" name=\"radios{{option.sciId}}\">\r\n            <span ng-bind-html=\"option.name\" class=\"ng-binding\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div ng-if=\"item.sciType && item.sciType.value == 3\">\r\n        <div class=\"checkbox\" ng-repeat=\"option in item.options track by $index\">\r\n          <label>\r\n            <input type=\"checkbox\"\r\n              ng-disabled=\"form.readonly\"\r\n              sf-changed=\"form\"\r\n              ng-true-value=\"true\" ng-false-value=\"false\"\r\n              class=\"ng-dirty ng-valid-parse ng-touched\"\r\n              ng-value=\"option.scoiNum\"\r\n              name=\"checkbox{{option.sciId}}\"\r\n              ng-model=\"option.srciValue\" >\r\n            <span ng-bind-html=\"option.name\" class=\"ng-binding\">a</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <textarea ng-if=\"item.sciType && item.sciType.value == 4\" ng-disabled=\"form.readonly\"  ng-model=\"item.srciValue\" class=\"form-control\"></textarea>\r\n    </div>\r\n  </div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-default.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\">\r\n    <input ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"\r\n           ng-show=\"form.key && form.type!=\'label\'\"\r\n           autocomplete=\"nope\"\r\n           type=\"{{form.input_type || form.type.replace(\'mos-\',\'\')}}\"\r\n           step=\"any\"\r\n           sf-changed=\"form\"\r\n           placeholder=\"{{form.placeholder}}\"\r\n           class=\"form-control {{form.fieldHtmlClass}}\"\r\n           ng-model-options=\"form.ngModelOptions\"\r\n           ng-model=\"$$value$$\"\r\n           ng-disabled=\"{{form.readonly}}\"\r\n           schema-validate=\"form\"\r\n           aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\">\r\n\r\n    <span ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" class=\"form-control {{form.fieldHtmlClass}}\"\r\n          ng-show=\"form.key && form.type==\'label\'\">{{$$value$$}}</span>\r\n\r\n    <div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\r\n\r\n      <span ng-if=\"form.fieldAddonLeft && !form.fieldAddonLeft.hasOwnProperty(\'type\')\"\r\n            class=\"input-group-addon {{form.fieldAddonLeft.htmlClass}}\"\r\n            ng-bind-html=\"form.fieldAddonLeft\"></span>\r\n\r\n      <span ng-if=\"form.fieldAddonLeft && form.fieldAddonLeft.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonLeft[\'htmlClass\']=\'input-group-btn\'\">\r\n        <sf-decorator form=\"form.fieldAddonLeft\"></sf-decorator>\r\n      </span>\r\n\r\n      <input ng-show=\"form.key && form.type!=\'label\'\"\r\n             autocomplete=\"nope\"\r\n             type=\"{{form.input_type || form.type.replace(\'mos-\',\'\')}}\"\r\n             step=\"any\"\r\n             sf-changed=\"form\"\r\n             placeholder=\"{{form.placeholder}}\"\r\n             class=\"form-control {{form.fieldHtmlClass}}\"\r\n             ng-model-options=\"form.ngModelOptions\"\r\n             ng-model=\"$$value$$\"\r\n             ng-disabled=\"{{form.readonly}}\"\r\n             schema-validate=\"form\"\r\n             aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\">\r\n\r\n      <span class=\"form-control {{form.fieldHtmlClass}}\"\r\n            ng-show=\"form.key && form.type==\'label\'\">{{$$value$$}}</span>\r\n\r\n\r\n      <span ng-if=\"form.fieldAddonRight && !form.fieldAddonRight.hasOwnProperty(\'type\')\"\r\n            class=\"input-group-addon  {{form.fieldAddonRight.htmlClass}}\"\r\n            ng-bind-html=\"form.fieldAddonRight\"></span>\r\n\r\n      <span ng-if=\"form.fieldAddonRight && form.fieldAddonRight.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonRight[\'htmlClass\']=\'input-group-btn\'\">\r\n        <sf-decorator form=\"form.fieldAddonRight\"></sf-decorator>\r\n      </span>\r\n\r\n    </div>\r\n\r\n    <span ng-if=\"form.feedback !== false\"\r\n          class=\"form-control-feedback\"\r\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\r\n          aria-hidden=\"true\"></span>\r\n\r\n    <span ng-if=\"hasError() || hasSuccess()\"\r\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\r\n          class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\r\n\r\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-multiselect.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\">\r\n  <div ng-dropdown-multiselect=\"\"\r\n       class=\"{{form.controlHtmlClass}}\"\r\n       ng-model-options=\"form.ngModelOptions\"\r\n       options=\"form.titleMap\"\r\n       ng-disabled=\"{{form.readonly}}\"\r\n       selected-model=\"$$value$$\"\r\n       translation-texts=\"form.selectText\"\r\n       group-by=\"{{form.groupField}}\"\r\n       extra-settings=\"form.map\"></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-multiselect2.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\r\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\">\r\n    <div ng-if=\"form.addDataOption\" class=\"input-group\"><ui-select multiple ng-model=\"$$value$$\" theme=\"select2\" ng-disabled=\"{{form.readonly}}\"\r\n             class=\"{{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\r\n    <ui-select-match placeholder=\"{{form.placeholder}}\">{{$item[form.map.displayProp]}}</ui-select-match>\r\n    <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search)\"\r\n                       refresh=\"form.refreshData($select.search, form)\"\r\n                       refresh-delay=\"500\">\r\n      <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\r\n      <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\r\n    </ui-select-choices>\r\n  </ui-select>\r\n  <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button>\r\n  </span></div>\r\n  <ui-select ng-if=\"!form.addDataOption\" multiple ng-model=\"$$value$$\" theme=\"select2\" ng-disabled=\"{{form.readonly}}\"\r\n               class=\"joininputcol {{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\r\n      <ui-select-match placeholder=\"{{form.placeholder}}\">{{$item[form.map.displayProp]}}</ui-select-match>\r\n      <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search)\"\r\n                         refresh=\"form.refreshData($select.search, form)\"\r\n                         refresh-delay=\"500\">\r\n        <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\r\n        <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\r\n      </ui-select-choices>\r\n    </ui-select>\r\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <div>\r\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  </div>\r\n  <div class=\"joininputcol\">\r\n  <div class=\"btn-group\">\r\n    <label class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\"\r\n           ng-class=\"{ active: item.value === $$value$$ }\"\r\n           ng-repeat=\"item in form.titleMap\">\r\n      <input type=\"radio\"\r\n             class=\"{{form.fieldHtmlClass}}\"\r\n             sf-changed=\"form\"\r\n             style=\"display: none;\"\r\n             ng-disabled=\"form.readonly\"\r\n             ng-model=\"$$value$$\"\r\n             ng-model-options=\"form.ngModelOptions\"\r\n             schema-validate=\"form\"\r\n             ng-value=\"item.value\"\r\n             name=\"{{form.key.join(\'.\')}}\">\r\n      <span ng-bind-html=\"item.name\"></span>\r\n    </label>\r\n  </div><div class=\"help-block\" sf-message=\"form.description\"></div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-radios.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\">\r\n  <div class=\"radio\" class=\"{{form.fieldHtmlClass}}\">\r\n    <label class=\"join-radio\" ng-repeat=\"item in form.titleMap\">\r\n      <input type=\"radio\"\r\n             sf-changed=\"form\"\r\n             style=\"display: none;\"\r\n             ng-disabled=\"form.readonly\"\r\n             ng-model=\"$$value$$\"\r\n             ng-model-options=\"form.ngModelOptions\"\r\n             schema-validate=\"form\"\r\n             ng-value=\"item.value\"\r\n             name=\"{{form.key.join(\'.\')}}\">\r\n      <span ng-class=\"{\'icon icon-activities_icon_Radio\': item.value === $$value$$, \'icon icon-activities_icon_Radio_nor\': item.value !== $$value$$}\"></span>\r\n      <span ng-bind-html=\"item.name\"></span>\r\n      <span ng-if=\"item.label\" class=\"join-radio-label\" ng-bind-html=\"item.label\"></span>\r\n    </label>\r\n    <span ng-if=\"form.suggestlabel\" ng-bind-html=\"form.suggestlabel\"></span>\r\n  </div><div class=\"help-block\" sf-message=\"form.description\"></div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-select.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\r\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\"><select ng-model=\"$$value$$\"\r\n          ng-model-options=\"form.ngModelOptions\"\r\n          sf-changed=\"form\"\r\n          ng-disabled=\"{{form.readonly}}\"\r\n          class=\"form-control {{form.fieldHtmlClass}}\"\r\n          schema-validate=\"form\"\r\n          ng-options=\"item[form.map.value || \'value\'] as item[form.map.name || \'name\'] group by item.group for item in form.titleMap\"\r\n          name=\"{{form.key.slice(-1)[0]}}\">\r\n    <option value=\"\">{{form.placeholder||\'请选择...\'}}</option>\r\n  </select><div class=\"help-block\" sf-message=\"form.description\"></div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-select2.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\r\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\"><div ng-if=\"form.addDataOption\" class=\"input-group\"><ui-select ng-model=\"$$value$$\" theme=\"bootstrap\"\r\n             ng-disabled=\"{{form.readonly}}\"\r\n             reset-search-input=\"false\"\r\n             class=\"{{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\r\n    <ui-select-match placeholder=\"{{form.placeholder}}\">{{$select.selected[form.map.displayProp]}}</ui-select-match>\r\n    <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search) track by $index\"\r\n                       refresh=\"form.refreshData($select.search, form)\"\r\n                       refresh-delay=\"500\">\r\n      <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\r\n      <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\r\n    </ui-select-choices>\r\n  </ui-select>\r\n  <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button>\r\n  </span></div>\r\n    <ui-select ng-if=\"!form.addDataOption\" ng-model=\"$$value$$\" theme=\"bootstrap\"\r\n               ng-disabled=\"{{form.readonly}}\"\r\n               reset-search-input=\"false\"\r\n               class=\"joininputcol {{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\r\n      <ui-select-match placeholder=\"{{form.placeholder}}\">{{$select.selected[form.map.displayProp]}}</ui-select-match>\r\n      <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search) track by $index\"\r\n                         refresh=\"form.refreshData($select.search, form)\"\r\n                         refresh-delay=\"500\">\r\n        <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\r\n        <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\r\n      </ui-select-choices>\r\n    </ui-select>\r\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-template.html","<div class=\"{{form.htmlClass}}\">\r\n  <label class=\"{{form.fieldHtmlClass}}\" ng-bind-html=\"form.title\"></label>\r\n  <label class=\"joininputcol\" ng-class=\"form.labelHtmlClass\" ng-bind-html=\"(form.formatterFn?form.formatterFn($$value$$):$$value$$)\"></label>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-textarea.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\">\r\n    <textarea sf-changed=\"form\"\r\n              placeholder=\"{{form.placeholder}}\"\r\n              class=\"form-control {{form.fieldHtmlClass}}\"\r\n              id=\"{{form.key.slice(-1)[0]}}\"\r\n              ng-model-options=\"form.ngModelOptions\"\r\n              ng-model=\"$$value$$\"\r\n              ng-disabled=\"{{form.readonly}}\"\r\n              schema-validate=\"form\"\r\n              name=\"{{form.key.slice(-1)[0]}}\"></textarea>\r\n\r\n    <div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\r\n\r\n      <span ng-if=\"form.fieldAddonLeft && !form.fieldAddonLeft.hasOwnProperty(\'type\')\"\r\n            class=\"input-group-addon {{form.fieldAddonLeft.htmlClass}}\"\r\n            ng-bind-html=\"form.fieldAddonLeft\"></span>\r\n\r\n      <span ng-if=\"form.fieldAddonLeft && form.fieldAddonLeft.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonLeft[\'htmlClass\']=\'input-group-btn\'\">\r\n        <sf-decorator form=\"form.fieldAddonLeft\"></sf-decorator>\r\n      </span>\r\n      <textarea sf-changed=\"form\"\r\n             placeholder=\"{{form.placeholder}}\"\r\n             class=\"form-control {{form.fieldHtmlClass}}\"\r\n             id=\"{{form.key.slice(-1)[0]}}\"\r\n             ng-model-options=\"form.ngModelOptions\"\r\n             ng-model=\"$$value$$\"\r\n             ng-disabled=\"{{form.readonly}}\"\r\n             schema-validate=\"form\"\r\n             name=\"{{form.key.slice(-1)[0]}}\"></textarea>\r\n\r\n      <span ng-if=\"form.fieldAddonRight && !form.fieldAddonRight.hasOwnProperty(\'type\')\"\r\n            class=\"input-group-addon  {{form.fieldAddonRight.htmlClass}}\"\r\n            ng-bind-html=\"form.fieldAddonRight\"></span>\r\n\r\n      <span ng-if=\"form.fieldAddonRight && form.fieldAddonRight.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonRight[\'htmlClass\']=\'input-group-btn\'\">\r\n        <sf-decorator form=\"form.fieldAddonRight\"></sf-decorator>\r\n      </span>\r\n\r\n    </div>\r\n\r\n    <span ng-if=\"form.feedback !== false\"\r\n          class=\"form-control-feedback\"\r\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\r\n          aria-hidden=\"true\"></span>\r\n\r\n    <span ng-if=\"hasError() || hasSuccess()\"\r\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\r\n          class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\r\n\r\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-tree-grid.html","<tree-grid tree-data=\"$$value$$\" col-defs=\"form.col_defs\" expand-on=\"form.expanding_property\" tree-control=\"form.control_tree\" icon-leaf=\"{{form.iconLeaf ? form.iconLeaf : \'file icon\'}}\" icon-expand=\"{{form.iconExpand ? form.iconExpand : \'plus icon\'}}\" icon-collapse=\"{{form.iconCollapse ? form.iconCollapse : \'minus icon\'}}\" on-select=\"form.gridtree_selecthandler(branch)\" on-click=\"form.gridtree_clickhandler(branch)\" expand-level=\"{{form.expandLevel?form.expandLevel:\'2\'}}\"></tree-grid>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-treemultiselect2.html","<div class=\"form-group {{form.htmlClass}} schema-form-treemultiselect\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\r\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-model=\"$$value$$\" ng-href=\"\" ng-click=\"form.openSelect($event, form)\" schema-validate=\"form\" sf-changed=\"form\">\r\n    <div ng-if=\"form.addDataOption\" class=\"input-group\"><ul class=\"select2-choices\">\r\n      <li class=\"select2-search-field\" ng-if=\"!$$value$$ || $$value$$.length == 0\"><input type=\"text\"  class=\"select2-input ui-select-search ng-pristine\" readonly=\"readonly\" placeholder=\"{{form.placeholder}}\"></li>\r\n			<li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"item in $$value$$\">\r\n			<div ng-bind-html=\"item[form.map.displayProp]\"></div>\r\n      <small ng-if=\"form.map.moreitemname1\" ng-bind=\"item[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\r\n      <small ng-if=\"form.map.moreitemname2\" ng-bind=\"item[form.map.moreitemname2]\"></small></li>\r\n		</ul>\r\n    <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button></span>\r\n  </div>\r\n  <ul ng-if=\"!form.addDataOption\" class=\"select2-choices\">\r\n    <li class=\"select2-search-field\" ng-if=\"!$$value$$ || $$value$$.length == 0\"><input type=\"text\"  class=\"select2-input ui-select-search ng-pristine\" readonly=\"readonly\" placeholder=\"{{form.placeholder}}\"></li>\r\n			<li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"item in $$value$$\">\r\n			<div ng-bind-html=\"item[form.map.displayProp]\"></div>\r\n      <small ng-if=\"form.map.moreitemname1\" ng-bind=\"item[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\r\n      <small ng-if=\"form.map.moreitemname2\" ng-bind=\"item[form.map.moreitemname2]\"></small></li>\r\n		</ul>\r\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-treeselect2.html","<div class=\"form-group {{form.htmlClass}} schema-form-treeselect\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol ui-select-container ui-select-bootstrap dropdown\" ng-href=\"\" ng-click=\"form.openSelect($event, form)\" ng-model=\"$$value$$\" schema-validate=\"form\" sf-changed=\"form\"><div ng-if=\"form.addDataOption\" class=\"input-group\"><div class=\"ui-select-match\" ng-class=\"form.fieldHtmlClass\">\r\n    <span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" style=\"outline: 0;\">\r\n      <span class=\"ui-select-match-text pull-left\"><div ng-bind-html=\"($$value$$?$$value$$[form.map.displayProp]:\'\') || form.placeholder\"></div>\r\n          <small ng-if=\"$$value$$ && form.map.moreitemname1\" ng-bind=\"$$value$$[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\r\n          <small ng-if=\"$$value$$ && form.map.moreitemname2\" ng-bind=\"$$value$$[form.map.moreitemname2]\"></small>\r\n      </span> \r\n      <i class=\"caret pull-right\"></i> \r\n    </span>\r\n  </div>\r\n  <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button>\r\n  </span></div><div ng-if=\"!form.addDataOption\" class=\"ui-select-match\" ng-class=\"form.fieldHtmlClass\">\r\n    <span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" style=\"outline: 0;\">\r\n      <span class=\"ui-select-match-text pull-left\"><div ng-bind-html=\"($$value$$?$$value$$[form.map.displayProp]:\'\') || form.placeholder\"></div>\r\n          <small ng-if=\"$$value$$ && form.map.moreitemname1\" ng-bind=\"$$value$$[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\r\n          <small ng-if=\"$$value$$ && form.map.moreitemname2\" ng-bind=\"$$value$$[form.map.moreitemname2]\"></small>\r\n      </span>\r\n      <i class=\"caret pull-right\"></i> \r\n    </span>\r\n  </div>\r\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/ngtree.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-class=\"{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" ng-bind-html=\"form.title\"></label>\r\n  <div class=\"jstree\" js-tree=\"form.options\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" should-apply=\"form.ignoreModelChanges()\" tree=\"form.treeInstance\" tree-events-obj=\"form.treeEventsObj\"></div>\r\n  <span ng-if=\"hasError() || hasSuccess()\"\r\n        id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\r\n        class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\r\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/popover-tree.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" ng-bind-html=\"form.title\"></label>\r\n  <br />\r\n  <div class=\"btn-group\">\r\n    <button type=\"button\" class=\"btn btn-default\" ng-click=\"form.open(\'sm\', $$value$$, form)\">{{form.name}}</button>\r\n  </div>\r\n  <span ng-if=\"hasError() || hasSuccess()\"\r\n        id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\r\n        class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\r\n  <script type=\"text/ng-template\" id=\"tree.html\">\r\n    <div class=\"modal-header\">\r\n      <h3 class=\"modal-title\" ng-bind-html=\"form.title\"></h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n      <div js-tree=\"form.options\" ng-model=\"items\" should-apply=\"form.ignoreModelChanges()\"\r\n           tree=\"form.treeInstance\" tree-events-obj=\"form.treeEventsObj\"></div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button>\r\n      <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </script>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/popover-user.html","<style>\r\n  .popover{\r\n    min-width: 900px;\r\n    width: 900px;\r\n  }\r\n  .title-btn {\r\n    position: absolute;\r\n    right: 2px;\r\n    top: 2px;\r\n    padding: 7px 9px !important;\r\n    border-radius: 100px !important;\r\n  }\r\n  .popover-inner{\r\n    position: relative;\r\n  }\r\n</style>\r\n<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" ng-bind-html=\"form.title\"></label>\r\n  <!--<br/>-->\r\n  <input ng-if=\"!form.fieldAddonLeft &amp;&amp; !form.fieldAddonRight\"\r\n         ng-show=\"form.key &amp;&amp; form.type!=\'label\'\"\r\n         type=\"string\"\r\n         step=\"any\" sf-changed=\"form\"\r\n         placeholder=\"{{form.placeholder}}\"\r\n         class=\"form-control ng-dirty\" id=\"publisherId\"\r\n         ng-model-options=\"form.ngModelOptions\"\r\n         ng-model=\"model[form.key]\"\r\n\r\n         uib-popover-template=\"\'popoverTemplate.html\'\"\r\n         popover-title=\"{{form.option.title}}\"\r\n         popover-placement=\"{{form.option.placement}}\"\r\n         popover-trigger=\"none\"\r\n         popover-is-open=\"form.popoverIsOpen\"\r\n         ng-click=\"form.popoverIsOpen=!form.popoverIsOpen\"\r\n\r\n         ng-init=\"editmodel.assignfield=form.assignfield\"\r\n\r\n         style=\"background-color: white;\"\r\n         readonly=\"readonly\"\r\n         schema-validate=\"form\" name=\"aniTitle\" aria-describedby=\"aniTitleStatus\" style=\"\">\r\n</div>\r\n<!--popover-->\r\n<script type=\"text/ng-template\" id=\"popoverTemplate.html\">\r\n  <div ng-controller=\"popoverCtrl\" id=\"popoverCtrl\" onkeydown=\"stopEnterEvent(event)\" onkeyup=\"stopEnterEvent(event)\" onkeypress=\"stopEnterEvent(event)\">\r\n    <button type=\"button\" class=\"circular ui icon button title-btn\" ng-click=\"form.popoverIsOpen=false\">\r\n      <i class=\"fa fa-close\"></i>\r\n    </button>\r\n    <div sf-schema=\"popoverschema\" sf-form=\"popoverform\" sf-model=\"model\" ng-init=\"initParams(form)\" sf-options=\"{ formDefaults: { disableSuccessState: true, feedback: false }}\"></div>\r\n  </div>\r\n</script>\r\n<script>\r\n  function popoverCtrl($scope, $http, Upload, $sce, $timeout) {\r\n    $scope.model = {search_key_type: [], selected: {}};\r\n    console.log(\"初始化idname\" + JSON.stringify($scope.$parent.model) + \"---------\\n\" + $scope.$parent.model[$scope.$parent.editmodel.assignfield.id]);\r\n    $scope.model.selected.id = $scope.$parent.model[$scope.$parent.editmodel.assignfield.id] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.id]+\"\").split(\",\") : [];\r\n    $scope.model.selected.name = $scope.$parent.model[$scope.$parent.editmodel.assignfield.name] ? $scope.$parent.model[$scope.$parent.editmodel.assignfield.name].split(\",\") : [];\r\n    $scope.model.selected.No = $scope.$parent.model[$scope.$parent.editmodel.assignfield.No] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.No]+\"\").split(\",\") : [];\r\n    $scope.model.selected.phone = $scope.$parent.model[$scope.$parent.editmodel.assignfield.phone] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.phone]+\"\").split(\",\") : [];\r\n    $scope.model.selected.uoiId = $scope.$parent.model[$scope.$parent.editmodel.assignfield.uoiId] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.uoiId]+\"\").split(\",\") : [];\r\n    $scope.model.selected.uuiGrade = $scope.$parent.model[$scope.$parent.editmodel.assignfield.uuiGrade] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.uuiGrade]+\"\").split(\",\") : [];\r\n\r\n    $scope.initParams =function(form){\r\n      $scope.model.multiselect=form.multiselect;\r\n      $scope.model.queryBy=form.option.queryBy;\r\n      $scope.model.criteria=form.option.criteria;\r\n    }\r\n    $scope.search_postdata = $.extend(GetUrlParsFun(), $scope.model);\r\n    $scope.popoverschema = {\r\n      type: \"object\",\r\n      title: \"Comment\",\r\n      properties: {\r\n        search_key_name: {\"type\": \"string\"}\r\n      },\r\n      required: []\r\n    };\r\n    $scope.popoverform = [\r\n      {\r\n        type: \"section\",\r\n        items: [\r\n          {\r\n            key: \"search_key_name\",\r\n            htmlClass: \"pull-left col-xs-6 col-sm-4 col-md-3 col-lg-2 no-padding-type\",// form-group-sm\",\r\n            fieldHtmlClass: \"ht-addon-left\",\r\n            type: \'text\',\r\n            notitle: true,\r\n            placeholder: \"输入关键字...\"\r\n          },\r\n          {\r\n            type: \'button\',\r\n            htmlClass: \"pull-left btn-margin-right\",\r\n            icon: \"glyphicon glyphicon-search\",\r\n            style: \"btn-info ht-addon-right\",\r\n            title: \'搜索\',\r\n            onClick: function () {\r\n              $scope.search_postdata[\'offset\'] = 0;\r\n              $(\'#popover_tbl_datapage_list\').bootstrapTable(\'selectPage\', 1);\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        type: \"template\",\r\n        template: \'<table id=\"popover_tbl_datapage_list\" ng-init=\"form.foo()\"></table>\',\r\n        name: \'popover_tbl_datapage_list\',\r\n        foo: function () {\r\n          $(\'#popover_tbl_datapage_list\').bootstrapTable({\r\n            method: \'post\',\r\n            contentType: \'application/x-www-form-urlencoded;charset=UTF-8\',\r\n            url: \'/api/sysuserinfo/getList\',\r\n            cache: false,\r\n            responseHandler: function (res) {\r\n              console.log(\"用户数据：\" + JSON.stringify(res));\r\n              return {\r\n                rows: (res && res.data && res.data.queryData && res.data.queryData.length > 0) ? res.data.queryData : [],\r\n                total: (res && res.data && res.data.totalCnt) ? res.data.totalCnt : 0,\r\n                pageNumber: (res && res.data && res.data.page) ? res.data.page : 1\r\n              };\r\n            },\r\n            queryParams: function (p) {\r\n              $scope.search_postdata[\"limit\"] = _.parseInt(p[\'limit\']);\r\n              $scope.search_postdata[\"is_page\"] = 1;\r\n              $scope.search_postdata.search_key_name = $scope.model.search_key_name;\r\n              var search_postdata = angular.copy($scope.search_postdata);\r\n              console.log(\"搜索参数：\" + JSON.stringify(search_postdata) + JSON.stringify($scope.model));\r\n              if (_.isUndefined(search_postdata.offset))\r\n                search_postdata[\'offset\'] = p[\'offset\'];\r\n              else\r\n                delete $scope.search_postdata.offset;\r\n              $scope.search_postdata[\'page\'] = _.parseInt(_.parseInt(search_postdata[\'offset\']) / _.parseInt(search_postdata[\'limit\'])) + 1;\r\n              search_postdata[\'page\'] = $scope.search_postdata[\'page\'];\r\n              ArrayObjectToIntData(search_postdata);\r\n              console.log(JSON.stringify($scope.$parent.model));\r\n              if($scope.$parent.model && $scope.$parent.model.abiId && ($scope.$parent.model.abiId.id || $scope.$parent.model.abiId.id ==0)\r\n                && $scope.model.queryBy == \"abiId\"){\r\n                search_postdata.abiId = $scope.$parent.model.abiId.id;\r\n              }\r\n              if($scope.model.criteria){\r\n                _.extend(search_postdata, $scope.model.criteria);\r\n              }\r\n              return search_postdata;\r\n            },\r\n            striped: true,\r\n            pagination: true,\r\n            sortName: \'sortno\',\r\n            sortOrder: \'desc\',\r\n            pageSize: 5,\r\n            locale: \'zh-CN\',\r\n            search: false,\r\n            clickToSelect: true,\r\n            onCheck: function (row) {\r\n              var uoiId = row.uoiId ? row.uoiId.id : \"\"\r\n              $scope.btnSelectUser(row.id, row.uuiName, row.gradeCode, row.uuiMobile || row.loginName, uoiId, row.uuiGrade);\r\n            },\r\n            onUncheck: function (row) {\r\n              var uoiId = row.uoiId ? row.uoiId.id : \"\"\r\n              $scope.btnSelectUser(row.id, row.uuiName, row.gradeCode, row.uuiMobile || row.loginName, uoiId, row.uuiGrade);\r\n            },\r\n            onCheckAll: function (rows) {\r\n              return false;\r\n            },\r\n            onUncheckAll: function (rows) {\r\n              return false;\r\n            },\r\n            queryParamsType: \'limit\',\r\n            sidePagination: \"server\",\r\n            smartDisplay: true,\r\n            checkboxHeader: false,\r\n            undefinedText: \'-\',\r\n            searchOnEnterKey: false,\r\n            minimumCountColumns: 1000,\r\n            selectItemName: \"选择\",\r\n            columns: [\r\n              {\r\n                radio: true,\r\n                align: \'center\',\r\n                valign: \'top\',\r\n                title: \"选择\",\r\n                visible: !$scope.model.multiselect ? true : false,\r\n                class: \'column_class\',\r\n                formatter: function (value, row, index) {\r\n                  if ($.inArray(row.id+\"\", $scope.model.selected.id) > -1) {\r\n                    return {checked: true}\r\n                  }\r\n                  return value;\r\n                }\r\n              },\r\n              {\r\n                checkbox: true,\r\n                align: \'center\',\r\n                valign: \'top\',\r\n                title: \"选择\",\r\n                visible: $scope.model.multiselect ? true : false,\r\n                class: \'column_class\',\r\n                formatter: function (value, row, index) {\r\n                  if ($scope.model.multiselect && $.inArray(row.id+\"\", $scope.model.selected.id) > -1) {\r\n                    return {checked: true}\r\n                  }\r\n                  return value;\r\n                }\r\n              },\r\n              {\r\n                field: \'uuiNum\',\r\n                title: \'序号\',\r\n                align: \'center\',\r\n                valign: \'top\',\r\n                visible: true,\r\n                class: \'column_class\',\r\n                formatter: function (value, row, index) {\r\n                  return _.toString((_.parseInt($scope.search_postdata[\'page\']) - 1) * _.parseInt($scope.search_postdata[\'limit\']) + 1 + index);\r\n                }\r\n              },\r\n              {\r\n                field: \'uoiId\',\r\n                title: \'隶属院系\',\r\n                align: \'center\',\r\n                valign: \'top\',\r\n                sortable: false,\r\n                visible: true,\r\n                class: \'column_class\',\r\n                formatter: function (value, row, index) {\r\n                  if (!_.isUndefined(value) && _.isObject(row[\"uoiId\"])) {\r\n                    return row[\"uoiId\"].fullName;\r\n                  }\r\n                  return \"&nbsp;\";\r\n                }\r\n              },\r\n              /*{\r\n                field: \'uuiGrade\',\r\n                title: \'年级\',\r\n                align: \'left\',\r\n                valign: \'top\',\r\n                sortable: false,\r\n                visible: true,\r\n                class: \'column_class\'\r\n              },*/\r\n              {\r\n                field: \'uuiName\',\r\n                title: \'姓名\',\r\n                align: \'left\',\r\n                valign: \'top\',\r\n                sortable: false,\r\n                visible: true,\r\n                class: \'column_class\'\r\n              },\r\n              {\r\n                field: \'gradeCode\',\r\n                title: \'学号\',\r\n                align: \'left\',\r\n                valign: \'top\',\r\n                sortable: false,\r\n                visible: true,\r\n                class: \'column_class\'\r\n              },\r\n              {\r\n                field: \'uuiMobile\',\r\n                title: \'手机号\',\r\n                align: \'left\',\r\n                valign: \'top\',\r\n                sortable: false,\r\n                visible: true,\r\n                class: \'column_class\'\r\n              },\r\n              {\r\n                field: \'uuiIdcard\',\r\n                title: \'身份证号码\',\r\n                align: \'left\',\r\n                valign: \'top\',\r\n                sortable: false,\r\n                visible: true,\r\n                class: \'column_class\'\r\n              },\r\n              {\r\n                field: \'uuiSex\',\r\n                title: \'性别\',\r\n                align: \'center\',\r\n                valign: \'top\',\r\n                sortable: false,\r\n                visible: true,\r\n                class: \'column_class\',\r\n                formatter: function (value, row, index) {\r\n                  if (value == 0 ) {\r\n                    return \"女\";\r\n                  } else if(value == 1){\r\n                    return \"男\";\r\n                  }\r\n                  return \"&nbsp;\";\r\n                }\r\n              },\r\n              {\r\n                field: \'uuiType\',\r\n                title: \'用户类型\',\r\n                align: \'center\',\r\n                valign: \'top\',\r\n                sortable: true,\r\n                visible: true,\r\n                class: \'column_class\',\r\n                formatter: function (value, row, index) {\r\n                  if (value == 0 ) {\r\n                    return \"默认用户\";\r\n                  } else if(value == 1){\r\n                    return \"老师\";\r\n                  } else if(value == 2){\r\n                    return \"学生\";\r\n                  }\r\n                  return \"&nbsp;\";\r\n                }\r\n              },\r\n              /*{\r\n                title: \'是否选取\',\r\n                align: \'center\',\r\n                valign: \'middle\',\r\n                visible: true,\r\n                class: \'column_class\',\r\n                formatter: function (value, row, index) {\r\n                  console.log(\"格式化\"+JSON.stringify(row.uoiId) + row.uoiId + \"\\n\" + JSON.stringify($scope.model.selected));\r\n                  var uoiId = row.uoiId ? row.uoiId.id : \"\"\r\n                  if ($.inArray(row.id+\"\", $scope.model.selected.id) > -1) {\r\n                    return \'<a href=\"javascript:void(0)\" class=\"flag_\' + row.id +\'\" onclick=\"btnSelectUser(this, \' + row.id\r\n                      + \',\\\'\' + row.uuiName + \'\\\',\\\'\' + row.gradeCode + \'\\\',\\\'\' + row.uuiMobile + \'\\\',\\\'\' + uoiId\r\n                      + \'\\\',\\\'\' + row.uuiGrade + \'\\\')\">取消</a>\';\r\n                  }\r\n                  return \'<a href=\"javascript:void(0)\" class=\"flag_\' + row.id +\'\" onclick=\"btnSelectUser(this, \' + row.id\r\n                    + \',\\\'\' + row.uuiName + \'\\\',\\\'\' + row.gradeCode + \'\\\',\\\'\' + row.uuiMobile + \'\\\',\\\'\' + uoiId\r\n                    + \'\\\',\\\'\' + row.uuiGrade + \'\\\')\">选取</a>\';\r\n                }\r\n              }*/\r\n            ]\r\n          });\r\n          $(window).resize(function () {\r\n            $(\'#popover_tbl_datapage_list\').bootstrapTable(\'resetView\');\r\n          });\r\n        }\r\n      }\r\n    ];\r\n    /*\r\n     * 数组删除某元素\r\n     * */\r\n    Array.prototype.remove = function (index) {\r\n      for (var i = 0; i < this.length; i++) {\r\n        if (i == index) {\r\n          this.splice(i, 1);\r\n          break;\r\n          console.log(\"删除元素\" + obj + \"数组\" + this);\r\n        }\r\n      }\r\n    }\r\n    //选择用户\r\n    $scope.btnSelectUser = function (id, name, No, phone, uoiId, uuiGrade) {\r\n      console.log(\"选择用户\\n\" + \"uoiId\" + JSON.stringify(uoiId));\r\n      var isSelected = false;\r\n      var arrIndex = $.inArray(id+\"\", $scope.model.selected.id);\r\n      if(!$scope.model.multiselect && $scope.model.selected.id == id)\r\n        return;\r\n      if(arrIndex > -1){\r\n        $scope.model.selected.id.remove(arrIndex);\r\n        $scope.model.selected.name.remove(arrIndex);\r\n        $scope.model.selected.No.remove(arrIndex);\r\n        $scope.model.selected.phone.remove(arrIndex);\r\n        $scope.model.selected.uoiId.remove(arrIndex);\r\n        $scope.model.selected.uuiGrade.remove(arrIndex);\r\n//        $(opt).html(\"选取\");\r\n      } else {\r\n        if($scope.model.selected.id.length > 0 && !$scope.model.multiselect){\r\n          var tmpIndex = $.inArray($scope.$parent.model[$scope.$parent.editmodel.assignfield.id]+\"\", $scope.model.selected.id);\r\n//          $(\".flag_\" + $scope.$parent.model[$scope.$parent.editmodel.assignfield.id]).html(\"选取\");\r\n          $scope.model.selected.id.remove(tmpIndex);\r\n          $scope.model.selected.name.remove(tmpIndex);\r\n          $scope.model.selected.No.remove(tmpIndex);\r\n          $scope.model.selected.phone.remove(tmpIndex);\r\n          $scope.model.selected.uoiId.remove(tmpIndex);\r\n          $scope.model.selected.uuiGrade.remove(tmpIndex);\r\n        }\r\n        $scope.model.selected.id.push(id+\"\");\r\n        $scope.model.selected.name.push(name);\r\n        $scope.model.selected.No.push(No);\r\n        $scope.model.selected.phone.push(phone);\r\n        $scope.model.selected.uoiId.push(uoiId);\r\n        $scope.model.selected.uuiGrade.push(uuiGrade);\r\n//        $(opt).html(\"取消\");\r\n      }\r\n//      console.log($scope.model.multiselect+\"\\n\\n\");\r\n//      if($scope.$parent.model[$scope.$parent.editmodel.assignfield.id] == id)\r\n//        $(opt).html(\"取消\");\r\n//        return;\r\n//      if($scope.$parent.model[$scope.$parent.editmodel.assignfield.id]){\r\n//        $(\".flag_\" + $scope.$parent.model[$scope.$parent.editmodel.assignfield.id]).html(\"选取\");\r\n//      }\r\n//      $(opt).html(\"取消\");\r\n      $timeout(function () {\r\n        if ($scope.$parent.editmodel.assignfield.id)\r\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.id] = $scope.model.selected.id.toString();\r\n        if ($scope.$parent.editmodel.assignfield.name)\r\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.name] = $scope.model.selected.name.toString();\r\n        if ($scope.$parent.editmodel.assignfield.No)\r\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.No] = $scope.model.selected.No.toString();\r\n        if ($scope.$parent.editmodel.assignfield.phone)\r\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.phone] = $scope.model.selected.phone.toString();\r\n        if ($scope.$parent.editmodel.assignfield.uoiId)\r\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.uoiId] = $scope.model.selected.uoiId.toString();\r\n        if ($scope.$parent.editmodel.assignfield.uuiGrade)\r\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.uuiGrade] = $scope.model.selected.uuiGrade.toString();\r\n        console.log(\"用户信息\" + JSON.stringify($scope.$parent.model) + id + \"--\" + name + \"--\" + No + \"--\" + phone + \"--\" + uoiId + \"--\" + uuiGrade);\r\n      });\r\n    }\r\n  }\r\n  //绑定选取用户方法\r\n  function btnSelectUser(opt, id, uuiName, gradeCode, uuiMobile, uoiId, uuiGrade) {\r\n    var tmpFn = GetAngularFun(\'#popoverCtrl\', \'btnSelectUser\');\r\n    tmpFn(opt, id, uuiName, gradeCode, uuiMobile, uoiId, uuiGrade);\r\n  }\r\n</script>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/table-title.html","<div sf-array=\"form\" class=\"form-group {{form.htmlClass}}\" style=\"clear: both\"\r\n     ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\">\r\n  <button ng-click=\"form.add()\" type=\"button\" class=\"btn btn-success pull-right\" style=\"margin-bottom:20px;margin-left: 10px\" ng-init=\"(!$$value$$ || $$value$$.length == 0 ) && form.add()\">\r\n    <i class=\"glyphicon glyphicon-plus\"></i> 增加{{form.title}}\r\n  </button>\r\n  <button ng-show=\"form.actionTitle\" ng-click=\"form.action()\" type=\"button\" class=\"btn btn-success pull-right\" style=\"margin-bottom:20px\">\r\n    {{form.actionTitle}} <i class=\"glyphicon glyphicon-chevron-right\"></i>\r\n  </button>\r\n  <h3>{{form.title}}</h3>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/table.html","<div ng-class=\"form.htmlClass\" style=\"clear: both\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\">\r\n\r\n  <div class=\"ng-table-toolbar\" ng-if=\"!form.hideTopToggle\">\r\n    <div id=\"toolbar_btnoption_list\" class=\"pull-left btn-group ng-scope\">\r\n      <div class=\"btnlist-inner\">\r\n        <button ng-repeat=\"btn in form.toolbar\" class=\"btn btn-default\" ng-class=\"btn.htmlClass\" type=\"button\" ng-if=\"btn.condition ? btn.condition() : true\"\r\n          ng-click=\"btn.action();\">\r\n			    <i ng-if=\"btn.icon\" ng-class=\"btn.icon\"></i> <span>{{btn.name}}</span>\r\n		    </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"columns columns-right btn-group pull-right\">\r\n      <button class=\"btn btn-default\" type=\"button\" name=\"refresh\" title=\"刷新\" ng-click=\"form.tableParams.reload()\"><i\r\n        class=\"refresh icon\"></i></button>\r\n      <button ng-if=\"form.showToggle\" class=\"btn btn-default\" ng-click=\"form.toggleView=!form.toggleView\" type=\"button\" name=\"toggle\"\r\n        title=\"切换\"><i\r\n        class=\"browser icon\"></i></button>\r\n      <div class=\"keep-open btn-group\" title=\"列\">\r\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i\r\n          class=\"grid layout icon\"></i> <span class=\"caret\"></span></button>\r\n        <ul class=\"dropdown-menu\" role=\"menu\">\r\n          <li ng-repeat=\"col in form.items\">\r\n            <label class=\"col-checkbox-label\" ng-class=\"{\'icon icon-home_Screen_hook active\': col.show}\"><input type=\"checkbox\" ng-model=\"col.show\"></label><span> {{col.title}}</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"export btn-group\">\r\n        <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\" aria-expanded=\"false\"><i\r\n          class=\"cloud download icon\"></i> <span class=\"caret\"></span></button>\r\n        <ul class=\"dropdown-menu export-table\" role=\"menu\">\r\n          <li><a title=\"excel\" href=\"javascript:void(0)\">MS-Excel</a></li>\r\n          <li><a title=\"csv\" href=\"javascript:void(0)\">CSV</a></li>\r\n          <li><a title=\"png\" href=\"javascript:void(0)\">PNG</a></li>\r\n          <!--<li><a title=\"pdf\" href=\"javascript:void(0)\">PDF</a></li>-->\r\n          <li><a title=\"doc\" href=\"javascript:void(0)\">MS-Word</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table table-scroll-plug ng-table-dynamic=\"form.tableParams with form.items\" template-pagination=\"customPagination.html\"\r\n      class=\"table table-hover\" ng-init=\"form.tableParams.settings({dataset: $$value$$ });\">\r\n      <tr ng-repeat=\"row in $data\">\r\n        <td ng-repeat=\"col in $columns\" ng-switch=\"col.type\" ng-style=\"col.style\" header=\"\'headerCheckbox.html\'\">\r\n          <!--<div ng-switch-when=\"checkRow\" ng-class=\"col.fieldClass\"><input type=\"checkbox\" ng-model=\"row[\'selected\']\" ng-click=\"form.selectOne($event)\" /></div>-->\r\n          \r\n          <div ng-switch-when=\"checkRow\" ng-class=\"col.fieldClass\"><label class=\"col-checkbox-label\" ng-class=\"{\'icon icon-home_Screen_hook active\': row[\'selected\']}\"><input type=\"checkbox\" ng-model=\"row[\'selected\']\" ng-click=\"form.selectOne($event)\" /></label></div>\r\n          \r\n          <div ng-switch-when=\"radioRow\" ng-class=\"col.fieldClass\"><input type=\"radio\" ng-model=\"form[\'selected\']\" ng-value=\"row\" /></div>\r\n          \r\n          <div ng-switch-when=\"serial\" ng-class=\"col.fieldClass\" ng-bind=\"$data.indexOf(row)+1+(params.count()*(params.page()-1))\"></div>\r\n          \r\n          <div ng-switch-when=\"txt\" ng-class=\"col.fieldClass\" ng-bind-html=\"col.formatter ? col.formatter(row[col.field], row, $index) : row[col.field]\"></div>\r\n          \r\n          <div ng-switch-when=\"actionLink\" ng-class=\"col.fieldClass\" ng-if=\"col.condition? col.condition : true\">\r\n            <a href=\"javascript:;\" ng-click=\"col.action(this, row)\" ng-bind-html=\"col.formatter ? col.formatter(row[col.field], row, $index) : row[col.field]\"></a>\r\n          </div>\r\n\r\n          <div ng-switch-when=\"input\" ng-class=\"col.fieldClass\">\r\n            <input type=\"{{col.inputType}}\" ng-model=\"row[col.field]\" />\r\n          </div>\r\n\r\n          <div ng-switch-when=\"template\" ng-class=\"col.fieldClass\">\r\n            <div ng-include=\"col.templateUrl\"></div>\r\n          </div>\r\n\r\n          <a ng-switch-when=\"button\" type=\"button\" class=\"btn\" ng-attr-title=\"{{col.title}}\" ng-class=\"col.fieldClass\" ng-click=\"col.action(this, row)\">\r\n            <span ng-if=\"col.iconClass\" class=\"glyphicon\" ng-class=\"col.iconClass\"></span>\r\n            <span ng-bind=\"col.text\"></span>\r\n          </a>\r\n\r\n          <div ng-switch-when=\"buttons\" ng-class=\"col.fieldClass\">\r\n            <a ng-repeat=\"colBtn in col.items\" type=\"button\" class=\"btn\" ng-attr-title=\"{{colBtn.title}}\" ng-class=\"colBtn.fieldClass\"\r\n              ng-click=\"colBtn.action(this, row)\">\r\n              <span ng-if=\"colBtn.iconClass\" class=\"glyphicon\" ng-class=\"colBtn.iconClass\"></span>\r\n              <span ng-bind=\"colBtn.text\"></span>\r\n            </a>\r\n          </div>\r\n          <div ng-switch-default>\r\n            [{{col.field}}]该列类型未开发。。。\r\n            <!--<sf-decorator ng-model=\"row\" form=\"col\"></sf-decorator>-->\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr ng-if=\"$data && $data.length == 0\">\r\n        <td class=\"schema-table-nodata\" ng-attr-colspan=\"{{$columns.length}}\">暂无该类数据</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <script type=\"text/ng-template\" id=\"customPagination.html\">\r\n    <div class=\"ng-cloak ng-table-pager\" ng-if=\"!params.settings().showPageListInfo && params.data.length\" style=\"display: inline-block;width: 100%; margin-bottom: 5px; clear: both;\">\r\n      <div class=\"pull-left\">\r\n        <span style=\"margin-left:5px; line-height: 32px;vertical-align: top;\">第{{params.page()}}/{{(params.settings().total / params.count()) | ceil}}页</span>\r\n        <div ng-if=\"params.settings().counts.length\" class=\"ng-table-counts btn-group\">\r\n          <select class=\"form-control\" ng-model=\"params.count\" ng-model-options=\"{ getterSetter: true }\" ng-options=\"count for count in params.settings().counts\">\r\n			    </select>\r\n        </div>\r\n      </div>\r\n      <ul ng-if=\"pages.length\" class=\"pagination ng-table-pagination pull-right\">\r\n        <li ng-repeat=\"page in pages\" ng-class=\"{\'disabled\': !page.active && !page.current, \'active\': page.current}\" ng-switch=\"page.type\">\r\n          <a ng-switch-when=\"prev\" ng-click=\"params.page(page.number)\" href=\"\">\r\n            <!--&lsaquo;-->上一页</a>\r\n          <a ng-switch-when=\"first\" ng-click=\"params.page(page.number)\" href=\"\">\r\n            <span ng-bind=\"page.number\"></span>\r\n          </a>\r\n          <a ng-switch-when=\"page\" ng-click=\"params.page(page.number)\" href=\"\">\r\n            <span ng-bind=\"page.number\"></span>\r\n          </a>\r\n          <a ng-switch-when=\"more\" ng-click=\"params.page(page.number)\" href=\"\">&#8230;</a>\r\n          <a ng-switch-when=\"last\" ng-click=\"params.page(page.number)\" href=\"\">\r\n            <span ng-bind=\"page.number\"></span>\r\n          </a>\r\n          <a ng-switch-when=\"next\" ng-click=\"params.page(page.number)\" href=\"\">\r\n            <!--&rsaquo;-->下一页</a>\r\n        </li>\r\n      </ul>\r\n      <ul ng-if=\"pages.length == 0\" class=\"pagination ng-table-pagination pull-right\">\r\n        <li class=\"disabled\">\r\n          <a href=\"\">上一页</a>\r\n        </li>\r\n        <li class=\"active\">\r\n          <a href=\"\">\r\n				    <span>1</span>\r\n			    </a>\r\n        </li>\r\n        <li class=\"disabled\">\r\n          <a href=\"\">下一页</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"pull-right\">\r\n        <!--<span style=\"margin-left:5px; line-height: 32px;vertical-align: top;\">共{{params.settings().total}}条记录，第{{params.page()}}/{{(params.settings().total / params.count()) | ceil}}页</span>-->\r\n        <span style=\"margin-left:5px; line-height: 32px;vertical-align: top;\">{{params.settings().total}}条</span>\r\n      </div>\r\n    </div>\r\n  </script>\r\n\r\n  <script type=\"text/ng-template\" id=\"headerCheckbox.html\">\r\n    <label class=\"col-checkbox-label\" ng-class=\"{\'icon icon-home_Screen_hook active\': form.checkedAll}\"><input type=\"checkbox\" ng-model=\"form.checkedAll\" class=\"select-all\" ng-click=\"form.selectAll($event)\" /></label>\r\n  </script>\r\n\r\n</div>");
$templateCache.put("directives/decorators/bootstrap/table/uploadfile.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\r\n  <div class=\"uploadfilebody\">\r\n  <a class=\"btn btn-success uploadfilebuttom\" ngf-select ngf-change=\"form.options.uploadPic($file, form.options, arrayIndex)\"\r\n          ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate?form.options.uploadvalidate:{size: {max: \'20MB\', min: \'10B\'}}\" ng-class=\"form.class\" tabindex=\"-1\">\r\n    <span ng-if=\"!$file[form.options.resultKey]\" ng-bind=\"$$value$$ ? \'重新上传\':\'上传文件\'\"></span>\r\n    <span class=\"file-progress\" ng-if=\"!$file[form.options.resultKey]\"\r\n          ng-show=\"$file[form.options.progressKey] >= 0\">\r\n      <span style=\"width:{{$file[form.options.progressKey]}}%\"\r\n            ng-bind=\"$file[form.options.progressKey] + \'%\'\"> </span>\r\n    </span>\r\n    <span ng-show=\"$file[form.options.resultKey]\">上传成功</span>\r\n  </a> <span class=\"uploadfilecls\" ng-if=\"form.options.showThumb && form.options.fileName\"> 已上传： {{form.options.fileName}}</span>\r\n  <br ng-if=\"form.options.suggestBottom\" />\r\n  <span class=\"uploadfilelabel\" ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span>\r\n  </div>\r\n  <span ng-if=\"$file[form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$file[form.options.errorMsgKey]}}</span>\r\n  <div class=\"help-block\" sf-message=\"form.description\"></div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/uploadfiles.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\r\n    <div class=\"uploadfilesbody\"><div class=\"uploadfilescls\" ng-repeat=\"f in $$value$$ track by $index\">\r\n    <span ng-if=\"$files[$index][form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$files[$index][form.options.errorMsgKey]}}</span>\r\n    <a ng-if=\"form.options.showThumb\" href=\"{{f}}\" target=\"_blank\">{{f.substring(f.lastIndexOf(\'/\')+1)}}</a>\r\n    <span class=\"file-progress\" ng-show=\"$files[$index][form.options.progressKey] >= 0\">\r\n        <div style=\"width:{{$files[$index][form.options.progressKey]}}%\" ng-bind=\"$files[$index][form.options.progressKey] + \'%\'\"></div>\r\n    </span>\r\n    <div ng-show=\"f\" class=\"icon icon-activities_icon_close file-del\"\r\n         ng-click=\"form.options.deleteFn($$value$$, f)\"></div>\r\n  </div>\r\n  <a ng-if=\"form.options.maxNum ? form.options.maxNum > $$value$$.length : true\" ngf-multiple=\"true\" class=\"btn btn-success uploadfilesbuttom\" ngf-select ngf-change=\"form.options.uploadPics($files, form.options, $$value$$)\"\r\n          ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate?form.options.uploadvalidate:{size: {max: \'20MB\', min: \'10B\'}}\" ng-class=\"form.class\" tabindex=\"-1\">\r\n    <span>批量上传</span>\r\n  </a>\r\n  <br ng-if=\"form.options.suggestBottom\" />\r\n  <span class=\"uploadfileslabel\" ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span></div>\r\n  <div class=\"help-block\" sf-message=\"form.description\"></div></div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/uploadpic.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\r\n  <a ng-if=\"form.options.showThumb\" href=\"{{$$value$$}}\" target=\"_blank\">\r\n    <img ng-if=\"form.options.showThumb\" ngf-src=\"$$value$$\"\r\n         height=\"{{form.options.thumbSize}}\"\r\n         width=\"{{form.options.thumbSize}}\" style=\"margin-bottom: 10px\" class=\"thumb\"/>\r\n  </a>\r\n  <br/>\r\n  <a class=\"btn btn-success\" ngf-select ngf-change=\"form.options.uploadPic($file, form.options, arrayIndex, $newFiles, $duplicateFiles, $invalidFiles, $event)\"\r\n     ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate\"\r\n     ngf-resize=\"{width: (form.options.resizewidth?form.options.resizewidth:960), quality: 0.8, type: \'image/jpeg\'}\"\r\n     ngf-resize-if=\"$width > (form.options.resizewidth?form.options.resizewidth:960) || $height > (form.options.resizewidth?form.options.resizewidth:960)\" ng-class=\"form.class\" tabindex=\"-1\">\r\n    <span ng-if=\"!$file[form.options.resultKey]\">上传图片</span>\r\n    <span class=\"file-progress\" ng-if=\"!$file[form.options.resultKey]\"\r\n          ng-show=\"$file[form.options.progressKey] >= 0\">\r\n      <span style=\"width:{{$file[form.options.progressKey]}}%\"\r\n            ng-bind=\"$file[form.options.progressKey] + \'%\'\"> </span>\r\n    </span>\r\n    <span ng-show=\"$file[form.options.resultKey]\">上传成功</span>\r\n  </a>\r\n  <br ng-if=\"form.options.suggestBottom\" />\r\n  <span ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span>\r\n  <span ng-if=\"$file[form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$file[form.options.errorMsgKey]}}</span>\r\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n</div></div>\r\n");
$templateCache.put("directives/decorators/bootstrap/table/uploadpics.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\r\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\r\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\r\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\r\n  <div ng-repeat=\"f in $$value$$ track by $index\">\r\n    <span ng-if=\"$files[$index][form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$files[$index][form.options.errorMsgKey]}}</span>\r\n    <a ng-if=\"form.options.showThumb\" href=\"{{f}}\" target=\"_blank\">\r\n      <img ngf-src=\"f\" height=\"{{form.options.thumbSize}}px\"\r\n           width=\"{{form.options.thumbSize}}px\" style=\"margin-bottom: 2px\" class=\"thumb\"/>\r\n    </a>\r\n    <span class=\"file-progress\" ng-show=\"$files[$index][form.options.progressKey] >= 0\">\r\n        <div style=\"width:{{$files[$index][form.options.progressKey]}}%\" ng-bind=\"$files[$index][form.options.progressKey] + \'%\'\"></div>\r\n    </span>\r\n    <div ng-show=\"f\" class=\"glyphicon glyphicon-remove-sign file-del\"\r\n         ng-click=\"form.options.deleteFn($$value$$, f)\"></div>\r\n  </div>\r\n  <a ngf-multiple=\"true\" class=\"btn btn-success\" ngf-select ngf-change=\"form.options.uploadPics($files, form.options, $$value$$, $newFiles, $duplicateFiles, $invalidFiles, $event)\"\r\n     ng-init=\"form.options.init($files, $$value$$);\"\r\n     ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate\"\r\n     ngf-resize=\"{width: (form.options.resizewidth?form.options.resizewidth:960), quality: 0.8, type: \'image/jpeg\', restoreExif: true}\"\r\n     ngf-resize-if=\"$width > (form.options.resizewidth?form.options.resizewidth:960) || $height > (form.options.resizewidth?form.options.resizewidth:960)\" ng-class=\"form.class\" tabindex=\"-1\">\r\n    <span>批量上传</span>\r\n  </a>\r\n  <br ng-if=\"form.options.suggestBottom\" />\r\n  <span ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span>\r\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\r\n</div></div>\r\n");}]);
angular.module('schemaForm').config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var base = 'directives/decorators/bootstrap/table/';

    var table = function(name, schema, options) {
      if (schema.type === 'array' && schema.format === 'table') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'table';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(table);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'table',
      base + 'table.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'table',
      base + 'table.html'
    );

    var tabletitle = function(name, schema, options) {
      if (schema.type === 'array' && schema.format === 'table-title') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'table-title';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(tabletitle);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'table-title',
      base + 'table-title.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'table-title',
      base + 'table-title.html'
    );

    var mosdefault = function(name, schema, options) {
      if (schema.format === 'default') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'default';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(mosdefault);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'default',
      base + 'mos-default.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'default',
      base + 'mos-default.html'
    );

    var mosmultiselect = function(name, schema, options) {
      if (schema.format === 'multi-select') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'multi-select';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(mosmultiselect);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'multi-select',
      base + 'mos-multiselect.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'multi-select',
      base + 'mos-multiselect.html'
    );

    var mosbuttongroup = function(name, schema, options) {
      if (schema.format === 'button-group') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'button-group';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mosbuttongroup);
    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'button-group',
      base + 'mos-button-group.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'button-group',
      base + 'mos-button-group.html'
    );
    var mosarray = function(name, schema, options) {
      if (schema.format === 'mos-array') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-array';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mosarray);
    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-array',
      base + 'mos-array.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-array',
      base + 'mos-array.html'
    );

    //MOS-COLOR
    var moscolor = function(name, schema, options) {
      if (schema.format === 'mos-color') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-color';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(moscolor);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-color',
      base + 'mos-color.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-color',
      base + 'mos-color.html'
    );

      //mos-textarea
      var mostextarea = function(name, schema, options) {
          if (schema.format === 'mos-textarea') {
              var f = schemaFormProvider.stdFormObj(name, schema, options);
              f.key  = options.path;
              f.type = 'mos-textarea';
              options.lookup[sfPathProvider.stringify(options.path)] = f;
              return f;
          }
      };
      schemaFormProvider.defaults.string.unshift(mostextarea);
      schemaFormDecoratorsProvider.addMapping(
          'bootstrapDecorator',
          'mos-textarea',
          base + 'mos-textarea.html'
      );
      schemaFormDecoratorsProvider.createDirective(
          'mos-textarea',
          base + 'mos-textarea.html'
      );
	  
	//mosselect
    var mosselect = function(name, schema, options) {
      if (schema.format === 'mos-select') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-select';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mosselect);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-select',
      base + 'mos-select.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-select',
      base + 'mos-select.html'
    );
	
    //MOSSelect2
    var mosselect2 = function(name, schema, options) {
      if (schema.format === 'mos-select2') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-select2';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mosselect2);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-select2',
      base + 'mos-select2.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-select2',
      base + 'mos-select2.html'
    );

    //MOS-Multiselect2
    var mosmultiselect2 = function(name, schema, options) {
      if (schema.format === 'mos-multiselect2') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-multiselect2';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mosmultiselect2);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-multiselect2',
      base + 'mos-multiselect2.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-multiselect2',
      base + 'mos-multiselect2.html'
    );

    //MOSTreeSelect2
    var mostreeselect2 = function(name, schema, options) {
      if (schema.format === 'mos-treeselect2') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-treeselect2';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mostreeselect2);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-treeselect2',
      base + 'mos-treeselect2.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-treeselect2',
      base + 'mos-treeselect2.html'
    );

    //MOS-treeMultiselect2
    var mostreemultiselect2 = function(name, schema, options) {
      if (schema.format === 'mos-treemultiselect2') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-treemultiselect2';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mostreemultiselect2);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-treemultiselect2',
      base + 'mos-treemultiselect2.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-treemultiselect2',
      base + 'mos-treemultiselect2.html'
    );
	
    var mostemplate = function(name, schema, options) {
      if (schema.format === 'mos-template') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-template';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mostemplate);
    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-template',
      'directives/decorators/bootstrap/table/mos-template.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-template',
      'directives/decorators/bootstrap/table/mos-template.html'
    );

    //UploadPic
    var uploadpic = function(name, schema, options) {
      if (schema.format === 'uploadpic') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uploadpic';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(uploadpic);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'uploadpic',
      base + 'uploadpic.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'uploadpic',
      base + 'uploadpic.html'
    );

    //UploadPics
    var uploadpics = function(name, schema, options) {
      if (schema.format === 'uploadpics') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uploadpics';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(uploadpics);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'uploadpics',
      base + 'uploadpics.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'uploadpics',
      base + 'uploadpics.html'
    );

      //cutUploadPic
      var cutuploadpic = function(name, schema, options) {
          if (schema.format === 'cutuploadpic') {
              var f = schemaFormProvider.stdFormObj(name, schema, options);
              f.key  = options.path;
              f.type = 'cutuploadpic';
              options.lookup[sfPathProvider.stringify(options.path)] = f;
              return f;
          }
      };
      schemaFormProvider.defaults.string.unshift(cutuploadpic);
      schemaFormDecoratorsProvider.addMapping(
          'bootstrapDecorator',
          'cutuploadpic',
          base + 'cutuploadpic.html'
      );
      schemaFormDecoratorsProvider.createDirective(
          'cutuploadpic',
          base + 'cutuploadpic.html'
      );

      //cutUploadPics
      var cutuploadpics = function(name, schema, options) {
          if (schema.format === 'cutuploadpics') {
              var f = schemaFormProvider.stdFormObj(name, schema, options);
              f.key  = options.path;
              f.type = 'cutuploadpics';
              options.lookup[sfPathProvider.stringify(options.path)] = f;
              return f;
          }
      };
      schemaFormProvider.defaults.string.unshift(cutuploadpics);
      schemaFormDecoratorsProvider.addMapping(
          'bootstrapDecorator',
          'cutuploadpics',
          base + 'cutuploadpics.html'
      );
      schemaFormDecoratorsProvider.createDirective(
          'cutuploadpics',
          base + 'cutuploadpics.html'
      );
    //uploadfile
    var uploadfile = function(name, schema, options) {
      if (schema.format === 'uploadfile') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uploadfile';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(uploadfile);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'uploadfile',
      base + 'uploadfile.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'uploadfile',
      base + 'uploadfile.html'
    );

    //uploadfiles
    var uploadfiles = function(name, schema, options) {
      if (schema.format === 'uploadfiles') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uploadfiles';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(uploadfiles);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'uploadfiles',
      base + 'uploadfiles.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'uploadfiles',
      base + 'uploadfiles.html'
    );

    //ckeditor
    var ckeditor = function(name, schema, options) {
      if (schema.format === 'ckeditor') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'ckeditor';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(ckeditor);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'ckeditor',
      base + 'ckeditor.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'ckeditor',
      base + 'ckeditor.html'
    );

    //ngtree
    var ngtree = function(name, schema, options) {
      if (schema.format === 'ngtree') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'ngtree';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(ngtree);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'ngtree',
      base + 'ngtree.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'ngtree',
      base + 'ngtree.html'
    );

    //popover-tree
    var popovertree = function(name, schema, options) {
      if (schema.format === 'popover-tree') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'popover-tree';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(popovertree);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'popover-tree',
      base + 'popover-tree.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'popover-tree',
      base + 'popover-tree.html'
    );

    //date-range
    var daterange = function(name, schema, options) {
      if (schema.format === 'date-range') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'date-range';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(daterange);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'date-range',
      base + 'date-range.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'date-range',
      base + 'date-range.html'
    );

    //mos-radio-buttons
    var mosradiobuttons = function(name, schema, options) {
      if (schema.format === 'mos-radio-buttons') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-radio-buttons';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mosradiobuttons);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-radio-buttons',
      base + 'mos-radio-buttons.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-radio-buttons',
      base + 'mos-radio-buttons.html'
    );
    //popoverUser
    var popoverUser = function(name, schema, options) {
      if (schema.format === 'popoverUser') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'popoverUser';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(popoverUser);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'popoverUser',
      base + 'popover-user.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'popoverUser',
      base + 'popover-user.html'
    );
    //moscommitinfo
    var moscommitinfo = function(name, schema, options) {
      if (schema.format === 'mos-commit-info') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-commit-info';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(moscommitinfo);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-commit-info',
      base + 'mos-commit-info.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-commit-info',
      base + 'mos-commit-info.html'
    );
    //mos-tree-grid
    var mostreegrid = function(name, schema, options) {
      if (schema.format === 'mos-tree-grid') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'mos-tree-grid';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(mostreegrid);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'mos-tree-grid',
      base + 'mos-tree-grid.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'mos-tree-grid',
      base + 'mos-tree-grid.html'
    );

    //mos-radios
    var mosradios = function(name, schema, options) {
        if (schema.format === 'mos-radios') {
            var f = schemaFormProvider.stdFormObj(name, schema, options);
            f.key  = options.path;
            f.type = 'mos-radios';
            options.lookup[sfPathProvider.stringify(options.path)] = f;
            return f;
        }
    };
    schemaFormProvider.defaults.string.unshift(mosradios);
    schemaFormDecoratorsProvider.addMapping(
        'bootstrapDecorator',
        'mos-radios',
        base + 'mos-radios.html'
    );
    schemaFormDecoratorsProvider.createDirective(
        'mos-radios',
        base + 'mos-radios.html'
    );

    //bs-table
    var bsTable = function (name, schema, options) {
      if (schema.format === 'bs-table') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key = options.path;
        f.type = 'bs-table';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.string.unshift(bsTable);
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'bs-table',
      base + 'bs-table.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'bs-table',
      base + 'bs-table.html'
    );

    schemaFormDecoratorsProvider.createDirectives({
      'mos-number' : base + 'mos-default.html',//数字组件
      'text' : base + 'mos-default.html',//默认，文本组件
      'date' : base + 'mos-default.html',//日期组件
      'password' : base + 'mos-default.html',//密码组件
      'input' : base + 'mos-default.html',//默认，文本组件
      'multi-select' : base + 'mos-multiselect.html',//多选组件
      'table-title' : base + 'table-title.html',//表头组件
      'table' : base + 'table.html',//表格组件
      'button-group' : base + 'mos-button-group.html',//按钮组组件
      'mos-array' : base + 'mos-array.html',//数据显示组件
      'mos-color' : base + 'mos-color.html',//颜色选择组件
      'mos-textarea' : base + 'mos-textarea.html',//对许框文字输入选择组件
      'mos-commit-info' : base + 'mos-commit-info.html',//自定义提交资料
      'mos-select' : base + 'mos-select.html',//选择组件
      'mos-select2' : base + 'mos-select2.html',//选择组件v2
      'mos-multiselect2' : base + 'mos-multiselect2.html',//多选组件v2
      'mos-treeselect2' : base + 'mos-treeselect2.html',//选择树形组件v2
      'mos-treemultiselect2' : base + 'mos-treemultiselect2.html',//多选树形组件v2
      'mos-template' : base + 'mos-template.html',//文本显示模板
      'uploadpic' : base + 'uploadpic.html',//上传组件
      'uploadpics' : base + 'uploadpics.html',//多文件上传组
      'cutuploadpic' : base + 'cutuploadpic.html',//上传组件
      'cutuploadpics' : base + 'cutuploadpics.html',//多文件上传组
      'uploadfile' : base + 'uploadfile.html',//上传文件组件
      'uploadfiles' : base + 'uploadfiles.html',//多文件上传组件
      'ckeditor' : base + 'ckeditor.html',
      'ngtree' : base + 'ngtree.html',
      'popover-tree' : base + 'popover-tree.html',
      'date-range' : base + 'date-range.html',
      'mos-radio-buttons' : base + 'mos-radio-buttons.html',
      'mos-tree-grid' : base + 'mos-tree-grid.html',
      'popoverUser' : base + 'popover-user.html',//用户选择弹出件
      'mos-radios' : base + 'mos-radios.html',
      'bs-table' : base + 'bs-table.html',
      'label' : base + 'mos-default.html'//表单标题组件
    });

  }
]);
