# API Automation with Playwright (TypeScript) 🚀

![Node.js](https://img.shields.io/badge/Node.js-v14%2B-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

This project is designed for automating API testing using **Playwright** with **TypeScript**. It provides a robust configuration setup and reusable utilities for efficient API testing.

---

## ✨ Features
- 🌐 **Environment-based configuration management**.
- ⚡ **API testing with Playwright**.
- 🛠️ **TypeScript for type safety and better development experience**.

---

## 📋 Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- A `.env` file with the required environment variables.

---

## ⚙️ Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Api-Automation-PlaywrightTS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and define the following variables:
   ```plaintext
   API-BASE-URL=<your-api-base-url>
   DB_HOST=<your-database-host>
   DB_NAME=<your-database-name>
   DB_USER=<your-database-user>
   DB_PASS=<your-database-password>
   ```

4. **Run the tests**:
   ```bash
   npm test
   ```

---

## 📂 Project Structure
The project is organized as follows:

- **`config/`**: Contains configuration files for managing environment variables and other settings.
  - `config.ts`: Handles environment variable loading and validation.
- **`tests/`**: Contains all the test cases for API automation.
  - Each test file corresponds to a specific API or functionality.
- **`utils/`**: Contains utility functions and reusable modules to support the tests.
  - Common utilities like request builders, data generators, etc., are placed here.
- **`README.md`**: Documentation for the project.
- **`.env`**: Environment variables file (not included in the repository for security reasons).
- **`package.json`**: Contains project dependencies and scripts.

---

## 📜 License
This project is licensed under the **MIT License**.
