import React, { useState } from 'react';

function CompanyRegistration() {
  const [companyName, setCompanyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [message, setMessage] = useState('');

  const validateCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj === '') return false;
    if (cnpj.length !== 14) return false;

    if (/^(\d)\1+$/.test(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    // Validação do segundo dígito verificador
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) return false;

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !cnpj) {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }
    if (!validateCNPJ(cnpj)) {
      setMessage('CNPJ inválido.');
      return;
    }
    setMessage('Empresa cadastrada com sucesso!');
  };

  return (
    <div className="company-registration">
      <h2>Cadastrar Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Nome da Empresa</label>
          <input 
            type="text" 
            id="companyName" 
            value={companyName} 
            onChange={(e) => setCompanyName(e.target.value)} 
            placeholder="Nome da Empresa" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ</label>
          <input 
            type="text" 
            id="cnpj" 
            value={cnpj} 
            onChange={(e) => setCnpj(e.target.value)} 
            placeholder="CNPJ" 
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default CompanyRegistration;
