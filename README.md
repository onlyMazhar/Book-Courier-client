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
    ├── public 
    └── src/
        ├── index.css
        ├── main.jsx
        ├── Components/
        │   └── Modal 
        ├── Context 
        ├── Firebase
        ├── Hooks
        ├── Layouts
        ├── Pages   
        ├── route 
        └── utils 

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

 
