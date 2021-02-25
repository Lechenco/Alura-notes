# Docker Images

### Onde procurar as imagens?
[Docker Hub](hub.docker.com)

[Docker Store](store.docker.com)

## Containers

### Criar novo container 
```
docker run hello-world
```

`--name <name-container>`: Configure um nome especifico para o container

`-d`: Desanexar container do terminal

`-P`: Configura uma porta de rede automaticamente

`-p <network-port>:<internal-port>`: Configura uma porta específica

`-e <ENVIROMENT_VARIABLE>=<VALUE>`: Confgura uma variável de ambiente

### Listar todos os containers
```
docker ps -a
```

### Iniciar Container já existente
```
docker start <id_hash>
```
#### Flags
`-a`: Anexar ao stdout/stderr

`-i`: anexar ao stdin

### Apagar elementos
```
\\ Apagar todos os containers inativos
docker container prune

\\ Apagar container
docker rm <id_hash>

\\ Apagar images
docker rmi hello-world

\\ Parar todos os containers ativos
docker stop -t 0 $(docker ps -q)
```