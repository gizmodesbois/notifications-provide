# Notifications provider

The Notification provider let you create notification inside your application and display them directly on the page. 

## Install

Using npm

`yarn add react-notifications-provider`

Using yarn

`npm install react-notifications-provider`

## Usage

You have to add the `NotificationsProvider` component to the root of your React component tree . It will provide you a method inside the tree to use the notifications.

```
import { NotificationsProvider } from 'notifications-provider';

ReactDOM.render(
  <NotificationsProvider>
    <Root />
  </NotificationsProvider>,
  document.getElementById('root'),
);
```

Now you may create components in this React tree that will use the `withNotifications()` HoC.

```
import withNotifications from 'notifications-provider/withNotifications';
import Notification from 'notifications-provider/models/notification';

class Component extends React.Component {
    ...
    displayNotification() {
        const { notificationsService } = this.props;
        const notification = new Notification({
            title: 'Title',
            message: 'Message',
        });
        notificationsService.add(notification);
    }
    ...
};

Component.propTypes = {
    notificationsService: PropTypes.shape({
        add: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
    }).isRequired,
};

export default withNotifications()(Component);
```