# Containers Rede

## Criar uma nova Rede
```
docker network create --driver bridge minha-rede
```

OBS: Em uma rede customizada, os containers podem se comunicar direto pelos seus nomes, não apenas com os IPs

## Listar redes
```
docker network ls
```