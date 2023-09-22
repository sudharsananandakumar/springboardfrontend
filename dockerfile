#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM public.ecr.aws/nginx/nginx
COPY --from=node /app/dist/springboardcollective /usr/share/nginx/html