FROM nginx:stable
ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_APP_NAME="fit2fly-web"
ENV NEW_RELIC_LICENSE_KEY="TBD"
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]