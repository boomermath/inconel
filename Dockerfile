FROM node:22-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates \
  && rm -rf /var/lib/apt/lists/*

ARG HAMMERHEAD_REPO=https://github.com/DevExpress/testcafe-hammerhead.git
ARG HAMMERHEAD_REF=master

WORKDIR /opt/hammerhead
RUN git clone --depth 1 --branch "${HAMMERHEAD_REF}" "${HAMMERHEAD_REPO}" . \
  && npm install \
  && node node_modules/gulp/bin/gulp build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG NEXT_PUBLIC_PROXY_URL=http://localhost:1400
ENV NEXT_PUBLIC_PROXY_URL=${NEXT_PUBLIC_PROXY_URL}

RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000 1400 1401 1402

RUN chmod +x /app/docker/entrypoint.sh
ENTRYPOINT ["/app/docker/entrypoint.sh"]
CMD ["all"]
