FROM node:lts-alpine3.12 as base
WORKDIR /srv/app
COPY package* ./
COPY . .
RUN ["rm", "-rf", "node_modules"]
RUN ["npm", "install", "-g", "npm@7.7.5"]
RUN ["npm", "install"]
RUN ["npm", "rebuild", "node-sass"]

# RUN DEVELOPMENT
FROM node:lts-alpine3.12 as development
WORKDIR /srv/app
COPY --from=base /srv/app ./
ARG NODE_ENV=development
EXPOSE 4200
CMD ["npm", "start"]