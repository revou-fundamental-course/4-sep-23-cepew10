

function hitung(){
        var sisiL, sisiK, L, K; 
        sisiL= parseInt(document.getElementById("inputFieldL").value);
        sisiK = parseInt(document.getElementById("inputFieldK").value);
        L = sisiL * sisiL;
        K = 4 * sisiK;
    
        console.log(L);
        console.log(K);
        document.getElementById("Luas").innerText = L;
        document.getElementById("Keliling").innerText = K;
}
    

