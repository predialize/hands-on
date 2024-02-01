FROM node:lts-alpine3.12 as base
WORKDIR /srv/api
COPY package* ./
COPY . .
RUN ["rm", "-rf", "node_modules"]
RUN ["npm", "install", "-g", "npm@7.7.5"]
RUN ["npm", "install"]

# RUN DEVELOPMENT
FROM node:lts-alpine3.12 as development
WORKDIR /srv/api
COPY --from=base /srv/api ./
ARG NODE_ENV=development
EXPOSE 3000
CMD ["npm", "start"]