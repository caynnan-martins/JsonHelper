# Biblioteca de Manipulação de Arquivos JSON

Esta biblioteca oferece funções para manipular arquivos JSON de forma simples e eficaz. Ela permite criar, ler e adicionar conteúdo a arquivos JSON, garantindo que os diretórios necessários sejam criados automaticamente.

## Funcionalidades

- **lerArquivo**: Lê o conteúdo de um arquivo JSON. Se o arquivo não existir, ele cria um arquivo vazio como um objeto JSON.
- **adicionarArquivo**: Garante que o arquivo JSON exista, criando um novo se necessário.
- **adicionarConteudo**: Adiciona novos dados a um arquivo JSON sem sobrescrever os existentes. Os dados são armazenados como um objeto JSON.

## Pré-requisitos

- Node.js v14 ou superior
- npm (gerenciador de pacotes do Node.js)

## Uso

```const { db } = require('./index');

// Caminho para o arquivo JSON
const caminhoArquivo = './db/meuarquivo.json';

// Criar o arquivo, caso não exista
db.adicionarArquivo(caminhoArquivo);

// Adicionar novo conteúdo
const novoConteudo1 = { nome: 'Caynnan', idade: 17 };
db.adicionarConteudo(caminhoArquivo, novoConteudo1);

const novoConteudo2 = { nome: 'João', idade: 25 };
db.adicionarConteudo(caminhoArquivo, novoConteudo2);

// Ler o arquivo atualizado
const conteudoAtualizado = db.lerArquivo(caminhoArquivo);
console.log('Conteúdo atualizado do arquivo:', conteudoAtualizado);
```


## Contato
Email: caynnan666@gmail.com
