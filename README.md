# Formulário Fluig – Básico

## 📋 Descrição
Este formulário foi criado como modelo de entrada de dados simples, com os seguintes campos:
- Nome
- E-mail
- Data
- Setor

## 🧪 Funcionalidades
- Validação de campos obrigatórios via `beforeSendValidate`
- Controle de visibilidade baseado na etapa do processo
- Estrutura em Fluig Style Guide

## 🖼 Print de Tela
> (adicione um print aqui)

## 📁 Estrutura dos Arquivos
- `formulario.html` → Layout visual do formulário
- `formulario.js` → Scripts de controle e validação

---

# Formulário Fluig – Com WDK

## 📋 Descrição
Modelo de formulário com campos dinâmicos WDK para cadastro de colaboradores.

## 🧪 Funcionalidades
- Tabela dinâmica com WDK (`addLinhaTabela`)
- Validação obrigatória de pelo menos uma linha
- Validação de campo "Nome" por linha

## 📁 Estrutura dos Arquivos
- `formulario.html` → Layout com tabela WDK
- `formulario.js` → Scripts de validação e adição dinâmica
