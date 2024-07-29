import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators , FormArray, FormGroup} from '@angular/forms';
import { OnSameUrlNavigation } from '@angular/router';
import { from } from 'rxjs';
declare var Swal: any;

@Component({
  selector: 'app-customer-take-surey',
  templateUrl: './customer-take-surey.component.html',
  styleUrls: ['./customer-take-surey.component.css']
})
export class CustomerTakeSureyComponent implements OnInit{

  getData: any;
  takeSurvey: any;
  date: Date;
  survey: any;
  //  takeSurvey = {
  //   sendDate: '2023-07-20',
  //   dept: 'Sales',
  //   deadline: '2023-07-30',
  //   questions: [
  //     { ques: 'Question 1?' },
  //     { ques: 'Question 2?' },
  //     // add more questions as needed
  //   ]
  // };
  
  constructor(private form: FormBuilder) { 
    

    this.date = new Date();
    const formatted=formatDate(this.date,'yyyy-MM-dd','en-US','+0530');
    console.log(formatted);
    this.getData = sessionStorage.getItem('takeSurvey');
    this.takeSurvey = JSON.parse(this.getData);
    console.log(this.takeSurvey);
    
  }


  ngOnInit() {
    this.survey = this.form.group({
      questions: this.form.array([]),
      overAllRemark: ['']
    });

    this.addQuestions();
  }

  get questions(): FormArray {
    return this.survey.get('questions') as FormArray;
  }

  addQuestions() {
    this.takeSurvey.questions.forEach((question: { ques: any; }) => {
      this.questions.push(this.form.group({
        ques: [question.ques],
        answer: ['',Validators.required],
        score: ['', Validators.required],
        remark: ['',Validators.required]
      }));
    });
  }

  submit() {
    if (this.survey.valid) {
      console.log(this.survey.value);
    Swal.fire({
          title: 'Done',
          text: 'Form is completed',
          icon: 'success',
          confirmButtonText: 'okay'
        });
      // Handle form submission here
    } else {
      Swal.fire({
      title: 'Sorry',
      text: 'Form is not complete',
      icon: 'error',
      confirmButtonText: 'check'
    });
    }
  }

  sta(event: any, index: any) {
   let option: string;
    const score = event.target.value;

    switch (score) {
      case '1':
        option = "Strongly Disagree";
        break;
      case '2':
        option = "Disagree";
        break;
      case '3':
        option = "Agree";
        break;
      case '4':
        option = "Strongly Agree";
        break;
      default:
        option = "";
        break;
    }
     this.questions.at(index).get('answer')!.setValue(option);
    this.questions.at(index).get('score')!.setValue(score);
} 

remark(event: any, index: any) {
  this.questions.at(index).get('remark')!.setValue(event.target.value);
}

overAllRemark(event: any) {
  this.survey.get('overAllRemark')!.setValue(event.target.value);
}

}

  // survey = this.form.group({
  //   answer: ['', Validators.required],
  //   remarks: ['', Validators.required],
  //   overAllRemark: ['', Validators.required]
  // })
  // send() { 
  //   console.log(this.survey.controls['answer'].value);
  //   console.log(this.survey.controls['remarks'].value);
  //   console.log(this.survey.controls['overAllRemark'].value);
  // }
  // clickOption(option: any) { 
  //   // console.log(option)
  // }

  // strongDisagree(e:any) {   
  //   console.log("Strongly Dissagree "+e.value);
  // }
  // disagree(e: any) { 
  //   console.log("Disagree " + e.value);
  // }
  // agree(e: any) { 
  //   console.log("Agree " + e.value);
  // }
  // stronglyAgree(e:any) { 
  //   console.log("Strongly Agree " + e.value);
  // }
  // submit( ) { 


  // }

  // sta(e: any) { 
  //   let option;
  //   if (e.value == 1) {
  //     option = "Strongly Disagree"
  //   }
  //   else if (e.value == 2) {
  //     option = "Disagree"
  //   }
  //   else if (e.value == 3) {
  //     option = "Agree"
  //   }
  //   else if (e.value == 4) { 
  //     option = "Strongly Disagree"
  //   }
  //   console.log(option+" "+e.value);
  // }

  // remark(e: any) { 
  //   console.log(e.value);
  // }
  // overAllRemark(e: any) { 
  //   console.log(e.value);
  // }
  // // takeSurvey = {
  // //   questions: [
  // //     { ques: 'Question 1?', answer: '', remark: '' },
  // //     { ques: 'Question 2?', answer: '', remark: '' },
  // //     // Add more questions as needed
  // //   ]
  // // };

  // submitSurvey() {
  //   console.log(this.takeSurvey.questions);
  // }
  

