const clientAuth = (_request, response, next) => {
    const { email } = _request.body;
    const { name } = _request.body;
    const { cpf } = _request.body;
    const { address } = _request.body;
    const { phone } = _request.body;

    if (email === undefined) {
      return response.status(400).json({ message: 'Email Iválido' });
    }
    if (!email.match(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/)) {
    return response.status(400).json({ message: 'Email Inválido' });
    }  
    if (name === undefined || name === '') {
    return response.status(400).json({ message: 'Insira um nome' });
    }
    if (address === undefined || address === '') {
    return response.status(400).json({ message: 'Insira um endereço' });
    }
    if (phone === undefined || phone.length < 10) {
    return response.status(400).json({ message: 'Insira um telefone válido' });
    }
    if (cpf === undefined || cpf.length !== 14) {
    return response.status(400).json({ message: 'Adicione um CPF válido' });
    }
    next();
}

module.exports = {
    clientAuth 
};