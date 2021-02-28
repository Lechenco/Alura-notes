# Volumes

Persistir os dados idependentes dos containers. 

Cria uma pasta dentro do Docker Host e apenas referencia ela aos containers.

## Gerenciar Volumes
```
//Cria container com volume
docker run -v "/var/www" ubuntu

// Cria container com volume especificando o diretório
docker run -it -v "C:\Users\Alura\Desktop:/var/www" ubuntu
```


## Exemplo com projeto node
```
docker run -p 8080:3000 -v "C:\Users\gabri\Desktop\volume-exemplo:/var/www" -w "/var/www" node npm start
```