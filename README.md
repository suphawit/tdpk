# TDPK Client Application

## Initialze project

```
cp .env.template .env
```

put NEXT_PUBLIC_GRAPHQL_URL value in `.env`
value is API server URL e.g.

```
NEXT_PUBLIC_GRAPHQL_URL=https://tdpkalb.morphosis.tk/graphql
```

---

## Run local development without docker

```
yarn install
yarn start
```

---

## Run local development with docker

Run
```
docker-compose up -d
```

Re-build & update docker image
```
docker-compose up -d --build
```

---
## IMPORTANT

Please test your code and try to run `yarn build` Before pushing code in repository or create pull request. To check everything can build and work properly.

![Alt Text](https://media.giphy.com/media/PK5CQPd6rCF3y/giphy.gif)