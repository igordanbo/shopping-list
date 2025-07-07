function gerarData(){
    const data = new Date();

    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' });

    const dataFormatada = data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
    });

    const horaFormatada = data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
    });

    return `${diaSemana}, ${dataFormatada} às ${horaFormatada}`;
}

export default gerarData;
