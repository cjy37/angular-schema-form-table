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
      'label' : base + 'mos-default.html'//表单标题组件
    });

  }
]);
