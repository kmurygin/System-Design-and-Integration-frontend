FROM node:20.9-alpine as build
WORKDIR /app
COPY . .
# install dependencies, matching package-lock.json
RUN npm ci
RUN npm run build


FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/pis-frontend /usr/share/nginx/html
