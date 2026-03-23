# Estudo ROV - Plataforma de Memorização (MVP)

Este é um projeto **Next.js 14+** criado com foco total em memorização, revisão ativa e velocidade.
Ele foi construído seguindo o princípio **Mobile First** e possui dados nativos importados para facilitar o estudo em 3 dias.

## 🚀 Como rodar o projeto localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Acesse a pasta do projeto:
\`\`\`bash
cd rov-study-app
\`\`\`

3. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

4. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Como fazer o Deploy na Vercel

Por ser feito em Next.js, o deploy na Vercel é nativo e leva menos de 2 minutos:

1. Suba este código para um repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse [Vercel.com](https://vercel.com/) e crie uma conta (se não tiver).
3. Clique em **Add New Project**.
4. Importe o repositório que você acabou de criar.
5. Deixe todas as configurações padrão (Framework Preset Next.js, Root Directory \`/\`).
6. Clique em **Deploy**.

## 💻 Integração com Supabase (Próximos Passos)

O MVP atualmente usa \`localStorage\` para salvar o progresso, não exigindo backend para o uso imediato (ideal para os 3 dias). No entanto, o projeto possui o schema SQL e as tipagens prontas para o Supabase.

1. Crie um projeto no Supabase.
2. Vá no SQL Editor e rode o código que está em \`supabase/schema.sql\`.
3. Para conectar, basta adicionar \`@supabase/supabase-js\` e substituir os métodos do arquivo \`src/lib/progress.ts\` por chamadas à API do Supabase.

### Estrutura criada do Supabase:
- Tabela \`study_items\`: Pode abrigar todas as 401 perguntas para edições futuras.
- Tabela \`user_progress\`: Marcação de revisados, difíceis e revisar depois (usando UUID do item).
- Tabela \`study_sessions\`: Para analytics do simulado.

## ✨ Modos Disponíveis no App

- **Home**: Resumo do seu progresso, atalhos rápidos e estatísticas.
- **Flashcards**: Cartões viráveis com foco na repetição ativa e marcação de difíceis.
- **Mapa Mental & Cola de Prova**: Visualização hierárquica por assunto, e um modo condensado para impressão (Cola de Prova).
- **Simulado**: Teste cego sem múltiplas escolhas para forçar a recordação livre. Autoavaliação com "Acertei" ou "Errei".
- **Revisão Rápida**: Leitura corrida do conteúdo com busca ao vivo por palavras-chave e botão de "Modo Impressão".
