## Tarefa feita para o desafio de Fundamento NodeJS

# Rotas:
```GET /tasks``` -> Obter tarefas

```POST /tasks``` -> Criar tarefas (Checa se o body da req está preenchido)

```PUT /tasks/:id``` -> Atualizar tarefas (Pode-se atualizar titulo e/ou descrição)

```PATCH /tasks/:id/complete``` -> Concluir tarefas (Caso a tarefa já esteja completa, será avisado)

```DELETE /tasks/:id``` -> Deletar tarefas

# Adicional
```node src/utils/csv-export.js``` para exportar as tarefas em um arquivo CSV.
