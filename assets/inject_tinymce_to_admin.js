// inject tinymce css into the admin interface
// $('head').append('<link href="https://cdn.tinymcejs.com/1.3.3/tinymce.snow.css" rel="stylesheet">')

// * ———————————————————————————————————————————————————————— * //
// *	tinymce directive
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.compileProvider
  .directive('tinymce', function () {
    return {
      link: function (scope, element, attr) {
        $.getScript('https://cloud.tinymce.com/stable/tinymce.min.js', function () {

          console.log(element[0]);

          tinymce({
            "selector": element[0],
            init_instance_callback: function (editor) {
              editor.on('Change', function (e) {
                console.log(e);
                console.log('Editor contents was changed.');
              });
            }
          })

          // editor.on('text-change', function(delta, oldDelta, source) {
          //   scope.context[scope.terminatedkey] = editor.root.innerHTML
          // })

          // scope.$watch('current_culture', function () {
          //   editor.root.innerHTML = scope.context[scope.terminatedkey] || ''
          // })
          //
          // editor.root.innerHTML = scope.context[scope.terminatedkey]
        })
      }
    }
  })





    // brick_admin_settings.enduro_tinymce
