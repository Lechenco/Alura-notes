# JavaScript OO

## Objetos

### Definir uma classe
```
class Cliente {
    // ... atributos

    // Métodos
    GetContaCorrente() {
        // ... código método
    }
}
```

### Instanciar classe
```
const client1 = new Cliente();
```

### Atributos privados
```
#variavel //não oficial ainda (node 12+)
```

## Módulos

### Foo.js
```
export class Foo {
    // ... código classe
}
```

### index.js
```
import {Foo} from "./Foo.js"
```

OBS: O node por padrão não interpreta os arquivos como métodos, para isso
deve-se criar um arquivo `package.json`, podendo ser com o comando `npm init`.