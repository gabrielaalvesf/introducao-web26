# Projeto — Recriação Responsiva (Capítulo 10)

## Autor
Gabriela Alves Ferreira

## Site Escolhido
YouTube Premium

## Link do Site Original
http://googleusercontent.com/youtube.com/premium

## Objetivo Visual do Projeto
Criar uma homepage limpa e responsiva baseada na arquitetura de venda do YouTube Premium, adaptando os elementos gráficos originais para um ecossistema com cores pasteis suaves e cantos arredondados modernos.

## Estratégia Responsiva Utilizada
A engenharia reversa foi construída utilizando a estratégia **Mobile-First**. Todo o esqueleto do CSS foi estruturado para ser leve em dispositivos móveis, e as quebras de colunas e grids foram refinadas progressivamente usando Media Queries com `min-width`.

## Breakpoints Implementados
- `576px` (Tablets em modo vertical)
- `768px` (Laptops e telas médias)
- `1024px` (Monitores grandes desktop)

## Recursos Técnicos Aplicados
- **Estratégia Mobile-First** estrutural.
- **CSS Grid Layout** para a distribuição responsiva dos 4 blocos de vantagens.
- **Flexbox Alignment** no Header de navegação e nas colunas organizacionais do Footer.
- **Tipografia Fluida** utilizando a fórmula `clamp()` no título do Hero.
- **Dark Mode Nativo** mapeado via Media Query `prefers-color-scheme`.