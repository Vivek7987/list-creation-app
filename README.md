# 📋 List Creation App

A responsive React application to fetch and manage categorized lists dynamically. Users can select two lists to create a new custom list by transferring items between them. Built as part of a frontend assignment using **React**, **Hooks**, and modern **component architecture**.

---

## 🚀 Live Demo

🔗 ([https://your-username.github.io/list-creation-app](https://vivek7987.github.io/list-creation-app/))

---

## 🎥 Loom Video Walkthrough

📽️ [Watch the video explanation & walkthrough](https://www.loom.com/share/your-looom-link)

---

## 📌 Project Objective

The app demonstrates key front-end development skills including:
- Making HTTP requests with `fetch`
- Managing different API states (loading, success, failure)
- Dynamic and conditional rendering
- Component decomposition and state management
- Responsive UI
- Implementing UI interactions with precise behavior

---

## 🧠 How It Works

### 📦 Initial Load

- On load, a `GET` request is made to `https://apis.ccbp.in/list-creation/lists`.
- List items are categorized using the `list_number` provided in the API response.
- Each category is displayed as a separate scrollable list.
- Loader is shown while fetching, and a failure view appears if API fails.

### ✅ Selecting Lists

- Each list has a checkbox in **"All Lists View"**.
- User must select **exactly two** lists to proceed.
- Clicking the “Create a New List” button without selecting two lists shows an error message.

### 🔁 Creating a New List

- A new view appears with 3 columns:
  - First selected list
  - Empty "New List"
  - Second selected list
- Items can be moved:
  - From selected lists ➝ to New List
  - From New List ➝ to either selected list
- Arrows (`→` and `←`) control the movement between lists.

### ❌ Cancel & ✅ Update

- **Cancel** resets all changes and reloads from API.
- **Update** finalizes changes and goes back to "All Lists View" with new list state.

---

## 🧱 Component Structure

src/ │ ├── components/ │ ├── ListItem/ → Individual list item component │ ├── ListContainer/ → List of items with header and arrows │ ├── ListsView/ → Renders all lists with checkboxes │ ├── ListCreationView/ → Three-column view for creating new list │ └── LoaderFailure/ → Shows loading spinner or failure message │ ├── constants/ → API URLs and status constants ├── App.js → Main app logic and routing between views ├── App.css → Centralized styling └── index.js → Entry point


---

## 🖥️ Responsive Design

- Flexbox and media queries ensure the app works smoothly on:
  - Small devices (phones)
  - Tablets
  - Large desktops
- Lists stack vertically on small screens and appear in rows on larger screens.

---

## 🧪 Technologies Used

- **React.js** (Functional components + Hooks)
- **Fetch API** for data
- **CSS Flexbox + Media Queries** for layout
- **React Best Practices**
  - Component responsibility
  - State lifting
  - Destructuring
  - No flag arguments
  - Meaningful naming

---

## 🛠️ Setup Instructions

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/list-creation-app.git
   cd list-creation-app
   ```
2. Install dependencies
   ``` bash
   npm install
   ```
3. Start development server
   ``` bash
   npm start
   ```
4. Deploy (if needed)
   ``` bash
   npm run deploy
   ```
   


