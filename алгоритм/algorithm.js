function first(numb){
    var number = numb;
    if(Math.floor(number / 2) == number / 2) {
        //Чётное
        return false;
    }else{
        //Нечётное
        return true;
    }
}