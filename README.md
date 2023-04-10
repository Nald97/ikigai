# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Setting up the Next.js React app with Firebase

This guide explains how to set up the Next.js React app integrated with Firebase on your local machine. Follow the steps below to get started.

## Prerequisites

- Node.js v16.14.2 or later installed on your system
- npm or yarn installed on your system
- A Firebase account (Sign up for free at [Firebase](https://firebase.google.com/))

## Installation Steps

1. **Clone the repository**: Clone or fork the repository from [https://github.com/littlefish-foundation/ikigai.git](https://github.com/littlefish-foundation/ikigai.git) using the following command:

`git clone https://github.com/littlefish-foundation/ikigai.git`

Alternatively, you can download the source code as a ZIP file and extract it.

2. **Navigate to the project directory**: Open a terminal or command prompt, and navigate to the project directory:

`cd ikigai`

3. **Install the dependencies**: Run the following command to install the required dependencies:

`npm install`

If you prefer using `yarn`, run:

`yarn install`

4. **Set up Firebase**: To set up Firebase, follow these steps:

a. Go to the [Firebase console](https://console.firebase.google.com/) and sign in with your Google account.

b. Create a new project and follow the on-screen instructions.

c. Once the project is created, click on the gear icon next to "Project Overview" and select "Project settings."

d. In the "General" tab, scroll down to "Your apps" and click on the "</>" icon to create a new web app.

e. Follow the on-screen instructions and register your app.

f. After registering the app, you will be presented with the Firebase SDK configuration. Copy the configuration object.

5. **Configure the environment variables**: Create a `.env.local` file in the project root directory and paste the Firebase configuration object as environment variables in the following format:

`NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id`

Replace the placeholders with your actual Firebase configuration values.

6. **Run the development server**: Start the development server by running the following command:

`npm run dev`

If you prefer using `yarn`, run:

`yarn dev`

The development server should start, and you can now access the app by opening [http://localhost:3000](http://localhost:3000) in your browser.

That's it! You've now successfully set up the Next.js React app with Firebase on your local machine.
