# 🛒 React Shopping Cart

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

**A modern, responsive shopping cart application built with React.js**

[🌐 Live Demo](https://itsluckysharma01.github.io/Shopping_Cart-react-js/) | [📖 Documentation](#documentation) | [🚀 Quick Start](#quick-start)

![Shopping Cart Demo](https://via.placeholder.com/800x400/4CAF50/white?text=Shopping+Cart+Demo)

</div>

---

## ✨ Features

<table>
<tr>
<td>

### 🛍️ **Shopping Experience**

- Browse product catalog
- Add items to cart
- View cart contents
- Remove items from cart
- Real-time cart count display

</td>
<td>

### 🎨 **User Interface**

- Clean, modern design
- Responsive layout
- Interactive buttons
- Font Awesome icons
- Smooth transitions

</td>
</tr>
<tr>
<td>

### ⚡ **Performance**

- Fast React rendering
- Efficient state management
- Optimized components
- Minimal re-renders

</td>
<td>

### 🔧 **Developer Experience**

- Well-structured code
- Reusable components
- Easy to maintain
- Clear file organization

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/itsluckysharma01/Shopping_Cart-react-js.git
   cd Shopping_Cart-react-js
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the app running! 🎉

---

## 📁 Project Structure

```
shopping-cart/
├── 📁 public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Card.jsx          # Product card component
│   │   ├── Cart.jsx          # Shopping cart component
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── Shop.jsx          # Product listing
│   ├── 📁 styles/
│   │   ├── Card.css
│   │   ├── Cart.css
│   │   └── navbar.css
│   ├── App.js               # Main application component
│   ├── App.css             # Global styles
│   ├── index.js            # Application entry point
│   ├── index.css           # Base styles
│   └── list.js             # Product data
├── package.json
└── README.md
```

---

## 🎯 Component Architecture

<details>
<summary><strong>🔍 Click to see detailed component breakdown</strong></summary>

### 🏗️ App.js (Main Component)

- **State Management**: Handles cart state, warnings, and view switching
- **Functions**: `handleClick()` for adding items to cart
- **Renders**: Navbar, Shop/Cart components conditionally

### 🧭 Navbar.jsx

- **Props**: `size` (cart count), `setShow` (view switcher)
- **Features**: Display cart count, toggle between shop and cart views

### 🛍️ Shop.jsx

- **Props**: `handleClick` function
- **Purpose**: Renders product grid using Card components
- **Data Source**: Imports product list from `list.js`

### 🃏 Card.jsx

- **Props**: `item` (product data), `handleClick` function
- **Features**: Product display, add to cart button
- **Styling**: Individual product card layout

### 🛒 Cart.jsx

- **Props**: `cart` (array), `setCart` (state setter)
- **Features**: Display cart items, quantity controls, total price
- **Actions**: Increase/decrease quantity, remove items, checkout

</details>

---

## 🛠️ Available Scripts

| Command          | Description                 | Usage       |
| ---------------- | --------------------------- | ----------- |
| `npm start`      | 🚀 Start development server | Development |
| `npm build`      | 📦 Build for production     | Deployment  |
| `npm test`       | 🧪 Run test suite           | Testing     |
| `npm run deploy` | 🌐 Deploy to GitHub Pages   | Publishing  |

---

## 🎨 Customization Guide

<details>
<summary><strong>🎨 Styling Customization</strong></summary>

### Color Scheme

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #4caf50;
  --secondary-color: #45a049;
  --background-color: #f9f9f9;
  --text-color: #333;
}
```

### Component Styles

- **Navbar**: Edit `src/styles/navbar.css`
- **Cards**: Edit `src/styles/Card.css`
- **Cart**: Edit `src/styles/Cart.css`

</details>

<details>
<summary><strong>📊 Adding New Products</strong></summary>

Edit `src/list.js` to add new products:

```javascript
{
  id: 11,
  title: "Your New Product",
  author: "Product Details",
  price: 199,
  img: "https://your-image-url.jpg",
  amount: 1,
}
```

</details>

---

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Your app will be live at: `https://yourusername.github.io/Shopping_Cart-react-js`

### Other Deployment Options

<details>
<summary><strong>🌐 Alternative Deployment Platforms</strong></summary>

| Platform     | Command                    | Documentation                                             |
| ------------ | -------------------------- | --------------------------------------------------------- |
| **Netlify**  | Drag & drop `build` folder | [Netlify Docs](https://docs.netlify.com/)                 |
| **Vercel**   | `npx vercel`               | [Vercel Docs](https://vercel.com/docs)                    |
| **Firebase** | `firebase deploy`          | [Firebase Docs](https://firebase.google.com/docs/hosting) |

</details>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💾 Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **📤 Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **🔄 Open a Pull Request**

### 📋 Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 🐛 Known Issues & Roadmap

### 🔧 Current Limitations

- [ ] Cart total price calculation needs implementation
- [ ] Quantity increment/decrement functionality pending
- [ ] Remove item from cart feature needs completion
- [ ] Checkout process not implemented

### 🚀 Future Enhancements

- [ ] User authentication
- [ ] Product search and filtering
- [ ] Wishlist functionality
- [ ] Payment integration
- [ ] Order history
- [ ] Product reviews and ratings

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Lucky Sharma**

- GitHub: [@itsluckysharma01](https://github.com/itsluckysharma01)
- LinkedIn: [Connect with me](www.linkedin.com/in/lucky-sharma918894599977)

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Font Awesome** for beautiful icons
- **Create React App** for the boilerplate
- **GitHub Pages** for free hosting

---

## 📞 Support

If you have any questions or need help:

- 🐛 **Issues**: [Open an issue](https://github.com/itsluckysharma01/Shopping_Cart-react-js/issues)
- 💬 **Discussions**: [Join the discussion](https://github.com/itsluckysharma01/Shopping_Cart-react-js/discussions)
- 📧 **Email**: [Contact me](itsluckysharma001@gmail.com)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ by [Lucky Sharma](https://github.com/itsluckysharma01)

</div>
