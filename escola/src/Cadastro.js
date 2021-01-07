import React from 'react';

const Cadastro = () => {
  const [form, setForm] = React.useState({
    nome: '',
    nascimento: '',
    responsavel: '',
    telefoneResponsavel: '',
    contatoEmergencia: '',
    telefoneEmergencia: '',
    restricaoAlimentar: '',
    qualRestricaoAlimentar: '',
    autorizacaoImagem: '',
    pessoasAutorizadas: '',
    turma: '',
    observacoes: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="nascimento">Data de Nascimento</label>
      <input
        type="date"
        id="nascimento"
        value={form.nascimento}
        onChange={handleChange}
      />
      <label htmlFor="responsavel ">Responsável pela Criança </label>
      <input
        type="text"
        id="responsavel "
        value={form.responsavel}
        onChange={handleChange}
      />
      <label htmlFor="telefoneResponsavel">Telefone do Responsável</label>
      <input
        type="text"
        id="telefoneResponsavel"
        value={form.telefoneResponsavel}
        onChange={handleChange}
      />
      <label htmlFor="contatoEmergencia">Contato de Emergência</label>
      <input
        type="text"
        id="contatoEmergencia"
        value={form.contatoEmergencia}
        onChange={handleChange}
      />
      <label htmlFor="telefoneEmergencia">Telefone de Emergência</label>
      <input
        type="text"
        id="telefoneEmergencia"
        value={form.telefoneEmergencia}
        onChange={handleChange}
      />
      <label htmlFor="restricaoAlimentar">Possui Restrição Alimentar</label>
      <input
        type="checkbox"
        id="restricaoAlimentar"
        value={form.restricaoAlimentar}
        onChange={handleChange}
      />
      <label htmlFor="qualRestricaoAlimentar">
        Qual Restrição Alimentar Possui
      </label>
      <input
        type="text"
        id="qualRestricaoAlimentar"
        value={form.qualRestricaoAlimentar}
        onChange={handleChange}
      />
      <label htmlFor="autorizacaoImagem">Autorização de Uso de Imagem</label>
      <input
        type="checkbox"
        id="autorizacaoImagem"
        value={form.autorizacaoImagem}
        onChange={handleChange}
      />
      <label htmlFor="pessoasAutorizadas">
        Pessoas Autorizadas a Buscar a Criança
      </label>
      <input
        type="text"
        id="pessoasAutorizadas"
        value={form.pessoasAutorizadas}
        onChange={handleChange}
      />
      <label htmlFor="turma">Turma</label>
      <input
        type="text"
        id="turma"
        value={form.turma}
        onChange={handleChange}
      />
      <label htmlFor="observacoes">Observações</label>
      <input
        type="text"
        id="observacoes"
        value={form.observacoes}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Cadastro;
