// for   if 

let names = [ 'ali', 'ahmed','amr','mohmed',1 ,2 ,4,5,8,'zen']

for(let i = 0 ; i< names.length ; i++)
{
    console.log(names[i])
}
//ali
 //ahmed
 //amr
 //mohmed
 //1
 //2
 //4
 //5
 //8
// zen
//----------------------------------------
for(let i = 0 ; i< names.length ; i++)
{
    if(typeof names[i] == 'number')
    {
        continue;
    }
    console.log(names[i])

}
//  ali  ahmed amr  mohmed  zen

//---------__________________________________------------------

for(let i = 0 ; i< names.length ; i++)
{
    if( names[i] == 'zen')
    {
        continue;
    }
    console.log(names[i])

}
  // كل حاجه هتطبع ما عدل لبعنصر اللي هيتم تحدديه  
  // ولو قمت بتحديد نوع معين من البانات مش هيطبع برضو
  // وتدر كمان تحدد عنصر او نوع ملفات معين واي عنصر مش زي العنصر اللي انت مححده لا يطبع او نوع بيانات اخر غير
// وتقدر كمان تيجي عند عنصر معين وتفرمل متكملش طباعه



//______________________________________________________________

for(let i = 0 ; i< names.length ; i++)
{
    if( names[i] != 'ali')
    {
        continue;
    }
    console.log(names[i])

}
// ali
// العنصر اللي انت حدده بس هو اللي هيتم طباعته 
//______________________________________________________________

let users = ['aa','bb','cc','dd','ee','ff','gg','hh']
for(let j = 0 ; j< users.length ; j++)
{
    if( users[j] == 'ee')
    {
        break;                            // فرامل 
    }
    console.log(users[j])

}
//  aa      bb    cc  dd    فرامل 
