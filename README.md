# Broadway Clean Services - Website

Este projeto é um website moderno para a Broadway Clean Services, desenvolvido com React, TypeScript e Vite.

## Pré-requisitos (Windows)

Antes de começar, certifique-se de que tem o Node.js e o npm (ou pnpm) instalados no seu sistema Windows. Pode descarregá-los em [nodejs.org](https://nodejs.org/). Recomendamos o uso do pnpm para gestão de pacotes, que pode ser instalado via npm com `npm install -g pnpm`.

## Configuração e Execução do Projeto

1.  **Descarregar e Extrair:**
    *   Descarregue o ficheiro `.zip` do projeto que lhe foi enviado.
    *   Extraia o conteúdo para uma pasta à sua escolha no seu computador (por exemplo, `C:\Users\SeuNome\Projetos\broadway-clean-services`).

2.  **Abrir o Terminal:**
    *   Abra o seu terminal preferido (Command Prompt, PowerShell, ou Git Bash) na pasta do projeto. Pode fazer isto navegando até à pasta no File Explorer, clicando com o botão direito do rato dentro da pasta (sem selecionar nenhum ficheiro) e escolhendo "Abrir no Terminal", "Abrir janela do PowerShell aqui", ou "Git Bash Here", dependendo do seu sistema e software instalado.
    *   Alternativamente, abra o terminal e use o comando `cd` para navegar até à pasta do projeto. Exemplo:
        ```bash
        cd C:\Users\SeuNome\Projetos\broadway-clean-services
        ```

3.  **Instalar Dependências:**
    *   No terminal, dentro da pasta do projeto, execute um dos seguintes comandos para instalar todas as dependências necessárias:
        *   Se estiver a usar pnpm (recomendado):
            ```bash
            pnpm install
            ```
        *   Se estiver a usar npm:
            ```bash
            npm install
            ```
    *   Este processo pode demorar alguns minutos, dependendo da sua ligação à internet.

4.  **Iniciar o Servidor de Desenvolvimento:**
    *   Após a instalação das dependências, execute um dos seguintes comandos para iniciar o servidor de desenvolvimento local:
        *   Se estiver a usar pnpm:
            ```bash
            pnpm run dev
            ```
        *   Se estiver a usar npm:
            ```bash
            npm run dev
            ```
    *   O terminal deverá indicar que o servidor está a correr e fornecer um endereço local (geralmente `http://localhost:5173/` ou uma porta similar se a 5173 estiver em uso).

5.  **Visualizar o Site:**
    *   Abra o seu navegador de internet preferido (Chrome, Firefox, Edge, etc.) e navegue até ao endereço local fornecido no terminal (por exemplo, `http://localhost:5173/`).
    *   Deverá conseguir ver o website da Broadway Clean Services a funcionar.

## Personalização

*   **Logótipo:** O logótipo principal está localizado em `src/assets/logo_broadway_new.png`.
*   **Imagens do Carrossel e Portfólio:** As imagens estão na pasta `src/assets/carousel` e `src/assets/portfolio`. Pode substituí-las ou adicionar novas, ajustando as referências nos componentes `CarouselSection.tsx` e `PortfolioSection.tsx`.
*   **Textos e Conteúdo:** A maior parte do conteúdo textual pode ser editada diretamente nos ficheiros `.tsx` dentro da pasta `src/components/`.
*   **Links de Redes Sociais:** Os links para WhatsApp, Instagram e TikTok nos botões flutuantes precisam ser atualizados no ficheiro `src/components/FloatingActionButtons.tsx` com os seus links reais.
*   **Informações de Contacto:** Atualize as informações de contacto (email, telefone, etc.) no componente `ContactSection.tsx` e no rodapé (`Footer` dentro de `App.tsx`) se necessário.

## Scripts Disponíveis

No diretório do projeto, pode executar:

*   `pnpm run dev` ou `npm run dev`:
    Inicia a aplicação em modo de desenvolvimento.

*   `pnpm run build` ou `npm run build`:
    Compila a aplicação para produção na pasta `dist`. Este passo é necessário se quiser fazer o deploy do site num servidor web.

*   `pnpm run lint` ou `npm run lint`:
    Executa o linter para verificar erros de código e estilo.

*   `pnpm run preview` ou `npm run preview`:
    Inicia um servidor local para pré-visualizar a build de produção (após executar `pnpm run build`).

Se encontrar algum problema durante a configuração ou execução, por favor, verifique as mensagens de erro no terminal, pois geralmente fornecem pistas sobre a causa do problema.

