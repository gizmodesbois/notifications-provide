import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Notification from '../components/notification';
import NotificationsService from '../service/notifications';

const NotificationContext = React.createContext('notification');

// Build notification list
const notificationList = document.createElement('div');
notificationList.id = 'notifications';
document.body.appendChild(notificationList);

const NotificationPortal = ({ children }) => {
    return ReactDOM.createPortal(
        children,
        notificationList,
    );
};

class NotificationsProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };

        this.notificationsService = new NotificationsService();
    }

    getChildContext() {
        const { notificationsService } = this;
        return { notificationsService };
    }

    componentDidMount() {
        this.notificationsSubscription = this.notificationsService.subscribe((notifications) => {
            this.setState({
                notifications,
            });
        });
    }

    componentWillUnmount() {
        this.notificationsSubscription.unsubscribe();
    }

    render() {
        const { children, notificationComponent } = this.props;
        const { notifications } = this.state;
        const NotificationComp = notificationComponent;
        return (
            <NotificationContext.Provider value={this.notificationsService}>
                {children}
                <NotificationPortal>
                    {notifications.map((notif) => {
                        return (
                            <NotificationComp
                                {...{ ...notif }}
                                key={notif.id}
                                remove={() => { this.notificationsService.remove(notif.id); }}
                            />
                        );
                    })}
                </NotificationPortal>
            </NotificationContext.Provider>
        );
    }
}

NotificationsProvider.propTypes = {
    children: PropTypes.node.isRequired,
    notificationComponent: PropTypes.func,
};

NotificationsProvider.defaultProps = {
    notificationComponent: Notification,
};

NotificationsProvider.childContextTypes = {
    notificationsService: PropTypes.shape({}).isRequired,
};

export const NotificationConsumer = NotificationContext.Consumer;

export default NotificationsProvider;
