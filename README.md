````
# E-commerce Product Listing Page

This is a simple e-commerce product listing page built using Next.js, Tailwind CSS, Express.js, and MongoDB.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your MongoDB connection URI and PORT:

   ```
   URI=mongodb://your-mongodb-connection-string
   PORT = 8000
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   This will start both the frontend (Next.js) and backend (Express.js) servers. The application will be accessible at `http://localhost:3000`.

## Code Structure

- **`app.ts`:** Contains the Express.js server setup, API routes for fetching products, and database connection logic.
- **`models.ts`:** Defines the Mongoose schema for the `Item` model, which represents a product.
- **`server.ts`:** Entry point for the Node.js server. It imports the Express app, connects to the database, and starts the server.
- **`app/page.js`:** The main page component, responsible for fetching and displaying product data.
- **`components/SearchBar.jsx`:** Component for searching products by name or description.

## Design Decisions

- **Next.js:** Chosen for its easy template setup and server-side rendering capabilities, which improve SEO and initial loading performance.
- **Tailwind CSS:** Used for its utility-first approach, making styling efficient and maintainable.
- **Express.js:** It is minimal and flexible for building web applications and APIs with middleware support and easy routing.
- **MongoDB:** It offers a flexible, schema-less data model that aligns with JavaScript’s JSON format, making it easy to integrate, manage, and scale in real-time applications with high performance and scalability.

## Challenges

- **Implementing real-time search:** Initially, the search function was not updating the product list instantly. This was resolved by using `useEffect` to fetch and update the products whenever the search input changed.
- **Sorting products:** Implementing sorting functionality required careful handling of state and ensuring that the product list was updated correctly.

## Future Improvements

- **Cloud Storge:** Currently images are taken dummy, we could implement cloud based soltions to efficeintly store images and files
- **Pagination:** Implement pagination to handle large product lists efficiently.
- **Filtering:** Allow users to filter products by category, price range, etc.
- **User authentication:** Add user accounts and shopping cart functionality.
- **Improved styling:** Enhance the visual design and user experience.
- **Testing:** Write unit and integration tests to ensure code quality and prevent regressions.

```

```

```

```

Okay, here's a concise summary of how I would deploy your application to AWS EC2:

**I would deploy the application to aws ec2 by doing:**

1. **Launch two EC2 instances:** One for the frontend and one for the backend.
2. **Securely connect to each instance using SSH.**
3. **On the backend instance:**
   - Install Node.js, npm, and any database software (if needed).
   - Deploy the backend code (`vazal-ai-assignment/backend`).
   - Install backend dependencies (`npm install`).
   - Configure the backend and database.
   - Start the backend application using a process manager like `pm2`.
4. **On the frontend instance:**
   - Install Node.js, npm, and Nginx.
   - Deploy the frontend code (`vazal-ai-assignment/frontend`).
   - Install frontend dependencies (`npm install`).
   - Build the frontend for production (`npm run build`).
   - Configure Nginx to serve the built frontend application.
   - **Crucially, update the frontend's API endpoint to point to the private IP address of the backend instance.**
