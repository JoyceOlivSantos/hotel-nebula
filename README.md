
#  Hotel Nebula

## Sobre o projeto

O Hotel Nebula é um projeto acadêmico de banco de dados não relacional desenvolvido com MongoDB.

O objetivo é simular o gerenciamento de um hotel, organizando informações sobre hóspedes, quartos, reservas, hospedagens, pagamentos, funcionários, serviços e avaliações.

O projeto busca demonstrar como um banco de dados NoSQL pode armazenar informações estruturadas, documentos aninhados e referências entre coleções.

## Objetivos

- Modelar um banco de dados não relacional.
- Criar coleções e inserir documentos no MongoDB.
- Trabalhar com documentos aninhados e referências.
- Realizar consultas para auxiliar a administração do hotel.
- Analisar reservas, faturamento previsto e ocupação.

## Tecnologias utilizadas

- MongoDB
- MongoDB Compass
- JavaScript (MongoDB Shell)
- Visual Studio Code
- Git e GitHub

## Estrutura do banco de dados

O banco de dados se chama `hotel_nebula` e possui oito coleções:

| Coleção | Descrição |
|---|---|
| hospedes | Cadastro dos hóspedes |
| quartos | Informações dos quartos |
| reservas | Registro das reservas |
| hospedagens | Registro das estadias |
| pagamentos | Controle dos pagamentos |
| funcionarios | Cadastro dos funcionários |
| servicos | Serviços oferecidos pelo hotel |
| feedbacks | Avaliações dos hóspedes |

## Organização do projeto

- `parte-1-origem`: modelagem e documentação do banco de dados.
- `parte-2-montagem`: criação e inserção de dados.
- `parte-3-radar`: consultas e análises administrativas.

## Radar de Comando

O projeto contempla consultas para:

- Identificar quartos por características.
- Encontrar hóspedes recorrentes.
- Calcular faturamento por mês e período.
- Identificar dias com maior quantidade de check-ins.
- Comparar reservas entre meses.
- Calcular a taxa de ocupação prevista.



