import { mjml2html } from 'mjml';

var mjml = new ReactiveVar();

Template.editor.events({
  'click #preview'(event, instance) {
    mjml.set($('#code').get(0).value);
  },
});

Template.editor.helpers({
  preview() {
    if (mjml.get()) {
      let cmpl = mjml2html(mjml.get());
      if (cmpl.errors.length) return 'Error rendering template</br>' + cmpl.errors;
      return Spacebars.SafeString(cmpl.html);
    }
  }
});
