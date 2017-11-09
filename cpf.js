// Based on http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
/*
  function TestaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;   
      //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
      if (strCPF == "00000000000")
    return false;
      for (i=1; i<=9; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
      Resto = (Soma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) 
    Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) )
    return false;
    Soma = 0;
      for (i = 1; i <= 10; i++)
         Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) 
    Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) )
          return false;
      return true;
  }
*/

const validateCPF = (cpf) => {
  const stripped = cpf.replace(/(\.|-)/g, '');
  if (stripped.length !== 11 || /^(.)\1+$/.test(stripped)) return false;
  const arr = value.replace(/(\.|-)/g, '').split('').map(Number);

  return [10, 11].every((n) => {
    const calc = arr.slice(0, n - 1).reduce((p, d, i) => p + (parseInt(d, 10) * (n - i)), 0);
    let remainder = (calc * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(arr.slice(n - 1, n).join(''), 10);
  });
};

export default testCPF;
