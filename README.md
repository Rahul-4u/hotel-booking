# Hotel Booking Platform

## Project Overview

This project is a modern Hotel Booking Platform that offers users an engaging experience for discovering and booking hotel rooms. It incorporates interactive design, robust functionality, and secure user authentication, ensuring a seamless and trustworthy platform.

## Purpose

To build a user-friendly hotel booking platform that evaluates candidates' skills, creativity, and problem-solving abilities while delivering high-quality solutions.

## Live URL

["https://b10-a11-cb71f.web.app"](#)

## Key Features

### Homepage Design

- **Banner:** A slider with a heading, short description, and a button redirecting users to the Rooms page.
- **Map:** A map displaying the hotel's location (using `react-leaflet`).
- **Featured Rooms:** Showcases six top-rated rooms with images, descriptions, and a "Book Now" button.
- **User Reviews:** Authentic user reviews are displayed in a carousel format, sorted by timestamp.
- **Special Offers:** Promotions displayed prominently on the homepage.

### User Authentication

- **Login and Register Pages:**
  - Email/password authentication.
  - Google or GitHub login.
  - Validation for password strength.
- Toast notifications for successful login/registration or errors.

### Rooms Page

- Displays all rooms with an option to view details by clicking on a card.
- Filter system by price range (server-side implementation).

### Room Details Page

- Displays detailed information about a room, including images, descriptions, and user reviews.
- Booking modal with date picker and room summary.
- Ensures users can only book available rooms.

### My Bookings Page

- Displays all bookings made by the logged-in user in a table format.
- Allows users to:
  - Cancel bookings (with confirmation modal).
  - Update booking dates.
  - Post reviews for booked rooms.

### Review System

- Users can post reviews (including rating, comment, and timestamp) for booked rooms.
- Reviews are displayed on the room details page.

### 404 Page

- A custom 404 page with an exciting image and a "Back to Home" button.

### Optional Features

- Booking for a date range.
- Gallery page with hotel and room images.
- About Us and Contact Us pages.
- Toggle between card and table views on the Rooms page.

## Packages Used

- `react-router-dom`
- `react-leaflet`
- `react-toastify`
- `sweetalert2`
- `moment`
- `jsonwebtoken`
- `framer-motion`
- `react-helmet`

## Deployment Guidelines

1. Ensure both client-side and server-side applications are deployed without errors.
2. Address any CORS/404/504 errors.
3. Add the domain to Firebase for authentication.
4. Verify private routes persist after reload without redirecting to the login page.

## Instructions

### Repository Links

- [Client-Side Repository](#)
- [Server-Side Repository](#)

### Submission

- Submit the links to the client-side repository, server-side repository, and live website.

## Note

Consistency in design, proper alignment, responsive layout, and securing environment variables for Firebase and MongoDB are critical to achieve a 100% mark.
