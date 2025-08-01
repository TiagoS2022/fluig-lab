function displayFields(form, customHTML) {
  var atividade = getValue("WKNumState");
  if (atividade == 0 || atividade == 1) {
    form.setVisibleById("setor", true);
  }
}

function beforeSendValidate(numState, nextState) {
  var nome = hAPI.getCardValue("nome");
  var email = hAPI.getCardValue("email");

  if (!nome) throw "O campo Nome é obrigatório!";
  if (!email) throw "O campo E-mail é obrigatório!";
}

function addLinhaTabela() {
	  wdkAddChild("tabela_colaboradores");
	}

	function beforeSendValidate(numState, nextState) {
	  var indexes = hAPI.getChildrenIndexes("tabela_colaboradores");
	  if (indexes.length == 0) {
	    throw "Adicione ao menos um colaborador.";
	  }

	  for (var i = 0; i < indexes.length; i++) {
	    var nome = hAPI.getCardValue("nome_colab___" + indexes[i]);
	    if (!nome) {
	      throw "O campo Nome do colaborador (linha " + (i + 1) + ") está vazio!";
	    }
	  }
	}
