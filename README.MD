# React Auth Context

Projeto simples de autenticação em React utilizando React Context para gerenciamento global do estado de autenticação, React Router v6 para navegação protegida, e TypeScript para tipagem estática.

---

## Funcionalidades

- Tela de login com formulário controlado  
- Gerenciamento global do estado do usuário autenticado via React Context  
- Rotas protegidas com componente `ProtectedRoute` que redireciona usuários não autenticados  
- Dashboard que exibe o e-mail do usuário logado e botão para logout  
- Estilização responsiva e mobile-first com CSS puro  

---

## Estrutura do Projeto

```
react-auth-context/
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   └── components/
│       ├── Login.tsx
│       ├── Dashboard.tsx
│       └── ProtectedRoute.tsx
│   └── styles/
│       └── global.css
```

---

## Tecnologias Utilizadas

- React 18  
- React Router DOM v6  
- TypeScript  
- Vite  
- CSS puro (mobile-first)  

---

## Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd react-auth-context
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador o endereço informado no terminal (ex: http://localhost:5173)

---

## Como Funciona a Autenticação

- O estado de autenticação é gerenciado pelo `AuthContext`.  
- O método `login(email, senha)` atualiza o estado do usuário no contexto.  
- O método `logout()` limpa o estado.  
- O componente `ProtectedRoute` verifica se o usuário está autenticado, redirecionando para `/login` caso contrário.  
- A rota `/dashboard` é protegida para usuários autenticados.  
- O estado não é persistido no `localStorage` para evitar erros em ambientes restritos.  

---

## Estilização

- CSS mobile-first no arquivo `src/styles/global.css`.  
- Componentes principais usam classes CSS para estrutura e estilo.  
- Fácil de customizar e estender.  

---

## Melhorias Futuras

- Autenticação real com backend  
- Persistência segura da sessão (cookies httpOnly, JWT)  
- Validação e tratamento de erros nos formulários  
- Testes automatizados  
- Internacionalização e temas  

---

## Contato

Dúvidas, sugestões ou contribuições, abra issues ou pull requests!  
Email: samuellucasvieira.melo@gmail.com