# Validação de formulário com Regex

Este formulário simples foi criado para explorar e praticar o aprendizado de Expressões Regulares (Regex). Ele realiza a validação de email, data e senha, mas o código é suficientemente simples para ser expandido, permitindo que o programador explore ideias mais complexas e desenvolva seu aprendizado inicial.

## Aprendizado

1. Como evitar comportamento padrão do navegador `event.preventDefault()`.
2. Como criar validações de campos de forma iterativa e reutilizável.
3. Entender que o uso de inputs com tipos pré-definidos (como `type="email"`) pode entrar em conflito com validações feitas via Regex.
4. Saber que inputs do tipo `text` permitem que a Regex realize a validação corretamente.

## Vale a pena saber

Criar um array de objetos com os campos do formulário permite que, caso novos campos sejam adicionados, a regra de validação aplicada com for-of funcione automaticamente. Isso elimina a necessidade de criar vários ifs separados, tornando o código mais limpo, reutilizável e escalável.

## Observações
- O formulário exibe mensagens de erro ou sucesso diretamente na página, sem usar alert.
- A validação Regex utilizada é simplificada, adequada para aprendizado e prática, mas pode ser expandida para casos reais de produção.

## Exemplos de entradas

| Campo | Entrada Válida           | Entrada Inválida |
| ----- | ------------------------ | ---------------- |
| Email | `foo.bar@gmail.com`      | `foo@@gmail.com` |
|       | `usuario123@mail.com.br` | `usuario@mail`   |
| Data  | `21/08/2025`             | `21-08-2025`     |
|       | `01/01/2000`             | `1/1/2000`       |
| Senha | `Abc123$%`               | `abc12345`       |
|       | `Senha!123`              | `SENHA123`       |

