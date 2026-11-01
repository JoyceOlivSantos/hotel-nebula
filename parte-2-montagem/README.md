# Parte 2 — Montagem do Núcleo

## Objetivo

Nesta etapa foi realizada a implementação do banco de dados NoSQL do Hotel Nebula, utilizando MongoDB. O objetivo foi criar as coleções, inserir documentos fictícios e organizar as informações de forma flexível e estruturada.

## Banco de dados

- **Nome:** `hotel_nebula`
- **Tecnologia:** MongoDB
- **Ferramenta de gerenciamento:** MongoDB Compass
- **Total de coleções:** 8
- **Total de documentos:** 28

## Coleções e quantidade de documentos

| Coleção | Documentos |
|---|---:|
| hospedes | 2 |
| quartos | 2 |
| reservas | 13 |
| hospedagens | 2 |
| pagamentos | 2 |
| funcionarios | 2 |
| servicos | 3 |
| feedbacks | 2 |
| **Total** | **28** |

## Estrutura dos arquivos

Os arquivos JSON desta pasta são exportações dos documentos cadastrados no MongoDB Compass.

- `hospedes.json`
- `quartos.json`
- `reservas.json`
- `hospedagens.json`
- `pagamentos.json`
- `funcionarios.json`
- `servicos.json`
- `feedbacks.json`

## Organização dos dados

O banco utiliza documentos com campos simples, listas e documentos aninhados. Essa estrutura permite armazenar informações relacionadas de maneira flexível, conforme as características do MongoDB.

Foram utilizadas referências entre coleções para relacionar hóspedes, quartos, reservas e hospedagens. Também foram utilizados documentos embutidos para informações que fazem parte de um mesmo contexto, como endereço, preferências e serviços consumidos.

## Observação

Os dados cadastrados são fictícios e foram utilizados exclusivamente para fins acadêmicos.