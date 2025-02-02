## Installation

```bash
yarn install
yarn dev
```

or remove yarn.lock and use npm

```bash
npm install
npm run dev
```

## Simple Guide

Just go to homepage and there will list links to use.

<!-- Allows the viewing of customers and orders separately as well as individual details for a single customer or order.
When viewing lists of customers and orders, the user should be able to filter and sort the data by available columns.
Paging should be performed on all available data. When possible, please use server-side paging.
For searching customers, the API operation is: https://ec2-34-201-46-215.compute-1.amazonaws.com/json/metadata?op=QueryCustomers
For searching orders, the API operation is: https://ec2-34-201-46-215.compute-1.amazonaws.com/json/metadata?op=QueryOrders -->

features:

- orders -> list of orders, filter, sort, pagination from server side
- order detail -> i put on the list of orders page as expandable row, because i don't find the api for order detail.
- customers -> list of customers, filter, sort, pagination from server side
- customer detail -> detail of a customer, with order history

## Live on Netlify

https://sprightly-banoffee-5ce336.netlify.app/

## Stack

- Vite
- React 18
- React Query
- TailwindCSS
- Shadcn UI
- Prettier
- Eslint

```

```
