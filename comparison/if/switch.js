//conditional statement
//switch

let role = prompt('what is your role');
switch (role) {
    case 'admin':
        document.write('creater , update , delete');
        
        break;
    case 'moderator':
        document.write('update, delete');

    
        break;
    case 'user':
        document.write(' hello in our website');
        break;
    default:
        document.write('hello');        
}
