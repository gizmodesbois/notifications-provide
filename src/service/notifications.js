import Observer from './observer';

class NotificationsService extends Observer {
    constructor() {
        super();
        this.notifications = [];
        this.timers = [];
    }

    add(notification) {
        this.timers[notification.id] = setTimeout(() => {
            this.remove(notification.id);
        }, notification.timer);
        this.notifications.push(notification);
        this.broadcast(this.notifications);
    }

    remove(notificationId) {
        clearTimeout(this.timers[notificationId]);
        this.notifications = this.notifications.filter(notif => notif.id !== notificationId);
        this.broadcast(this.notifications);
    }
}

export default NotificationsService;
