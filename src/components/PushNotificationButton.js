import React from 'react';

class PushNotificationButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            permission: 'default',
            isPushEnabled: false,
            isOptedOut: false,
        };
        console.log("constructor de PushNotificationButton v3");
    }
    componentDidMount() {
        console.log("PushNotificationButton didMount");
        this.OneSignal = typeof window !== 'undefined' && window.OneSignal ? window.OneSignal : [];
        this.setupOneSignal();
    }
    /**
     * Render subscribe button
     * @param {('default'|'denied'|'granted')} permission - permission level
     * @returns {import('react').ReactElement} React Node
     */
    renderBtn = (permission, isPushEnabled, isOptedOut) => {
        return (<div className="pushnotif"></div>);
        /*
        console.log(`renderbtn: ${permission} , ${isPushEnabled} , ${isOptedOut} `);
        if (permission === 'default') {
            return (
                <a className="navbar-item" onClick={this.onSubscriptionBtnClick}>
                    Suscribir Notif
                </a>
            );
        } else if (permission === 'granted' && isPushEnabled) {
            return (
                <a className="navbar-item" onClick={this.onSubscriptionBtnClick}>
                    deSuscribir Notif
                </a>
            );
        } else if (permission === 'granted' && isOptedOut) {
            return (
                <a className="navbar-item" onClick={this.onSubscriptionBtnClick}>
                    Suscribir Notif
                </a>
            );
        } else if (permission === 'denied') {
            console.warn('denied permission', permission);
            return ("");
        } else {
            console.warn('Unrecognised permission', permission);
            return ("");
        }
        */
    };
    render() {
        const { permission, isPushEnabled, isOptedOut } = this.state;
        return this.renderBtn(permission, isPushEnabled, isOptedOut);
    }
    onSubscriptionBtnClick = event => {
        this.getSubscriptionState().then(state => {
            if (state.isPushEnabled) {
                /* Subscribed, opt them out */
                this.OneSignal.setSubscription(false);
            } else {
                if (state.isOptedOut) {
                    /* Opted out, opt them back in */
                    this.OneSignal.setSubscription(true);
                } else {
                    /* Unsubscribed, subscribe them */
                    this.OneSignal.registerForPushNotifications();
                }
            }
        });
        event.preventDefault();
    };
    setupOneSignal = () => {
        this.OneSignal.push(() => {
            console.log("onesignal push1");
            if (!this.OneSignal.isPushNotificationsSupported()) {
                return;
            }

            this.OneSignal.init({
                appId: "d9e36125-6844-43b2-b781-37f54b44ea1b",
                notifyButton: {
                    enable: true, /* Required to use the Subscription Bell */
                    size: 'medium', /* One of 'small', 'medium', or 'large' */
                    theme: 'default', /* One of 'default' (red-white) or 'inverse" (white-red) */
                    position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */
                    offset: {
                        bottom: '0px',
                        left: '0px', /* Only applied if bottom-left */
                        right: '0px' /* Only applied if bottom-right */
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
            /*
            
                        this.updateManageWebPushSubscriptionButton();
                        const self_updateManageWebPushSubscriptionButton = this.updateManageWebPushSubscriptionButton;
                        this.OneSignal.on('subscriptionChange', function () {
                            self_updateManageWebPushSubscriptionButton();
                        });
            
                        this.getSubscriptionState().then(state => {
                            this.setState({
                                isPushEnabled: state.isPushEnabled,
                                isOptedOut: state.isOptedOut,
                            });
                        });
                        */
        });
    };
    updateManageWebPushSubscriptionButton = async () => {
        try {
            const state = await this.OneSignal.getNotificationPermission();
            this.setState({
                permission: state,
            });
        } catch (error) {
            console.error('Error getting notification status', error);
        }
    };
    /**
     * Find current subscription state
     **/
    async getSubscriptionState() {
        console.log("PushNotificationButton getSubscriptionState");
        const result = await Promise.all([
            this.OneSignal.isPushNotificationsEnabled(),
            this.OneSignal.isOptedOut(),
        ]);
        const [isPushEnabled, isOptedOut] = result;
        return {
            isPushEnabled: isPushEnabled,
            isOptedOut: isOptedOut,
        };
    }
}
export default PushNotificationButton;