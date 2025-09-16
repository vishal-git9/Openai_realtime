
---

# OpenAI WebRTC Shadcn Next15 Starter

This is my WebRTC-based Voice AI stream application using `OpenAI`'s `Realtime API` and `WebRTC`. The project includes `/api` routes and UI components built with `Next.js` and `shadcn/ui`. It enables real-time audio conversations.


## 🚀 Features

* ✅ **Next.js Framework**: Server-side rendering and API route handling.
* 🎨 **Modern UI**: Built with Tailwind CSS, Framer Motion, and shadcn/ui for animations and clean design.
* 🔧 **Custom WebRTC Hook**: Abstracts the OpenAI WebRTC handling for easier integration.
* ⚡ **Tool Calling Examples**: Implemented 6 example tool functions to showcase real-time client-side tools:

  * `getCurrentTime`
  * `partyMode`
  * `changeBackground`
  * `launchWebsite`
  * `copyToClipboard`
  * `scrapeWebsite` (requires FireCrawl API key)
* 🌐 **Localization Support**: Switch between languages (English, Spanish, French, Chinese) for both UI and voice agent.
* 🛡️ **TypeScript + Strict Linting**: Ensures type safety and code consistency.

## ⚡ Requirements

* Node.js or Deno runtime
* OpenAI API Key or Azure OpenAI API Key (stored in `.env`)

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vishal-git9/Openai_realtime
cd Openai_realtime
```

### 2. Set Up Environment Variables

Create a `.env` file at the project root:

```env
OPENAI_API_KEY=your-openai-api-key
```

### 3. Install Dependencies

Using Node.js:

```bash
npm install
```

Or using Deno:

```bash
deno install
```

### 4. Start Development Server

#### With Node.js:

```bash
npm run dev
```

#### With Deno:

```bash
deno task start
```

Then open the app at:
`http://localhost:3000`

## 🎙️ Usage

1. Open `http://localhost:3000` in your browser.
2. Select a voice and start your real-time audio session.

## 🚀 Deploy to Vercel

You can deploy this project in one-click:

Set your `OPENAI_API_KEY` in Vercel's environment variables to make it work.

## 📜 License

This project is open-sourced under the MIT License.

## ❤️ Acknowledgements

* OpenAI for the incredible API & models
* Next.js for its powerful framework
* Tailwind CSS for styling
* Simon Willison’s great blog post on OpenAI WebRTC
