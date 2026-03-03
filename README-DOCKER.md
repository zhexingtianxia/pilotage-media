# Pilotage Media 用 Docker 部署 — 傻瓜式教程

这个项目是 **Vite + React** 前端，构建后是**静态网站**。下面用 Docker 一条龙部署。

---

## 一、先确认两件事

### 1. 你已经有 Docker

- **Windows**：装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)，安装后打开，确保托盘里 Docker 在运行。
- 打开 **PowerShell** 或 **命令提示符**，输入：
  ```bash
  docker --version
  ```
  能出现版本号就说明 OK。

### 2. 项目目录里有这些文件

确保当前文件夹里有：

- `package.json`
- `Dockerfile`（本教程配套的）
- `nginx.conf`（本教程配套的）
- `index.html`、`src/` 等前端源码

---

## 二、三步完成部署

### 步骤 1：进入项目目录

在 PowerShell 里执行（把路径改成你实际解压的目录）：

```powershell
cd d:\CursorProject\pilotage-media
```

如果 zip 解压到了别的地方，就 `cd` 到那个文件夹。

---

### 步骤 2：构建 Docker 镜像

在**同一目录下**执行：

```powershell
docker build -t pilotage-media .
```

- 第一次会下载 Node、Nginx 等，可能要几分钟。
- 最后出现 `Successfully built ...` 就表示镜像建好了。
- `pilotage-media` 是镜像名字，可以自己改。

---

### 步骤 3：运行容器（启动网站）

执行：

```powershell
docker run -d -p 8080:80 --name pilotage-web pilotage-media
```

- `-d`：后台运行  
- `-p 8080:80`：把本机的 **8080** 端口映射到容器里的 80  
- `--name pilotage-web`：给容器起个名字，方便以后操作  

---

## 三、在浏览器里打开

在浏览器地址栏输入：

**http://localhost:8080**

就能看到「领航传媒」网站。

---

## 四、常用管理命令

| 想做的事           | 命令 |
|--------------------|------|
| 停止网站           | `docker stop pilotage-web` |
| 再次启动           | `docker start pilotage-web` |
| 删除这个容器       | `docker stop pilotage-web` 然后 `docker rm pilotage-web` |
| 查看是否在运行     | `docker ps`（列表里有 `pilotage-web` 就是在跑） |

---

## 五、改端口或改镜像名

- **换端口**：比如用 3000 端口，把上面的 `8080` 改成 `3000`：
  ```powershell
  docker run -d -p 3000:80 --name pilotage-web pilotage-media
  ```
  然后访问 **http://localhost:3000**。

- **换镜像名**：步骤 2 里把 `pilotage-media` 改成你喜欢的名字即可，步骤 3 里最后一个参数也改成同一个名字。

---

## 六、重新部署（代码改过后）

1. 停止并删除旧容器：
   ```powershell
   docker stop pilotage-web
   docker rm pilotage-web
   ```
2. 重新构建镜像（在项目目录下）：
   ```powershell
   docker build -t pilotage-media .
   ```
3. 再运行一次：
   ```powershell
   docker run -d -p 8080:80 --name pilotage-web pilotage-media
   ```

---

## 总结

- 这个项目**构建后就是静态网站**，用 Nginx 在容器里提供 80 端口。
- 你只需要：**进入项目目录 → `docker build` → `docker run`**，然后浏览器打开 `http://localhost:8080` 即可。

如有报错，把终端里完整报错贴出来，便于排查。
