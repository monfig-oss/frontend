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
![Pinia](https://img.shields.io/badge/pinia-FADA5E?style=for-the-badge&logo=data:image/svg+xml;base64,CjxzdmcgaGVpZ2h0PSI0NzciIHZpZXdCb3g9IjAgMCAzMTkgNDc3IiB3aWR0aD0iMzE5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzUyY2U2MyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzUxYTI1NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNTUuMzQyMDc1JSIgeDI9IjQyLjgxNjkzMyUiIHhsaW5rOmhyZWY9IiNhIiB5MT0iMCUiIHkyPSI0Mi44NjI4NTUlIi8+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNTUuMzQ4NjQyJSIgeDI9IjQyLjgwODEwMyUiIHhsaW5rOmhyZWY9IiNhIiB5MT0iMCUiIHkyPSI0Mi44NjI4NTUlIi8+PGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iMCUiIHkyPSI1OC44MTEyNDMlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4YWU5OWMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1MmNlNjMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDE9IjUxLjM3NzYzJSIgeDI9IjQ0LjU4NDcxOSUiIHkxPSIxNy40NzI1NTElIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZlNTZjIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjNjNhIi8+PC9saW5lYXJHcmFkaWVudD48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNCAtMjQpIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguOTkyNTQ2MTUgLjEyMTg2OTM0IC0uMTIxODY5MzQgLjk5MjU0NjE1IDMzLjkyMjA3MyAuOTc2NjkxKSI+PHBhdGggZD0ibTEwMy45NTA1MzUgMjU4LjI3NDE0OWM0NC4zNjE1OTktNC4zNjA4MjUgNjAuMDE0NTAzLTQwLjM5MTI4MiA2NS4zNTMwOTQtOTQuNjk5NDQ0cy0zMC45MzIxOS0xMDMuNDUxMDAxLTQ2LjAyMDM0Ny0xMDEuOTY3ODA3OWMtMTUuMDg4MTU2IDEuNDgzMTkzMi02My4wMzg1MzEzIDU4LjkwNTEyMzktNjguMzc3MTIyMiAxMTMuMjEzMjg2OS01LjMzODU5MDggNTQuMzA4MTYyIDQuNjgyNzc1NCA4Ny44MTQ3OTEgNDkuMDQ0Mzc1MiA4My40NTM5NjV6IiBmaWxsPSJ1cmwoI2IpIiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3MTA2NzggLS43MDcxMDY3OCAuNzA3MTA2NzggLjcwNzEwNjc4IC04MC40OTYzMzIgMTI1Ljg5Mjk0NCkiLz48cGF0aCBkPSJtMjc1Ljg3Njc1MiAyNTguMjczOTkyYzQ0LjM2MTYgNC4zNjA4MjYgNTMuMTY3MTMzLTI5LjI2NTMyMiA0Ny44Mjg1NDItODMuNTczNDg1LTUuMzM4NTkxLTU0LjMwODE2Mi01Mi4wNzMxMzMtMTExLjYxMDU3NDQtNjcuMTYxMjktMTEzLjA5Mzc2NzUtMTUuMDg4MTU2LTEuNDgzMTkzMS01Mi41NzQ3NyA0Ny41NDAxMjc1LTQ3LjIzNjE3OSAxMDEuODQ4Mjg5NXMyMi4yMDczMjggOTAuNDU4MTM3IDY2LjU2ODkyNyA5NC44MTg5NjN6IiBmaWxsPSJ1cmwoI2MpIiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3MTA2NzggLjcwNzEwNjc4IC0uNzA3MTA2NzggLjcwNzEwNjc4IDE5MS40MDMzOTkgLTE0MS44NjE5NjMpIi8+PHBhdGggZD0ibTE4OC4zNzAwMjcgMjE2Ljg3NjMwNWMzOS45NDE4MzQgMCA1MC45NTI2NS0zOC4yNTE5ODcgNTAuOTUyNjUtOTcuODk4NzQgMC01OS42NDY3NTMyLTM3LjM2NzczMy0xMTguMTAxMjU5NTYtNTAuOTUyNjUtMTE4LjEwMTI1OTU2cy01Mi4wNDczNSA1OC40NTQ1MDYzNi01Mi4wNDczNSAxMTguMTAxMjU5NTZjMCA1OS42NDY3NTMgMTIuMTA1NTE2IDk3Ljg5ODc0IDUyLjA0NzM1IDk3Ljg5ODc0eiIgZmlsbD0idXJsKCNkKSIvPjwvZz48cGF0aCBkPSJtMTg0LjQ3MzQ3MyA1MDFjODMuMTE4ODU0IDAgMTUwLjUyNjUyNy0yNC4xNDUxNDggMTUwLjUyNjUyNy0xMzMuNjQ1MTQ4cy02Ny40MDc2NzMtMTk5LjM1NDg1Mi0xNTAuNTI2NTI3LTE5OS4zNTQ4NTJjLTgzLjExODg1NSAwLTE1MC40NzM0NzMgODkuODU0ODUyLTE1MC40NzM0NzMgMTk5LjM1NDg1MnM2Ny4zNTQ2MTggMTMzLjY0NTE0OCAxNTAuNDczNDczIDEzMy42NDUxNDh6IiBmaWxsPSJ1cmwoI2UpIi8+PGVsbGlwc2UgY3g9IjI2MC41IiBjeT0iMzM1IiBmaWxsPSIjZWFhZGNjIiByeD0iMjEuNSIgcnk9IjEwIi8+PGVsbGlwc2UgY3g9IjEwMi41IiBjeT0iMzI5IiBmaWxsPSIjZWFhZGNjIiByeD0iMjEuNSIgcnk9IjEwIiB0cmFuc2Zvcm09Im1hdHJpeCguOTkyNTQ2MTUgLjEyMTg2OTM0IC0uMTIxODY5MzQgLjk5MjU0NjE1IDQwLjg1OTAzMyAtMTAuMDM5MjkyKSIvPjxnIHRyYW5zZm9ybT0ibWF0cml4KC0uOTk5MzkwODMgLjAzNDg5OTUgLjAzNDg5OTUgLjk5OTM5MDgzIDI2OS4yODQ4MjUgMjcxLjAyNzY2NykiPjxwYXRoIGQ9Im03My4xMDQ2OTg1IDU4LjI3Mjg3OTRjNi43MzcyNDE2IDQuOTEzMDMzMyAxNC4zMTMyNjMyIDYuNjY0MDU4NyAyMi43MjgwNjQ5IDUuMjUzMDc2MSA4LjQxNDgwMTYtMS40MTA5ODI1IDE0LjUwNTQ0NjYtNS4yNTM1NzY5IDE4LjI3MTkzNDYtMTEuNTI3NzgzIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2IiB0cmFuc2Zvcm09Im1hdHJpeCguOTk5ODQ3NyAuMDE3NDUyNDEgLS4wMTc0NTI0MSAuOTk5ODQ3NyAxLjAyNjQ2NCAtMS42MjQ3OTQpIi8+PHBhdGggZD0ibTE1NC41MDExMjQgM2MtNS45Mzc1NDUgMC0xMS4zMTI3ODIgMi40MDYyOTgwNS0xNS4yMDM2NDQgNi4yOTY4MDYyMS0zLjg5MDk0IDMuODkwNTg1MjktNi4yOTc0OCA5LjI2NTQ1NDQ5LTYuMjk3NDggMTUuMjAyNjMxNzkgMCA1LjkzNzY4ODggMi40MDY0ODggMTEuMzEyNzQyMiA2LjI5NzI5MSAxNS4yMDM0MjcyIDMuODkwODg2IDMuODkwNzY3MyA5LjI2NjE5NyA2LjI5NzEzNDggMTUuMjAzODMzIDYuMjk3MTM0OCA1LjkzNzEwOSAwIDExLjMxMTg5Ni0yLjQwNjM4ODkgMTUuMjAyMzg3LTYuMjk3MjM0OCAzLjg5MDI5OS0zLjg5MDY1MzUgNi4yOTY0ODktOS4yNjU2NjM2IDYuMjk2NDg5LTE1LjIwMzMyNzIgMC01LjkzNzE1MjEtMi40MDYyNDItMTEuMzExOTc4MS02LjI5NjY3Ny0xNS4yMDI1MzE4MS0zLjg5MDQ2OS0zLjg5MDU4Njc0LTkuMjY1MTgxLTYuMjk2OTA2MTktMTUuMjAyMTk5LTYuMjk2OTA2MTl6IiBmaWxsPSIjMDAwIiAvPjxwYXRoIGQ9Im0xNTQgMjFjMC0zLjg2NTU0OSAzLjEzNTM2Mi03IDYuOTk5NDEzLTcgMy44NjYzOTkgMCA3LjAwMDU4NyAzLjEzNDQ1MSA3LjAwMDU4NyA3cy0zLjEzNDE4OCA3LTcuMDAwNTg3IDdjLTMuODY0MDUxLS4wMDExNzM1LTYuOTk5NDEzLTMuMTM0NDUxLTYuOTk5NDEzLTd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTI0LjUgMTNjLTUuOTM3NTI5MiAwLTExLjMxMjQyNiAyLjQwNjI2OC0xNS4yMDI5OTQyNyA2LjI5NjcxODEtMy44OTA2OTQ2NCAzLjg5MDU3NjUtNi4yOTcwMDU3MyA5LjI2NTQ3NjUtNi4yOTcwMDU3MyAxNS4yMDI3MTk5IDAgNS45Mzc3NTQ5IDIuNDA2MjU5NjIgMTEuMzEyODM5MSA2LjI5NjgxNzY2IDE1LjIwMzUxNTMgMy44OTA1OTEwNCAzLjg5MDcwOTIgOS4yNjU1NjE4NCA2LjI5NzA0NjcgMTUuMjAzMTgyMzQgNi4yOTcwNDY3IDUuOTM3MTI0OSAwIDExLjMxMjI1MTQtMi40MDY0MTkgMTUuMjAzMDM3MS02LjI5NzMyMjkgMy44OTA1NDQxLTMuODkwNjYyMyA2LjI5Njk2MjktOS4yNjU2NDE2IDYuMjk2OTYyOS0xNS4yMDMyMzkxIDAtNS45MzcwODYtMi40MDY0NzAzLTExLjMxMTg4MTEtNi4yOTcxNTEtMTUuMjAyNDQzNy0zLjg5MDc2My0zLjg5MDY0NDgtOS4yNjU4MTU0LTYuMjk2OTk0My0xNS4yMDI4NDktNi4yOTY5OTQzeiIgZmlsbD0iIzAwMCIgLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMTM2IDI0LjQ5OTQzOGMwIDEwLjIxODUyMzIgOC4yODI5MTEgMTguNTAwNTYyIDE4LjUwMTEyNCAxOC41MDA1NjIgMTAuMjE3MDg5IDAgMTguNDk4ODc2LTguMjgyMDM4OCAxOC40OTg4NzYtMTguNTAwNTYyIDAtMTAuMjE3Mzk5Mi04LjI4MTc4Ny0xOC40OTk0MzgtMTguNDk4ODc2LTE4LjQ5OTQzOC0xMC4yMTgyMTMgMC0xOC41MDExMjQgOC4yODIwMzg4LTE4LjUwMTEyNCAxOC40OTk0Mzh6bS02IDBjMC0xMy41MzExOTU0IDEwLjk2OTI5LTI0LjQ5OTQzOCAyNC41MDExMjQtMjQuNDk5NDM4IDEzLjUzMDgzOCAwIDI0LjQ5ODg3NiAxMC45NjgzNzExIDI0LjQ5ODg3NiAyNC40OTk0MzggMCAxMy41MzE5NjA3LTEwLjk2NzgwOCAyNC41MDA1NjItMjQuNDk4ODc2IDI0LjUwMDU2Mi0xMy41MzIwNjQgMC0yNC41MDExMjQtMTAuOTY4NDcyOC0yNC41MDExMjQtMjQuNTAwNTYyeiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im02IDM0LjQ5OTQzOGMwIDEwLjIxODUyMzIgOC4yODE3ODczIDE4LjUwMDU2MiAxOC41IDE4LjUwMDU2MiAxMC4yMTcwODg5IDAgMTguNS04LjI4MjAzODggMTguNS0xOC41MDA1NjIgMC0xMC4yMTczOTkyLTguMjgyOTExMS0xOC40OTk0MzgtMTguNS0xOC40OTk0MzgtMTAuMjE4MjEyNyAwLTE4LjUgOC4yODIwMzg4LTE4LjUgMTguNDk5NDM4em0tNiAwYzAtMTMuNTMxMjk3IDEwLjk2ODI2ODEtMjQuNDk5NDM4IDI0LjUtMjQuNDk5NDM4IDEzLjUzMDkzOTggMCAyNC41IDEwLjk2ODQ3MjggMjQuNSAyNC40OTk0MzggMCAxMy41MzE4NTkxLTEwLjk2ODgzIDI0LjUwMDU2Mi0yNC41IDI0LjUwMDU2Mi0xMy41MzE5NjIgMC0yNC41LTEwLjk2ODM3MTEtMjQuNS0yNC41MDA1NjJ6IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0ibTI0IDMxYzAtMy44NjU1NDkgMy4xMzQ0NTEtNyA3LTdzNyAzLjEzNDQ1MSA3IDctMy4xMzQ0NTEgNy03IDctNy0zLjEzNDQ1MS03LTd6Ii8+PC9nPjwvZz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMTEiPjxnIHN0cm9rZT0iI2VjYjczMiI+PHBhdGggZD0ibTcwLjUgMzc3LjUgNzQgNzciLz48cGF0aCBkPSJtMTM0LjUgMzg2LjUtNDcgNTAiLz48L2c+PGcgc3Ryb2tlPSIjZWNiNzMyIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyOTggMzc3KSI+PHBhdGggZD0ibS41LjUgNzQgNzciLz48cGF0aCBkPSJtNjQuNSA5LjUtNDcgNTAiLz48L2c+PGcgc3Ryb2tlPSIjZmZjNzNiIiB0cmFuc2Zvcm09Im1hdHJpeCgwIDEgLTEgMCAyMTUgMjA3KSI+PHBhdGggZD0ibS41LjUgNDkgNDkiLz48cGF0aCBkPSJtLjUgMTAuNSA0OSA0OSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTAgMCkiLz48L2c+PC9nPjwvZz48L3N2Zz4K) 
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
