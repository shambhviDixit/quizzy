class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(600, 0);

    this.question.html("Question:- What Kind Of Room Has No Windows Or Doors? " );
    this.question.position(150, 80);
    this.option1.html("1: Drawingroom " );
    this.option1.position(150, 130);
    this.option2.html("2: Mushroom" );
    this.option2.position(150, 180);
    this.option3.html("3: Bedroom " );
    this.option3.position(150, 230);
    this.option4.html("4: Bathroom" );
    this.option4.position(150, 280);

    this.input1.position(150, 430);
    this.input2.position(450, 430);
    this.button.position(270, 460);
    this.button2.position(450, 460);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
