function arrayShuffle(a) {
    var l = a.length, t, r;
    while (0 !== l) {
        r = Math.floor(Math.random() * l);
        l -= 1;
        t = a[l];
        a[l] = a[r];
        a[r] = t;
    }
    return a;
}

function initialisation(){
    array=arrayShuffle([1,2,3,4,5,6,7,8,9]);


    for (let i = 1; i <10; i++) {
        h=""+i;

        if (array[i-1]!=9){
            document.getElementById(h).innerHTML=array[i-1];
        }
        else {document.getElementById(h).innerHTML="";
            vide=h;
}}}

    taquin.addEventListener('click', function (e) {

            if ((e.target.id ==1 && [2,4].includes(parseInt(vide))) || (e.target.id ==2 && [1,3,5].includes(parseInt(vide)))|| (e.target.id ==3 && [2,6].includes(parseInt(vide)))|| (e.target.id ==4 && [1,5,7].includes(parseInt(vide)))|| (e.target.id ==5 && [2,4,6,8].includes(parseInt(vide)))||(e.target.id ==6 && [3,9,5].includes(parseInt(vide))) ||(e.target.id ==7 && [8,4].includes(parseInt(vide)))|| (e.target.id ==8 && [7,5,9].includes(parseInt(vide)))|| (e.target.id ==9 && [6,8].includes(parseInt(vide))))
            {
                document.getElementById(vide).innerHTML = e.target.textContent;
                vide = e.target.id;
                e.target.innerHTML = "";
            }
    })
