FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/pis-frontend /usr/share/nginx/html
