import { useState } from "react";

function App() {
  const perguntas = [
    {
      pergunta: "Qual hook é usado para gerenciar estado no React?",
      opcoes: ["useState", "useEffect", "useReducer", "useRef"],
      respostaCorreta: "useState",
    },
    {
      pergunta: "Qual comando cria um novo projeto React com Vite?",
      opcoes: [
        "npx create-react-app",
        "npm init vite@latest",
        "npm install vite",
        "npx react-vite-start",
      ],
      respostaCorreta: "npm init vite@latest",
    },
    {
      pergunta: "Qual método é usado para renderizar listas no React?",
      opcoes: [".forEach()", ".map()", ".filter()", ".reduce()"],
      respostaCorreta: ".map()",
    },
    {
      pergunta: "Qual atributo no JSX substitui 'class' do HTML?",
      opcoes: ["className", "classList", "cssClass", "styleClass"],
      respostaCorreta: "className",
    },
    {
      pergunta: "O que o hook useEffect faz?",
      opcoes: [
        "Cria um estado",
        "Executa efeitos colaterais",
        "Renderiza o componente",
        "Estiliza elementos",
      ],
      respostaCorreta: "Executa efeitos colaterais",
    },
    {
      pergunta: "Qual extensão de arquivo normalmente contém componentes React?",
      opcoes: [".js", ".jsx", ".react", ".tsx"],
      respostaCorreta: ".jsx",
    },
    {
      pergunta: "Qual biblioteca é usada para estilizar com classes utilitárias?",
      opcoes: ["Bootstrap", "Tailwind CSS", "Material UI", "Chakra UI"],
      respostaCorreta: "Tailwind CSS",
    },
    {
      pergunta: "O que significa JSX?",
      opcoes: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Xtreme",
        "JSON XML",
      ],
      respostaCorreta: "JavaScript XML",
    },
    {
      pergunta: "No React, cada elemento em um .map() deve ter:",
      opcoes: ["id único", "className", "key única", "style inline"],
      respostaCorreta: "key única",
    },
    {
      pergunta: "Qual hook é usado para criar referências a elementos DOM?",
      opcoes: ["useState", "useRef", "useMemo", "useCallback"],
      respostaCorreta: "useRef",
    },
    {
      pergunta: "Como atualizar o estado baseado no valor anterior?",
      opcoes: [
        "setState(novoValor)",
        "setState(prev => prev + 1)",
        "setState = novoValor",
        "updateState()",
      ],
      respostaCorreta: "setState(prev => prev + 1)",
    },
    {
      pergunta: "Qual método converte uma string JSON em objeto no JS?",
      opcoes: [
        "JSON.parse()",
        "JSON.stringify()",
        "parseJSON()",
        "stringifyJSON()",
      ],
      respostaCorreta: "JSON.parse()",
    },
    {
      pergunta: "Como passar dados de um componente pai para um filho?",
      opcoes: ["props", "state", "context", "children"],
      respostaCorreta: "props",
    },
    {
      pergunta: "Qual hook evita recriar funções desnecessariamente?",
      opcoes: ["useEffect", "useMemo", "useRef", "useCallback"],
      respostaCorreta: "useCallback",
    },
    {
      pergunta: "Qual comando instala o React Router?",
      opcoes: [
        "npm install react-router-dom",
        "npm install react-router",
        "npm add router-react",
        "npm i router-dom",
      ],
      respostaCorreta: "npm install react-router-dom",
    },
  ];

  const [indice, setIndice] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const verificarResposta = (opcao) => {
    if (opcao === perguntas[indice].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proxima = indice + 1;
    if (proxima < perguntas.length) {
      setIndice(proxima);
    } else {
      setFinalizado(true);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Quiz de React</h1>
      {!finalizado ? (
        <div>
          <h2>
            Pergunta {indice + 1} de {perguntas.length}
          </h2>
          <p>{perguntas[indice].pergunta}</p>
          {perguntas[indice].opcoes.map((opcao, i) => (
            <button
              key={i}
              onClick={() => verificarResposta(opcao)}
              style={{
                display: "block",
                margin: "5px 0",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {opcao}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Quiz finalizado!</h2>
          <p>
            Você acertou {pontuacao} de {perguntas.length} questões.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
