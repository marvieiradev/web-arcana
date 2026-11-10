// src/data/arcanos.js

export const ARCANOS_MAIORES = [
  {
    id: 0,
    numero: "0",
    nome: "O Louco",
    nomeIngles: "The Fool",
    elemento: "Ar",
    palavrasChave: ["Novos Começos", "Inocência", "Espontaneidade", "Fé Cega"],
    significado: "Representa o início de uma nova jornada, a coragem de saltar no desconhecido e a liberdade de espírito. É o momento de confiar no universo e dar o primeiro passo sem medo do julgamento.",
    invertido: "Imprudência, correr riscos desnecessários, ingenuidade excessiva ou hesitação em dar um passo necessário.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    id: 1,
    numero: "I",
    nome: "O Mago",
    nomeIngles: "The Magician",
    elemento: "Ar",
    palavrasChave: ["Manifestação", "Poder Pessoal", "Habilidade", "Ação"],
    significado: "Você possui todas as ferramentas necessárias para transformar seus objetivos em realidade. É o momento de focar sua vontade, alinhar intenção e ação, e criar a sua própria realidade.",
    invertido: "Ilusão, manipulação, talentos desperdiçados ou falta de planejamento e foco.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 4a6 6 0 1 1-6 6 6 6 0 0 1 6-6z"/><path d="M12 8v8M8 12h8"/></svg>`
  },
  {
    id: 2,
    numero: "II",
    nome: "A Sacerdotisa",
    nomeIngles: "The High Priestess",
    elemento: "Água",
    palavrasChave: ["Intuição", "Mistério", "Mundo Interior", "Sabedoria"],
    significado: "Convite para olhar para dentro e escutar a sua voz interior. Os mistérios se revelam no silêncio e na contemplação. Confie nos seus pressentimentos e no seu conhecimento tácito.",
    invertido: "Segredos prejudiciais, desconexão com a intuição, superficialidade ou emoções reprimidas.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5z"/></svg>`
  },
  {
    id: 3,
    numero: "III",
    nome: "A Imperatriz",
    nomeIngles: "The Empress",
    elemento: "Terra",
    palavrasChave: ["Abundância", "Fertilidade", "Nutrição", "Criatividade"],
    significado: "Momento de prosperidade, criação e conexão com os sentidos. Representa a manifestação do belo, a fertilidade em projetos ou relacionamentos e a generosidade da natureza.",
    invertido: "Bloqueio criativo, dependência emocional, escassez ou negligência com o autocuidado.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>`
  },
  {
    id: 4,
    numero: "IV",
    nome: "O Imperador",
    nomeIngles: "The Emperor",
    elemento: "Fogo",
    palavrasChave: ["Estrutura", "Autoridade", "Estabilidade", "Liderança"],
    significado: "Trata da construção de bases sólidas, disciplina e organização. Representa a capacidade de exercer liderança com justiça e estabelecer limites claros para alcançar a ordem.",
    invertido: "Rigidez excessiva, autoritarismo, falta de controle ou desorganização nas estruturas pessoais.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20h14M12 4v16M8 8h8M7 13h10"/></svg>`
  },
  {
    id: 5,
    numero: "V",
    nome: "O Hierofante",
    nomeIngles: "The Hierophant",
    elemento: "Terra",
    palavrasChave: ["Tradição", "Ensino", "Valores Espirituais", "Conformidade"],
    significado: "Busca por significado através de sistemas de conhecimento estabelecidos, mentoria e tradições. Aponta para o aprendizado formal, ética e alinhamento com dogmas ou instituições confiáveis.",
    invertido: "Dogmatismo cego, rebeldia necessária, quebra de tradições ou apego a crenças ultrapassadas.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M7 8h10M9 14h6M10 20h4"/></svg>`
  },
  {
    id: 6,
    numero: "VI",
    nome: "Os Enamorados",
    nomeIngles: "The Lovers",
    elemento: "Ar",
    palavrasChave: ["Amor", "União", "Escolhas", "Alinhamento de Valores"],
    significado: "Simboliza parcerias profundas, harmonia e a necessidade de tomar decisões conscientes alinhadas com seus valores éticos e espirituais mais elevados.",
    invertido: "Desarmonia, conflito de valores, escolhas precipitadas ou desequilíbrio nas parcerias.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
  },
  {
    id: 7,
    numero: "VII",
    nome: "O Carro",
    nomeIngles: "The Chariot",
    elemento: "Água",
    palavrasChave: ["Determinação", "Vontade", "Foco", "Superação"],
    significado: "Avanço vitorioso mediante o autocontrole e a força de vontade. Indica a superação de forças opostas e a capacidade de manter o rumo certo mesmo diante de desafios.",
    invertido: "Falta de rumo, perda de controle, agressividade desmedida ou obstáculos paralisantes.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 12h6M12 9v6"/></svg>`
  },
  {
    id: 8,
    numero: "VIII",
    nome: "A Força",
    nomeIngles: "Strength",
    elemento: "Fogo",
    palavrasChave: ["Coragem", "Compaixão", "Paciência", "Dominio Próprio"],
    significado: "Dominar instintos e adversidades não pela força bruta, mas pela gentileza, paciência e resiliência interna. Representa a verdadeira coragem de agir com compaixão.",
    invertido: "Dúvida sobre si mesmo, fraqueza emocional, impulsividade ou sentimentos de inadequação.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9"/></svg>`
  },
  {
    id: 9,
    numero: "IX",
    nome: "O Eremita",
    nomeIngles: "The Hermit",
    elemento: "Terra",
    palavrasChave: ["Introspecção", "Busca da Verdade", "Solidão", "Guia Interior"],
    significado: "Momento de recolhimento voluntário para buscar respostas no próprio interior. A lanterna da sabedoria ilumina apenas o próximo passo da jornada individual.",
    invertido: "Isolamento excessivo, solidão amarga, recusa em aceitar conselhos ou desconexão do mundo.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8M12 14v8M8 12h8"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    id: 10,
    numero: "X",
    nome: "A Roda da Fortuna",
    nomeIngles: "Wheel of Fortune",
    elemento: "Fogo",
    palavrasChave: ["Ciclos", "Mudança", "Destino", "Oportunidade"],
    significado: "Lembrete de que a única constante é a mudança. A sorte e os eventos externos giram em ciclos; prepare-se para abraçar as transformações e novas oportunidades.",
    invertido: "Resistência à mudança, azar temporário, sensação de estagnação ou repetição de padrões negativos.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>`
  },
  {
    id: 11,
    numero: "XI",
    nome: "A Justiça",
    nomeIngles: "Justice",
    elemento: "Ar",
    palavrasChave: ["Equilíbrio", "Verdade", "Causa e Efeito", "Clareza"],
    significado: "Colheita justa dos atos passados. Exige objetividade, imparcialidade e decisões tomadas com a razão, assumindo a responsabilidade por cada escolha.",
    invertido: "Injustiça, desonestidade, recusa em assumir erros ou julgamento imparcial e severo.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 7h14M3 12l4-5 4 5H3zm10 0l4-5 4 5h-8z"/></svg>`
  },
  {
    id: 12,
    numero: "XII",
    nome: "O Pendurado",
    nomeIngles: "The Hanged Man",
    elemento: "Água",
    palavrasChave: ["Nova Perspectiva", "Pausa", "Entrega", "Renúncia"],
    significado: "Mudar a forma de enxergar as coisas requer parar e aceitar a suspensão momentânea. Às vezes, render-se ao momento presente traz a iluminação necessária.",
    invertido: "Estagnação inútil, vitimização, resistência a ceder ou sacrifícios sem propósito.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10M7 12h10M12 12l4 8M12 12l-4 8"/></svg>`
  },
  {
    id: 13,
    numero: "XIII",
    nome: "A Morte",
    nomeIngles: "Death",
    elemento: "Água",
    palavrasChave: ["Transformação", "Fim de Ciclo", "Renascimento", "Desapego"],
    significado: "Encerramento necessário de um capítulo para que o novo possa nascer. Não se refere à morte física, mas à eliminação de velhas estruturas, hábitos ou relacionamentos.",
    invertido: "Resistência ao inevitável, medo da mudança, apego ao passado ou estagnação dolorosa.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    id: 14,
    numero: "XIV",
    nome: "A Temperança",
    nomeIngles: "Temperance",
    elemento: "Fogo",
    palavrasChave: ["Moderação", "Paciência", "Harmonia", "Alquimia"],
    significado: "Encontrar o equilíbrio ideal entre opostos. Convite à paciência, à moderação e à fusão harmoniosa de diferentes aspectos da vida para criar algo duradouro.",
    invertido: "Excesso, desequilíbrio, falta de paciência ou conflitos internos por extremos de comportamento.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8M12 17v5M7 2h10l-5 9-5-9z"/><path d="M12 11v6"/></svg>`
  },
  {
    id: 15,
    numero: "XV",
    nome: "O Diabo",
    nomeIngles: "The Devil",
    elemento: "Terra",
    palavrasChave: ["Apegos", "Ilusão", "Sombra", "Materialismo"],
    significado: "Confronto com as próprias correntes invisíveis: apegos materiais, vícios, dependências emocionais e padrões autodestrutivos. Alerta para recuperar a própria liberdade.",
    invertido: "Libertação de vícios, quebra de correntes, enfrentamento das sombras ou tomada de consciência.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L9 9H3l5 4.5L6 20l6-4 6 4-2-6.5L21 9h-6z"/></svg>`
  },
  {
    id: 16,
    numero: "XVI",
    nome: "A Torre",
    nomeIngles: "The Tower",
    elemento: "Fogo",
    palavrasChave: ["Ruptura", "Revelação", "Mudança Repentina", "Despertar"],
    significado: "Desmoronamento inevitável de ilusões e falsas estruturas. Embora pareça um evento avassalador, limpa o terreno para que a verdade autêntica seja reconstruída.",
    invertido: "Evitar o desastre por pouco, adiamento do inevitável ou resistência a uma verdade necessária.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
  },
  {
    id: 17,
    numero: "XVII",
    nome: "A Estrela",
    nomeIngles: "The Star",
    elemento: "Ar",
    palavrasChave: ["Esperança", "Fé", "Inspiração", "Cura"],
    significado: "Sopro de esperança e serenidade após a tempestade. Sinal de renovação espiritual, clareza de propósito, inspiração artística e fé no futuro.",
    invertido: "Desespero, falta de fé, desânimo, pessimismo ou desconexão com a própria inspiração.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  },
  {
    id: 18,
    numero: "XVIII",
    nome: "A Lua",
    nomeIngles: "The Moon",
    elemento: "Água",
    palavrasChave: ["Ilusão", "Inconsciente", "Intuição", "Medos Incertos"],
    significado: "Navegação por um terreno sombrio de incertezas, ilusões e emoções profundas. Cuidado com enganos visuais ou interpretações distorcidas da realidade.",
    invertido: "Superação de medos, clareza mental emergindo, desmascaramento de ilusões ou segredos revelados.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
  },
  {
    id: 19,
    numero: "XIX",
    nome: "O Sol",
    nomeIngles: "The Sun",
    elemento: "Fogo",
    palavrasChave: ["Alegria", "Sucesso", "Vitalidade", "Clareza Total"],
    significado: "Energia de realização máxima, clareza, verdade exposta à luz e calor humano. Representa confiança plena, sucesso em empreendimentos e celebração da vida.",
    invertido: "Otimismo exagerado, atraso temporário na realização ou dificuldade em enxergar o lado positivo.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
  },
  {
    id: 20,
    numero: "XX",
    nome: "O Julgamento",
    nomeIngles: "Judgement",
    elemento: "Fogo",
    palavrasChave: ["Chamado", "Absolução", "Despertar", "Avaliação"],
    significado: "Momento de acerto de contas interno e resposta a um chamado superior. Autoavaliação sem culpa, liberação do passado e transição consciente para uma nova fase.",
    invertido: "Autoculpabilização, negação de chamados para mudar, medo do julgamento alheio ou hesitação.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`
  },
  {
    id: 21,
    numero: "XXI",
    nome: "O Mundo",
    nomeIngles: "The World",
    elemento: "Terra",
    palavrasChave: ["Conclusão", "Integração", "Realização", "Plenitude"],
    significado: "Encerramento vitorioso de um grande ciclo. Representa a sensação de unidade, realização de objetivos de longo prazo e estar pronto para o próximo salto evolutivo.",
    invertido: "Falta de encerramento, metas inacabadas, sentimento de frustração perto da linha de chegada.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  }
];