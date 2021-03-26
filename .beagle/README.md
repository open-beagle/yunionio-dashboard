# yunionio-web

## repo

```bash
git remote add upstream git@github.com:yunionio/dashboard.git

git fetch upstream

git merge upstream/release/3.4
```

## build

```bash
# 下载依赖包
yarn 

# 安装远程代码
yarn setup:dev

# 构建代码
yarn build

# 构建镜像
docker build \
  --build-arg BASE=registry.cn-beijing.aliyuncs.com/yunionio/web:v3.4.11 \
  --build-arg AUTHOR=mengkzhaoyun@gmail.com \
  --build-arg VERSION=v3.4.11 \
  --build-arg ARCH=amd64 \
  --tag registry.cn-qingdao.aliyuncs.com/wod/yunionio-web:v3.4.11 \
  --file /go/src/gitlab.wodcloud.com/cloud/yunionio-web/.beagle/dockerfile .

docker push registry.cn-qingdao.aliyuncs.com/wod/yunionio-web:v3.4.11
```
