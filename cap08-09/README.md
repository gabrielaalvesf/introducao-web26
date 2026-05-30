# Projeto CSS Zen Garden — Estilo Personalizado NovaCore

## Autor
Gabriela Alves Ferreira

## Tema
Minimalismo Pastel Moderno (Candy Soft)

## Design de Referência
Mélange Pastel / Studio Soft Style Guide

## Link de Referência
https://www.csszengarden.com/

## Descrição e Decisões de Layout
O objetivo estratégico deste projeto foi transformar completamente o esqueleto semântico original do CSS Zen Garden em um painel responsivo, limpo e atraente sem modificar nenhuma tag HTML.

As principais decisões estruturais tomadas foram:
1. **Grid Layout Principal**: Na resolução desktop, o layout assume uma malha assimétrica de duas colunas (`2.8fr 1.2fr`) onde o bloco de conteúdo principal divide espaço com a barra de navegação lateral.
2. **Barra Lateral Fixa (Sticky)**: A barra lateral (`.sidebar`) foi configurada com `position: sticky` para deslizar suavemente junto com a rolagem do usuário, garantindo acesso constante aos links de troca de temas.
3. **Flexbox Interno**: Utilizado nas seções de cabeçalho, nas listas de links e no rodapé para organizar o espaçamento flexível e a quebra automática de linha em telas de celulares.
4. **Cores Pasteis**: Cada bloco de artigo ganhou acentos superiores coloridos individuais mapeados por variáveis CSS (`:root`), simulando cartões modernos com tons de rosa, amarelo, verde e azul bebê, além de cantos arredondados e sombras suaves.

## Recursos Utilizados
- **CSS Grid Layout**
- **Flexbox Alignment**
- **Variáveis CSS (:root)**
- **Tipografia fluida com clamp()**
- **Media Queries (Responsividade)**