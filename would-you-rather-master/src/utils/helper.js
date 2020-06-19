export default function checkQuestions(question, authedUser) {
    
    if (
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser)
    ) {

      return true;
    }
}