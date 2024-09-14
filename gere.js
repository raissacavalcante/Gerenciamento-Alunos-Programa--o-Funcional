const aluno = {
    nome: '',
    idade: 0,
    matricula: 0,
    curso: '',
};

const adicionarAluno = (turma, nome, idade, matricula, curso) => {
    const novoAluno = {
        ...aluno,
        nome: nome,
        idade: idade,
        matricula: matricula,
        curso: curso
    };

    // Adiciona o novo aluno ao início da turma existente
    return [novoAluno, ...turma];
};

const listarAlunos = (turma) => {
    // Usa map para transformar cada aluno em uma string formatada
    const alunosInfo = turma.map(aluno => 
        `Nome: ${aluno.nome}, Idade: ${aluno.idade}, Matrícula: ${aluno.matricula}, Curso: ${aluno.curso}`
    );

    // Usa join para concatenar todas as strings com quebra de linha
    const resultado = alunosInfo.join('\n');

    console.log(resultado);
};

// Inicialmente a turma está vazia
const turma = [];

// Adiciona os alunos e atualiza a turma
const turmaAtualizada = adicionarAluno(turma, 'João', 20, 1001, 'EC');
const turmaFinal = adicionarAluno(turmaAtualizada, 'Maria', 22, 1002, 'SI');
const turmaMaisFinal = adicionarAluno(turmaFinal, 'Carlos', 23, 1003, 'EC');

const buscarPorCurso = (turma, curso) => {
    // Filtra os alunos pelo curso especificado
    return turma.filter(aluno => aluno.curso === curso);
};

console.log(buscarPorCurso(turmaMaisFinal, 'EC'))

const removerAluno = (turma, nome) => {
    return turma.filter(aluno => aluno.nome !== nome);
  };

  console.log(removerAluno(turmaMaisFinal, 'João'))

  const ordenarPorMatricula = (turma) => {
    return [...turma].sort((x, y) => x.matricula - y.matricula);
  };

  console.log(ordenarPorMatricula(turmaMaisFinal))
  
  const contarAlunosPorCurso = (turma) => {
    return turma.reduce((acc, aluno) => {
      acc[aluno.curso] = (acc[aluno.curso] || 0) + 1;
      return acc;
    }, {});
  }; 

  console.log(contarAlunosPorCurso(turmaMaisFinal))

  const editarAluno = (turma, nome, novosDados) => {
    return turma.map(aluno => 
      aluno.nome === nome ? { ...aluno, ...novosDados } : aluno
    );
  };

  console.log(editarAluno(turmaMaisFinal, 'Maria', { idade: 21, curso: 'OF' })); 
