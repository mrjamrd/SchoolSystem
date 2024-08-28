function calPeriodo1(){
    let c1p1 = parseFloat(document.getElementById("c1p1").value) || 0;
    let c1rp1 = parseFloat(document.getElementById("c1rp1").value) || 0;
    let c2p1 = parseFloat(document.getElementById("c2p1").value) || 0;
    let c2rp1 = parseFloat(document.getElementById("c2rp1").value) || 0;
    let c3p1 = parseFloat(document.getElementById("c3p1").value) || 0;
    let c3rp1 = parseFloat(document.getElementById("c3rp1").value) || 0;
    let c4p1 = parseFloat(document.getElementById("c4p1").value) || 0;
    let c4rp1 = parseFloat(document.getElementById("c4rp1").value) || 0;

    let c1p2 = parseFloat(document.getElementById("c1p2").value) || 0;
    let c1rp2 = parseFloat(document.getElementById("c1rp2").value) || 0; 
    let c2p2 = parseFloat(document.getElementById("c2p2").value) || 0;
    let c2rp2 = parseFloat(document.getElementById("c2rp2").value) || 0;
    let c3p2 = parseFloat(document.getElementById("c3p2").value) || 0;
    let c3rp2 = parseFloat(document.getElementById("c3rp2").value) || 0;
    let c4p2 = parseFloat(document.getElementById("c4p2").value) || 0;
    let c4rp2 = parseFloat(document.getElementById("c4rp2").value) || 0;
    let c1p3 = parseFloat(document.getElementById("c1p3").value) || 0;
    let c1rp3 = parseFloat(document.getElementById("c1rp3").value) || 0;
    let c2p3 = parseFloat(document.getElementById("c2p3").value) || 0;
    let c2rp3 = parseFloat(document.getElementById("c2rp3").value) || 0;
    let c3p3 = parseFloat(document.getElementById("c3p3").value) || 0;
    let c3rp3 = parseFloat(document.getElementById("c3rp3").value) || 0;
    let c3p4 = parseFloat(document.getElementById("c4p3").value) || 0;
    let c3rp4 = parseFloat(document.getElementById("c4rp3").value) || 0;

    let c1p4 = parseFloat(document.getElementById("c1p4").value) || 0;
    let c1rp4 = parseFloat(document.getElementById("c1rp4").value) || 0;
    let c2p4 = parseFloat(document.getElementById("c2p4").value) || 0;
    let c2rp4 = parseFloat(document.getElementById("c2rp4").value) || 0;
    let c4p4 = parseFloat(document.getElementById("c4p4").value) || 0
    let c4rp4 = parseFloat(document.getElementById("c4rp4").value) || 0

    
    let resultado1 = (c1p1 + c1rp1)+(c2p1 + c2rp1)+(c3p1 + c3rp1)+(c4p1 + c4rp1)
    resultado1 = resultado1 /4
    document.getElementById("resultado1").innerHTML = resultado1 ;

    let resultado2 = (c1p2 + c1rp2)+(c2p2 + c2rp2)+(c3p2 + c3rp2)+(c4p2 + c4rp2)
    resultado2 = resultado2 / 4
    document.getElementById("resultado2").innerHTML = resultado2 ;

    let resultado3 = (c1p3 + c1rp3)+(c2p3 + c2rp3)+(c3p3 + c3rp3)+(c3p4 + c3rp4)
    resultado3 = resultado3 / 4
    document.getElementById("resultado3").innerHTML = resultado3 ;

    let resultado4 = (c1p4 + c1rp4) + (c2p4 + c2rp4)+ (c3p4 + c3rp4)+ (c4p4 + c4rp4);
    resultado4 = resultado4 / 4
    console.log(resultado4)
    document.getElementById("resultado4").innerHTML = resultado4;

}


