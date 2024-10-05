const fs = require('fs');
const path = require('path');

// Função para ler o arquivo JSON
function lerArquivo(caminho) {
    try {
        // Verifica se o diretório existe, se não, cria
        const diretorio = path.dirname(caminho);
        if (!fs.existsSync(diretorio)) {
            fs.mkdirSync(diretorio, { recursive: true });
            console.log(`Diretório criado: ${diretorio}`);
        }

        // Se o arquivo não existir, cria um arquivo JSON vazio
        if (!fs.existsSync(caminho)) {
            console.log(`Arquivo não encontrado. Criando novo arquivo JSON: ${caminho}`);
            fs.writeFileSync(caminho, '[]', 'utf8'); // Cria o arquivo como um array vazio
        }

        // Lê o arquivo e retorna o conteúdo como JSON
        const conteudo = fs.readFileSync(caminho, 'utf8');
        return JSON.parse(conteudo); // Converte o conteúdo para objeto JSON
    } catch (erro) {
        throw new Error(`Erro ao ler o arquivo: ${erro.message}`);
    }
}

// Função para adicionar o arquivo se ele não existir
function adicionarArquivo(caminho) {
    try {
        const diretorio = path.dirname(caminho);
        if (!fs.existsSync(diretorio)) {
            fs.mkdirSync(diretorio, { recursive: true });
            console.log(`Diretório criado: ${diretorio}`);
        }

        // Se o arquivo não existir, cria um arquivo JSON vazio
        if (!fs.existsSync(caminho)) {
            fs.writeFileSync(caminho, '[]', 'utf8'); // Cria o arquivo como um array vazio
            console.log(`Arquivo JSON criado: ${caminho}`);
        }

    } catch (erro) {
        console.error(`Erro ao adicionar o arquivo: ${erro.message}`);
    }
}

// Função para adicionar novo conteúdo ao arquivo JSON (sem sobrescrever o conteúdo existente)
function adicionarConteudo(caminho, novoConteudo) {
    try {
        // Lê o conteúdo existente do arquivo
        const conteudoAtual = lerArquivo(caminho);

        // Se o conteúdo atual não for um array, converte para array
        if (!Array.isArray(conteudoAtual)) {
            throw new Error('O conteúdo do arquivo deve ser um array.');
        }

        // Adiciona o novo conteúdo ao array existente
        conteudoAtual.push(novoConteudo);

        // Escreve o novo conteúdo no arquivo
        fs.writeFileSync(caminho, JSON.stringify(conteudoAtual, null, 2), 'utf8');
        console.log('Novo conteúdo adicionado com sucesso!');

    } catch (erro) {
        console.error(`Erro ao adicionar conteúdo ao arquivo: ${erro.message}`);
    }
}

module.exports = {
    db: {
        lerArquivo,
        adicionarArquivo,
        adicionarConteudo
    }
};
