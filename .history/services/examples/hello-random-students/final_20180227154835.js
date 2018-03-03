var fs = require('fs');
var terminal = require( 'terminal-kit' ).terminal ;

class studentService{
    getWinner(){
        const allStudents = fs.readFile('./students.txt', 'utf-8' ,function(error, data){
            console.log(data);
            const studentsArray = data.split(';');
            terminal.drawImage( "http://www.freeiconspng.com/uploads/good-morning-png-13.png" , ()=>{
            }) 
            studentsArray.forEach(student => {
                console.log(`Good morning ${student}`)
            });
        })
    }
}

new studentService().getWinner();

module.exports.studentService = studentService;
module.exports.number = 1;