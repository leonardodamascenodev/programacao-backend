## Atividade 08 - Refatoração e Code Review

# O que foi refatorado:

Foram extraídas constantes mágicas nas classes Categoria (TAMANHO_MIN_NOME, TAMANHO_MIN_DESCRICAO) e Funcionario (TAXA_BONUS_PADRAO).

# Apontamentos do Code Review (Colega):

O Igor identificou ausência de constantes em validações e cálculos.

Foram encontrados e corrigidos erros lógicos de strings copiadas e coladas inadequadamente (MB no lugar de kg em Livro Físico, kg no lugar de MB em Livro Digital, e "Peso" no lugar de "Pontos" em Cliente).
