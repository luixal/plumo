import { mjml2html } from 'mjml';


Template.editor.onCreated(function() {
  this.mjml = new ReactiveVar();
});

Template.editor.onRendered(function() {
  // loading ACE modules:
  import '/node_modules/ace-builds/src-min-noconflict/ace.js';
  import '/node_modules/ace-builds/src-min-noconflict/mode-html.js';
  import '/node_modules/ace-builds/src-min-noconflict/theme-monokai.js';

  // init editor:
  this.editor = ace.edit('editor');
  this.editor.getSession().setMode('ace/mode/javascript');
  this.editor.setTheme('ace/theme/monokai');

  // set mjml code in reactive var on key shortcut:
  let mjml = this.mjml;
  this.editor.commands.addCommand({
    name: 'myCommand',
    bindKey: {win: 'Ctrl-M',  mac: 'Command-M'},
    exec: function(editor) {
      mjml.set(editor.getValue());
    },
    readOnly: true // false if this command should not apply in readOnly mode
  });
});

Template.editor.events({
  'click #preview'(event, instance) {
    // set mjml code in reactive var on button click::
    instance.mjml.set(instance.editor.getValue());
  },
});

Template.editor.helpers({
  preview() {
    // if mjml code exists, render and show it in preview box:
    let code = Template.instance().mjml.get();

    if (code) {
      let cmpl = mjml2html(code);
      if (cmpl.errors.length) return 'Error rendering template</br>' + cmpl.errors;
      return Spacebars.SafeString(cmpl.html);
    }
  }
});
