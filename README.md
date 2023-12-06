# Framework Dev Test - WP, ACF, NextJS, Typescript and TailwindCSS

# Requirements

Node.js 18.17 or later.

# Installation

1. Setup a local site pointed to the `wordpress` directory


2. Import the included database


3. Open the `wp-config.php` file and input your DB Username, Password and Database Name

4. Rename the `.env.local.example` to `.env.local`

5. Set the WORDPRESS_API_URL to your GraphQL API.

Find the endpoint in the GraphQL Settings section of the WordPress dashboard. WPGraphQL’s default is /graphql.

6. Open the `nextjs-frontend` directory in a terminal and run the following commands

```
npm ci
npm build
npm start
```

The Site will be viewable from  http://localhost:3000

## Login Details for WP Admin

Username: `aadil`

Password: `password`
