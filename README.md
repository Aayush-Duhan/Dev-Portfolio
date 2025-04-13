# Aayush's Portfolio Website 🚀

A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React, Vite, and Three.js, this portfolio features a stunning 3D interface, smooth animations, and a clean, professional design optimized for performance and user experience.

## 🌟 Features

- **Interactive 3D Elements** - Immersive experience powered by Three.js with animated 3D models and effects
- **Smooth Animations** - Polished transitions and micro-interactions using Framer Motion
- **Responsive Design** - Mobile-first approach ensuring perfect display across all devices
- **Dynamic GitHub Projects** - Auto-updating project showcase pulling directly from GitHub
- **Modern UI/UX** - Clean, professional design with intuitive navigation
- **Performance Optimized** - Fast loading times and smooth interactions
- **Custom Cursor** - Unique cursor experience enhancing user interaction
- **Contact Form** - Functional contact form with email integration
- **Resume Download** - Easy access to professional resume

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GitHub API](https://docs.github.com/en/rest) - Dynamic project fetching
- [EmailJS](https://www.emailjs.com/) - Email service integration
- [React Router](https://reactrouter.com/) - Navigation and routing
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aayush-Duhan/Dev-Portfolio.git
   cd Portfolio-Windsurf/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file and add your GitHub token and any other required environment variables.

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

5. **Build for production**
   ```bash
   npm run build
   ```
   The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets and favicon
├── src/
│   ├── components/      # React components
│   │   ├── canvas/      # Three.js canvas components
│   │   ├── ui/          # UI components
│   │   └── sections/    # Page sections
│   ├── assets/          # Images, fonts, and other assets
│   │   ├── images/      # Image files
│   │   └── models/      # 3D models
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Example environment variables
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# GitHub API Token (for fetching repositories)
VITE_GITHUB_TOKEN=your_github_token_here
```

> **Note:** All environment files (.env, .env.*, *.env) are ignored in .gitignore for security.

## 🤝 Contact

Aayush Duhan - [LinkedIn](https://www.linkedin.com/in/aayush-duhan-245167253/) - aayushduhan82@gmail.com

Project Link: [https://github.com/Aayush-Duhan/Portfolio-Windsurf](https://github.com/Aayush-Duhan/Dev-Portfolio)
