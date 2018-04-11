$.ajaxSetup({
    cache: true
})

// inject tinymce css into the admin interface
// $('head').append('<link href="https://cdn.tinymcejs.com/1.3.3/tinymce.snow.css" rel="stylesheet">')
$('head').append('<script type="text/javascript" src="/assets/js/vendor/tinymce/js/tinymce/tinymce.min.js"></script>');


// * ———————————————————————————————————————————————————————— * //
// *	tinymce directive
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.compileProvider
  .directive('tinymce', function () {
    return {
      link: function (scope, element, attr) {
        $(function() {
          var wysiwyg = tinymce.init({
            target: element[0],
            init_instance_callback: function (editor) {
              editor.on('Change', function (e) {
                if (
                  e.level.content == '<p><br data-mce-bogus="1"></p>'
                  ||
                  e.level.content == '<p><br></p>'
                ){
                  scope.context[scope.terminatedkey] = '';
                } else {
                  scope.context[scope.terminatedkey] = e.level.content;
                }
              });
              scope.$watch('current_culture', function () {
                // console.log(editor.getContent());
                if (
                  scope.context[scope.terminatedkey] == '<p><br data-mce-bogus="1"></p>'
                  ||
                  scope.context[scope.terminatedkey] == '<p><br></p>'
                ){
                  editor.setContent(scope.context[scope.terminatedkey] || '');
                } else {
                  editor.setContent(scope.context[scope.terminatedkey] || '');
                }
              });
              if (
                scope.context[scope.terminatedkey] == '<p><br data-mce-bogus="1"></p>'
                ||
                scope.context[scope.terminatedkey] == '<p><br></p>'
              ){
                editor.setContent(scope.context[scope.terminatedkey]);
              } else {
                editor.setContent(scope.context[scope.terminatedkey]);
              }

            },
            relative_urls : false,
            browser_spellcheck : true,
            height:500,
            menubar: false,
            block_formats: 'Paragraph=p;',
            format: 'html',
            plugins: [
              'advlist autolink lists link charmap paste print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime table code wordcount'
            ],
            toolbar: 'insert | undo redo | formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | paste removeformat code | help'
          });
        });
      }
    }
  })

// brick_admin_settings.enduro_tinymce
