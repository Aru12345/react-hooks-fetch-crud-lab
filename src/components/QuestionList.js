import React, { useEffect ,useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions,setQuestions]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then((questions)=>setQuestions(questions))
},[])

function handleDeleteItem(deletedItem) {
 const updatedQuestions = questions.filter((question) => question.id !== deletedItem.id);
  setQuestions(updatedQuestions);
}
function newQuestion(e){
  e.preventDefault()
  const newQuestion={
    question:{
      
    }
  }
}


  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question)=>{
       return  <QuestionItem key={question.id}  onDeleteItem={handleDeleteItem} question={question}/>
      })/* display QuestionItem components here after fetching */}
    </section>
  );
}

export default QuestionList;
