function student_details(n,r,c,s,sub1,sub2,sub3,sub4,sub5){
    this.name = n;
    this.roll_no = r;
    this.class = c;
    this.section = s;
    this.science = sub1;
    this.maths= sub2;
    this.social_science= sub3;
    this.english= sub4;
    this.hindi= sub5;
    let print=function printReportCard(){
        
    }
    let top3 =function printTop3Subjects(){

    }
}




let student1 = new student_details('vatsal',12,'10th','c',1,3,4,5,3)
console.log(student1)

