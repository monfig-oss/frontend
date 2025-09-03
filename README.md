# 🚀 Monfig

Here you can find the entire web frontend of Monfig Software, written with Vue / NuxtJS.

<div align="center">

![GitHub License](https://img.shields.io/github/license/monfig-oss/frontend?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/monfig-oss/frontend?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/monfig-oss/frontend?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/monfig-oss/frontend?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/monfig-oss/frontend?style=for-the-badge)

</div>

<div align="center">
  <img src="https://i.imgur.com/L0v4vUo.png" alt="Project Banner" width="100%">
</div>

## 📋 Table of Contents

- [🛠️ Installation](#%EF%B8%8F-installation)
- [🔧 Configuration](#-configuration)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [🐛 Bug Reports](#-bug-reports)
- [💡 Feature Requests](#-feature-requests)
- [📑 General Issues](#-general-issues)
- [🔗 Related Projects](#-related-projects)
- [🏆 Acknowledgments](#-acknowledgments)
- [📄 License](#-license)
- [📞 Contact](#-contact)

## 🛠️ Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/monfig-oss/frontend.git
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   pnpm run dev
   ```

### Alternative Installation Methods

#### Using Yarn
```bash
yarn install
yarn dev
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
API_BASE_URL=http://localhost:8081
```

## 🚀 Deployment

### Manual Deployment
  1. Build the project
  ```bash
  pnpm run build
  ```
  2. Host it somewhere.


### Docker Deployment

```bash
# Build Docker image
docker build -t monfig-frontend .

# Run container
docker run -p 3000:3000 monfig-frontend
```

## 🤝 Contributing

Contributions are very welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** for your changes
5. **Commit your changes**
   ```bash
   git commit -m 'feat: amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Use conventional commit messages
- Ensure all tests pass before submitting

### Code Style

- Use 4 spaces for indentation (like you prefer! 😊)
- Use meaningful variable names
- Add comments for complex logic
- Follow the project's ESLint configuration

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/monfig-oss/frontend.git

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

## 🐛 Bug Reports

Found a bug? Please use our [🐛 Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) when creating an issue.

### Required Information
- 🐞 **Description** – What exactly went wrong?  
- 🔁 **Steps to Reproduce** – How can we replicate the bug?  
- ✅ **Expected Behavior** – What should have happened instead?  
- 📸 **Screenshots** – If possible, add screenshots or GIFs  
- 🖥️ **Environment** – OS, browser, Node.js version, project version  
- ➕ **Additional Context** – Any extra info that could help

👉 Create a new bug report here: [New Bug Report](https://github.com/monfig-oss/frontend/issues/new?template=bug_report.md)

## 💡 Feature Requests

Got an idea for improvement? Use our [💡 Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) to share it.

### Required Information
- ✨ **Feature Description** – What should be added/changed?  
- 🎯 **Motivation & Problem** – Why is this feature valuable?  
- 🛠️ **Proposed Solution** – How could it be implemented?  
- 🔄 **Alternatives** – Any other approaches you considered  
- 📸 **Mockups / Screenshots** – Optional design or concept images  
- ➕ **Additional Context** – Extra notes, links, or references  

👉 Submit your idea here: [New Feature Request](https://github.com/monfig-oss/frontend/issues/new?template=feature_request.md)

## 📑 General Issues

For discussions, questions, or other ideas, use our [📝 General Issue template](.github/ISSUE_TEMPLATE/general_issue.md).

### Required Information
- 📝 **Summary** – A clear and concise description of the issue  
- 🤔 **Context** – Why are you opening this issue? (discussion, feedback, question)  
- 🎯 **Goal** – What do you want to achieve with this issue?  
- ➕ **Additional Notes** – Extra details, links, or references  

👉 Open a general issue here: [New General Issue](https://github.com/monfig-oss/frontend/issues/new?template=general_issue.md)

## 🔗 Related Projects

- [Backend](https://github.com/monfig-oss/backend) - RestAPI backend of monfig

## 🏆 Acknowledgments

### Contributors

<div align="center">

<a href="https://github.com/monfig-oss/frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=monfig-oss/frontend" />
</a>

</div>

### Tools & Libraries Used  

![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) 
![Nuxt.js](https://img.shields.io/badge/nuxt.js-00C58E?style=for-the-badge&logo=nuxt&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![Pinia](https://img.shields.io/badge/pinia-FADA5E?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ3NyIgdmlld0JveD0iMCAwIDMxOSA0NzciIHdpZHRoPSIzMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTJjZTYzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTFhMjU2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI1NS4zNDIwNzUlIiB4Mj0iNDIuODE2OTMzJSIgeGxpbms6aHJlZj0iI2EiIHkxPSIwJSIgeTI9IjQyLjg2Mjg1NSUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI1NS4zNDg2NDIlIiB4Mj0iNDIuODA4MTAzJSIgeGxpbms6aHJlZj0iI2EiIHkxPSIwJSIgeTI9IjQyLjg2Mjg1NSUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9IjU4LjgxMTI0MyUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhhZTk5YyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzUyY2U2MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iNTEuMzc3NjMlIiB4Mj0iNDQuNTg0NzE5JSIgeTE9IjE3LjQ3MjU1MSUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmU1NmMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmM2M2EiLz48L2xpbmVhckdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0IC0yNCkiPjxnIHRyYW5zZm9ybT0ibWF0cml4KC45OTI1NDYxNSAuMTIxODY5MzQgLS4xMjE4NjkzNCAuOTkyNTQ2MTUgMzMuOTIyMDczIC45NzY2OTEpIj48cGF0aCBkPSJtMTAzLjk1MDUzNSAyNTguMjc0MTQ5YzQ0LjM2MTU5OS00LjM2MDgyNSA2MC4wMTQ1MDMtNDAuMzkxMjgyIDY1LjM1MzA5NC05NC42OTk0NDRzLTMwLjkzMjE5LTEwMy40NTEwMDEtNDYuMDIwMzQ3LTEwMS45Njc4MDc5Yy0xNS4wODgxNTYgMS40ODMxOTMyLTYzLjAzODUzMTMgNTguOTA1MTIzOS02OC4zNzcxMjIyIDExMy4yMTMyODY5LTUuMzM4NTkwOCA1NC4zMDgxNjIgNC42ODI3NzU0IDg3LjgxNDc5MSA0OS4wNDQzNzUyIDgzLjQ1Mzk2NXoiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcxMDY3OCAtLjcwNzEwNjc4IC43MDcxMDY3OCAuNzA3MTA2NzggLTgwLjQ5NjMzMiAxMjUuODkyOTQ0KSIvPjxwYXRoIGQ9Im0yNzUuODc2NzUyIDI1OC4yNzM5OTJjNDQuMzYxNiA0LjM2MDgyNiA1My4xNjcxMzMtMjkuMjY1MzIyIDQ3LjgyODU0Mi04My41NzM0ODUtNS4zMzg1OTEtNTQuMzA4MTYyLTUyLjA3MzEzMy0xMTEuNjEwNTc0NC02Ny4xNjEyOS0xMTMuMDkzNzY3NS0xNS4wODgxNTYtMS40ODMxOTMxLTUyLjU3NDc3IDQ3LjU0MDEyNzUtNDcuMjM2MTc5IDEwMS44NDgyODk1czIyLjIwNzMyOCA5MC40NTgxMzcgNjYuNTY4OTI3IDk0LjgxODk2M3oiIGZpbGw9InVybCgjYykiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcxMDY3OCAuNzA3MTA2NzggLS43MDcxMDY3OCAuNzA3MTA2NzggMTkxLjQwMzM5OSAtMTQxLjg2MTk2MykiLz48cGF0aCBkPSJtMTg4LjM3MDAyNyAyMTYuODc2MzA1YzM5Ljk0MTgzNCAwIDUwLjk1MjY1LTM4LjI1MTk4NyA1MC45NTI2NS05Ny44OTg3NCAwLTU5LjY0Njc1MzItMzcuMzY3NzMzLTExOC4xMDEyNTk1Ni01MC45NTI2NS0xMTguMTAxMjU5NTZzLTUyLjA0NzM1IDU4LjQ1NDUwNjM2LTUyLjA0NzM1IDExOC4xMDEyNTk1NmMwIDU5LjY0Njc1MyAxMi4xMDU1MTYgOTcuODk4NzQgNTIuMDQ3MzUgOTcuODk4NzR6IiBmaWxsPSJ1cmwoI2QpIi8+PC9nPjxwYXRoIGQ9Im0xODQuNDczNDczIDUwMWM4My4xMTg4NTQgMCAxNTAuNTI2NTI3LTI0LjE0NTE0OCAxNTAuNTI2NTI3LTEzMy42NDUxNDhzLTY3LjQwNzY3My0xOTkuMzU0ODUyLTE1MC41MjY1MjctMTk5LjM1NDg1MmMtODMuMTE4ODU1IDAtMTUwLjQ3MzQ3MyA4OS44NTQ4NTItMTUwLjQ3MzQ3MyAxOTkuMzU0ODUyczY3LjM1NDYxOCAxMzMuNjQ1MTQ4IDE1MC40NzM0NzMgMTMzLjY0NTE0OHoiIGZpbGw9InVybCgjZSkiLz48ZWxsaXBzZSBjeD0iMjYwLjUiIGN5PSIzMzUiIGZpbGw9IiNlYWFkY2MiIHJ4PSIyMS41IiByeT0iMTAiLz48ZWxsaXBzZSBjeD0iMTAyLjUiIGN5PSIzMjkiIGZpbGw9IiNlYWFkY2MiIHJ4PSIyMS41IiByeT0iMTAiIHRyYW5zZm9ybT0ibWF0cml4KC45OTI1NDYxNSAuMTIxODY5MzQgLS4xMjE4NjkzNCAuOTkyNTQ2MTUgNDAuODU5MDMzIC0xMC4wMzkyOTIpIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLS45OTkzOTA4MyAuMDM0ODk5NSAuMDM0ODk5NSAuOTk5MzkwODMgMjY5LjI4NDgyNSAyNzEuMDI3NjY3KSI+PHBhdGggZD0ibTczLjEwNDY5ODUgNTguMjcyODc5NGM2LjczNzI0MTYgNC45MTMwMzMzIDE0LjMxMzI2MzIgNi42NjQwNTg3IDIyLjcyODA2NDkgNS4yNTMwNzYxIDguNDE0ODAxNi0xLjQxMDk4MjUgMTQuNTA1NDQ2Ni01LjI1MzU3NjkgMTguMjcxOTM0Ni0xMS41Mjc3ODMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIHRyYW5zZm9ybT0ibWF0cml4KC45OTk4NDc3IC4wMTc0NTI0MSAtLjAxNzQ1MjQxIC45OTk4NDc3IDEuMDI2NDY0IC0xLjYyNDc5NCkiLz48cGF0aCBkPSJtMTU0LjUwMTEyNCAzYy01LjkzNzU0NSAwLTExLjMxMjc4MiAyLjQwNjI5ODA1LTE1LjIwMzY0NCA2LjI5NjgwNjIxLTMuODkwOTQgMy44OTA1ODUyOS02LjI5NzQ4IDkuMjY1NDU0NDktNi4yOTc0OCAxNS4yMDI2MzE3OSAwIDUuOTM3Njg4OCAyLjQwNjQ4OCAxMS4zMTI3NDIyIDYuMjk3MjkxIDE1LjIwMzQyNzIgMy44OTA4ODYgMy44OTA3NjczIDkuMjY2MTk3IDYuMjk3MTM0OCAxNS4yMDM4MzMgNi4yOTcxMzQ4IDUuOTM3MTA5IDAgMTEuMzExODk2LTIuNDA2Mzg4OSAxNS4yMDIzODctNi4yOTcyMzQ4IDMuODkwMjk5LTMuODkwNjUzNSA2LjI5NjQ4OS05LjI2NTY2MzYgNi4yOTY0ODktMTUuMjAzMzI3MiAwLTUuOTM3MTUyMS0yLjQwNjI0Mi0xMS4zMTE5NzgxLTYuMjk2Njc3LTE1LjIwMjUzMTgxLTMuODkwNDY5LTMuODkwNTg2NzQtOS4yNjUxODEtNi4yOTY5MDYxOS0xNS4yMDIxOTktNi4yOTY5MDYxOXoiIGZpbGw9IiMwMDAiIC8+PHBhdGggZD0ibTE1NCAyMWMwLTMuODY1NTQ5IDMuMTM1MzYyLTcgNi45OTk0MTMtNyAzLjg2NjM5OSAwIDcuMDAwNTg3IDMuMTM0NDUxIDcuMDAwNTg3IDdzLTMuMTM0MTg4IDctNy4wMDA1ODcgN2MtMy44NjQwNTEtLjAwMTE3MzUtNi45OTk0MTMtMy4xMzQ0NTEtNi45OTk0MTMtN3oiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMjQuNSAxM2MtNS45Mzc1MjkyIDAtMTEuMzEyNDI2IDIuNDA2MjY4LTE1LjIwMjk5NDI3IDYuMjk2NzE4MS0zLjg5MDY5NDY0IDMuODkwNTc2NS02LjI5NzAwNTczIDkuMjY1NDc2NS02LjI5NzAwNTczIDE1LjIwMjcxOTkgMCA1LjkzNzc1NDkgMi40MDYyNTk2MiAxMS4zMTI4MzkxIDYuMjk2ODE3NjYgMTUuMjAzNTE1MyAzLjg5MDU5MTA0IDMuODkwNzA5MiA5LjI2NTU2MTg0IDYuMjk3MDQ2NyAxNS4yMDMxODIzNCA2LjI5NzA0NjcgNS45MzcxMjQ5IDAgMTEuMzEyMjUxNC0yLjQwNjQxOSAxNS4yMDMwMzcxLTYuMjk3MzIyOSAzLjg5MDU0NDEtMy44OTA2NjIzIDYuMjk2OTYyOS05LjI2NTY0MTYgNi4yOTY5NjI5LTE1LjIwMzIzOTEgMC01LjkzNzA4Ni0yLjQwNjQ3MDMtMTEuMzExODgxMS02LjI5NzE1MS0xNS4yMDI0NDM3LTMuODkwNzYzLTMuODkwNjQ0OC05LjI2NTgxNTQtNi4yOTY5OTQzLTE1LjIwMjg0OS02LjI5Njk5NDN6IiBmaWxsPSIjMDAwIiAvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0xMzYgMjQuNDk5NDM4YzAgMTAuMjE4NTIzMiA4LjI4MjkxMSAxOC41MDA1NjIgMTguNTAxMTI0IDE4LjUwMDU2MiAxMC4yMTcwODkgMCAxOC40OTg4NzYtOC4yODIwMzg4IDE4LjQ5ODg3Ni0xOC41MDA1NjIgMC0xMC4yMTczOTkyLTguMjgxNzg3LTE4LjQ5OTQzOC0xOC40OTg4NzYtMTguNDk5NDM4LTEwLjIxODIxMyAwLTE4LjUwMTEyNCA4LjI4MjAzODgtMTguNTAxMTI0IDE4LjQ5OTQzOHptLTYgMGMwLTEzLjUzMTE5NTQgMTAuOTY5MjktMjQuNDk5NDM4IDI0LjUwMTEyNC0yNC40OTk0MzggMTMuNTMwODM4IDAgMjQuNDk4ODc2IDEwLjk2ODM3MTEgMjQuNDk4ODc2IDI0LjQ5OTQzOCAwIDEzLjUzMTk2MDctMTAuOTY3ODA4IDI0LjUwMDU2Mi0yNC40OTg4NzYgMjQuNTAwNTYyLTEzLjUzMjA2NCAwLTI0LjUwMTEyNC0xMC45Njg0NzI4LTI0LjUwMTEyNC0yNC41MDA1NjJ6IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0ibTYgMzQuNDk5NDM4YzAgMTAuMjE4NTIzMiA4LjI4MTc4NzMgMTguNTAwNTYyIDE4LjUgMTguNTAwNTYyIDEwLjIxNzA4ODkgMCAxOC41LTguMjgyMDM4OCAxOC41LTE4LjUwMDU2MiAwLTEwLjIxNzM5OTItOC4yODI5MTExLTE4LjQ5OTQzOC0xOC41LTE4LjQ5OTQzOC0xMC4yMTgyMTI3IDAtMTguNSA4LjI4MjAzODgtMTguNSAxOC40OTk0Mzh6bS02IDBjMC0xMy41MzEyOTcgMTAuOTY4MjY4MS0yNC40OTk0MzggMjQuNS0yNC40OTk0MzggMTMuNTMwOTM5OCAwIDI0LjUgMTAuOTY4NDcyOCAyNC41IDI0LjQ5OTQzOCAwIDEzLjUzMTg1OTEtMTAuOTY4ODMgMjQuNTAwNTYyLTI0LjUgMjQuNTAwNTYyLTEzLjUzMTk2MiAwLTI0LjUtMTAuOTY4MzcxMS0yNC41LTI0LjUwMDU2MnoiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtMjQgMzFjMC0zLjg2NTU0OSAzLjEzNDQ1MS03IDctN3M3IDMuMTM0NDUxIDcgNy0zLjEzNDQ1MSA3LTcgNy03LTMuMTM0NDUxLTctN3oiLz48L2c+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxMSI+PGcgc3Ryb2tlPSIjZWNiNzMyIj48cGF0aCBkPSJtNzAuNSAzNzcuNSA3NCA3NyIvPjxwYXRoIGQ9Im0xMzQuNSAzODYuNS00NyA1MCIvPjwvZz48ZyBzdHJva2U9IiNlY2I3MzIiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDI5OCAzNzcpIj48cGF0aCBkPSJtLjUuNSA3NCA3NyIvPjxwYXRoIGQ9Im02NC41IDkuNS00NyA1MCIvPjwvZz48ZyBzdHJva2U9IiNmZmM3M2IiIHRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMSAwIDIxNSAyMDcpIj48cGF0aCBkPSJtLjUuNSA0OSA0OSIvPjxwYXRoIGQ9Im0uNSAxMC41IDQ5IDQ5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1MCAwKSIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=) 
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 📊 Project Stats

### Project Activity

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/monfig-oss/frontend?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/monfig-oss/frontend?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/monfig-oss/frontend?style=for-the-badge)

## 🏅 Badges & Status

### Build Status
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/monfig-oss/frontend/ci.yml?branch=main&style=for-the-badge&label=CI)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/monfig-oss/frontend/deploy.yml?branch=main&style=for-the-badge&label=Deploy)

### Code Quality
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/monfig-oss/frontend?style=for-the-badge)
![Code Climate coverage](https://img.shields.io/codeclimate/coverage/monfig-oss/frontend?style=for-the-badge)
![CodeFactor](https://img.shields.io/codefactor/grade/github/monfig-oss/frontend?style=for-the-badge)

### Dependencies
![Known Vulnerabilities](https://snyk.io/test/github/monfig-oss/frontend/badge.svg?style=for-the-badge)

## 💰 Support the Project

If you like the project, there are several ways you can support it:

### 🌟 Star the Repository
Give the project a star on GitHub!

### ☕ Buy Me a Coffee
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/feeeedox)

### 💝 Sponsor
[![GitHub Sponsors](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/sponsors/Fedox-die-Ente)

## 📄 License

This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### Project Maintainer

**Florian** - [@Fedox-die-Ente](https://github.com/Fedox-die-Ente)

### Get in Touch

<div align="center">

<a href="https://github.com/Fedox-die-Ente" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://instagram.com/feeeedox" target="_blank">
<img src=https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
</a>
<a href="https://codepen.com/Fedox-die-Ente" target="_blank">
<img src=https://img.shields.io/badge/codepen-%23131417.svg?&style=for-the-badge&logo=codepen&logoColor=white alt=codepen style="margin-bottom: 5px;" />
</a>
<a href="https://stackoverflow.com/users/16288266" target="_blank">
<img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt=stackoverflow style="margin-bottom: 5px;" />
</a>
<a href="mailto:f3dox@proton.me" target="_blank">
<img src=https://img.shields.io/badge/Proton%20Mail-6D4AFF?&style=for-the-badge&logo=protonmail&logoColor=fff alt=mail style="margin-bottom: 5px;" />
</a>

</div>

### Project Links

- **Issues**: [GitHub Issues](https://github.com/monfig-oss/frontend/issues)
- **Discussions**: [GitHub Discussions](https://github.com/monfig-oss/frontend/discussions)

---

<div align="center">

**[⬆ Back to Top](#-monfig)**

Made with ❤️ by [Florian](https://github.com/Fedox-die-Ente)

![Profile views](https://visitor-badge.laobi.icu/badge?page_id=Fedox-die-Ente&left_text=Profile+views)

</div>

---

<div align="center">

<sub>generated using [better-repo](https://github.com/Fedox-die-Ente/better-repo)</sub>

</div>
