if (!window.isOneSignalInitialized) {
  window.OneSignal = window.OneSignal || [];
  console.log("bootstrapping la libreria de oneSignal");
  OneSignal.push(function () {
    OneSignal.init({
      appId: "b39bd077-f1d2-4a10-9c43-2e73e01fce90",
      notifyButton: {
        enable: true, /* Required to use the Subscription Bell */
        size: 'medium', /* One of 'small', 'medium', or 'large' */
        theme: 'default', /* One of 'default' (red-white) or 'inverse" (white-red) */
        position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */
        offset: {
          bottom: '50px',
          left: '0px', /* Only applied if bottom-left */
          right: '50px' /* Only applied if bottom-right */
        },
        prenotify: true, /* Show an icon with 1 unread message for first-time site visitors */
        showCredit: false, /* Hide the OneSignal logo */
        text: {
          'tip.state.unsubscribed': 'Subscribirse a las notificaciones',
          'tip.state.subscribed': "Estás subscripto a las notificaciones",
          'tip.state.blocked': "Tenés bloqueadas las notificaciones",
          'message.prenotify': 'Click para subscribirte a las notificaciones',
          'message.action.subscribed': "¡Gracias por subscribirte!",
          'message.action.resubscribed': "Estás subscripto a las notificaciones",
          'message.action.unsubscribed': "Ya no recibirás mas notificaciones",
          'dialog.main.title': 'Gestionar las notificaciones del sitio',
          'dialog.main.button.subscribe': 'SUBSCRIBIRSE',
          'dialog.main.button.unsubscribe': 'DESUBSCRIBIRSE',
          'dialog.blocked.title': 'Desbloquear las notificaciones',
          'dialog.blocked.message': "Siga estas instrucciones para permitir notificaciones:"
        }
      },
    });
  });
  window.isOneSignalInitialized = true;
}