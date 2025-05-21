# AutoEver Vue Practice
## Configuration
- JS(Java Script) Package manager: Yarn
- Build tool: Vite
- JS framework: Vue
- CSS framework: tailwind

### Configuration setting
- Setting project
```bash
yarn create vite my-project-name
cd my-project-name
```

- Install tailwind
```bash
yarn add -D tailwindcss@3.4.17 postcss autoprefixer
yarn tailwindcss init -p
```

> check `postcss.config.js` and `tailwind.config.js` are created.

- Setting tailwind

Write code in the `tailwind.config.js` file

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Write code in the `style.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
