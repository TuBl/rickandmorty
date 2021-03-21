# pull official base image
FROM node:14.16.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
COPY package-lock*.json ./
RUN npm install 

# add app
COPY . ./

# Port

EXPOSE 3000

# start app
CMD ["npm", "start"]