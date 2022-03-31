# Biblioteca para facilitar a comunicação com API's mindsphere no frontend

## 🚀 TSE-Mindsphere

Como usar?

```shell
yarn add tse-mindsphere
```


```js
import { identityManagementApi } from 'tse-mindsphere'

async function getUsers() {
  const usersResponse = await identityManagementApi.get('/Users');
}
```

- Para obter os endpoints disponiveis em cada api acesse a documentação de APIs do Mindsphere: [Mindsphere - APIs & Services](https://developer.mindsphere.io/apis/index.html)