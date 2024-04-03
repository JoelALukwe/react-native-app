
Utibu Health's requirements, I went with the following approach:

1. Mobile App Development:
   - Developed a mobile app for iOS and Android platforms that allows registered customers to:
     - Log in securely.
     - Browse medication inventory.
     - Place orders for medication.
     - View their order history and statements.

2. Backend Development:
   - Created a backend system that handles communication between the mobile app and the legacy database.
   - Implementing APIs for user authentication, medication inventory management, order placement, and statement retrieval.

3. Database Integration:
   - Developed a module that synchronizes online orders with the legacy database in Microsoft SQL Server.
   - Ensuring data integrity and consistency between the online and offline systems.

4. Real-time Stock Management:
   - Implemented a mechanism to update the stock levels in real-time as orders are placed and fulfilled.
   - Providing notifications to users if certain medications are out of stock or low in quantity.

5. Communication Protocol:
   - Used a secure communication protocol (e.g., HTTPS) for transmitting data between the mobile app and the backend server.
   - Implementing encryption for sensitive information such as user credentials and payment details.

6. Offline Capabilities:
   - Designed the mobile app to have offline capabilities, allowing users to browse medication and place orders even without an internet connection.
   - Synchronising offline data with the server once the connection is restored.

7. Payment Integration:
   - Integrated payment gateways to facilitate online payments securely.
   - Allowing users to choose between immediate payment or payment at the point of collection.

8. User Notifications:
   - Provided push notifications to users to notify them of order confirmation, payment status, and collection instructions.

9. Security Measures:
   - Implemented authentication and authorization mechanisms to ensure that only registered users can access the app and place orders.
   - i will be providing egular updates and patches for the system to protect against security vulnerabilities.

10. Testing and Deployment:
    - i will be Conducting thorough testing of the mobile app, backend systems, and database integration to ensure reliability, scalability, and usability.
    - Deploying the solution in stages, starting with a limited user base for testing before rolling out to all customers.

