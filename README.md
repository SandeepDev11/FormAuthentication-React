# 🔐 React Authentication with Protected Routes

This is a simple React-based authentication system using:

- **Formik & Yup** for form handling and validation
- **Axios** for API requests
- **js-cookie** to store the token in cookies
- **React Router v6** for routing and private route protection

---

## 📦 Features

✅ Login form with validation  
✅ JWT token saved in cookies  
✅ Protected routes with `<PrivateRoute />`  
✅ Logout functionality  
✅ Clean code structure with separation of concerns

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-auth-example.git
cd react-auth-example
2. Install dependencies
npm install
```

3. Start the development server

```bash
npm run dev

or

Edit
npm start
```

🔧 Folder Structure
```bash
src/
│
├── auth/
│ └── PrivateRoute.tsx # Route guard component
│
├── pages/
│ ├── Login.tsx # Login page with Formik + Yup
│ ├── Dashboard.tsx # Protected dashboard page
│ └── Home.tsx # Public homepage
│
├── App.tsx # Root component
├── AppRoutes.tsx # Routing configuration
└── main.tsx / index.tsx # React entry point
```

### 🔐 Authentication Flow
User logs in using the form

Axios sends the login request to an API (e.g. POST /api/login)

If successful, the token is stored in cookies:
```bash
Cookies.set('token', 'your_jwt_token', { expires: 7 });
```
User is redirected to ```/dashboard```

The PrivateRoute component checks if the token exists and allows or blocks access accordingly

### 📁 Sample API Response
The login endpoint expects:
```bash
{
"email": "test@example.com",
"password": "123456"
}
```
And returns:

```bash
{
"token": "your-jwt-token-here"
}
```
You can replace this with your real backend URL in the axios.post() call inside Login.tsx.

🚪 Logout
You can log out by clearing the token and redirecting:

```bash
Cookies.remove('token');
navigate('/login');
```

### 🛠 Technologies Used
- React
- Formik
- Yup
- Axios
- React Router v6
- js-cookie
- TypeScript (optional but recommended)

## 📜 License
This project is open-sourced under the MIT License. Feel free to use it as a starter or reference for your own projects.

## 🤝 Contribution
Feel free to fork and submit a pull request with improvements or bug fixes!
