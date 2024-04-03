Utibu Health Mobile App

Utibu Health is a mobile application designed to allow registered customers to conveniently order medication remotely from Utibu Health facilities. The app enables users to make medication orders, track order status, and view order history. It also provides notifications for important updates regarding orders.

Features

- Medication Ordering: Users can easily place orders for their required medications through the app.
- Order Tracking: Users can track the status of their medication orders and view their order history.
- Notifications: Push notifications are sent to users to keep them updated on order status changes and other relevant information.

Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your_username/utibu-health-mobile.git
   ```

2. Navigate to the project directory:

   ```
   cd utibu-health-mobile
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the Metro bundler:

   ```
   npx react-native start
   ```

5. Run the application on your preferred platform:

   - For iOS:
     ```
     npx react-native run-ios
     ```
   - For Android:
     ```
     npx react-native run-android
     ```

Technologies Used

- React Native
- Express.js
- MongoDB
- Firebase Cloud Messaging (FCM)

Configuration

- Database Connection: Update the database connection settings in the server configuration file (`server/config.js`).
- Firebase Cloud Messaging (FCM): Set up Firebase Cloud Messaging and update the server code with the necessary configurations for push notifications
