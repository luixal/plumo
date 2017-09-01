Templater = class Templater {

  constructor(mjml, data) {
    import { mjml2html } from 'mjml';
    
    this.mjml = mjml;
    this.html = mjml2html(mjml).html;
    this._parseHtmlTags();
    this.data = data || {};
  }

  compile(html, data) {
    return this._replaceTags(
      html || this.html,
      data || this.data
    );
  }

  getHtmlTags() {
    return this.htmlTags;
  }

  _parseHtmlTags() {
    if (!this.html) return;
    let regex = /(?:\{\{)(.*)(?:\}\})/g;
    this.htmlTags = _.uniq(this.html.match(regex));
  }

  _replaceTag(html, tag, value) {
    if (!html || !tag || !value) return;
    // escape tag string:
    tag = '{{' + tag + '}}';
    let escapedTag = tag.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    // replacing all ocurrences:
    return html.replace(new RegExp(escapedTag, 'g'), value);
  }

  _replaceTags(html, data) {
    console.log(this.getHtmlTags(html));
    for (let tag in data) {
      console.log('Replacing ' + tag + ' with ' + data[tag]);
      html = this._replaceTag(html, tag, data[tag]);
    }
    return html;
  }

}
