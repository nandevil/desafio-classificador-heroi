# desafio-classificador-heroi  
# 🛡️ Desafio DIO: Classificador de Nível de Herói

Projeto prático da DIO que classifica o nível de um herói de acordo com a quantidade de experiência (XP).

## 🎯 Conceitos utilizados

- Variáveis
- Operadores (comparação e lógicos)
- Laços de repetição (`for`)
- Estruturas de decisão (`if / else if / else`)

## 📊 Tabela de níveis

| XP | Nível |
|---|---|
| Menor que 1.000 | Ferro |
| 1.001 a 2.000 | Bronze |
| 2.001 a 5.000 | Prata |
| 5.001 a 7.000 | Ouro |
| 7.001 a 8.000 | Platina |
| 8.001 a 9.000 | Ascendente |
| 9.001 a 10.000 | Imortal |
| 10.001 ou mais | Radiante |

> Observação: o enunciado não define o XP exato de 1.000. Neste projeto, 1.000 é classificado como **Ferro**.

## ▶️ Como executar

Com o [Node.js](https://nodejs.org/) instalado:

```bash
node heroi.js
```

## 💬 Saída esperada

```
O Herói de nome Aragorn está no nível de Ferro
O Herói de nome Legolas está no nível de Bronze
O Herói de nome Gandalf está no nível de Prata
O Herói de nome Frodo está no nível de Ouro
O Herói de nome Gimli está no nível de Platina
O Herói de nome Boromir está no nível de Ascendente
O Herói de nome Galadriel está no nível de Imortal
O Herói de nome Sauron está no nível de Radiante
```

## 🚀 Possíveis melhorias

- Receber nome e XP pelo terminal (`readline` ou `prompt`)
- Criar uma interface web com HTML/CSS
- Adicionar testes automatizados