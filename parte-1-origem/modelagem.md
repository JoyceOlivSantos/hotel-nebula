
# Parte 1 — Origem do Sistema

## 1. Apresentação do projeto

O Hotel Nebula é um sistema fictício de gerenciamento hoteleiro desenvolvido para organizar informações e facilitar o controle das atividades de um hotel.

A proposta é utilizar um banco de dados não relacional (NoSQL), por meio do MongoDB, para armazenar informações de hóspedes, quartos, reservas, hospedagens, pagamentos, funcionários, serviços e avaliações.

## 2. Objetivo da modelagem

A modelagem tem como objetivo definir como os dados serão organizados, armazenados e relacionados.

A escolha do MongoDB permite trabalhar com documentos flexíveis, informações aninhadas e referências entre coleções, facilitando a adaptação do sistema conforme as necessidades do hotel.

## 3. Banco de dados escolhido

**Nome:** hotel_nebula

**Tecnologia:** MongoDB

**Modelo:** Não relacional (NoSQL)

## 4. Estrutura geral

O banco de dados foi dividido em oito coleções:

- hospedes
- quartos
- reservas
- hospedagens
- pagamentos
- funcionarios
- servicos
- feedbacks

## 5. Descrição das coleções

### 5.1 Coleção hospedes

A coleção hospedes armazena os dados cadastrais das pessoas que utilizam os serviços do hotel.

Principais informações:
- Identificação do hóspede.
- Nome, CPF, e-mail e telefone.
- Data de nascimento e nacionalidade.
- Endereço.
- Preferências pessoais.
- Data de cadastro e situação do cadastro.

**Estratégia de modelagem:**

Os dados de endereço e preferências são armazenados como documentos incorporados (embedded documents), pois fazem parte do cadastro do hóspede e são consultados em conjunto com suas informações.

### 5.2 Coleção quartos

A coleção quartos armazena as informações sobre os espaços disponíveis no hotel.

Principais informações:
- Número e andar do quarto.
- Tipo e categoria.
- Capacidade máxima.
- Preço da diária.
- Descrição e comodidades.
- Características do quarto.
- Situação de disponibilidade.
- Fotos e última limpeza.

**Estratégia de modelagem:**

As características do quarto são armazenadas em um documento incorporado, enquanto as comodidades e fotos são organizadas em listas (arrays).

Essa estrutura facilita a consulta das informações de cada quarto e permite acrescentar novas características sem precisar alterar toda a estrutura do banco.

### 5.3 Coleção reservas

A coleção reservas registra as solicitações de hospedagem realizadas pelos clientes.

Principais informações:
- Identificação da reserva.
- Identificador do hóspede (`hospede_id`).
- Identificador do quarto (`quarto_id`).
- Dados do hóspede e do quarto no momento da reserva.
- Datas de check-in e check-out.
- Quantidade de noites e hóspedes.
- Valor total.
- Situação da reserva.
- Canal de realização.
- Código e observações da reserva.

**Estratégia de modelagem:**

A coleção utiliza referências para conectar uma reserva ao hóspede e ao quarto por meio dos campos `hospede_id` e `quarto_id`.

Também utiliza documentos incorporados chamados `hospede_snapshot` e `quarto_snapshot`, que guardam uma cópia de informações importantes no momento da reserva.

Essa estratégia permite consultar os dados da reserva mesmo que algumas informações cadastrais do hóspede ou do quarto sejam alteradas posteriormente.

### 5.4 Coleção hospedagens

A coleção hospedagens registra as estadias efetivamente realizadas pelos hóspedes no hotel.

Principais informações:
- Identificação da hospedagem.
- Referência à reserva.
- Identificação do hóspede e do quarto.
- Datas reais de entrada e saída.
- Situação da hospedagem.
- Funcionários responsáveis pelo check-in e check-out.
- Serviços consumidos.
- Valores de serviços, diárias e total geral.

**Estratégia de modelagem:**

A coleção utiliza referências para relacionar as hospedagens às reservas, aos hóspedes, aos quartos e aos funcionários.

Os serviços consumidos são armazenados em uma lista de documentos incorporados, contendo informações como nome do serviço, quantidade, preço unitário e total.

Essa estrutura facilita o acompanhamento de cada estadia e permite registrar diferentes serviços utilizados pelo hóspede.

### 5.5 Coleção pagamentos

A coleção pagamentos armazena os registros financeiros relacionados às hospedagens e reservas.

Principais informações:
- Identificação do pagamento.
- Referência à hospedagem e à reserva.
- Identificação do hóspede.
- Valor total.
- Situação do pagamento.
- Data do pagamento.
- Informações sobre parcelas e métodos de pagamento.
- Nota fiscal e data de criação.

**Estratégia de modelagem:**

A coleção utiliza referências para relacionar os pagamentos às hospedagens, reservas e hóspedes.

As parcelas são armazenadas em uma lista de documentos incorporados, permitindo registrar diferentes formas de pagamento e informações sobre transações.

### 5.6 Coleção funcionarios

A coleção funcionarios armazena os dados dos colaboradores do hotel.

Principais informações:
- Identificação do funcionário.
- Nome, CPF, e-mail e telefone.
- Cargo e departamento.
- Turno de trabalho.
- Permissões de acesso.
- Data de admissão.
- Salário e situação do cadastro.

**Estratégia de modelagem:**

O turno é armazenado como documento incorporado, enquanto as permissões são organizadas em uma lista.

Essa estrutura facilita o gerenciamento dos funcionários e permite adicionar novas informações sobre suas atividades.

### 5.7 Coleção servicos

A coleção servicos registra os serviços oferecidos pelo hotel aos hóspedes.

Principais informações:
- Identificação do serviço.
- Nome e categoria.
- Descrição.
- Preço e unidade de cobrança.
- Disponibilidade.
- Horários de atendimento.
- Tags de identificação.

**Estratégia de modelagem:**

O horário de disponibilidade é armazenado como documento incorporado, enquanto as tags são organizadas em uma lista.

Essa organização facilita a consulta dos serviços e permite cadastrar novas opções conforme as necessidades do hotel.

### 5.8 Coleção feedbacks

A coleção feedbacks armazena as avaliações e opiniões dos hóspedes sobre suas experiências.

Principais informações:
- Identificação do feedback.
- Referência ao hóspede, hospedagem e quarto.
- Data da avaliação.
- Nota geral e notas detalhadas.
- Comentário do hóspede.
- Resposta do hotel.
- Situação de visibilidade.

**Estratégia de modelagem:**

A coleção utiliza referências para relacionar as avaliações aos hóspedes, hospedagens e quartos.

As notas detalhadas e as respostas do hotel são armazenadas como documentos incorporados.

Essa estrutura permite acompanhar a satisfação dos hóspedes e registrar as respostas da equipe.
