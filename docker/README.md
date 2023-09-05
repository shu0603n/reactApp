
docker-compose up -d

or 

docker-compose build

docker-compose up

<!-- 一時ファイルや不要なDockerイメージを削除し、Dockerの状態をクリーンにします。 -->
docker system prune --all --force --volumes