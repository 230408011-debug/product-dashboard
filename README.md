# Product Dashboard

A simple Product Dashboard built with React and Vite for the Web Programming course (Assignment 5).

The app shows a hard-coded list of products. The user can show or hide the list with a button and type their name into an input field. All UI behavior is controlled with React state.

## How to run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in the browser.

## File organization

```
product-dashboard/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── ProductList.jsx
    ├── Product.jsx
    └── Card.jsx
```

- `src/App.jsx`: The root component. It holds two state variables created with `useState`: `showProducts` (boolean) and `name` (string). It renders the heading, a toggle button whose text changes between "Show Products" and "Hide Products", a controlled input for the user's name, a paragraph that displays the name, and the `ProductList` component. `ProductList` is rendered only when `showProducts` is true (conditional rendering).
- `src/ProductList.jsx`: Defines the static array of products (`id`, `title`, `price`). It renders one `Product` for each item using `.map()` and uses the product `id` as the key (not the array index).
- `src/Product.jsx`: A reusable component that receives `title` and `price` as props and displays them. It has no state, and its content is wrapped inside the `Card` component.
- `src/Card.jsx`: A layout component that accepts `children` and renders whatever is passed into it. It