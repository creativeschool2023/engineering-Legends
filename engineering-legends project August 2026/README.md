# Engineering Legends & Marvels

An interactive exploration of history's most influential engineers, their revolutionary designs, and lasting impact on modern civilization.

## 🔐 Security & Secret Rotation Notice

> [!WARNING]
> If you have ever hardcoded any secrets (such as API keys, database connection strings, or personal access tokens) in your source code, **those old values are permanently stored in your git history**. 
>
> **Action Required**: You must immediately **rotate (revoke and regenerate)** any credentials that were previously committed to this repository. Storing them in a `.env` file now does not delete them from older commits.

## 🚀 Environment Configuration

This application runs client-side but utilizes Vite-based injection for safe environment variable handling. To configure the local variables:

1. Duplicate `.env.example` to create a `.env` file:
   ```bash
   cp .env.example .env
   ```
2. Populate the required environment variables:
   - `GEMINI_API_KEY`: Required for any server-side or integrated AI-powered features.
   - `APP_URL`: The base hosting URL of the application.

## 🛠️ Tech Stack & Architecture

- **Framework**: React (v18) + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Motion (f.k.a. Framer Motion)
- **Icons**: Lucide React
