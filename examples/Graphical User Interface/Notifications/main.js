/*
 * Phonk Example: Notifications
 */

ui.addTitle(app.name)
ui.addSubtitle('Show app notifications')

var n = app.notification.create({
  'id': 12,
  'ticker': 'ticker text',
  'title': 'MyTitle 2',
  'description': 'MyDescription',
  'subtext': 'Subtext',
  'icon': 'patata.png',
  'color': '#FFFF00',
  'autocancel': true,
  'launchOnClick': 'examples/Advanced/Livecoding', // this is the script to launch on click
  'notificationData': 'hello' // when the new script is launched
})

// when the new script is launched we can retrieve information writing this in
// the launching script
/*
  var intentData = app.getIntentData()
  var isNotification = intentData.getBoolean('isNotification')
  var notificationId = intentData.getInt("notificationId")
  var notificationData = intentData.getString("notificationData")
*/

ui.addButton('show notification', 0.1, 0.4, 0.8, 0.1).onClick(function (e) {
  n.show()
})

// cancel the notification
ui.addButton('cancel', 0.1, 0.55, 0.8, 0.1).onClick(function (e) {
  n.cancel(12) // or app.notification.cancelById(12)
})

// cancell all notificiations generated by this script
ui.addButton('cancel all', 0.1, 0.7, 0.8, 0.1).onClick(function (e) {
  app.notification.cancelAll()
})
