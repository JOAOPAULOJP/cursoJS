// função

 const numero1 = Number(prompt("Digite o primeiro numero"));
 const numero2 = Number(prompt("Digite o segundo numero"));
 
 const resultado = document.querySelector("#resultado")

//  function somar(n1, n2){
//     return n1 + n2;
//  }


// Arrow function     ---------------------------------

    // const somar = (n1,n2) => {
    //     return n1 + n2;
    // }

    const somar = (n1,n2) => n1 + n2;

// xxxxxxxxxxx  ---------------------------------------


const calcular = somar(numero1,numero2);
resultado.innerHTML = calcular;