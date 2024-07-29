import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-survey',
  templateUrl: './admin-survey.component.html',
  styleUrls: ['./admin-survey.component.css']
})
export class AdminSurveyComponent {
  Questions: any;
  value: any = 0;
  selectedOptions: any[] = [];
  addQuestion: any;
  all: any;
  ques: any;
  employee: any;
  selectedSupplier: any;
  selectedQuestions: any;
  getDepartment: any;
  customerdetails: any;
  supplierdetails: any;
  getQuestion: any;
  customerquestion: any;
  suppliequestion: any;
  dummy: any = [];
  questionArray: any = [];
  index = 0;
  mani: any = [];
  Employee = []; 
  createQuestion: any;
  selectedEmpCode: string = '';
  selectedDept: string = '';
  formBuilder: any;
  constructor(private http: HttpClient, private form: FormBuilder, private route: Router) {
    
    http.get<any>('http://localhost:3000/Questionnaire').subscribe((get) => {
      this.Questions = get;
      // console.log(this.Questions);
      // for (var i = 0; i < this.Questions.length; i++){
      //   for (var j = 0; j < this.Questions[i].question.length; j++){
      //     console.log(this.Questions[i].question[j].ques);
      //     let store = ;
      //     `${this.questionArray}+this.index[j]`= this.Questions[i].question[j].ques;
      //   }
      //   // console.log(`questionArray${this.index}`);
      //   console.log(store);
      //   this.index++;
      // }
      for (let i = 0; i < this.Questions.length; i++){
        this.dummy[i] = this.Questions[i].question;
        for (let j = 0; j< this.dummy[i].length; j++){
          this.questionArray[this.index++] = this.dummy[i][j];
        }
      }

      // console.log(this.questionArray);
    });
    http.get<any>('http://localhost:3000/employee').subscribe((emp) => { 
      this.employee = emp;
      console.log(this.employee);
    })
    
this.createQuestion = this.form.group({
      question: ['', Validators.required],
      empCode: ['', Validators.required]
    });
  }
 
  newQuestion() {
    if (!this.selectedDept) {
      console.error('Department not selected');
      return;
    }

    const questionData = {
      ques: this.createQuestion.controls['question'].value,
      dept: this.selectedDept
    };

    console.log(questionData);

    this.http.post<any>('http://localhost:3000/Questionnaire', questionData).subscribe((post) => {
      console.log("Post successfully");
      window.location.reload();
    });
  }

  selectnewquestion(empCode: string) {
    this.selectedEmpCode = empCode;
    this.selectedDept = this.findDepartmentByEmpCode(empCode);
  }

  findDepartmentByEmpCode(empCode: string): string {
    for (const item of this.employee) {
      if (item.Emp_code === empCode) {
        return item.Dept; // Assuming Dept is where department info is stored
      }
    }
    return ''; // Default department if not found
  }

  createQuestions() {
    const newQuestionDiv = document.getElementById('newQuestion');
    if (newQuestionDiv) {
      newQuestionDiv.style.display = 'block';
    }
    const allDiv = document.getElementById('all');
    if (allDiv) {
      allDiv.style.filter = 'blur(10px)';
    }
  }

  back() {
    const newQuestionDiv = document.getElementById('newQuestion');
    if (newQuestionDiv) {
      newQuestionDiv.style.display = 'none';
    }
    const allDiv = document.getElementById('all');
    if (allDiv) {
      allDiv.style.filter = 'none';
    }
  }

  strongDisagree(e:any) {   
    console.log("Strongly Dissagree "+e.value);
  }
  disagree(e: any) { 
    console.log("Disagree " + e.value);
  }
  agree(e: any) { 
    console.log("Agree " + e.value);
  }
  stronglyAgree(e:any) { 
    console.log("Strongly Agree " + e.value);
  }
  

  selectquestion(department: any) {
    // console.log(qus);
    // this.selectedOptions = [qus];
    console.log(this.Questions[0].dept);
    this.index = 0;
    this.mani = this.questionArray;
    if (department === 'all') {
      this.questionArray = this.mani;
    }
    else {
      this.questionArray = [];
    for (let i = 0; i < this.Questions.length;i++){
      if (this.Questions[i].dept === department) {
        console.log(this.dummy[i]);
        for (let j = 0; j < this.dummy[i].length; j++){
          this.questionArray[this.index++] = this.dummy[i][j];
        }
      }
    }
    }
    
    console.log(this.questionArray);
    let supplier = department;
    this.http.get<any>('http://localhost:3000/employee').subscribe((get) => {

      this.getDepartment = get.find((supplier: any) => {
        console.log(supplier);

        this.supplierdetails = supplier.Emp_customer;
        
        return department === supplier.Emp_code;
      })
      if (this.getDepartment) {
        this.customerdetails = this.supplierdetails;
        console.log(this.customerdetails);
      }
      

      // console.log(this.getDepartment);
      
      
    });

    this.http.get<any>('http://localhost:3000/Questionnaire').subscribe((get) => { 
      this.getQuestion = get.find((question: any) => {
        this.suppliequestion = question.ques;
        return supplier === question.dept;
      })
      if (this.getQuestion) { 
        this.customerquestion = this.suppliequestion;
        console.log(this.customerquestion);


      }

    })



    



  }

  questionADisplay(item:any) {
    return item.question;
  }

  selectedquestion(question: any , supplier:any) { 

    if (this.selectedOptions.length > 0) {
      this.selectedOptions.push({ question,supplier });
      console.log(this.selectedOptions);
      sessionStorage.setItem('questions', JSON.stringify(this.selectedOptions));
      
    }

    else {
      console.log("no length");
      this.selectedOptions = [{
        question: question,
        supplier:supplier
      }]
    }


  }

  searchQuestion(input:any) {
    // console.log(this.Questions[0]);

    const store = this.Questions.map((mapped:any) => {
      console.log(mapped);
      const mapQuestion = mapped.question;
      const result = mapQuestion.filter((filtered: any) => {
        // console.log(input.includes(filtered.ques));
        if (input.includes(filtered.ques))
          return filtered.ques;
      })
      console.log(result);
    })

    // for (var i = 0; i < this.Questions.length; i++){
    //   const result = (this.Questions[i].question).filter((items: any) => {
    //     console.log(items);
    //     return items;
    //   });
      
    // }

    // console.log(result);
  }
 
  send() { 
    console.log(this.selectedOptions);
    const questionID = { select: this.selectedOptions };
    console.log(questionID);
    sessionStorage.setItem('questionID', JSON.stringify(questionID));
    console.log(sessionStorage.getItem('questions'));
    const questionsend = sessionStorage.getItem('questions')
    console.log(questionsend);
    this.http.post<any>('http://localhost:3000/employee', questionID).subscribe((get) => { 
      console.log(get);
    })
    

    


 }

}
