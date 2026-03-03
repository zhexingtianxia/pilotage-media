# ========== 阶段一：构建前端静态文件 ==========
FROM node:20-alpine AS builder

WORKDIR /app

# 先只复制依赖文件，利用 Docker 缓存
COPY package.json package-lock.json* ./

# 安装依赖（含 devDependencies，构建时需要）
RUN npm ci 2>/dev/null || npm install

# 复制源码并构建
COPY . .
RUN npm run build

# ========== 阶段二：用 Nginx 提供静态网站 ==========
FROM nginx:alpine

# 把构建好的静态文件复制到 Nginx 默认目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 使用我们自己的 nginx 配置（支持 SPA 路由）
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
