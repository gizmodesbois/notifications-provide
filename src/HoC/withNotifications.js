/* eslint react/prefer-stateless-function: off */
import React from 'react';
import PropTypes from 'prop-types';
import { NotificationConsumer } from '../index';

const withNotifications = () => (WrappedComponent) => {
    const notificationHoC = props => (
        <NotificationConsumer>
            { context => <WrappedComponent {...props} notificationsService={context} /> }
        </NotificationConsumer>
    );

    notificationHoC.contextTypes = {
        notificationsService: PropTypes.shape({}).isRequired,
    };

    return notificationHoC;
};

export default withNotifications;
