angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/table/bs-table.html","<div ng-class=\"form.htmlClass\" style=\"clear: both\">\r\n    <div class=\"ng-table-toolbar\" ng-if=\"!form.hideTopToggle\">\r\n        <div id=\"toolbar_btnoption_list\" class=\"pull-left\">\r\n            <div class=\"btnlist-inner\">\r\n                <button ng-repeat=\"btn in form.toolbar\" class=\"btn btn-default\" ng-class=\"btn.htmlClass\" \r\n                    type=\"button\" ng-if=\"btn.condition ? btn.condition() : true\"\r\n                    ng-click=\"btn.action()\">\r\n                    <i ng-if=\"btn.icon\" ng-class=\"btn.icon\"></i>\r\n                    <span>{{btn.name}}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <table ng-attr-id=\"{{ form.options.id }}\" bs-table-control=\"form.options\"></table>\r\n</div>");
$templateCache.put("directives/decorators/bootstrap/table/ckeditor.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\">\n    <!--<div ng-class=\"form.fieldHtmlClass\" ckeditor=\"form.options\" ng-model=\"$$value$$\" ready=\"form.onReady()\" schema-validate=\"form\"></div>-->\n    <textarea froala=\"form.options\" ng-model=\"$$value$$\" schema-validate=\"form\"></textarea>\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/cutuploadpic.html","<div class=\"upload-button form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n    <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\n      <div class=\"uploadimgbody\"><div ng-style=\"{\'background\':\'url(\'+($$value$$|formatImgUrl:form.options.suffix)+\') left top / 100% 100% no-repeat\'}\" class=\"uploadimgcls\"></div></div><div class=\"uploadimgcontent\">\n      <div class=\"uploadimgbuttom\" file-button file-change=\"$$value$$=image\" fl-title=\"剪裁\"\n           fl-image-format=\"form.options.imageFormat\" fl-aspect-ratio=\"form.options.aspectRatio\">\n        <span class=\'btn {{form.btnHtmlClass || \"btn-success\"}}\'>{{form.btn_title || \'选择图片\'}}</span>\n      </div>\n      <span class=\"uploadimglabel\" ng-if=\"form.options.suggestlabel\" ng-bind-html=\"form.options.suggestlabel\"></span></div>\n      <div class=\"help-block\" sf-message=\"form.description\"></div>\n    </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/cutuploadpics.html","<div class=\"upload-buttons form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\n    <div class=\"upload-img-one\" ng-repeat=\"pic in $$value$$ track by $index\">\n      <div ng-style=\"{\'background\':\'url(\'+(pic|formatImgUrl:form.options.suffix)+\') left top / 100% 100% no-repeat\'}\" class=\"uploadimgscls\"></div>\n      <div class=\"icon-activities_icon_close file-del\" ng-click=\"$$value$$.splice($index, 1)\"></div>\n    </div>\n    <div class=\"uploadimgscontent\"><div class=\"uploadimgsbuttom\" ng-if=\"form.options.maxNum ? form.options.maxNum > $$value$$.length : true\"\n         class=\"upload-img-one upload-btn\" file-button file-change=\"$$value$$.push(image)\"\n         fl-title=\"剪裁\" fl-image-format=\"form.options.imageFormat\" fl-aspect-ratio=\"form.options.aspectRatio\">\n      <span class=\'btn {{form.btnHtmlClass || \"btn-success\"}}\'>{{form.btn_title || \'选择图片\'}}</span>\n    </div>\n    <span class=\"uploadimgslabel\" ng-if=\"form.options.suggestlabel\" ng-bind-html=\"form.options.suggestlabel\"></span></div>\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/date-range.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\"  ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol {{form.fieldHtmlClass}}\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n    <input\n      type=\"daterange\"\n      id=\"{{form.key.slice(-1)[0]}}\"\n      placeholder=\"{{form.placeholder}}\"\n      class=\"form-control {{form.fieldHtmlClass}}\"\n      sf-changed=\"form\"\n      ng-model-options=\"form.ngModelOptions\"\n      ng-model=\"$$value$$\"\n      enabletimepicker=\"form.enabletimepicker||MosEnum.momentTimepicker\"\n      single-date-picker=\"form.singleDatePicker\"\n      min-date=\"form.minDate\"\n      max-date=\"form.maxDate\"\n      limit=\"form.limit\"\n      format=\"form.locale.format\"\n      separator=\"form.locale.separator\"\n      locale=\"form.locale||MosEnum.momentLocales\"\n      ranges=\"form.ranges||MosEnum.momentRanges\"\n      ng-disabled=\"{{form.readonly}}\"\n      schema-validate=\"form\"\n      aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"/>\n    <span ng-if=\"form.fieldAddonRight && form.fieldAddonRight.type!=\'button\'\"\n          class=\"input-group-addon  {{form.fieldAddonRight.htmlClass}}\"> </span>\n    <span ng-if=\"form.feedback !== false\"\n          class=\"form-control-feedback\"\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n          aria-hidden=\"true\"></span>\n    <span ng-if=\"hasError() || hasSuccess()\"\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\n          class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-array.html","<div sf-array=\"form\" class=\"form-group-sm {{form.htmlClass}}\" style=\"margin-bottom:15px\"\n     ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\">\n  <div style=\"padding-right:0;width:100%\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"modelArray\">\n    <sf-decorator ng-repeat=\"tmpform in form.items\" ng-init=\"tmpform.notitle = true\" class=\"{{tmpform.htmlClass}}\" form=\"tmpform\"></sf-decorator>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-button-group.html","<div class=\"btn-group\" ng-model=\"$$value$$\" >\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle {{form.htmlClass}}\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    {{form.title}} <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu dropdown-menu-right\">\n    <li ng-repeat=\"item in form.actions\" role=\"{{item.title}}\" class=\"{{item.title!=\'separator\' ? \'\' : \'divider\'}}\">\n      <a href=\"#.\" ng-click=\"item.onClick($event)\" ng-hide=\"item.title==\'separator\'\">{{item.title}}</a>\n    </li>\n  </ul>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-color.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\"><input colorpicker type=\"text\"\n         sf-changed=\"form\"\n         placeholder=\"{{form.placeholder}}\"\n         class=\"form-control {{form.fieldHtmlClass}}\"\n         ng-model=\"$$value$$\"\n         ng-disabled=\"{{form.readonly}}\"\n         schema-validate=\"form\" ><div class=\"help-block\" sf-message=\"form.description\"></div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-commit-info.html","<div class=\"form-group {{form.htmlClass}}\">\n  <label class=\"control-label\" ng-bind-html=\"form.title + \'：\'\"></label>\n  <div class=\"joininputcol\"><div class=\"list-group-item\">\n    <span ng-bind-html=\"JSON.stringify($$value$$)\"></span>\n    <div class=\"form-group {{form.fieldHtmlClass}} schema-form-string\" ng-repeat=\"item in $$value$$\" ng-model=\"$$value$$\">\n      <span ng-if=\"item.isRequire\" style=\"color: red;\">*&nbsp;</span><label class=\"control-label\" ng-bind-html=\"item.sciTitle + \'：\'\"></label>\n      <input ng-if=\"item.sciType && item.sciType.value == 0\" ng-disabled=\"form.readonly\" class=\"form-control\" type=\"string\" ng-model=\"item.srciValue\">\n      <select ng-if=\"item.sciType && item.sciType.value == 1\"\n              ng-model=\"item.srciValue\"\n              ng-model-options=\"form.ngModelOptions\"\n              sf-changed=\"form\"\n              ng-disabled=\"form.readonly\"\n              class=\"form-control  ng-valid-schema-form ng-touched\"\n              schema-validate=\"form\" name=\"noenum{{$index}}\"\n              ng-options=\"option.scoiNum as option.name  for option in item.options\" >\n      </select>\n      <div ng-if=\"item.sciType && item.sciType.value == 2\">\n        <div class=\"radio\" ng-repeat=\"option in item.options\">\n          <label>\n            <input type=\"radio\" class=\"\" sf-changed=\"form\" ng-disabled=\"form.readonly\" ng-model=\"item.srciValue\"\n                   ng-value=\"option.scoiNum\" name=\"radios{{option.sciId}}\">\n            <span ng-bind-html=\"option.name\" class=\"ng-binding\"></span>\n          </label>\n        </div>\n      </div>\n      <div ng-if=\"item.sciType && item.sciType.value == 3\">\n        <div class=\"checkbox\" ng-repeat=\"option in item.options track by $index\">\n          <label>\n            <input type=\"checkbox\"\n              ng-disabled=\"form.readonly\"\n              sf-changed=\"form\"\n              ng-true-value=\"true\" ng-false-value=\"false\"\n              class=\"ng-dirty ng-valid-parse ng-touched\"\n              ng-value=\"option.scoiNum\"\n              name=\"checkbox{{option.sciId}}\"\n              ng-model=\"option.srciValue\" >\n            <span ng-bind-html=\"option.name\" class=\"ng-binding\">a</span>\n          </label>\n        </div>\n      </div>\n      <textarea ng-if=\"item.sciType && item.sciType.value == 4\" ng-disabled=\"form.readonly\"  ng-model=\"item.srciValue\" class=\"form-control\"></textarea>\n    </div>\n  </div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-default.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\">\n    <input ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"\n           ng-show=\"form.key && form.type!=\'label\'\"\n           autocomplete=\"nope\"\n           type=\"{{form.input_type || form.type.replace(\'mos-\',\'\')}}\"\n           step=\"any\"\n           sf-changed=\"form\"\n           placeholder=\"{{form.placeholder}}\"\n           class=\"form-control {{form.fieldHtmlClass}}\"\n           ng-model-options=\"form.ngModelOptions\"\n           ng-model=\"$$value$$\"\n           ng-disabled=\"{{form.readonly}}\"\n           schema-validate=\"form\"\n           aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\">\n\n    <span ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" class=\"form-control {{form.fieldHtmlClass}}\"\n          ng-show=\"form.key && form.type==\'label\'\">{{$$value$$}}</span>\n\n    <div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n\n      <span ng-if=\"form.fieldAddonLeft && !form.fieldAddonLeft.hasOwnProperty(\'type\')\"\n            class=\"input-group-addon {{form.fieldAddonLeft.htmlClass}}\"\n            ng-bind-html=\"form.fieldAddonLeft\"></span>\n\n      <span ng-if=\"form.fieldAddonLeft && form.fieldAddonLeft.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonLeft[\'htmlClass\']=\'input-group-btn\'\">\n        <sf-decorator form=\"form.fieldAddonLeft\"></sf-decorator>\n      </span>\n\n      <input ng-show=\"form.key && form.type!=\'label\'\"\n             autocomplete=\"nope\"\n             type=\"{{form.input_type || form.type.replace(\'mos-\',\'\')}}\"\n             step=\"any\"\n             sf-changed=\"form\"\n             placeholder=\"{{form.placeholder}}\"\n             class=\"form-control {{form.fieldHtmlClass}}\"\n             ng-model-options=\"form.ngModelOptions\"\n             ng-model=\"$$value$$\"\n             ng-disabled=\"{{form.readonly}}\"\n             schema-validate=\"form\"\n             aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\">\n\n      <span class=\"form-control {{form.fieldHtmlClass}}\"\n            ng-show=\"form.key && form.type==\'label\'\">{{$$value$$}}</span>\n\n\n      <span ng-if=\"form.fieldAddonRight && !form.fieldAddonRight.hasOwnProperty(\'type\')\"\n            class=\"input-group-addon  {{form.fieldAddonRight.htmlClass}}\"\n            ng-bind-html=\"form.fieldAddonRight\"></span>\n\n      <span ng-if=\"form.fieldAddonRight && form.fieldAddonRight.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonRight[\'htmlClass\']=\'input-group-btn\'\">\n        <sf-decorator form=\"form.fieldAddonRight\"></sf-decorator>\n      </span>\n\n    </div>\n\n    <span ng-if=\"form.feedback !== false\"\n          class=\"form-control-feedback\"\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n          aria-hidden=\"true\"></span>\n\n    <span ng-if=\"hasError() || hasSuccess()\"\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\n          class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-multiselect.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\">\n  <div ng-dropdown-multiselect=\"\"\n       class=\"{{form.controlHtmlClass}}\"\n       ng-model-options=\"form.ngModelOptions\"\n       options=\"form.titleMap\"\n       ng-disabled=\"{{form.readonly}}\"\n       selected-model=\"$$value$$\"\n       translation-texts=\"form.selectText\"\n       group-by=\"{{form.groupField}}\"\n       extra-settings=\"form.map\"></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-multiselect2.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\">\n    <div ng-if=\"form.addDataOption\" class=\"input-group\"><ui-select multiple ng-model=\"$$value$$\" theme=\"select2\" ng-disabled=\"{{form.readonly}}\"\n             class=\"{{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\n    <ui-select-match placeholder=\"{{form.placeholder}}\">{{$item[form.map.displayProp]}}</ui-select-match>\n    <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search)\"\n                       refresh=\"form.refreshData($select.search, form)\"\n                       refresh-delay=\"500\">\n      <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\n      <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\n    </ui-select-choices>\n  </ui-select>\n  <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button>\n  </span></div>\n  <ui-select ng-if=\"!form.addDataOption\" multiple ng-model=\"$$value$$\" theme=\"select2\" ng-disabled=\"{{form.readonly}}\"\n               class=\"joininputcol {{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\n      <ui-select-match placeholder=\"{{form.placeholder}}\">{{$item[form.map.displayProp]}}</ui-select-match>\n      <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search)\"\n                         refresh=\"form.refreshData($select.search, form)\"\n                         refresh-delay=\"500\">\n        <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\n        <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\n      </ui-select-choices>\n    </ui-select>\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <div>\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  </div>\n  <div class=\"joininputcol\">\n  <div class=\"btn-group\">\n    <label class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\"\n           ng-class=\"{ active: item.value === $$value$$ }\"\n           ng-repeat=\"item in form.titleMap\">\n      <input type=\"radio\"\n             class=\"{{form.fieldHtmlClass}}\"\n             sf-changed=\"form\"\n             style=\"display: none;\"\n             ng-disabled=\"form.readonly\"\n             ng-model=\"$$value$$\"\n             ng-model-options=\"form.ngModelOptions\"\n             schema-validate=\"form\"\n             ng-value=\"item.value\"\n             name=\"{{form.key.join(\'.\')}}\">\n      <span ng-bind-html=\"item.name\"></span>\n    </label>\n  </div><div class=\"help-block\" sf-message=\"form.description\"></div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-radios.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\">\n  <div class=\"radio\" class=\"{{form.fieldHtmlClass}}\">\n    <label class=\"join-radio\" ng-repeat=\"item in form.titleMap\">\n      <input type=\"radio\"\n             sf-changed=\"form\"\n             style=\"display: none;\"\n             ng-disabled=\"form.readonly\"\n             ng-model=\"$$value$$\"\n             ng-model-options=\"form.ngModelOptions\"\n             schema-validate=\"form\"\n             ng-value=\"item.value\"\n             name=\"{{form.key.join(\'.\')}}\">\n      <span ng-class=\"{\'icon-activities_icon_Radio\': item.value === $$value$$, \'icon-activities_icon_Radio_nor\': item.value !== $$value$$}\"></span>\n      <span ng-bind-html=\"item.name\"></span>\n      <span ng-if=\"item.label\" class=\"join-radio-label\" ng-bind-html=\"item.label\"></span>\n    </label>\n    <span ng-if=\"form.suggestlabel\" ng-bind-html=\"form.suggestlabel\"></span>\n  </div><div class=\"help-block\" sf-message=\"form.description\"></div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-select.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\"><select ng-model=\"$$value$$\"\n          ng-model-options=\"form.ngModelOptions\"\n          sf-changed=\"form\"\n          ng-disabled=\"{{form.readonly}}\"\n          class=\"form-control {{form.fieldHtmlClass}}\"\n          schema-validate=\"form\"\n          ng-options=\"item[form.map.value || \'value\'] as item[form.map.name || \'name\'] group by item.group for item in form.titleMap\"\n          name=\"{{form.key.slice(-1)[0]}}\">\n    <option value=\"\">{{form.placeholder||\'请选择...\'}}</option>\n  </select><div class=\"help-block\" sf-message=\"form.description\"></div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-select2.html","<!--http://dotansimha.github.io/angularjs-dropdown-multiselect/#/-->\n<div class=\"form-group {{form.htmlClass}} schema-form-select\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\"><div ng-if=\"form.addDataOption\" class=\"input-group\"><ui-select ng-model=\"$$value$$\" theme=\"bootstrap\"\n             ng-disabled=\"{{form.readonly}}\"\n             reset-search-input=\"false\"\n             class=\"{{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\n    <ui-select-match placeholder=\"{{form.placeholder}}\">{{$select.selected[form.map.displayProp]}}</ui-select-match>\n    <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search) track by $index\"\n                       refresh=\"form.refreshData($select.search, form)\"\n                       refresh-delay=\"500\">\n      <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\n      <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\n    </ui-select-choices>\n  </ui-select>\n  <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button>\n  </span></div>\n    <ui-select ng-if=\"!form.addDataOption\" ng-model=\"$$value$$\" theme=\"bootstrap\"\n               ng-disabled=\"{{form.readonly}}\"\n               reset-search-input=\"false\"\n               class=\"joininputcol {{form.fieldHtmlClass}}\" schema-validate=\"form\" sf-changed=\"form\">\n      <ui-select-match placeholder=\"{{form.placeholder}}\">{{$select.selected[form.map.displayProp]}}</ui-select-match>\n      <ui-select-choices repeat=\"tmpitem in form.titleMap | propsFilter: form.filter1($select.search) track by $index\"\n                         refresh=\"form.refreshData($select.search, form)\"\n                         refresh-delay=\"500\">\n        <div ng-bind-html=\"tmpitem[form.map.displayProp] | highlight: $select.search\"></div>\n        <small ng-if=\"form.map.moreitemname1\"><span ng-bind-html=\"tmpitem[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></span><span ng-if=\"form.map.moreitemname2\" ng-bind-html=\"tmpitem[form.map.moreitemname2]\"></span></small>\n      </ui-select-choices>\n    </ui-select>\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-template.html","<div class=\"{{form.htmlClass}}\">\n  <label class=\"{{form.fieldHtmlClass}}\" ng-bind-html=\"form.title\"></label>\n  <label class=\"joininputcol\" ng-class=\"form.labelHtmlClass\" ng-bind-html=\"(form.formatterFn?form.formatterFn($$value$$):$$value$$)\"></label>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-textarea.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\">\n    <textarea sf-changed=\"form\"\n              placeholder=\"{{form.placeholder}}\"\n              class=\"form-control {{form.fieldHtmlClass}}\"\n              id=\"{{form.key.slice(-1)[0]}}\"\n              ng-model-options=\"form.ngModelOptions\"\n              ng-model=\"$$value$$\"\n              ng-disabled=\"{{form.readonly}}\"\n              schema-validate=\"form\"\n              name=\"{{form.key.slice(-1)[0]}}\"></textarea>\n\n    <div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n\n      <span ng-if=\"form.fieldAddonLeft && !form.fieldAddonLeft.hasOwnProperty(\'type\')\"\n            class=\"input-group-addon {{form.fieldAddonLeft.htmlClass}}\"\n            ng-bind-html=\"form.fieldAddonLeft\"></span>\n\n      <span ng-if=\"form.fieldAddonLeft && form.fieldAddonLeft.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonLeft[\'htmlClass\']=\'input-group-btn\'\">\n        <sf-decorator form=\"form.fieldAddonLeft\"></sf-decorator>\n      </span>\n      <textarea sf-changed=\"form\"\n             placeholder=\"{{form.placeholder}}\"\n             class=\"form-control {{form.fieldHtmlClass}}\"\n             id=\"{{form.key.slice(-1)[0]}}\"\n             ng-model-options=\"form.ngModelOptions\"\n             ng-model=\"$$value$$\"\n             ng-disabled=\"{{form.readonly}}\"\n             schema-validate=\"form\"\n             name=\"{{form.key.slice(-1)[0]}}\"></textarea>\n\n      <span ng-if=\"form.fieldAddonRight && !form.fieldAddonRight.hasOwnProperty(\'type\')\"\n            class=\"input-group-addon  {{form.fieldAddonRight.htmlClass}}\"\n            ng-bind-html=\"form.fieldAddonRight\"></span>\n\n      <span ng-if=\"form.fieldAddonRight && form.fieldAddonRight.hasOwnProperty(\'type\')\" class=\"input-group-btn\" ng-init=\"form.fieldAddonRight[\'htmlClass\']=\'input-group-btn\'\">\n        <sf-decorator form=\"form.fieldAddonRight\"></sf-decorator>\n      </span>\n\n    </div>\n\n    <span ng-if=\"form.feedback !== false\"\n          class=\"form-control-feedback\"\n          ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n          aria-hidden=\"true\"></span>\n\n    <span ng-if=\"hasError() || hasSuccess()\"\n          id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\n          class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-tree-grid.html","<tree-grid tree-data=\"$$value$$\" col-defs=\"form.col_defs\" expand-on=\"form.expanding_property\" tree-control=\"form.control_tree\" icon-leaf=\"{{form.iconLeaf ? form.iconLeaf : \'file icon\'}}\" icon-expand=\"{{form.iconExpand ? form.iconExpand : \'plus icon\'}}\" icon-collapse=\"{{form.iconCollapse ? form.iconCollapse : \'minus icon\'}}\" on-select=\"form.gridtree_selecthandler(branch)\" on-click=\"form.gridtree_clickhandler(branch)\" expand-level=\"{{form.expandLevel?form.expandLevel:\'2\'}}\"></tree-grid>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-treemultiselect2.html","<div class=\"form-group {{form.htmlClass}} schema-form-treemultiselect\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\">\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\" ng-show=\"showTitle()\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-model=\"$$value$$\" ng-href=\"\" ng-click=\"form.openSelect($event, form)\" schema-validate=\"form\" sf-changed=\"form\">\n    <div ng-if=\"form.addDataOption\" class=\"input-group\"><ul class=\"select2-choices\">\n      <li class=\"select2-search-field\" ng-if=\"!$$value$$ || $$value$$.length == 0\"><input type=\"text\"  class=\"select2-input ui-select-search ng-pristine\" readonly=\"readonly\" placeholder=\"{{form.placeholder}}\"></li>\n			<li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"item in $$value$$\">\n			<div ng-bind-html=\"item[form.map.displayProp]\"></div>\n      <small ng-if=\"form.map.moreitemname1\" ng-bind=\"item[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\n      <small ng-if=\"form.map.moreitemname2\" ng-bind=\"item[form.map.moreitemname2]\"></small></li>\n		</ul>\n    <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button></span>\n  </div>\n  <ul ng-if=\"!form.addDataOption\" class=\"select2-choices\">\n    <li class=\"select2-search-field\" ng-if=\"!$$value$$ || $$value$$.length == 0\"><input type=\"text\"  class=\"select2-input ui-select-search ng-pristine\" readonly=\"readonly\" placeholder=\"{{form.placeholder}}\"></li>\n			<li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"item in $$value$$\">\n			<div ng-bind-html=\"item[form.map.displayProp]\"></div>\n      <small ng-if=\"form.map.moreitemname1\" ng-bind=\"item[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\n      <small ng-if=\"form.map.moreitemname2\" ng-bind=\"item[form.map.moreitemname2]\"></small></li>\n		</ul>\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/mos-treeselect2.html","<div class=\"form-group {{form.htmlClass}} schema-form-treeselect\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label ng-if=\"!form.notitle\" class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" ng-class=\"{\'schema-form-required\': form.inputrequired === true}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol ui-select-container ui-select-bootstrap dropdown\" ng-href=\"\" ng-click=\"form.openSelect($event, form)\" ng-model=\"$$value$$\" schema-validate=\"form\" sf-changed=\"form\"><div ng-if=\"form.addDataOption\" class=\"input-group\"><div class=\"ui-select-match\" ng-class=\"form.fieldHtmlClass\">\n    <span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" style=\"outline: 0;\">\n      <span class=\"ui-select-match-text pull-left\"><div ng-bind-html=\"($$value$$?$$value$$[form.map.displayProp]:\'\') || form.placeholder\"></div>\n          <small ng-if=\"$$value$$ && form.map.moreitemname1\" ng-bind=\"$$value$$[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\n          <small ng-if=\"$$value$$ && form.map.moreitemname2\" ng-bind=\"$$value$$[form.map.moreitemname2]\"></small>\n      </span> \n      <i class=\"caret pull-right\"></i> \n    </span>\n  </div>\n  <span class=\"input-group-btn\"><button class=\"btn\" ng-class=\"form.addDataOption.class\" type=\"button\" ng-click=\"form.addDataOption.cb($event,form)\"><span class=\"icon-activities_icon_add\" style=\"padding-right:5px;\" ng-if=\"!form.addDataOption.title\"></span>{{form.addDataOption.title||\'新增\'}}</button>\n  </span></div><div ng-if=\"!form.addDataOption\" class=\"ui-select-match\" ng-class=\"form.fieldHtmlClass\">\n    <span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" style=\"outline: 0;\">\n      <span class=\"ui-select-match-text pull-left\"><div ng-bind-html=\"($$value$$?$$value$$[form.map.displayProp]:\'\') || form.placeholder\"></div>\n          <small ng-if=\"$$value$$ && form.map.moreitemname1\" ng-bind=\"$$value$$[form.map.moreitemname1]\" style=\"padding-right: 10px;\"></small>\n          <small ng-if=\"$$value$$ && form.map.moreitemname2\" ng-bind=\"$$value$$[form.map.moreitemname2]\"></small>\n      </span>\n      <i class=\"caret pull-right\"></i> \n    </span>\n  </div>\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/ngtree.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" ng-bind-html=\"form.title\"></label>\n  <div class=\"jstree\" js-tree=\"form.options\" sf-changed=\"form\" schema-validate=\"form\" ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\" should-apply=\"form.ignoreModelChanges()\" tree=\"form.treeInstance\" tree-events-obj=\"form.treeEventsObj\"></div>\n  <span ng-if=\"hasError() || hasSuccess()\"\n        id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\n        class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/popover-tree.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" ng-bind-html=\"form.title\"></label>\n  <br />\n  <div class=\"btn-group\">\n    <button type=\"button\" class=\"btn btn-default\" ng-click=\"form.open(\'sm\', $$value$$, form)\">{{form.name}}</button>\n  </div>\n  <span ng-if=\"hasError() || hasSuccess()\"\n        id=\"{{form.key.slice(-1)[0] + \'Status\'}}\"\n        class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n  <script type=\"text/ng-template\" id=\"tree.html\">\n    <div class=\"modal-header\">\n      <h3 class=\"modal-title\" ng-bind-html=\"form.title\"></h3>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"help-block\" sf-message=\"form.description\"></div>\n      <div js-tree=\"form.options\" ng-model=\"items\" should-apply=\"form.ignoreModelChanges()\"\n           tree=\"form.treeInstance\" tree-events-obj=\"form.treeEventsObj\"></div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button>\n      <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\n    </div>\n  </script>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/popover-user.html","<style>\n  .popover{\n    min-width: 900px;\n    width: 900px;\n  }\n  .title-btn {\n    position: absolute;\n    right: 2px;\n    top: 2px;\n    padding: 7px 9px !important;\n    border-radius: 100px !important;\n  }\n  .popover-inner{\n    position: relative;\n  }\n</style>\n<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" ng-bind-html=\"form.title\"></label>\n  <!--<br/>-->\n  <input ng-if=\"!form.fieldAddonLeft &amp;&amp; !form.fieldAddonRight\"\n         ng-show=\"form.key &amp;&amp; form.type!=\'label\'\"\n         type=\"string\"\n         step=\"any\" sf-changed=\"form\"\n         placeholder=\"{{form.placeholder}}\"\n         class=\"form-control ng-dirty\" id=\"publisherId\"\n         ng-model-options=\"form.ngModelOptions\"\n         ng-model=\"model[form.key]\"\n\n         uib-popover-template=\"\'popoverTemplate.html\'\"\n         popover-title=\"{{form.option.title}}\"\n         popover-placement=\"{{form.option.placement}}\"\n         popover-trigger=\"none\"\n         popover-is-open=\"form.popoverIsOpen\"\n         ng-click=\"form.popoverIsOpen=!form.popoverIsOpen\"\n\n         ng-init=\"editmodel.assignfield=form.assignfield\"\n\n         style=\"background-color: white;\"\n         readonly=\"readonly\"\n         schema-validate=\"form\" name=\"aniTitle\" aria-describedby=\"aniTitleStatus\" style=\"\">\n</div>\n<!--popover-->\n<script type=\"text/ng-template\" id=\"popoverTemplate.html\">\n  <div ng-controller=\"popoverCtrl\" id=\"popoverCtrl\" onkeydown=\"stopEnterEvent(event)\" onkeyup=\"stopEnterEvent(event)\" onkeypress=\"stopEnterEvent(event)\">\n    <button type=\"button\" class=\"circular ui icon button title-btn\" ng-click=\"form.popoverIsOpen=false\">\n      <i class=\"fa fa-close\"></i>\n    </button>\n    <div sf-schema=\"popoverschema\" sf-form=\"popoverform\" sf-model=\"model\" ng-init=\"initParams(form)\" sf-options=\"{ formDefaults: { disableSuccessState: true, feedback: false }}\"></div>\n  </div>\n</script>\n<script>\n  function popoverCtrl($scope, $http, Upload, $sce, $timeout) {\n    $scope.model = {search_key_type: [], selected: {}};\n    console.log(\"初始化idname\" + JSON.stringify($scope.$parent.model) + \"---------\\n\" + $scope.$parent.model[$scope.$parent.editmodel.assignfield.id]);\n    $scope.model.selected.id = $scope.$parent.model[$scope.$parent.editmodel.assignfield.id] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.id]+\"\").split(\",\") : [];\n    $scope.model.selected.name = $scope.$parent.model[$scope.$parent.editmodel.assignfield.name] ? $scope.$parent.model[$scope.$parent.editmodel.assignfield.name].split(\",\") : [];\n    $scope.model.selected.No = $scope.$parent.model[$scope.$parent.editmodel.assignfield.No] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.No]+\"\").split(\",\") : [];\n    $scope.model.selected.phone = $scope.$parent.model[$scope.$parent.editmodel.assignfield.phone] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.phone]+\"\").split(\",\") : [];\n    $scope.model.selected.uoiId = $scope.$parent.model[$scope.$parent.editmodel.assignfield.uoiId] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.uoiId]+\"\").split(\",\") : [];\n    $scope.model.selected.uuiGrade = $scope.$parent.model[$scope.$parent.editmodel.assignfield.uuiGrade] ? ($scope.$parent.model[$scope.$parent.editmodel.assignfield.uuiGrade]+\"\").split(\",\") : [];\n\n    $scope.initParams =function(form){\n      $scope.model.multiselect=form.multiselect;\n      $scope.model.queryBy=form.option.queryBy;\n      $scope.model.criteria=form.option.criteria;\n    }\n    $scope.search_postdata = $.extend(GetUrlParsFun(), $scope.model);\n    $scope.popoverschema = {\n      type: \"object\",\n      title: \"Comment\",\n      properties: {\n        search_key_name: {\"type\": \"string\"}\n      },\n      required: []\n    };\n    $scope.popoverform = [\n      {\n        type: \"section\",\n        items: [\n          {\n            key: \"search_key_name\",\n            htmlClass: \"pull-left col-xs-6 col-sm-4 col-md-3 col-lg-2 no-padding-type\",// form-group-sm\",\n            fieldHtmlClass: \"ht-addon-left\",\n            type: \'text\',\n            notitle: true,\n            placeholder: \"输入关键字...\"\n          },\n          {\n            type: \'button\',\n            htmlClass: \"pull-left btn-margin-right\",\n            icon: \"glyphicon glyphicon-search\",\n            style: \"btn-info ht-addon-right\",\n            title: \'搜索\',\n            onClick: function () {\n              $scope.search_postdata[\'offset\'] = 0;\n              $(\'#popover_tbl_datapage_list\').bootstrapTable(\'selectPage\', 1);\n            }\n          }\n        ]\n      },\n      {\n        type: \"template\",\n        template: \'<table id=\"popover_tbl_datapage_list\" ng-init=\"form.foo()\"></table>\',\n        name: \'popover_tbl_datapage_list\',\n        foo: function () {\n          $(\'#popover_tbl_datapage_list\').bootstrapTable({\n            method: \'post\',\n            contentType: \'application/x-www-form-urlencoded;charset=UTF-8\',\n            url: \'/api/sysuserinfo/getList\',\n            cache: false,\n            responseHandler: function (res) {\n              console.log(\"用户数据：\" + JSON.stringify(res));\n              return {\n                rows: (res && res.data && res.data.queryData && res.data.queryData.length > 0) ? res.data.queryData : [],\n                total: (res && res.data && res.data.totalCnt) ? res.data.totalCnt : 0,\n                pageNumber: (res && res.data && res.data.page) ? res.data.page : 1\n              };\n            },\n            queryParams: function (p) {\n              $scope.search_postdata[\"limit\"] = _.parseInt(p[\'limit\']);\n              $scope.search_postdata[\"is_page\"] = 1;\n              $scope.search_postdata.search_key_name = $scope.model.search_key_name;\n              var search_postdata = angular.copy($scope.search_postdata);\n              console.log(\"搜索参数：\" + JSON.stringify(search_postdata) + JSON.stringify($scope.model));\n              if (_.isUndefined(search_postdata.offset))\n                search_postdata[\'offset\'] = p[\'offset\'];\n              else\n                delete $scope.search_postdata.offset;\n              $scope.search_postdata[\'page\'] = _.parseInt(_.parseInt(search_postdata[\'offset\']) / _.parseInt(search_postdata[\'limit\'])) + 1;\n              search_postdata[\'page\'] = $scope.search_postdata[\'page\'];\n              ArrayObjectToIntData(search_postdata);\n              console.log(JSON.stringify($scope.$parent.model));\n              if($scope.$parent.model && $scope.$parent.model.abiId && ($scope.$parent.model.abiId.id || $scope.$parent.model.abiId.id ==0)\n                && $scope.model.queryBy == \"abiId\"){\n                search_postdata.abiId = $scope.$parent.model.abiId.id;\n              }\n              if($scope.model.criteria){\n                _.extend(search_postdata, $scope.model.criteria);\n              }\n              return search_postdata;\n            },\n            striped: true,\n            pagination: true,\n            sortName: \'sortno\',\n            sortOrder: \'desc\',\n            pageSize: 5,\n            locale: \'zh-CN\',\n            search: false,\n            clickToSelect: true,\n            onCheck: function (row) {\n              var uoiId = row.uoiId ? row.uoiId.id : \"\"\n              $scope.btnSelectUser(row.id, row.uuiName, row.gradeCode, row.uuiMobile || row.loginName, uoiId, row.uuiGrade);\n            },\n            onUncheck: function (row) {\n              var uoiId = row.uoiId ? row.uoiId.id : \"\"\n              $scope.btnSelectUser(row.id, row.uuiName, row.gradeCode, row.uuiMobile || row.loginName, uoiId, row.uuiGrade);\n            },\n            onCheckAll: function (rows) {\n              return false;\n            },\n            onUncheckAll: function (rows) {\n              return false;\n            },\n            queryParamsType: \'limit\',\n            sidePagination: \"server\",\n            smartDisplay: true,\n            checkboxHeader: false,\n            undefinedText: \'-\',\n            searchOnEnterKey: false,\n            minimumCountColumns: 1000,\n            selectItemName: \"选择\",\n            columns: [\n              {\n                radio: true,\n                align: \'center\',\n                valign: \'top\',\n                title: \"选择\",\n                visible: !$scope.model.multiselect ? true : false,\n                class: \'column_class\',\n                formatter: function (value, row, index) {\n                  if ($.inArray(row.id+\"\", $scope.model.selected.id) > -1) {\n                    return {checked: true}\n                  }\n                  return value;\n                }\n              },\n              {\n                checkbox: true,\n                align: \'center\',\n                valign: \'top\',\n                title: \"选择\",\n                visible: $scope.model.multiselect ? true : false,\n                class: \'column_class\',\n                formatter: function (value, row, index) {\n                  if ($scope.model.multiselect && $.inArray(row.id+\"\", $scope.model.selected.id) > -1) {\n                    return {checked: true}\n                  }\n                  return value;\n                }\n              },\n              {\n                field: \'uuiNum\',\n                title: \'序号\',\n                align: \'center\',\n                valign: \'top\',\n                visible: true,\n                class: \'column_class\',\n                formatter: function (value, row, index) {\n                  return _.toString((_.parseInt($scope.search_postdata[\'page\']) - 1) * _.parseInt($scope.search_postdata[\'limit\']) + 1 + index);\n                }\n              },\n              {\n                field: \'uoiId\',\n                title: \'隶属院系\',\n                align: \'center\',\n                valign: \'top\',\n                sortable: false,\n                visible: true,\n                class: \'column_class\',\n                formatter: function (value, row, index) {\n                  if (!_.isUndefined(value) && _.isObject(row[\"uoiId\"])) {\n                    return row[\"uoiId\"].fullName;\n                  }\n                  return \"&nbsp;\";\n                }\n              },\n              /*{\n                field: \'uuiGrade\',\n                title: \'年级\',\n                align: \'left\',\n                valign: \'top\',\n                sortable: false,\n                visible: true,\n                class: \'column_class\'\n              },*/\n              {\n                field: \'uuiName\',\n                title: \'姓名\',\n                align: \'left\',\n                valign: \'top\',\n                sortable: false,\n                visible: true,\n                class: \'column_class\'\n              },\n              {\n                field: \'gradeCode\',\n                title: \'学号\',\n                align: \'left\',\n                valign: \'top\',\n                sortable: false,\n                visible: true,\n                class: \'column_class\'\n              },\n              {\n                field: \'uuiMobile\',\n                title: \'手机号\',\n                align: \'left\',\n                valign: \'top\',\n                sortable: false,\n                visible: true,\n                class: \'column_class\'\n              },\n              {\n                field: \'uuiIdcard\',\n                title: \'身份证号码\',\n                align: \'left\',\n                valign: \'top\',\n                sortable: false,\n                visible: true,\n                class: \'column_class\'\n              },\n              {\n                field: \'uuiSex\',\n                title: \'性别\',\n                align: \'center\',\n                valign: \'top\',\n                sortable: false,\n                visible: true,\n                class: \'column_class\',\n                formatter: function (value, row, index) {\n                  if (value == 0 ) {\n                    return \"女\";\n                  } else if(value == 1){\n                    return \"男\";\n                  }\n                  return \"&nbsp;\";\n                }\n              },\n              {\n                field: \'uuiType\',\n                title: \'用户类型\',\n                align: \'center\',\n                valign: \'top\',\n                sortable: true,\n                visible: true,\n                class: \'column_class\',\n                formatter: function (value, row, index) {\n                  if (value == 0 ) {\n                    return \"默认用户\";\n                  } else if(value == 1){\n                    return \"老师\";\n                  } else if(value == 2){\n                    return \"学生\";\n                  }\n                  return \"&nbsp;\";\n                }\n              },\n              /*{\n                title: \'是否选取\',\n                align: \'center\',\n                valign: \'middle\',\n                visible: true,\n                class: \'column_class\',\n                formatter: function (value, row, index) {\n                  console.log(\"格式化\"+JSON.stringify(row.uoiId) + row.uoiId + \"\\n\" + JSON.stringify($scope.model.selected));\n                  var uoiId = row.uoiId ? row.uoiId.id : \"\"\n                  if ($.inArray(row.id+\"\", $scope.model.selected.id) > -1) {\n                    return \'<a href=\"javascript:void(0)\" class=\"flag_\' + row.id +\'\" onclick=\"btnSelectUser(this, \' + row.id\n                      + \',\\\'\' + row.uuiName + \'\\\',\\\'\' + row.gradeCode + \'\\\',\\\'\' + row.uuiMobile + \'\\\',\\\'\' + uoiId\n                      + \'\\\',\\\'\' + row.uuiGrade + \'\\\')\">取消</a>\';\n                  }\n                  return \'<a href=\"javascript:void(0)\" class=\"flag_\' + row.id +\'\" onclick=\"btnSelectUser(this, \' + row.id\n                    + \',\\\'\' + row.uuiName + \'\\\',\\\'\' + row.gradeCode + \'\\\',\\\'\' + row.uuiMobile + \'\\\',\\\'\' + uoiId\n                    + \'\\\',\\\'\' + row.uuiGrade + \'\\\')\">选取</a>\';\n                }\n              }*/\n            ]\n          });\n          $(window).resize(function () {\n            $(\'#popover_tbl_datapage_list\').bootstrapTable(\'resetView\');\n          });\n        }\n      }\n    ];\n    /*\n     * 数组删除某元素\n     * */\n    Array.prototype.remove = function (index) {\n      for (var i = 0; i < this.length; i++) {\n        if (i == index) {\n          this.splice(i, 1);\n          break;\n          console.log(\"删除元素\" + obj + \"数组\" + this);\n        }\n      }\n    }\n    //选择用户\n    $scope.btnSelectUser = function (id, name, No, phone, uoiId, uuiGrade) {\n      console.log(\"选择用户\\n\" + \"uoiId\" + JSON.stringify(uoiId));\n      var isSelected = false;\n      var arrIndex = $.inArray(id+\"\", $scope.model.selected.id);\n      if(!$scope.model.multiselect && $scope.model.selected.id == id)\n        return;\n      if(arrIndex > -1){\n        $scope.model.selected.id.remove(arrIndex);\n        $scope.model.selected.name.remove(arrIndex);\n        $scope.model.selected.No.remove(arrIndex);\n        $scope.model.selected.phone.remove(arrIndex);\n        $scope.model.selected.uoiId.remove(arrIndex);\n        $scope.model.selected.uuiGrade.remove(arrIndex);\n//        $(opt).html(\"选取\");\n      } else {\n        if($scope.model.selected.id.length > 0 && !$scope.model.multiselect){\n          var tmpIndex = $.inArray($scope.$parent.model[$scope.$parent.editmodel.assignfield.id]+\"\", $scope.model.selected.id);\n//          $(\".flag_\" + $scope.$parent.model[$scope.$parent.editmodel.assignfield.id]).html(\"选取\");\n          $scope.model.selected.id.remove(tmpIndex);\n          $scope.model.selected.name.remove(tmpIndex);\n          $scope.model.selected.No.remove(tmpIndex);\n          $scope.model.selected.phone.remove(tmpIndex);\n          $scope.model.selected.uoiId.remove(tmpIndex);\n          $scope.model.selected.uuiGrade.remove(tmpIndex);\n        }\n        $scope.model.selected.id.push(id+\"\");\n        $scope.model.selected.name.push(name);\n        $scope.model.selected.No.push(No);\n        $scope.model.selected.phone.push(phone);\n        $scope.model.selected.uoiId.push(uoiId);\n        $scope.model.selected.uuiGrade.push(uuiGrade);\n//        $(opt).html(\"取消\");\n      }\n//      console.log($scope.model.multiselect+\"\\n\\n\");\n//      if($scope.$parent.model[$scope.$parent.editmodel.assignfield.id] == id)\n//        $(opt).html(\"取消\");\n//        return;\n//      if($scope.$parent.model[$scope.$parent.editmodel.assignfield.id]){\n//        $(\".flag_\" + $scope.$parent.model[$scope.$parent.editmodel.assignfield.id]).html(\"选取\");\n//      }\n//      $(opt).html(\"取消\");\n      $timeout(function () {\n        if ($scope.$parent.editmodel.assignfield.id)\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.id] = $scope.model.selected.id.toString();\n        if ($scope.$parent.editmodel.assignfield.name)\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.name] = $scope.model.selected.name.toString();\n        if ($scope.$parent.editmodel.assignfield.No)\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.No] = $scope.model.selected.No.toString();\n        if ($scope.$parent.editmodel.assignfield.phone)\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.phone] = $scope.model.selected.phone.toString();\n        if ($scope.$parent.editmodel.assignfield.uoiId)\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.uoiId] = $scope.model.selected.uoiId.toString();\n        if ($scope.$parent.editmodel.assignfield.uuiGrade)\n          $scope.$parent.model[$scope.$parent.editmodel.assignfield.uuiGrade] = $scope.model.selected.uuiGrade.toString();\n        console.log(\"用户信息\" + JSON.stringify($scope.$parent.model) + id + \"--\" + name + \"--\" + No + \"--\" + phone + \"--\" + uoiId + \"--\" + uuiGrade);\n      });\n    }\n  }\n  //绑定选取用户方法\n  function btnSelectUser(opt, id, uuiName, gradeCode, uuiMobile, uoiId, uuiGrade) {\n    var tmpFn = GetAngularFun(\'#popoverCtrl\', \'btnSelectUser\');\n    tmpFn(opt, id, uuiName, gradeCode, uuiMobile, uoiId, uuiGrade);\n  }\n</script>\n");
$templateCache.put("directives/decorators/bootstrap/table/table-title.html","<div sf-array=\"form\" class=\"form-group {{form.htmlClass}}\" style=\"clear: both\"\n     ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\">\n  <button ng-click=\"form.add()\" type=\"button\" class=\"btn btn-success pull-right\" style=\"margin-bottom:20px;margin-left: 10px\" ng-init=\"(!$$value$$ || $$value$$.length == 0 ) && form.add()\">\n    <i class=\"glyphicon glyphicon-plus\"></i> 增加{{form.title}}\n  </button>\n  <button ng-show=\"form.actionTitle\" ng-click=\"form.action()\" type=\"button\" class=\"btn btn-success pull-right\" style=\"margin-bottom:20px\">\n    {{form.actionTitle}} <i class=\"glyphicon glyphicon-chevron-right\"></i>\n  </button>\n  <h3>{{form.title}}</h3>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/table.html","<div ng-class=\"form.htmlClass\" style=\"clear: both\"\n     ng-model=\"$$value$$\" ng-model-options=\"form.ngModelOptions\">\n\n\n  <div class=\"ng-table-toolbar\" ng-if=\"!form.hideTopToggle\">\n    <div id=\"toolbar_btnoption_list\" class=\"pull-left btn-group ng-scope\">\n	    <div class=\"btnlist-inner\">\n		    <button ng-repeat=\"btn in form.toolbar\" class=\"btn btn-default\" ng-class=\"btn.htmlClass\" type=\"button\"\n		            ng-if=\"btn.condition ? btn.condition() : true\"\n		            ng-click=\"btn.action();\">\n			    <i ng-if=\"btn.icon\" ng-class=\"btn.icon\"></i> <span>{{btn.name}}</span>\n		    </button>\n	    </div>\n    </div>\n    <div class=\"columns columns-right btn-group pull-right\">\n      <button class=\"btn btn-default\" type=\"button\" name=\"refresh\" title=\"刷新\" ng-click=\"form.tableParams.reload()\"><i\n        class=\"refresh icon\"></i></button>\n      <button ng-if=\"form.showToggle\" class=\"btn btn-default\" ng-click=\"form.toggleView=!form.toggleView\" type=\"button\" name=\"toggle\" title=\"切换\"><i\n        class=\"browser icon\"></i></button>\n      <div class=\"keep-open btn-group\" title=\"列\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i\n          class=\"grid layout icon\"></i> <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li ng-repeat=\"col in form.items\">\n			<label class=\"col-checkbox-label\" ng-class=\"{\'icon-home_Screen_hook active\': col.show}\"><input type=\"checkbox\" ng-model=\"col.show\"></label><span> {{col.title}}</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"export btn-group\">\n        <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\" aria-expanded=\"false\"><i\n          class=\"cloud download icon\"></i> <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu export-table\" role=\"menu\">\n          <li><a title=\"excel\" href=\"javascript:void(0)\">MS-Excel</a></li>\n          <li><a title=\"csv\" href=\"javascript:void(0)\">CSV</a></li>\n          <li><a title=\"png\" href=\"javascript:void(0)\">PNG</a></li>\n          <!--<li><a title=\"pdf\" href=\"javascript:void(0)\">PDF</a></li>-->\n          <li><a title=\"doc\" href=\"javascript:void(0)\">MS-Word</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"table-responsive\">\n    <table table-scroll-plug ng-table-dynamic=\"form.tableParams with form.items\"\n           template-pagination=\"customPagination.html\"\n           class=\"table table-hover\"\n           ng-init=\"form.tableParams.settings({dataset: $$value$$ });\">\n      <tr ng-repeat=\"row in $data\">\n        <td ng-repeat=\"col in $columns\" ng-switch=\"col.type\"\n            ng-style=\"col.style\" header=\"\'headerCheckbox.html\'\">\n          <!--<div ng-switch-when=\"checkRow\" ng-class=\"col.fieldClass\"><input type=\"checkbox\" ng-model=\"row[\'selected\']\" ng-click=\"form.selectOne($event)\" /></div>-->\n          <div ng-switch-when=\"checkRow\" ng-class=\"col.fieldClass\"><label class=\"col-checkbox-label\" ng-class=\"{\'icon icon-home_Screen_hook active\': row[\'selected\']}\"><input type=\"checkbox\" ng-model=\"row[\'selected\']\" ng-click=\"form.selectOne($event)\" /></label></div>\n          <div ng-switch-when=\"radioRow\" ng-class=\"col.fieldClass\"><input type=\"radio\" ng-model=\"form[\'selected\']\" ng-value=\"row\" /></div>\n          <div ng-switch-when=\"serial\" ng-class=\"col.fieldClass\" ng-bind=\"$data.indexOf(row)+1+(params.count()*(params.page()-1))\"></div>\n          <div ng-switch-when=\"txt\" ng-class=\"col.fieldClass\" ng-bind-html=\"col.formatter ? col.formatter(row[col.field], row, $index) : row[col.field]\"></div>\n          <div ng-switch-when=\"actionLink\" ng-class=\"col.fieldClass\" ng-if=\"col.condition? col.condition : true\">\n            <a href=\"javascript:;\" ng-click=\"col.action(this, row)\"\n               ng-bind-html=\"col.formatter ? col.formatter(row[col.field], row, $index) : row[col.field]\"></a>\n          </div>\n		  <div ng-switch-when=\"input\" ng-class=\"col.fieldClass\">\n			<input type=\"{{col.inputType}}\" ng-model=\"row[col.field]\" />\n          </div>\n		  <div ng-switch-when=\"template\" ng-class=\"col.fieldClass\">\n			<div ng-include=\"col.templateUrl\"></div>\n          </div>\n          <a ng-switch-when=\"button\" type=\"button\" class=\"btn\" ng-class=\"col.fieldClass\"\n                  ng-click=\"col.action(this, row)\">\n            <span ng-if=\"col.iconClass\" class=\"glyphicon\" ng-class=\"col.iconClass\"></span>\n            <span ng-bind=\"col.text\"></span>\n          </a>\n          <div ng-switch-when=\"buttons\" ng-class=\"col.fieldClass\">\n            <a ng-repeat=\"colBtn in col.items\" type=\"button\" class=\"btn\" ng-class=\"colBtn.fieldClass\"\n                    ng-click=\"colBtn.action(this, row)\">\n              <span ng-if=\"colBtn.iconClass\" class=\"glyphicon\" ng-class=\"colBtn.iconClass\"></span>\n              <span ng-bind=\"colBtn.text\"></span>\n            </a>\n          </div>\n          <div ng-switch-default>\n            该列类型未开发。。。<!--<sf-decorator ng-model=\"row\" form=\"col\"></sf-decorator>-->\n          </div>\n        </td>\n      </tr>\n      <tr ng-if=\"$data && $data.length == 0\"><td class=\"schema-table-nodata\" ng-attr-colspan=\"{{$columns.length}}\">暂无该类数据</td></tr>\n    </table>\n  </div>\n\n\n\n  <script type=\"text/ng-template\" id=\"customPagination.html\">\n    <div class=\"ng-cloak ng-table-pager\" ng-if=\"!params.settings().showPageListInfo && params.data.length\" style=\"display: inline-block;width: 100%; margin-bottom: 5px; clear: both;\">\n	    <div class=\"pull-left\">\n		    <span style=\"margin-left:5px; line-height: 32px;vertical-align: top;\">第{{params.page()}}/{{(params.settings().total / params.count()) | ceil}}页</span>\n		    <div ng-if=\"params.settings().counts.length\" class=\"ng-table-counts btn-group\">\n			    <select class=\"form-control\" ng-model=\"params.count\" ng-model-options=\"{ getterSetter: true }\"\n			            ng-options=\"count for count in params.settings().counts\">\n			    </select>\n		    </div>\n	    </div>\n      <ul ng-if=\"pages.length\"\n          class=\"pagination ng-table-pagination pull-right\">\n        <li ng-repeat=\"page in pages\"\n            ng-class=\"{\'disabled\': !page.active && !page.current, \'active\': page.current}\"\n            ng-switch=\"page.type\">\n          <a ng-switch-when=\"prev\" ng-click=\"params.page(page.number)\" href=\"\"><!--&lsaquo;-->上一页</a>\n          <a ng-switch-when=\"first\" ng-click=\"params.page(page.number)\" href=\"\">\n            <span ng-bind=\"page.number\"></span>\n          </a>\n          <a ng-switch-when=\"page\" ng-click=\"params.page(page.number)\" href=\"\">\n            <span ng-bind=\"page.number\"></span>\n          </a>\n          <a ng-switch-when=\"more\" ng-click=\"params.page(page.number)\" href=\"\">&#8230;</a>\n          <a ng-switch-when=\"last\" ng-click=\"params.page(page.number)\" href=\"\">\n            <span ng-bind=\"page.number\"></span>\n          </a>\n          <a ng-switch-when=\"next\" ng-click=\"params.page(page.number)\" href=\"\"><!--&rsaquo;-->下一页</a>\n        </li>\n      </ul>\n	    <ul ng-if=\"pages.length == 0\"\n	        class=\"pagination ng-table-pagination pull-right\">\n		    <li class=\"disabled\">\n			    <a href=\"\">上一页</a>\n		    </li>\n		    <li class=\"active\">\n			    <a href=\"\">\n				    <span>1</span>\n			    </a>\n		    </li>\n		    <li class=\"disabled\">\n			    <a href=\"\">下一页</a>\n		    </li>\n	    </ul>\n      <div class=\"pull-right\">\n        <!--<span style=\"margin-left:5px; line-height: 32px;vertical-align: top;\">共{{params.settings().total}}条记录，第{{params.page()}}/{{(params.settings().total / params.count()) | ceil}}页</span>-->\n	    <span style=\"margin-left:5px; line-height: 32px;vertical-align: top;\">{{params.settings().total}}条</span>\n      </div>\n    </div>\n  </script>\n\n  <script type=\"text/ng-template\" id=\"headerCheckbox.html\">\n    <label class=\"col-checkbox-label\" ng-class=\"{\'icon icon-home_Screen_hook active\': form.checkedAll}\"><input type=\"checkbox\" ng-model=\"form.checkedAll\" class=\"select-all\" ng-click=\"form.selectAll($event)\" /></label>\n  </script>\n\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/uploadfile.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\n  <div class=\"uploadfilebody\">\n  <a class=\"btn btn-success uploadfilebuttom\" ngf-select ngf-change=\"form.options.uploadPic($file, form.options, arrayIndex)\"\n          ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate?form.options.uploadvalidate:{size: {max: \'20MB\', min: \'10B\'}}\" ng-class=\"form.class\" tabindex=\"-1\">\n    <span ng-if=\"!$file[form.options.resultKey]\" ng-bind=\"$$value$$ ? \'重新上传\':\'上传文件\'\"></span>\n    <span class=\"file-progress\" ng-if=\"!$file[form.options.resultKey]\"\n          ng-show=\"$file[form.options.progressKey] >= 0\">\n      <span style=\"width:{{$file[form.options.progressKey]}}%\"\n            ng-bind=\"$file[form.options.progressKey] + \'%\'\"> </span>\n    </span>\n    <span ng-show=\"$file[form.options.resultKey]\">上传成功</span>\n  </a> <span class=\"uploadfilecls\" ng-if=\"form.options.showThumb && form.options.fileName\"> 已上传： {{form.options.fileName}}</span>\n  <br ng-if=\"form.options.suggestBottom\" />\n  <span class=\"uploadfilelabel\" ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span>\n  </div>\n  <span ng-if=\"$file[form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$file[form.options.errorMsgKey]}}</span>\n  <div class=\"help-block\" sf-message=\"form.description\"></div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/uploadfiles.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\n    <div class=\"uploadfilesbody\"><div class=\"uploadfilescls\" ng-repeat=\"f in $$value$$ track by $index\">\n    <span ng-if=\"$files[$index][form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$files[$index][form.options.errorMsgKey]}}</span>\n    <a ng-if=\"form.options.showThumb\" href=\"{{f}}\" target=\"_blank\">{{f.substring(f.lastIndexOf(\'/\')+1)}}</a>\n    <span class=\"file-progress\" ng-show=\"$files[$index][form.options.progressKey] >= 0\">\n        <div style=\"width:{{$files[$index][form.options.progressKey]}}%\" ng-bind=\"$files[$index][form.options.progressKey] + \'%\'\"></div>\n    </span>\n    <div ng-show=\"f\" class=\"icon-activities_icon_close file-del\"\n         ng-click=\"form.options.deleteFn($$value$$, f)\"></div>\n  </div>\n  <a ng-if=\"form.options.maxNum ? form.options.maxNum > $$value$$.length : true\" ngf-multiple=\"true\" class=\"btn btn-success uploadfilesbuttom\" ngf-select ngf-change=\"form.options.uploadPics($files, form.options, $$value$$)\"\n          ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate?form.options.uploadvalidate:{size: {max: \'20MB\', min: \'10B\'}}\" ng-class=\"form.class\" tabindex=\"-1\">\n    <span>批量上传</span>\n  </a>\n  <br ng-if=\"form.options.suggestBottom\" />\n  <span class=\"uploadfileslabel\" ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span></div>\n  <div class=\"help-block\" sf-message=\"form.description\"></div></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/table/uploadpic.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\n  <a ng-if=\"form.options.showThumb\" href=\"{{$$value$$}}\" target=\"_blank\">\n    <img ng-if=\"form.options.showThumb\" ngf-src=\"$$value$$\"\n         height=\"{{form.options.thumbSize}}\"\n         width=\"{{form.options.thumbSize}}\" style=\"margin-bottom: 10px\" class=\"thumb\"/>\n  </a>\n  <br/>\n  <a class=\"btn btn-success\" ngf-select ngf-change=\"form.options.uploadPic($file, form.options, arrayIndex, $newFiles, $duplicateFiles, $invalidFiles, $event)\"\n     ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate\"\n     ngf-resize=\"{width: (form.options.resizewidth?form.options.resizewidth:960), quality: 0.8, type: \'image/jpeg\'}\"\n     ngf-resize-if=\"$width > (form.options.resizewidth?form.options.resizewidth:960) || $height > (form.options.resizewidth?form.options.resizewidth:960)\" ng-class=\"form.class\" tabindex=\"-1\">\n    <span ng-if=\"!$file[form.options.resultKey]\">上传图片</span>\n    <span class=\"file-progress\" ng-if=\"!$file[form.options.resultKey]\"\n          ng-show=\"$file[form.options.progressKey] >= 0\">\n      <span style=\"width:{{$file[form.options.progressKey]}}%\"\n            ng-bind=\"$file[form.options.progressKey] + \'%\'\"> </span>\n    </span>\n    <span ng-show=\"$file[form.options.resultKey]\">上传成功</span>\n  </a>\n  <br ng-if=\"form.options.suggestBottom\" />\n  <span ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span>\n  <span ng-if=\"$file[form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$file[form.options.errorMsgKey]}}</span>\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\n</div></div>\n");
$templateCache.put("directives/decorators/bootstrap/table/uploadpics.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-init=\"form.options.resultKey=\'url\' ; form.options.progressKey=\'progress\' ; form.options.errorMsgKey=\'errorMsg\'\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle(), \'schema-form-required\': form.inputrequired === true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}<span ng-if=\"form.inputrequired === true\" class=\"join-required\"></span></label>\n  <div class=\"joininputcol\" ng-class=\"form.fieldHtmlClass\">\n  <div ng-repeat=\"f in $$value$$ track by $index\">\n    <span ng-if=\"$files[$index][form.options.errorMsgKey]\" class=\"sr-only\">错误: {{$files[$index][form.options.errorMsgKey]}}</span>\n    <a ng-if=\"form.options.showThumb\" href=\"{{f}}\" target=\"_blank\">\n      <img ngf-src=\"f\" height=\"{{form.options.thumbSize}}px\"\n           width=\"{{form.options.thumbSize}}px\" style=\"margin-bottom: 2px\" class=\"thumb\"/>\n    </a>\n    <span class=\"file-progress\" ng-show=\"$files[$index][form.options.progressKey] >= 0\">\n        <div style=\"width:{{$files[$index][form.options.progressKey]}}%\" ng-bind=\"$files[$index][form.options.progressKey] + \'%\'\"></div>\n    </span>\n    <div ng-show=\"f\" class=\"glyphicon glyphicon-remove-sign file-del\"\n         ng-click=\"form.options.deleteFn($$value$$, f)\"></div>\n  </div>\n  <a ngf-multiple=\"true\" class=\"btn btn-success\" ngf-select ngf-change=\"form.options.uploadPics($files, form.options, $$value$$, $newFiles, $duplicateFiles, $invalidFiles, $event)\"\n     ng-init=\"form.options.init($files, $$value$$);\"\n     ngf-fix-orientation=\"true\" ngf-validate=\"form.options.uploadvalidate\"\n     ngf-resize=\"{width: (form.options.resizewidth?form.options.resizewidth:960), quality: 0.8, type: \'image/jpeg\', restoreExif: true}\"\n     ngf-resize-if=\"$width > (form.options.resizewidth?form.options.resizewidth:960) || $height > (form.options.resizewidth?form.options.resizewidth:960)\" ng-class=\"form.class\" tabindex=\"-1\">\n    <span>批量上传</span>\n  </a>\n  <br ng-if=\"form.options.suggestBottom\" />\n  <span ng-if=\"form.options.suggestlabel\" ng-style=\"{\'padding-left\': (form.options.suggestBottom? \'0px\' : \'10px\')}\" ng-bind=\"form.options.suggestlabel\"></span>\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\n</div></div>\n");}]);
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
