# BookCourier

## Purpose
BookCourier is an online platform designed to streamline the process of managing and ordering books. The system supports multiple roles, including **Admin**, **Librarian**, and **User**. Admins can manage all books and users, Librarians can add and manage their books, and Users can place orders, make payments, and manage their wishlist.  

## Live URL
[Live Demo]https://book-courier-assignment.netlify.app 

### Directory structure:
```
    onlymazhar-book-courier-client/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── loader.css
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    ├── .env.example
    ├── public/
    │   └── _redirects
    └── src/
        ├── index.css
        ├── main.jsx
        ├── Components/
        │   ├── Card.jsx
        │   ├── CardSkeleton.jsx
        │   ├── Container.jsx
        │   ├── Footer.jsx
        │   ├── Loader.jsx
        │   ├── Logo.jsx
        │   ├── Navbar.jsx
        │   ├── SocialLogin.jsx
        │   ├── ThemeToggle.jsx
        │   └── Modal/
        │       └── PayModal.jsx
        ├── Context/
        │   ├── AuthContext.jsx
        │   ├── AuthProvider.jsx
        │   └── ThemeContext.jsx
        ├── Firebase/
        │   └── firebase.init.js
        ├── Hooks/
        │   ├── useAuth.jsx
        │   ├── useAxiosSecure.jsx
        │   ├── useRole.jsx
        │   └── useTheme.jsx
        ├── Layouts/
        │   ├── DashboardLayout.jsx
        │   ├── LoginRegister.jsx
        │   └── MainLayout.jsx
        ├── Pages/
        │   ├── BecomeLibrarian/
        │   │   └── BecomeLibrarian.jsx
        │   ├── Books/
        │   │   ├── BookDetails.jsx
        │   │   └── Books.jsx
        │   ├── Contact/
        │   │   └── Contact.jsx
        │   ├── Coverage/
        │   │   └── Coverage.jsx
        │   ├── Dashboard/
        │   │   ├── DashboardHome.jsx
        │   │   ├── Admin/
        │   │   │   ├── AdminRoute.jsx
        │   │   │   ├── AdminStatistics.jsx
        │   │   │   ├── ManageBooks.jsx
        │   │   │   └── ManageUsers.jsx
        │   │   ├── Customer/
        │   │   │   ├── CustomerRoute.jsx
        │   │   │   ├── MyInvoices.jsx
        │   │   │   ├── MyOrders.jsx
        │   │   │   ├── MyOrderTable.jsx
        │   │   │   ├── UserProfile.jsx
        │   │   │   ├── UserStatistics.jsx
        │   │   │   └── Wishlist.jsx
        │   │   └── Librarian/
        │   │       ├── AddBook.jsx
        │   │       ├── BooksTabel.jsx
        │   │       ├── EditBook.jsx
        │   │       ├── LibrarianRoute.jsx
        │   │       ├── LibrarianStatistics.jsx
        │   │       ├── ManageOrders.jsx
        │   │       ├── MyBooks.jsx
        │   │       └── OrderTable.jsx
        │   ├── Error/
        │   │   └── Error.jsx
        │   ├── FAQ/
        │   │   └── FAQ.jsx
        │   ├── Help/
        │   │   └── Help.jsx
        │   ├── Home/
        │   │   ├── Home.jsx
        │   │   ├── Banner/
        │   │   │   └── Banner.jsx
        │   │   ├── BlogSection/
        │   │   │   └── BlogSection.jsx
        │   │   ├── BookCategories/
        │   │   │   └── BookCategories.jsx
        │   │   ├── BookHighlights/
        │   │   │   └── BookHighlights.jsx
        │   │   ├── CallToAction/
        │   │   │   └── CallToAction.jsx
        │   │   ├── Coverage/
        │   │   │   └── CoverageMap.jsx
        │   │   ├── FAQ/
        │   │   │   └── FAQ.jsx
        │   │   ├── FeaturedServices/
        │   │   │   └── FeaturedServices.jsx
        │   │   ├── HowItWorks/
        │   │   │   └── HowItWorks.jsx
        │   │   ├── ImpactStats/
        │   │   │   └── ImpactStats.jsx
        │   │   ├── LatestBooks/
        │   │   │   └── LatestBooks.jsx
        │   │   ├── Newsletter/
        │   │   │   └── Newsletter.jsx
        │   │   ├── RequestBookForm/
        │   │   │   └── RequestBookForm.jsx
        │   │   ├── ScrollIndicator/
        │   │   │   └── ScrollIndicator.jsx
        │   │   ├── Testimonials/
        │   │   │   └── Testimonials.jsx
        │   │   └── WhyChooseUs/
        │   │       └── WhyChooseUs.jsx
        │   ├── HowItWorks/
        │   │   └── HowItWorks.jsx
        │   ├── Legal/
        │   │   ├── CookiePolicy.jsx
        │   │   ├── PrivacyPolicy.jsx
        │   │   ├── RefundPolicy.jsx
        │   │   └── TermsOfService.jsx
        │   ├── Login/
        │   │   └── Login.jsx
        │   ├── Payment/
        │   │   └── Payment.jsx
        │   ├── Pricing/
        │   │   └── Pricing.jsx
        │   ├── Register/
        │   │   └── Register.jsx
        │   ├── Returns/
        │   │   └── Returns.jsx
        │   └── Shipping/
        │       └── Shipping.jsx
        ├── route/
        │   ├── PrivateRoute.jsx
        │   └── Route.jsx
        └── utils/
            ├── formatDate.js
            ├── index.js
            └── sidebarMenu.js

```
## Key Features
### Admin
- View all books added by librarians
- Publish or unpublish books
- Delete a book along with all associated orders
- Manage users and update user roles (admin or librarian)

### Librarian
- Add and manage their books
- View and manage orders for books they added
- Update order status (Pending → Shipped → Delivered)
- Cancel orders

### User
- Browse published books
- Place orders and make payments through Stripe
- View order history and invoices
- Add books to wishlist

## Technologies & NPM Packages Used
- **React** – Frontend library  
- **React Router** – Routing  
- **React Query (@tanstack/react-query)** – Data fetching and caching  
- **Axios** – HTTP requests  
- **Tailwind CSS / DaisyUI** – Styling components  
- **SweetAlert2** – Confirmation alerts  
- **React Toastify** – Notifications
- **react leaflet** – Notifications  
- **Firebase Admin SDK** – Authentication and role verification  
- **MongoDB / MongoDB Node.js Driver** – Database  
- **Stripe** – Payment gateway  
- **dotenv** – Environment variable management  
- **cors** – Cross-Origin Resource Sharing  
- **express** – Node.js backend framework  

 
