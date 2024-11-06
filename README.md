This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Before you start

there are a couple of steps you should follow before running this repo

- npm install
- npx prisma migrate dev --name init(this will create the sqlite DB)
- npx prisma db seed(this will create a couple of users and posts)
- npx prisma studio(this will open a new server at
  [http://localhost:5555/](http://localhost:5555/)), you can add more records to
  the database if you want

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.
