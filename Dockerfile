FROM nginx:1.13.9-alpine

# copy static files and assets
COPY build /var/www/todo

# remove default config
RUN rm /etc/nginx/conf.d/default.conf

# copy nginx config
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/todo.conf /etc/nginx/sites-enabled/todo.conf

# expose http and https ports
EXPOSE 80

# default exec command
CMD ["nginx", "-g", "daemon off;"]
