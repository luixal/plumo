import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  let jmjlCode = '<mjml>' +'<mj-body>' +
      '<mj-container>' +
        '<mj-section>' +
          '<mj-column>' +
            '<mj-image src="https://image.flaticon.com/teams/slug/freepik.jpg" width="112" />' +
            '<mj-text font-size="20px" color="#595959" align="center">' + 'Easy and Quick' + '</mj-text>' +
          '</mj-column>' +
          '<mj-column>' +
            '<mj-image src="https://image.flaticon.com/teams/slug/freepik.jpg" width="135" />' +
            '<mj-text font-size="20px" color="#595959" align="center">' + 'Responsive' + '</mj-text>' +
          '</mj-column>' +
        '</mj-section>' +
        '<mj-section>' +
          '<mj-column>' +
            '<mj-button background-color="#F45E43" font-size="15px">' + 'Discover' + '</mj-button>' +
          '</mj-column>' +
        '</mj-section>' +
      '</mj-container>' +
    '</mj-body>' +
  '</mjml>';
  // var a = new MJML(jmjlCode, true);
  // console.log(a.compile());
});
