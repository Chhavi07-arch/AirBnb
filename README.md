# AirBnb Clone

A full-stack web application inspired by Airbnb, built with the MERN stack (MongoDB, Express, React, Node.js). This project allows users to browse listings, create their own properties, make bookings, and manage their reservations.

## Live Demo

Check out the deployed application: https://air-bnb-frontend-sand.vercel.app/

## Features

- **User Authentication**: Secure signup and login using JWT tokens stored in HTTP-only cookies
- **Browse Listings**: View all available properties with images, pricing, and ratings
- **Create Listings**: Hosts can add their own properties with multiple images
- **Book Properties**: Users can book available listings and view booking history
- **Manage Bookings**: View and cancel bookings with real-time updates
- **My Listings**: Hosts can see their own properties and cancel bookings
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices
- **Image Hosting**: Images are securely stored on Cloudinary
- **Search Functionality**: Filter and search for properties

## Tech Stack

### Frontend
- **React 19** - User interface framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Icons** - Icon library
- **React Toastify** - Toast notifications for user feedback

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ORM
- **JWT** - JSON Web Tokens for authentication
- **Multer** - Middleware for file uploads
- **Cloudinary** - Cloud storage for images
- **BCryptJS** - Password hashing
- **CORS** - Cross-Origin Resource Sharing
- **Cookie Parser** - Cookie parsing middleware
- **Dotenv** - Environment variable management

## Project Structure

