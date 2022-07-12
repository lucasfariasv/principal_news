
# FullStack News Web App

## Project description:

A simple application to Read, Create, Update and Delete news.

The reading of already published news is open to the public.

As a draft, only its author can update or delete it.
It is possible to make the request by ID of a certain news.

To be able to use features other than Read, you must create an authenticated account.

## Technologies used:

1. [Typescript](https://www.typescriptlang.org/) - Programming Language: Discover errors during its implementation.

2. [Next.js](https://nextjs.org/) - Freamework (with [React](https://reactjs.org/)): Agility in the complete development of the application through code division.

3. [Tailwindcss](https://tailwindcss.com/) - Framework for CSS: Greater control in the visual language and lighter solution for using only the classes necessary to develop the page.

4. [Prisma](https://www.prisma.io/) - ORM: Easy data modeling.

5. [MongoDB](https://www.mongodb.com/) - NoSQL Database

## Challenges:

Implement a search bar, to search for news that contain the data entered.

Add the publish and delete buttons to the selected news.

## How to run locally:

1. You need to have [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  (In this link you can learn how to do the proper installation);

3. You'll also need to have a cluster of [MongoDB](https://www.mongodb.com/docs/guides/);

4. It's necessary to create a new OAuth in: https://github.com/settings/developers and add to .env

5. If you want to make any adjustments to the database, you will need [Prisma](https://www.prisma.io/docs/getting-started):

```
npm install prisma --save-dev

```
6. All done? Time to run:

```
npx next dev
```

## Licence:
[GNU GPL](https://github.com/lucasfariasv/principal_news/blob/main/LICENSE)
