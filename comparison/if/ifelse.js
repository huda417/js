//let num1 = prompt('num1');
//let num2 = prompt('num2');

//if( num2 > num1)
//{console.log('hello user');}
///////////////////////////////////////////////////////////////////


let role = prompt(' what is your role ? ')
if ( role == 'admin')
{
    document.write('update , creata , delete ');

}

else if(role == 'moderator')
{
    document.write('update , delete');
}
else 
{
document.write('hello')
}