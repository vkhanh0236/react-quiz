export default function Questions({
  data,
  changeHandler,
  question,
}) {
  console.log(data);
  return (
    <>
    <h1>Question {data.id}/{question.length}</h1>
      <div key={data.id}>
        <h1>{data.question}</h1>
        <div>
          <button onClick={(e)=>{changeHandler(e)}}>{data.option1}</button>
          <button onClick={changeHandler}>{data.option2}</button>
          <button onClick={changeHandler}>{data.option3}</button>
          <button onClick={changeHandler}>{data.option4}</button>
        </div>
      </div>
    </>
  );
}
