### EX 1

**Minha Resolução:**  

- Percorri a string uma vez, mantendo:  
  - Um caractere atual que estou contando  
  - Um contador da sequência atual  
  - Um caractere da maior sequência encontrada  
  - O tamanho da maior sequência encontrada  
- Enquanto percorria a string:  
  - Se o caractere atual era igual ao anterior, incrementava o contador  
  - Se era diferente, reiniciava o contador para 1 e atualizava o caractere atual  
  - Quando o contador atual superava o maior registrado, atualizava o maior caractere e tamanho  
- Dessa forma, em caso de empate, o primeiro que apareceu permaneceu, conforme pedido  

---

### EX 2

**Minha Resolução:**  

- Usei dois loops aninhados:  
  - O primeiro percorre cada elemento do array  
  - O segundo percorre os elementos seguintes para formar pares  
- Ao encontrar um par cuja soma seja igual ao target, retorno imediatamente os índices  
- Como percorro da esquerda para a direita e retorno assim que encontro o par, garanto que o segundo índice será sempre o menor possível  

---

### EX 3

**Minha Resolução:**  

- Consegui implementar algumas partes:  
  - Criei funções para extrair o último sobrenome e o primeiro nome usando `split`  
  - Consegui estruturar o `sort` e pensar na lógica de comparação em ordem alfabética  
- Não consegui terminar a implementação dentro do tempo limite  
- A ideia era:  
  - Comparar os sobrenomes de cada par  
  - Se forem iguais, comparar os primeiros nomes  
  - Se ainda empatar, manter a ordem original da lista  
- Portanto, o código está parcialmente pronto, mas a linha de raciocínio está correta  

---

### EX GYS

**Minha Resolução:**  

- Acessei os dados do input JSON, incluindo coordenadas, usando objetos aninhados (`input.GEOLOCALIZACAO.coordinates[0]` e `[1]`)  
- Convertemos as coordenadas de string para número usando `parseFloat()`  
- Inverti a ordem das coordenadas `[latitude, longitude]` para `[longitude, latitude]` conforme exige o padrão GeoJSON  
- Gerei um `UUID` único para cada registro usando `randomUUID()` para identificação interna  
- Garanti que todos os campos obrigatórios estivessem preenchidos, usando valores padrão (`[]` ou `{}`) quando o input estava vazio (`||`)  
- Construí o objeto final GeoJSON com `type: "Feature"`, `properties` e `geometry`, respeitando o formato solicitado  
