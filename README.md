# Calculadora de IMC

Este projeto é uma simples calculadora de Índice de Massa Corporal (IMC) implementada em JavaScript.

## Funcionalidades

- Calcula o IMC com base no peso e altura fornecidos pelo usuário
- Classifica o resultado em categorias: Magreza, Normal, Sobrepeso e Obesidade
- Exibe o resultado do IMC e a categoria correspondente

## Como usar

1. Abra o arquivo HTML associado no navegador
2. Insira seu peso em quilogramas no campo "Peso"
3. Insira sua altura em metros no campo "Altura"
4. Clique no botão de envio
5. O resultado será exibido abaixo do formulário

## Tecnologias utilizadas

- HTML
- JavaScript

## Estrutura do projeto

O projeto consiste em um arquivo JavaScript (`script.js`) que contém a lógica para:

- Capturar o evento de envio do formulário
- Calcular o IMC
- Determinar a categoria do IMC
- Exibir o resultado na página

## Fórmula do IMC

O IMC é calculado usando a fórmula:
IMC = peso / (altura \* altura)

## Categorias de IMC

- Magreza: IMC < 18.5
- Normal: 18.5 <= IMC < 24.9
- Sobrepeso: 25 <= IMC < 29.9
- Obesidade: IMC >= 30
