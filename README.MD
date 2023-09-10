# <p align="center" id="top">AIRBNB</p>

![airbnb](./public/preview.png)

[Click here to download and view the application demo](./public/Demo.mp4)

Tech stack: NextJS, React, Tailwind, Prisma, MongoDB, NextAuth.

Key Features:

- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Client form validation and handling using react-hook-form
- Advanced search algorithm: Filters properties by category, date range, map location, guests, rooms, and bathrooms, considering existing reservations.
- Favorites system
- Shareable URL filters: Generates shareable URLs with filter criteria.
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Tailwind design, animations and effects
- Full responsiveness

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/arjunan-k/Airbnb.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL="";
NEXTAUTH_SECRET="NEXTAUTH_SECRET";
GITHUB_ID=0abc0
GITHUB_SECRET=0abc0
GOOGLE_CLIENT_ID=0abc0
GOOGLE_CLIENT_SECRET=0abc0
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="";
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                                 |
| :------ | :------------------------------------------ |
| `dev`   | Starts a development instance of the app    |
| `build` | Build app which is optimized for production |

<a href="#top">Back to top</a>
