function potencia(base, exponente){
    if(exponente == 0){
        return 1
    }
    else if(exponente > 0){

        return base * potencia(base, (exponente-1))

    }else{

        exponente = -exponente;
        return 1/(base * potencia(base, (exponente-1)))

    }
}



console.log(potencia(3, -2));