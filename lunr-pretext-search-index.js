var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Math181-syllabus",
  "level": "1",
  "url": "Math181-syllabus.html",
  "type": "Article",
  "number": "",
  "title": "Fall 2025 Syllabus",
  "body": " Fall 2025 Syllabus  MATH 181            Instructors     Susan Batemen    Chad Gratton    Raymond Jones    Adam Towsley    Olga Tsukernik        Course Description  This is the first in a two-course sequence intended for students majoring in mathematics, science, or engineering. The course includes the same topics as MATH-181, but the focus of the workshop component is different. Whereas workshops attached to 181 emphasize concept development and real-world applications, the workshops of MATH-181A emphasize skill development and provide just-in-time review of precalculus material as needed. The course covers functions, limits, continuity, the derivative, rules of differentiation, applications of the derivative, Riemann sums, definite integrals, and indefinite integrals.     Course Information     Credits  4    TBD  Other things    Instructional modality  In-person      Meeting Times and Locations     Section 24  TTr 8:00AM 9:50AM in ROS-A310    Section 16  TTr 10:00AM 11:50AM in ROS-A310    Section 19  TTr 2:00PM 3:50PM in GOS-2365   >     Learning assistants    Bob  Section 16    Alice  Section 24      Textbook and Other Required Materials     Textbook  Stewart, Calculus, ET, 8e.    WeBWorK  Homework will be given through WeBWorK .    Gradescope  Any written work will be graded and returned using gradescope.       Grading  The grade components and their are all identified above. For quick reference, they are also summarized in the table below.    Component  Weight    Final Exam  25%    3 Preliminary Exams  45%    Quizzes  10%    WeBWorK  10%    Workshops  10%    Grades will be calculated to two decimal places. They will be rounded using standard conventions.     Letter Grade  Range    A  93% 100%    A-  90% 92%    B+  87% 89%    B  83% 86%    B-  80% 82%    C+  77% 79%    C  73% 76%    C-  70% 72%    D  60% 69%    F  0% 59%      Assessments   Exams  Text about exams -- including probably dates and topics  During exams, students will not be allowed to use any notes or electronic devices. Ample space will be provided on the exams for you to show your work. You must bring a writing utensil.    Quizzes  Text about quizzes    Written Homework  Text about written homework    WeBWorK  Text about WeBWorK    Workshops  Text about workshops     Tentative Schedule of Topics     Week 1  Review    Week 2  Limits    Week 3  More limits    Week 4  Continuity    Week 5  I can't remember how long things will take    Week 6  maybe we're doing derivatives?    Week 7  Power rule?    Week 8  other rules?    Week 9  Related rates?    Week 10  optimization?    Week 11  Are we starting Riemann sums yet?    Week 12  more Riemann sums?    Week 13  Power rule for integrals    Week 14  u-sub?    Final Exam   Wednesday 12\/ (4:15 6:45pm)        Academic Integrity  Statement about academic integrity    Wellness  Cut and paste the wellness statement here.    Extra Credit  Every student will have the same opportunities to earn credit in this course via webwork, workshops, quizzes, the project, the preliminary exams and the final exam. There are NO other opportunities to earn credit in this course.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