```
AirBnb/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── Component/          # Reusable React components
│   │   │   ├── Card.jsx        # Property listing card
│   │   │   ├── Nav.jsx         # Navigation bar
│   │   │   └── ...
│   │   ├── Context/            # React Context for state management
│   │   │   ├── UserContext.jsx
│   │   │   ├── ListingContext.jsx
│   │   │   └── BookingContext.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── MyListing.jsx
│   │   │   ├── MyBooking.jsx
│   │   │   ├── Login.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── backend/                     # Node.js/Express backend
    ├── config/                 # Configuration files
    │   ├── db.js              # Database connection
    │   ├── token.js           # JWT token generation
    │   └── cloudinary.js      # Cloudinary configuration
    ├── model/                 # Database models (Mongoose schemas)
    │   ├── user.model.js
    │   ├── listing.model.js
    │   └── booking.model.js
    ├── controllers/           # Route controllers (business logic)
    │   ├── auth.controller.js
    │   ├── user.controller.js
    │   ├── listing.controller.js
    │   └── booking.controller.js
    ├── routes/               # API routes
    │   ├── auth.route.js
    │   ├── user.route.js
    │   ├── listing.route.js
    │   └── booking.route.js
    ├── middleware/           # Custom middleware
    │   ├── isAuth.js         # Authentication check
    │   └── multer.js         # File upload handling
    ├── index.js             # Entry point
    ├── package.json
    └── .env                 # Environment variables (not in repo)
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account for image hosting
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENVIRONMENT=production
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. The frontend is configured to connect to the backend at the production URL or localhost:8000 for development.

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Environment Variables

### Backend (.env)
```
MONGODB_URL              # MongoDB connection string
JWT_SECRET               # Secret key for JWT signing
CLOUDINARY_CLOUD_NAME    # Your Cloudinary cloud name
CLOUDINARY_API_KEY       # Cloudinary API key
CLOUDINARY_API_SECRET    # Cloudinary API secret
NODE_ENVIRONMENT         # "development" or "production"
PORT                     # Server port (default: 8000)
```

### Frontend
Update the `serverUrl` in Context files to match your backend URL:
- Local development: `http://localhost:8000`
- Production: Your deployed backend URL

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/user/currentuser` - Get current user data
- `GET /api/user/:id` - Get user by ID

### Listings
- `GET /api/listing/all` - Get all listings
- `GET /api/listing/:id` - Get listing by ID
- `POST /api/listing/add` - Create new listing (requires auth)
- `PUT /api/listing/:id` - Update listing (requires auth)
- `DELETE /api/listing/:id` - Delete listing (requires auth)
- `GET /api/listing/search?city=...` - Search listings by city

### Bookings
- `GET /api/booking/all` - Get all bookings for user (requires auth)
- `POST /api/booking/add` - Create booking (requires auth)
- `DELETE /api/booking/:id` - Cancel booking (requires auth)

## How to Use

### 1. Signup / Login
- Click "Sign Up" to create a new account
- Provide your email and password
- Once logged in, you'll have access to all features

### 2. Browse Listings
- View all available properties on the home page
- Each card shows the property image, location, price, and ratings
- Click on a card to view more details

### 3. Book a Property
- Click on a property card to view details
- Click the "Book Now" button to make a reservation
- Confirm your booking

### 4. Create a Listing
- Click "Add Listing" from the sidebar
- Fill in property details (title, description, location, price)
- Upload 3 property images
- Click "Add Listing" to publish

### 5. Manage Your Bookings
- Go to "My Bookings" to view your reservations
- Cancel bookings if needed

### 6. Manage Your Listings
- Go to "My Listings" to view your properties
- Cancel bookings made on your properties if needed

## Database Schema

### User Model
```javascript
{
  fullName: String,
  email: String (unique, lowercase),
  password: String (hashed),
  listing: [ObjectId], // References to Listing
  booking: [ObjectId]  // References to Booking
}
```

### Listing Model
```javascript
{
  title: String,
  description: String,
  city: String,
  landMark: String,
  category: String,
  rent: Number,
  image1: String (URL),
  image2: String (URL),
  image3: String (URL),
  ratings: Number,
  host: ObjectId, // Reference to User
  isBooked: Boolean,
  createdAt: Date
}
```

### Booking Model
```javascript
{
  user: ObjectId, // Reference to User
  property: ObjectId, // Reference to Listing
  host: ObjectId, // Reference to User (property owner),
  createdAt: Date
}
```

## Key Features Explained

### Authentication Flow
1. User signs up with email and password
2. Password is hashed using bcryptjs
3. JWT token is generated and stored in HTTP-only cookies
4. Token is automatically sent with each request (due to `withCredentials`)
5. Backend middleware (`isAuth.js`) verifies token on protected routes

### Image Upload Process
1. User selects images during listing creation
2. Images are stored temporarily in memory (using Multer)
3. Images are uploaded directly to Cloudinary
4. Cloudinary returns secure URLs
5. URLs are stored in the database
6. Images are deleted from memory after upload

### Cross-Domain Communication
The application uses dynamic CORS configuration to support multiple deployment scenarios:
- Local development on different ports
- Multiple Vercel preview deployments
- Production deployment

Cookies are configured with:
- `httpOnly: true` - Prevents JavaScript access (security)
- `secure: true` - Only sent over HTTPS
- `sameSite: "none"` - Allows cross-domain requests

## Deployment

### Frontend (Vercel)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the frontend directory
4. Set environment variables in Vercel dashboard if needed
5. Deploy! Your app will be live at a Vercel URL

### Backend (Render or similar)
1. Push your code to GitHub
2. Connect your GitHub repository to your hosting platform
3. Set environment variables in the hosting dashboard
4. Deploy! Your backend will be accessible at a public URL
5. Update frontend's `serverUrl` to point to the deployed backend

## Troubleshooting

### Issue: "User doesn't have a token"
**Solution**: Ensure backend cookies are configured with `sameSite: "none"` and `secure: true` for cross-domain requests.

### Issue: File upload fails with 500 error
**Solution**: Make sure Multer is configured for `memoryStorage` and Cloudinary credentials are correct.

### Issue: CORS errors
**Solution**: Check that the frontend URL is included in the CORS `allowedOrigins` array in the backend.

### Issue: "Cannot connect to database"
**Solution**: Verify MongoDB connection string in `.env` and ensure MongoDB is running or your Atlas cluster is active.

### Issue: Images not displaying
**Solution**: Verify Cloudinary credentials are correct and that the cloud name matches in the `.env` file.

## Performance Optimization

- Vite provides fast development and optimized production builds
- Tailwind CSS is purged to include only used styles
- Images are optimized through Cloudinary
- JWT tokens reduce database calls
- MongoDB indexing on frequently queried fields
- Memory storage for uploads prevents disk I/O

## Security Considerations

- Passwords are hashed with bcryptjs before storage
- JWT tokens are stored in HTTP-only cookies (XSS protection)
- CORS is configured to only allow trusted origins
- Environment variables keep sensitive data out of the codebase
- Input validation is performed on the backend
- Authentication middleware protects sensitive routes

## Future Enhancements

- Add review and rating system for properties
- Implement messaging between hosts and guests
- Add filters and sorting options for listings
- Payment integration for bookings
- Email notifications for bookings
- User profile customization
- Property availability calendar
- Advanced search and filtering

## Contributing

This is an educational project. Feel free to fork, modify, and learn from the codebase!

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please check the deployment logs and ensure all environment variables are correctly set.

---

Built with React, Express, MongoDB, and Node.js. Happy coding!
