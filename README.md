# *Hyggex Assignment*

- *Live : https://heggex.netlify.app/*
  
- *Tech Stack : ReactJS, Tailwind CSS & Vite*


# *Setting up the project*

- Created react app via. vite
  ```
  npm create vite@latest
  ```
 
- Install tailwindcss via npm, and create your tailwind.config.js file
  ```
  npm install -D tailwindcss
  npx tailwindcss init
  ```
  
- Configure your template paths
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
  
- Add the Tailwind directives to your CSS
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
