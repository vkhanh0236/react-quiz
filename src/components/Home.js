import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Question from "./Questions";
import { getQuestion } from "./Api";
function Home() {
  const [question, setQuestion] = useState([{}]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const history = useHistory();
  const [point, setPoint] = useState(0);

  useEffect(() => {
    async function fecthData() {
      const questions = await getQuestion();
      setQuestion(questions);
    }
    fecthData();
  }, []);
  const changeHandler = (e) => {
    setActiveQuestion(activeQuestion + 1);
    if (e.target.innerText === question[activeQuestion].answer) {
      setPoint(point + 1);
      localStorage.setItem("point", point + 1);
      console.log(11)
    }
    if (activeQuestion + 1 >= question.length) {
      history.push("/result");
    }
  };
  return (
    <>
      <Question
        data={question[activeQuestion]}
        question={question}
        changeHandler={changeHandler}
      />
    </>
  );
}

export default Home;
