# 🖼️ Art Gallery App

A responsive art gallery application built with **Next.js**, **React**, and **styled-components**, featuring dynamic detail pages, a Favorites system with LocalStorage, comment functionality, and optimized data fetching with SWR.

This project was created together with **Klimentiy Vervekin**, and we collaborated on the design, logic, and implementation of core features.

---

## 🚀 Features

### 🎨 Dynamic Gallery

Displays artworks with:

- Spotlight feature
- Gallery overview
- Artwork detail pages

### ⭐ Favorites System

Users can:

- Add/remove artworks to Favorites
- Favorites persist using **LocalStorage**
- Favorites page with dynamic updates

### 💬 Comment Functionality

Each artwork has:

- A comment section
- Comments saved using **LocalStorage**
- Custom React hooks for managing comments

### 🔄 SWR Data Fetching

We use **SWR** for:

- Automatic caching
- Revalidation
- Loading states
- Improved performance

### 🧱 Reusable Components

- Card components
- Comment form
- Navigation
- Spotlight section
- Favorites list
- Layout and styled UI elements

### 📱 Fully Responsive UI

- Modern layout
- Mobile-first
- Smooth component spacing
- Shadow and hover effects

---

## 🧪 Tech Stack

- **Next.js**
- **React**
- **JavaScript (ES6+)**
- **styled-components**
- **SWR**
- **LocalStorage**
- **Jest & Testing Library**

The project includes multiple unit tests to ensure UI and logic reliability.

---

## 🤝 Collaboration

This project was built together with **Klimentiy Vervekin**.  
We collaborated on:

- UI layout and styling decisions
- Component structure
- Data fetching logic
- Favorites & comment features
- Testing setup and implementation

---

## 📂 Folder Structure

```
├── components/
│ ├── Card/
│ ├── Spotlight/
│ ├── Favorites/
│ ├── CommentSection/
│ ├── Layout/
│ └── Navigation/
│
├── pages/
│ ├── index.js
│ ├── favorites.js
│ ├── art/
│ │ └── [id].js
│ └── _app.js
│
├── public/
│ └── images/
│
├── lib/
│ ├── fetchData.js
│ └── useLocalStorage.js
│
├── tests/
│ └── components/
│
└── README.md
```

---

## 🎯 What We Learned

- Working with **SWR** for data fetching and caching
- Building dynamic routes in Next.js
- Creating reusable component architecture
- Managing state with LocalStorage
- Writing tests with Jest & Testing Library
- Designing responsive UI with styled-components
- Collaborating effectively with another developer

---
