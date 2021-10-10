# Docker Simple Example

- Video: [[YouTube]](https://youtu.be/ZkfBQh7ZVfo?list=PLgRxBCVPaZ_223caC4aGZyu_LioUqiaio)

# Run Commands

```ps
$ docker build -t helloworld-node-test:0.0.1 .
```

```ps
$  docker run -d -p 3001:3001 --name test-node-app helloworld-node-test:0.0.1
```

```ps
$  docker login
```

```ps
$  docker tag helloworld-node-test:0.0.1 dongrim318/helloworld-node-test:0.0.1
```

```ps
$  docker push dongrim318/helloworld-node-test:0.0.1
```

# TOC

1. Prepare node-express `App`
2. Make `Dockerfile`
3. Connect to `DockerHub` (login/push/pull)
4. Make `docker-compose`
5. Docker Machine `provisioning` on AWS EC2
6. Docker `Swarm` [(video)](https://youtu.be/OmfBM4YZAqs?list=PLgRxBCVPaZ_223caC4aGZyu_LioUqiaio)

# Error memo

```javascript
$ docker exec -it test-node-app bash
// OCI runtime exec failed: exec failed: container_linux.go:380: starting container process caused: exec: "bash": executable file not found in $PATH: unknown

Cause: alpine version
// FROM node:12-alpine in Dockerfile

Solution: $ docker exec -it test-node-app sh (or /bin/sh)
```
