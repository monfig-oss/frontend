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
![Pinia](https://img.shields.io/badge/pinia-FADA5E?style=for-the-badge) 
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
