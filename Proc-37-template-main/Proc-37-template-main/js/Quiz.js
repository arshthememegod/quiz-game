class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantcount').once("value");
      if(contestantCountRef.exists()){
        contestantcount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
  question.hide()
    //write code to change the background color here
     background("yellow")
    //write code to show a heading for showing the result of Quiz
    text("RESULT OF THE QUIZ",425,50)
    //call getContestantInfo( ) here
   Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
    fill("blue")
    textSize(20)
    text("NOTE: CONTESTANTS WHO ANSWERED CORRECT ARE IN GREEN",250,190)

    var ypos=200
  for(var  plr in allContestants){
    ypos+=20
    var correctAns="2";
    if(correctAns===allContestants[plr].answer)
    fill("green")
  
    else
    fill("red")


    text(allContestants[plr].name+": "+allContestants[plr].answer,200,ypos)
    
  }
  }
  }

}

  
    