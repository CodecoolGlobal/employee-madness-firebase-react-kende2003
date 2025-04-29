# Employee Madness

Employee Madness is a Firebase-powered employee management web application. It supports Google and email/password authentication, CRUD operations for employees, equipment management, search, filtering, sorting, and optional pagination.

## Working version
https://employee-madness-demo.web.app/

## 🚀 Features

- 🔐 Firebase Authentication (Google & Email/Password)
- 💾 Firebase Realtime Database integration
- 👩‍💼 CRUD for employee records
- 🛠️ Equipment tracking
- 🔎 Employee search
- 🔃 Filter & sort employees by multiple fields
- 📄 Optional: Pagination
- 🔗 Optional: Equipment-employee relation

---

## 🧰 Getting Started

### 1. Firebase Initialization

- Log in with Firebase CLI:  
  ```bash
  firebase login
  ```
- Initialize your Firebase project:  
  ```bash
  firebase init
  ```
- Enable **Realtime Database** and **Authentication** (Google and Email/Password) in your Firebase console.

---

### 2. Environment Variables

- Copy `.env.sample` and rename it to `.env.local`.
- Fill it with your Firebase credentials:
  ```env
  VITE_API_KEY=your_api_key
  VITE_AUTH_DOMAIN=your_project.firebaseapp.com
  VITE_DATABASE_URL=https://your_project.firebaseio.com
  VITE_PROJECT_ID=your_project_id
  ```

---

### 3. Database Rules

Update your `database.rules.json` file:
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

Deploy with:
```bash
firebase deploy --only database
```

---

### 4. Running the App

Start the app locally:
```bash
npm install
npm run dev
```

- Log in
- Create at least 5 test employees
- Test all CRUD operations

---

## 🧪 Optional: Seed the Database

1. Go to Firebase Console → ⚙️ → **Service Accounts**
2. Generate a private key and download it
3. Rename to `account.json` and place it in the `seeder/` folder
4. Run:
   ```bash
   npm run seed
   ```

---

## 🎯 Extra Features

### 🔍 Filtering

- Filter employees by **Position** and **Level**
- A search box is also available for keyword lookup

### 🔃 Sorting

- Sort by: First name, Last name, Middle name, Position, Level
- Click column headers to sort

### 🧱 Equipment Management

- Add/edit/delete company equipment
- Properties: `name`, `type`, `amount`

### 🔗 Assign Equipment (Optional)

- On employee edit page, assign equipment from a dropdown

### 🔎 Search Route

- Visit `/employees/:search` to find employees by exact name match

### 📚 Pagination (Optional)

- Shows 10 employees per page
- Pagination appears after every 10 entries

---

## 🧠 Learn More

- [Firebase Docs](https://firebase.google.com/docs)
- [Filtering in Firebase](https://firebase.google.com/docs/database/web/lists-of-data#filtering_data)
- [React Router](https://reactrouter.com/en/main)

---

## 🧑‍💼 Authors

- Created by **[Fáy Kende]**
- For any questions, contact [kendi006@gmail.com]

