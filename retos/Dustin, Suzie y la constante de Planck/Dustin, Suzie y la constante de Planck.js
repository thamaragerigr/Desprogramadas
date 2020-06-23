const constanteDePlanck = 6.62607015;
const input = document.querySelector('.input').value;


//Mid-Level 
const esLaConstanteCorrecta = function() {
    if (constanteDePlanck === input) return true
    return false
}

//Pro
const esLaConstanteCorrecta2 = () => (constanteDePlanck === input) ? true : false