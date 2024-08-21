
// Prend en argument une liste de deplacements ( les positions), un type de pièce et regarde si les mouvements normaux
// sont bloqués Retourne la list des positions non bloque
function pos_non_Bloque_pion(List_position){
    var piece_plateau = Allpiece_position()
    if( List_position.length == 1 ){
        if (piece_plateau.includes(List_position[0])){
            return Array()
        }
        else{
            return List_position
        }}
    else{
        var indexPbloque = Array()
        // length == 2
        for(x of List_position){
            if (piece_plateau.includes(x)){
                indexPbloque.push(List_position.indexOf(x))
            }}
        const byValue = (a,b) => a - b;
        indexPbloque.sort(byValue)
        if (indexPbloque.length == 0){
            return List_position
        }
        else{
            return List_position.slice(0,indexPbloque[0])
        }}}
function pos_non_bloque_knight(List_position,Jcolor){
    var piece_plateau = Allpiece_position()
    var pos_non_bloque = Array()
    var pos_mang = Array()
    for (x of List_position){
        if (!piece_plateau.includes(x)){
            pos_non_bloque.push(x)
        }
        else{
            if (piece_at_this_position(x).name[0]!=Jcolor){
                pos_mang.push(x)
            }

        }
    }
    return Array(pos_non_bloque,pos_mang)
}
function pos_non_bloque_4l(Array_Position,Jcolor,b = true){
    var pos_mangeable = Array()
    var pos_non_bloque = Array()
    var posEchec = Array()
    var piece_plateau = Allpiece_position()
    var indexPbloque1 = Array()
    var indexPbloque2 = Array()
    var indexPbloque3 = Array()
    var indexPbloque4 = Array()
    var posmang
    for(x of Array_Position[0]){
        if (piece_plateau.includes(x)){
            indexPbloque1.push(Array_Position[0].indexOf(x))
        }}
    for(x of Array_Position[1]){
        if (piece_plateau.includes(x)){
            indexPbloque2.push(Array_Position[1].indexOf(x))
        }}
    for(x of Array_Position[2]){
        if (piece_plateau.includes(x)){
            indexPbloque3.push(Array_Position[2].indexOf(x))
        }}
    for(x of Array_Position[3]){
        if (piece_plateau.includes(x)){
            indexPbloque4.push(Array_Position[3].indexOf(x))
        }}
    const byValue = (a,b) => a - b;
    indexPbloque1.sort(byValue)
    indexPbloque2.sort(byValue)
    indexPbloque3.sort(byValue)
    indexPbloque4.sort(byValue)

    if(b){
        if (indexPbloque1.length == 0){
            Array_Position[0].forEach(x => pos_non_bloque.push(x))
        }
        else{
            Array_Position[0].slice(0,indexPbloque1[0]).forEach(x => pos_non_bloque.push(x))
            posmang = Array_Position[0].find(elt => Array_Position[0].indexOf(elt)==indexPbloque1[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor){
                pos_mangeable.push(posmang)
            }
        }
        if (indexPbloque2.length == 0){
            Array_Position[1].forEach(x => pos_non_bloque.push(x))
        }
        else{
            Array_Position[1].slice(0,indexPbloque2[0]).forEach(x => pos_non_bloque.push(x))
            posmang = Array_Position[1].find(elt => Array_Position[1].indexOf(elt)==indexPbloque2[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor){
                pos_mangeable.push(posmang)
            }
        }
        if (indexPbloque3.length == 0){
            Array_Position[2].forEach(x => pos_non_bloque.push(x))
        }
        else{
            Array_Position[2].slice(0,indexPbloque3[0]).forEach(x => pos_non_bloque.push(x))
            posmang = Array_Position[2].find(elt => Array_Position[2].indexOf(elt)==indexPbloque3[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor){
                pos_mangeable.push(posmang)
            }
        }
        if (indexPbloque4.length == 0){
            Array_Position[3].forEach(x => pos_non_bloque.push(x))
        }
        else{
            Array_Position[3].slice(0,indexPbloque4[0]).forEach(x => pos_non_bloque.push(x))
            posmang = Array_Position[3].find(elt => Array_Position[3].indexOf(elt)==indexPbloque4[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor) {
                pos_mangeable.push(posmang)
            }
        }
        return Array(pos_non_bloque,pos_mangeable)

    }

    else{
        if (indexPbloque1.length != 0){
            posmang = Array_Position[0].find(elt => Array_Position[0].indexOf(elt)==indexPbloque1[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor){
                posEchec.push(Array(Array_Position[0].slice(0,indexPbloque1[0]),posmang))
            }
        }
        if (indexPbloque2.length != 0){
            posmang = Array_Position[1].find(elt => Array_Position[1].indexOf(elt)==indexPbloque2[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor){
                posEchec.push(Array(Array_Position[1].slice(0,indexPbloque2[0]),posmang))
            }
        }
        if (indexPbloque3.length != 0){
            posmang = Array_Position[2].find(elt => Array_Position[2].indexOf(elt)==indexPbloque3[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor){
                posEchec.push(Array(Array_Position[2].slice(0,indexPbloque3[0]),posmang))
            }
        }
        if (indexPbloque4.length != 0){
            posmang = Array_Position[3].find(elt => Array_Position[3].indexOf(elt)==indexPbloque4[0])
            if (piece_at_this_position(posmang).name[0]!=Jcolor) {
                posEchec.push(Array(Array_Position[3].slice(0,indexPbloque4[0]),posmang))
            }
        }
        return posEchec
    }
}
function pos_manger_pion(List_position,Jcolor){
    var mouvement_manger = Array()
    if (Jcolor == 'w'){
        var Blackpiece_plateau = AllpieceBlack_position()
        for (x of List_position){
            let y=x[0]+(x[1]-1).toString();
            if(Blackpiece_plateau.includes(x)){
                mouvement_manger.push(x)
            }
            else if (Blackpiece_plateau.includes(y) && piece_at_this_position(y).name=='bp'&& (Game[Game.length-1][2]+5==y)){
                mouvement_manger.push(x)

            }
        }
    }
    else{
        var Whitepiece_plateau = AllpieceWhite_position()
        for (x of List_position){
            let y=x[0]+(x[1]-(-1)).toString();
            if(Whitepiece_plateau.includes(x)){
                mouvement_manger.push(x)
            }
            else if (Whitepiece_plateau.includes(y) && piece_at_this_position(y).name=='wp'&& (Game[Game.length-1][2]+4==y)){
                mouvement_manger.push(x)
            }
        }
    }
    return mouvement_manger;
}
function pos_non_bloque_roi(List_position,Acolor){
    var pieceAdversaire
    var king
    var kingAdv
    var memPosKing
    if (Acolor == 'w'){
        pieceAdversaire = AllpieceWhite_position()
        king = Bpiece[5][0]
        kingAdv = Wpiece[5][0]
    }
    else{
        pieceAdversaire = AllpieceBlack_position()
        king = Wpiece[5][0]
        kingAdv = Bpiece[5][0]
    }
    memPosKing = king.pos
    king.pos =''
    var Allposmouv = All_mouv(Acolor,false)[0] // PREND en compte tout les deplacements sauf les pions
    var Allmangmouv = All_mouv(Acolor,false,false)[1]
    var allAttackPion = All_attack_pion(Acolor)// Prendre en compte les pions qui attaque en diag piece.Manger()
    var piece_plateau = Allpiece_position()
    var Mouv_nonbloque = Array()
    var Mang_nonbloque = Array()
    for (x of List_position){

        if (! Allposmouv.includes(x) && ! piece_plateau.includes(x) && ! allAttackPion.includes(x) && ! kingAdv.Mouv().includes(x)){
            Mouv_nonbloque.push(x)
        }
        else if (pieceAdversaire.includes(x) && ! Allmangmouv.includes(x) && ! allAttackPion.includes(x) && ! kingAdv.Mouv().includes(x)){
            Mang_nonbloque.push(x)
        }
    }
    king.pos = memPosKing
    return Array(Mouv_nonbloque,Mang_nonbloque)
}
function rock_verif(Jcolor){
    var posRockKing = Array()
    var posRockRook = Array()
    var verifG = true
    var verifP = true
    var posPetitrock
    var posGrandrock
    var Acolor
    var Jpieces

    if (Jcolor =='w'){
        Acolor = 'b'
        Jpieces = Wpiece
        posGrandrock = Array('c1','d1','b1')
        posPetitrock = Array('g1','f1')
    }
    else{
        Acolor = 'w'
        Jpieces = Bpiece
        posGrandrock = Array('c8','d8','b8')
        posPetitrock = Array('g8','f8')
    }

    var Allposmouv = All_mouv(Acolor,false)[0] // PREND en compte tout les deplacements sauf les pions
    var allAttackPion = All_attack_pion(Acolor)// Prendre en compte les pions qui attaque en diag piece.Manger()
    var piece_plateau = Allpiece_position()

    // king prend Array[0] et tour Array[1]

    if (Jpieces[1][0].rock){
        posGrandrock.forEach(function (x){
            if ( piece_plateau.includes(x) ||  Allposmouv.includes(x) ||  allAttackPion.includes(x)){
                verifG = false
            }
        })
    }
    else{
        verifG = false
    }
    if (Jpieces[1][1].rock){
        posPetitrock.forEach(function (x){
            if ( piece_plateau.includes(x) ||  Allposmouv.includes(x) ||  allAttackPion.includes(x)){
                verifP = false
            }
        })
    }
    else{verifP = false}
    if (verifG){
        posRockKing.push(posGrandrock[0])
        posRockRook.push(posGrandrock[1])
    }
    if (verifP){
        posRockKing.push(posPetitrock[0])
        posRockRook.push(posPetitrock[1])
    }
    return Array(posRockKing,posRockRook)
}
function All_attack_pion(Jcolor){
    var All_attack = Array()
    var Mespieces
    if (Jcolor == 'w') {
        Mespieces = Wpiece[0]
    } else {
        Mespieces = Bpiece[0]
    }
    Mespieces.forEach(x=>All_attack = All_attack.concat(x.Manger()))
    return All_attack
}
function All_mouv(Jcolor, b = true, color = true) {

    var AllposMouv = Array()
    var AllposMang = Array()
    var Mespieces
    var colorMang
    var Acolor
    if (Jcolor == 'w') {
        Mespieces = Wpiece
        Acolor = 'b'
    } else {
        Mespieces = Bpiece
        Acolor = 'w'
    }
    if (color){
        colorMang = Jcolor
    }
    else{
        colorMang = Acolor
    }

    for (t of Mespieces) {
        t.forEach(function (x) {
            if (x.name[1] == 'p' && b) {
                AllposMouv = AllposMouv.concat(pos_non_Bloque_pion(x.Mouv()))
                AllposMang = AllposMang.concat(pos_manger_pion(x.Manger(),colorMang))
            } else if (x.name[1] == 'r') {
                AllposMouv = AllposMouv.concat(pos_non_bloque_4l(x.Mouv(),Jcolor)[0])
                AllposMang = AllposMang.concat(pos_non_bloque_4l(x.Mouv(),colorMang)[1])

            } else if (x.name[1] == 'n') {
                AllposMouv = AllposMouv.concat(pos_non_bloque_knight(x.Mouv())[0])
                AllposMang = AllposMang.concat(pos_non_bloque_knight(x.Mouv(),colorMang)[1])
            } else if (x.name[1] == 'b') {
                AllposMouv = AllposMouv.concat(pos_non_bloque_4l(x.Mouv(),Jcolor)[0])
                AllposMang = AllposMang.concat(pos_non_bloque_4l(x.Mouv(),colorMang)[1])
            } else if (x.name[1] == 'q') {
                AllposMouv = AllposMouv.concat(pos_non_bloque_4l(x.Mouv()[0], Jcolor)[0].concat(pos_non_bloque_4l(x.Mouv()[1], Jcolor)[0]))
                AllposMang = AllposMang.concat(pos_non_bloque_4l(x.Mouv()[0], colorMang)[1].concat(pos_non_bloque_4l(x.Mouv()[1], colorMang)[1]))
            } else if(x.name[1] == 'k') {

                //AllposMouv = AllposMouv.concat(pos_non_bloque_roi(x.Mouv(),Acolor)[0])
                //AllposMang = AllposMang.concat(pos_non_bloque_roi(x.Mouv(),Acolor)[1])
            }
        })
    }
    return Array(AllposMouv, AllposMang)
}
function Mouvement_autorise_en_echec(mouvAuto,Jcolor){
    var mouvAutoAtteignable = Array()
    var Allposmouv = All_mouv(Jcolor)[0]
    for (x of Allposmouv) {
        if (mouvAuto.includes(x)){
            mouvAutoAtteignable.push(x)
        }
    }
    return mouvAutoAtteignable
}
function Manger_autorise_en_echec(mangAuto,Jcolor){
    var mangAutoAtteignable = Array()
    var Allposmouv = All_mouv(Jcolor)[1]
    for (x of Allposmouv) {
        if (mangAuto.includes(x)){
            mangAutoAtteignable.push(x)
        }
    }
    return mangAutoAtteignable
}
function eche_atk(Jcolor,test = false){
    var kingAdv
    var Mespieces
    var Pos_piece_met_en_echec = Array()
    var colorAdv
    if (Jcolor == 'w'){
        kingAdv = Bpiece[5][0]
        Mespieces = Wpiece
        colorAdv = 'b'
    }
    else{
        kingAdv = Wpiece[5][0]
        Mespieces = Bpiece
        colorAdv = 'w'
    }

    // prendre en considération que le mouvement d'un pion peut débloquer la case d'un bishop etc ++ double echec
    var rook_fictif = new r()
    var knight_fictif = new n()
    var bishop_fictif = new b()
    var pawn_fictif = new p()
    var queen_fictif = new q()
    var posmang_rook
    var posmang_knight
    var posmang_bishop
    var posmang_pawn
    var posmang_queen
    rook_fictif.pos = kingAdv.pos
    knight_fictif.pos = kingAdv.pos
    bishop_fictif.pos = kingAdv.pos
    pawn_fictif.pos = kingAdv.pos
    pawn_fictif.name = colorAdv
    queen_fictif.pos = kingAdv.pos


    posmang_rook = pos_non_bloque_4l(rook_fictif.Mouv(),colorAdv,false)
    posmang_bishop = pos_non_bloque_4l(bishop_fictif.Mouv(),colorAdv,false)
    posmang_knight = pos_non_bloque_knight(knight_fictif.Mouv(),colorAdv)[1]
    posmang_pawn = pawn_fictif.Manger()
    posmang_queen = pos_non_bloque_4l(queen_fictif.Mouv()[0],colorAdv,false).concat(pos_non_bloque_4l(queen_fictif.Mouv()[1],colorAdv,false))


    for (x of posmang_rook){
        Mespieces[1].forEach(function (t){
            if (t.pos == x[1]){
                Pos_piece_met_en_echec.push(Array(x[0],x[1]))
            }
        })
    }

    for (x of posmang_bishop){
        Mespieces[3].forEach(function (t){
            if (t.pos == x[1]){
                Pos_piece_met_en_echec.push(Array(x[0],x[1]))
            }
        })
    }
    for (x of posmang_knight){
        Mespieces[2].forEach(function (t){
            if (t.pos == x){
                Pos_piece_met_en_echec.push(Array(Array(),x))
            }
        })
    }
    for (x of posmang_pawn){

        Mespieces[0].forEach(function (t){
            if (t.pos == x){
                Pos_piece_met_en_echec.push(Array(Array(),x))
            }
        })
    }
    for (x of posmang_queen){
        Mespieces[4].forEach(function (t){
            if (t.pos == x[1]){
                Pos_piece_met_en_echec.push(Array(x[0],x[1]))
            }
        })
    }


    if (!test){
        if (Pos_piece_met_en_echec.length == 1){

            kingAdv.echec = true
            kingAdv.AnimationenEchec()
            kingAdv.mouvAutoEnechec = Pos_piece_met_en_echec[0][0]
            kingAdv.pieceAmanger = Pos_piece_met_en_echec[0][1]
        }
        else if (Pos_piece_met_en_echec.length > 1){

            kingAdv.echec = true
            kingAdv.AnimationenEchec()
            kingAdv.DoitBouger = true
            //pos_non_bloque_roi(x.Mouv(),Acolor)[0]
        }

    }
    else{
        if (Pos_piece_met_en_echec.length == 1){
            return Array(true,false)
        }
        else if (Pos_piece_met_en_echec.length > 1){
            return Array(true,true)
        }
    }
    // Si y a plus de 2 piece qui mettent en echec directement renvoyer que c que le roi qui peut jouer
}
//Recupere la positon de toutes les pieces
function Allpiece_position(){
    var piece = Array()
    for (t of Wpiece){
        t.forEach(x => piece.push(x.pos))
    }
    for (t of Bpiece){
        t.forEach(x => piece.push(x.pos))
    }
    return piece;
}
function Allvide_position(){
    var vide_pos = Array()
    var allpos = Allpiece_position()
    var Vide_elt = document.getElementsByClassName("grid-item")
    for (x of Vide_elt) {
        if (!allpos.includes(x.id)) {
            vide_pos.push(x)
        }
    }
    return vide_pos;
}
//Recupere la positon de toutes les pieces Noires
function AllpieceBlack_position(){
    var piece = Array()
    for (t of Bpiece){
        t.forEach(x => piece.push(x.pos))
    }
    return piece;
}
//Recupere la positon de toutes les pieces Blanches
function AllpieceWhite_position(){
    var piece = Array()
    for (t of Wpiece){
        t.forEach(x => piece.push(x.pos))
    }
    return piece;
}
function AffichageCaseJouable(CaseJouablePosition){
    var Element_case_jouable = Element_at_position(CaseJouablePosition)
    for ( x of Element_case_jouable){
        x.style.backgroundImage = "url(/images/caseAccess.png)"
    }
}
function DesaffichageCaseJouable(){

    var Element_case_jouable = Allvide_position()
    for ( x of Element_case_jouable){
        x.style.backgroundImage = ""
    }
}
function AffichageCasemangable(CaseJouablePosition){
    var Element_case_jouable = Element_at_position(CaseJouablePosition)
    for ( x of Element_case_jouable){
        x.classList.add('case_mangeable');
    }
}
function DesaffichageCasemangable(CaseJouablePosition,pieceselection){
    var PieceSel = pieceselection
    var Element_case_jouable = Element_at_position(CaseJouablePosition)
    for ( x of Element_case_jouable){
        if(x!=pieceselection) {
            x.classList.remove('case_mangeable');
        }
    }
}
// Function renvoie la piece situé à une certaine position
function piece_at_this_position(position){
    var piece
    for (t of Wpiece){
        t.forEach(function(x){
            if (x.pos == position){
                piece = x;
            }
        })
    }
    for (t of Bpiece){
        t.forEach(function(x){
            if (x.pos == position){
                piece = x;
            }
        })
    }
    return piece;

}
// Renvoie l'ensemble des balises au position donné
function Element_at_position(List_position){
    var Emplacement = Array()
    for ( x of List_position){
        Emplacement.push(document.getElementById(x))
    }
    return Emplacement;
}
function Mvt_vraiment_pos( Mouvementnonbloque2, Manger_possible2,MemPos,Acolor,Jcolor) {
    Mouvementnonbloque = Array()
    Manger_possible = Array()
    for (posi of Mouvementnonbloque2) {
        PieceSelectionne.pos = posi
        if (!All_mouv(Acolor[0])[1].includes(Jcolor[1][5][0].pos)) {
            Mouvementnonbloque.push(posi);
        }
        PieceSelectionne.pos = MemPos
    }
    for (posi2 of Manger_possible2) {
        piece=piece_at_this_position(posi2)
        PieceSelectionne.pos = posi2;
        //pour la prise en passant
        if (piece==undefined) {
            if (posi2[1] == 6) {
                posi2 = posi2[0] + 5
            } else if (posi2[1] == 3) {
                posi2 = posi2[0] + 4
            }
            piece=piece_at_this_position(posi2)
        }
        piece.pos=''

        if (!All_mouv(Acolor[0])[1].includes(Jcolor[1][5][0].pos)) {
            Manger_possible.push(PieceSelectionne.pos);
        }
        PieceSelectionne.pos = MemPos
        piece.pos=posi2
    }
    return [Mouvementnonbloque,Manger_possible]
}
class p {
    constructor(pos) {
        this.name = '';
        this.pos = '';
    }

    promotion_cond(){
        if (this.name[0] == 'w'){
            if (this.pos[1] == 8){
                return true
            }
            else{
                return false
            }
        }
        else{
            if (this.pos[1] == 1){
                return true
            }
            else{
                return false
            }
        }
    }
    promotion(piece){

    }
    MouvSound(){
        document.getElementById("moov").play()
    }
    EatSound(){
        document.getElementById("eat").play()
    }
    affichage(){
        document.getElementById(this.pos).style.backgroundImage = 'url(' +'/images/'+ this.name + '.png)'
        document.getElementById(this.pos).style.backgroundRepeat = 'no-repeat'
    }
    destroy(){
        document.getElementById(this.pos).style.backgroundImage = ''
    }
    selection(){
        document.getElementById(this.pos).style.backgroundColor = '#3FB0E1'
    }
    deselection(){
        document.getElementById(this.pos).style.backgroundColor = ''
    }
    Mouv(){
        var mouv = Array()
        if (this.pos[1] == '2' && this.name[0] == 'w'){
            mouv.push(this.pos[0]+'3')
            mouv.push(this.pos[0]+'4')
        }
        else if (this.pos[1] == '7' && this.name[0] == 'b'){
            mouv.push(this.pos[0]+'6')
            mouv.push(this.pos[0]+'5')
        }
        else{
            if (this.name[0]=='w'){
                mouv.push(this.pos[0]+(+parseFloat(this.pos[1])+1))
            }
            else{
                mouv.push(this.pos[0]+(+parseFloat(this.pos[1])-1))
            }
        }
        return mouv
        // si au bout on peut upgrade en queen
    }
    meurt(){
        this.destroy()
        this.pos = ''
    }
    Manger(){
        // mouvement du pion pour manger
        var mang = Array()
        if (this.pos[0] == 'a' && this.name[0] == 'w'){
            mang.push('b'+(+parseFloat(this.pos[1])+1))
        }
        else if (this.pos[0] == 'h' && this.name[0] == 'w'){
            mang.push('g'+(+parseFloat(this.pos[1])+1))
        }
        else if (this.pos[0] == 'a' && this.name[0] == 'b'){
            mang.push('b'+(+parseFloat(this.pos[1])-1))
        }
        else if (this.pos[0] == 'h' && this.name[0] == 'b'){
            mang.push('g'+(+parseFloat(this.pos[1])-1))
        }
        else{
            if (this.name[0]=='w'){
                mang.push(cooX[cooX.indexOf(this.pos[0])+1]+(+parseFloat(this.pos[1])+1))
                mang.push(cooX[cooX.indexOf(this.pos[0])-1]+(+parseFloat(this.pos[1])+1))
            }
            else{
                mang.push(cooX[cooX.indexOf(this.pos[0])+1]+(+parseFloat(this.pos[1])-1))
                mang.push(cooX[cooX.indexOf(this.pos[0])-1]+(+parseFloat(this.pos[1])-1))
            }
        }
        return mang;
    }
}
class r {
    constructor(pos) {
        this.name = '';
        this.pos = '';
        this.rock = Boolean();
    }
    RookRock(posKing){

    }
    MouvSound(){
        document.getElementById("moov").play()
    }
    EatSound(){
        document.getElementById("eat").play()
    }
    affichage(){
        document.getElementById(this.pos).style.backgroundImage = 'url('+'/images/' + this.name + '.png)'
        document.getElementById(this.pos).style.backgroundRepeat = 'no-repeat'
    }
    destroy(){
        document.getElementById(this.pos).style.backgroundImage = ''
    }
    selection(){
        document.getElementById(this.pos).style.backgroundColor = '#3FB0E1'
    }
    deselection(){
        document.getElementById(this.pos).style.backgroundColor = ''
    }
    Mouv(){
        var mouv = Array()
        var haut = Array()
        var bas = Array()
        var droite = Array()
        var gauche = Array()
        var j

        for (j = +this.pos[1]+1; j < 9; j+= 1) {
            haut.push(this.pos[0]+j)
        }
        for (j = +this.pos[1]-1; j>0; j-=1){
            bas.push(this.pos[0]+j)
        }
        for (j = cooX.indexOf(this.pos[0])+1; j < 8; j+= 1) {
            droite.push(cooX[j]+this.pos[1])
        }
        for (j = cooX.indexOf(this.pos[0])-1; j>-1; j-=1){
            gauche.push(cooX[j]+this.pos[1])
        }
        mouv.push(haut)
        mouv.push(bas)
        mouv.push(droite)
        mouv.push(gauche)
        return mouv;
    }
    meurt(){
        this.destroy()
        this.pos = ''
    }
}
class n {
    constructor(pos) {
        this.name = '';
        this.pos = '';
    }
    MouvSound(){
        document.getElementById("moov").play()
    }
    EatSound(){
        document.getElementById("eat").play()
    }
    affichage(){
        document.getElementById(this.pos).style.backgroundImage = 'url('+'/images/' + this.name + '.png)'
        document.getElementById(this.pos).style.backgroundRepeat = 'no-repeat'
    }
    destroy(){
        document.getElementById(this.pos).style.backgroundImage = ''
    }
    selection(){
        document.getElementById(this.pos).style.backgroundColor = '#3FB0E1'
    }
    deselection(){
        document.getElementById(this.pos).style.backgroundColor = ''
    }
    Mouv(){
        var mouv = Array()
        var x = cooX.indexOf(this.pos[0])
        if ( x+2<8 && +this.pos[1]-1>0){
            mouv.push(cooX[x+2]+(+this.pos[1]-1))
        }
        if ( x+2<8 && +this.pos[1]+1<9){
            mouv.push(cooX[x+2]+(+this.pos[1]+1))
        }
        if (x-2>-1 && +this.pos[1]+1<9){
            mouv.push(cooX[x-2]+(+this.pos[1]+1))
        }
        if (x-2>-1 && +this.pos[1]-1>0){
            mouv.push(cooX[x-2]+(+this.pos[1]-1))
        }
        if (x+1<8 && +this.pos[1]+2<9 ){
            mouv.push(cooX[x+1]+(+this.pos[1]+2))
        }
        if (x+1<8 && +this.pos[1]-2>0 ){
            mouv.push(cooX[x+1]+(+this.pos[1]-2))
        }
        if (x-1>-1 && +this.pos[1]-2>0 ){
            mouv.push(cooX[x-1]+(+this.pos[1]-2))
        }
        if (x-1>-1 && +this.pos[1]+2<9 ){
            mouv.push(cooX[x-1]+(+this.pos[1]+2))
        }
        return mouv;
    }
    meurt(){
        this.destroy()
        this.pos = ''
    }
}
class b {
    constructor(pos) {
        this.name = '';
        this.pos = '';
    }
    MouvSound(){
        document.getElementById("moov").play()
    }
    EatSound(){
        document.getElementById("eat").play()
    }
    affichage(){
        document.getElementById(this.pos).style.backgroundImage = 'url('+'/images/' + this.name + '.png)'
        document.getElementById(this.pos).style.backgroundRepeat = 'no-repeat'
    }
    destroy(){
        document.getElementById(this.pos).style.backgroundImage = ''
    }
    selection(){
        document.getElementById(this.pos).style.backgroundColor = '#3FB0E1'
    }
    deselection(){
        document.getElementById(this.pos).style.backgroundColor = ''
    }
    Mouv(){
        var mouv = Array()
        var diag1 = Array()
        var diag2 = Array()
        var diag3 = Array()
        var diag4 = Array()
        var letr = cooX.indexOf(this.pos[0])
        var nb = this.pos[1]
        while (letr<7 && nb >1){
            letr ++
            nb --
            diag1.push(cooX[letr]+nb)
        }
        letr = cooX.indexOf(this.pos[0])
        nb = this.pos[1]
        while (letr<7 && nb <8){
            letr ++
            nb ++
            diag2.push(cooX[letr]+nb)
        }
        letr = cooX.indexOf(this.pos[0])
        nb = this.pos[1]
        while (letr>0 && nb >1 ){
            letr --
            nb --
            diag3.push(cooX[letr]+nb)
        }
        letr = cooX.indexOf(this.pos[0])
        nb = this.pos[1]
        while (letr>0 && nb <8 ){
            letr --
            nb ++
            diag4.push(cooX[letr]+nb)
        }
        mouv.push(diag1)
        mouv.push(diag2)
        mouv.push(diag3)
        mouv.push(diag4)
        return mouv;
    }
    meurt(){
        this.destroy()
        this.pos = ''
    }
}
class q {
    constructor(pos) {
        this.name = '';
        this.pos = '';
    }
    MouvSound(){
        document.getElementById("moov").play()
    }
    EatSound(){
        document.getElementById("eat").play()
    }
    affichage(){
        document.getElementById(this.pos).style.backgroundImage = 'url('+'/images/' + this.name + '.png)'
        document.getElementById(this.pos).style.backgroundRepeat = 'no-repeat'
    }
    destroy(){
        document.getElementById(this.pos).style.backgroundImage = ''
    }
    selection(){
        document.getElementById(this.pos).style.backgroundColor = '#3FB0E1'
    }
    deselection(){
        document.getElementById(this.pos).style.backgroundColor = ''
    }
    Mouv(){
        // créer un objet fictif rook + bishop avec position de la reine
        var rookfictif = new r()
        var bishopfictif = new b()
        rookfictif.pos = this.pos
        bishopfictif.pos = this.pos
        return Array(rookfictif.Mouv(),bishopfictif.Mouv())

    }
    meurt(){
        this.destroy()
        this.pos = ''
    }
}
class k {
    constructor(pos) {
        this.name = '';
        this.pos = '';
        this.echec = Boolean() ;
        this.mouvAutoEnechec = Array();
        this.pieceAmanger =Array();
        this.DoitBouger = Boolean();
        this.animationechec = Boolean();
        this.rock = Boolean();
    }
    MouvSound(){
        document.getElementById("moov").play()
    }
    EatSound(){
        document.getElementById("eat").play()
    }
    affichage(){
        document.getElementById(this.pos).style.backgroundImage = 'url(' +'/images/'+ this.name + '.png)'
        document.getElementById(this.pos).style.backgroundRepeat = 'no-repeat'
    }
    destroy(){
        document.getElementById(this.pos).style.backgroundImage = ''
    }
    selection(){
        document.getElementById(this.pos).style.backgroundColor = '#3FB0E1'
    }
    deselection(){
        document.getElementById(this.pos).style.backgroundColor = ''
    }
    AnimationenEchec(){
        document.getElementById("echec").play()
        this.animationechec = true
    }
    AnimationMat(){
        document.getElementById("win").play()
        this.animationechec = true
    }
    Destroy_AnimationenEchec(){
        this.animationechec = false
    }

    Mouv(){
        // C'est aussi les positions ou il peut manger
        var Mouv = Array()
        var x = cooX.indexOf(this.pos[0])
        var j

        // 3 CASE DU HAUT
        if (this.pos[1]<8 && x<7){
            Mouv.push(cooX[x+1]+ (+this.pos[1]+1))
        }
        if (this.pos[1]<8 && x>0){
            Mouv.push(cooX[x-1]+ (+this.pos[1]+1))
        }
        if (this.pos[1]<8){
            Mouv.push(cooX[x]+(+this.pos[1]+1))
        }

        // 3 CASE DU BAS
        if (this.pos[1]>1 && x>0){
            Mouv.push(cooX[x-1]+ (+this.pos[1]-1))
        }
        if (this.pos[1]>1 && x<7){
            Mouv.push(cooX[x+1]+ (+this.pos[1]-1))
        }
        if (this.pos[1]>1){
            Mouv.push(cooX[x]+(+this.pos[1]-1))
        }
        // CASE DU COTE
        if( x>0){
            Mouv.push(cooX[x-1]+this.pos[1])
        }
        if(x<7){
            Mouv.push(cooX[x+1]+this.pos[1])
        }
        return Mouv
    }
    meurt(){
        this.destroy()
        this.pos = ''
    }
}
//
// Initalisation des variables
//
var Nb_sans_manger=0;
const cooX = 'abcdefgh'
const titre=document.getElementById('bv');
const jeu = document.createElement('div') // construction des elements HTML du plateau de jeu
var container = document.createElement('div');
container.className = "grid-containerBoard"
container.id = "board"
const Game = Array() // variable qui sauvegarde tout les mouvs de la partie
const promotionTop = document.createElement('div');
promotionTop.className = "promotion-window top"
promotionTop.id = "PromoTop"
const promotionBot = document.createElement('div');
var promotionBb = document.createElement('div')
promotionBb.className = "promotion-piece bb"
var promotionBq = document.createElement('div')
promotionBq.className = "promotion-piece bq"
var promotionBr = document.createElement('div')
promotionBr.className = "promotion-piece br"
var promotionBn = document.createElement('div')
promotionBn.className = "promotion-piece bn"
promotionTop.style.transform = "translateX(0%)"
promotionTop.style.display = "none"


promotionTop.appendChild(promotionBb)
promotionTop.appendChild(promotionBr)
promotionTop.appendChild(promotionBq)
promotionTop.appendChild(promotionBn)


promotionBot.className = "promotion-window bot"
promotionBot.style.transform = "translateX(0%)"
promotionBot.style.display = "none"
promotionBot.id = "PromoBot"
var promotionWb = document.createElement('div')
promotionWb.className = "promotion-piece wb"
var promotionWq = document.createElement('div')
promotionWq.className = "promotion-piece wq"
var promotionWr = document.createElement('div')
promotionWr.className = "promotion-piece wr"
var promotionWn = document.createElement('div')
promotionWn.className = "promotion-piece wn"

promotionBot.appendChild(promotionWb)
promotionBot.appendChild(promotionWr)
promotionBot.appendChild(promotionWq)
promotionBot.appendChild(promotionWn)
const messages=document.getElementById('messages');
var promotion
var promotion_pion
//
// Création des tableaux qui contiendront les pièces W pour white B pour black
// p: pawn  ,r: rock , n:knight, b:bishop ,q:queen ,k: king
//
Game.push('Mouvement');
Wp= Array()
Wr = Array()
Wn = Array()
Wb = Array()
Wq = Array()
Wk = Array()
Bp= Array()
Br = Array()
Bn = Array()
Bb = Array()
Bq = Array()
Bk = Array()

var selection
var PieceSelectionne
var clique1
const Wpiece = Array(Wp,Wr,Wn,Wb,Wq,Wk)
const Bpiece = Array(Bp,Br,Bn,Bb,Bq,Bk)
var socket = io();
var mouve = document.getElementById('mouve');
var bienvenue = document.getElementById('couleur');
document.getElementById("moov").volume = 0.1;
document.getElementById("eat").volume = 0.1;


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('commencer',input.value);
        input.value = '';
        input.disabled=true;
    }
});
socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    form.appendChild(item);

});

socket.on('commencer',function(couleur){
    titre.remove();
    bienvenue.textContent=`Vous êtes les ${couleur}`
    document.body.classList.add('no-background');
    jeu.classList.add('jeu');
    container.classList.add('container');

    for ( i = 0; i < 8; i += 1 ){
        for (j = 0; j < 8; j+= 1){
            let div = document.createElement('div');
            div.classList.add('grid-item')
            let y = 8-i
            div.id = cooX[j]+y
            container.appendChild(div);
        }
    }
    for(i = 0; i<10; i+=1){
        let div = document.createElement('div');
        div.classList.add('grid-item')
        jeu.appendChild(div)
    }
    for(i = 0; i<8; i+=1){
        let div = document.createElement('div');
        div.classList.add('grid-itemCooX')
        let div2 = document.createElement('div');
        div2.classList.add('grid-itemCooX')
        div.innerHTML = 8-i;
        jeu.appendChild(div);
        jeu.appendChild(div2);
    }
    let div = document.createElement('div');
    div.classList.add('grid-item')
    jeu.appendChild(div)

    for(i = 0; i<8; i+=1){
        let div = document.createElement('div');
        div.classList.add('grid-itemCooX')
        div.innerHTML = cooX[i]
        jeu.appendChild(div)
    }
    let div2 = document.createElement('div');
    div2.classList.add('grid-item')
    jeu.appendChild(div2)

    container.appendChild(promotionTop)
    container.appendChild(promotionBot)
    jeu.appendChild(container)
    document.body.appendChild(jeu)

    for ( i = 0; i < 8; i += 1 ) {
        let Wpion = new p()
        let Wrock = new r()
        let Wknight = new n()
        let Wbish = new b()
        let Wqueen = new q()
        let Wking = new k()
        let Bpion = new p()
        let Brock = new r()
        let Bknight = new n()
        let Bbish = new b()
        let Bqueen = new q()
        let Bking = new k()

        Wpion.name ='wp'
        Wpion.pos = cooX[i]+'2'
        Wpion.affichage()
        Wp.push(Wpion)
        Bpion.name ='bp'
        Bpion.pos = cooX[i]+'7'
        Bpion.affichage()
        Bp.push(Bpion)
        if (i == 0 || i == 7){
            Wrock.name ='wr'
            Wrock.pos = cooX[i]+'1'
            Wrock.rock = true
            Wrock.affichage()
            Wr.push(Wrock)
            Brock.name ='br'
            Brock.pos = cooX[i]+'8'
            Brock.rock = true
            Brock.affichage()
            Br.push(Brock)
        }
        if (i == 1 || i == 6){
            Wknight.name ='wn'
            Wknight.pos = cooX[i]+'1'
            Wknight.affichage()
            Wn.push(Wknight)
            Bknight.name ='bn'
            Bknight.pos = cooX[i]+'8'
            Bknight.affichage()
            Bn.push(Bknight)
        }
        if (i == 2 || i == 5){
            Wbish.name ='wb'
            Wbish.pos = cooX[i]+'1'
            Wbish.affichage()
            Wb.push(Wbish)
            Bbish.name ='bb'
            Bbish.pos = cooX[i]+'8'
            Bbish.affichage()
            Bb.push(Bbish)
        }
        if (i ==3){
            Wqueen.name ='wq'
            Wqueen.pos = cooX[i]+'1'
            Wqueen.affichage()
            Wq.push(Wqueen)
            Bqueen.name ='bq'
            Bqueen.pos = cooX[i]+'8'
            Bqueen.affichage()
            Bq.push(Bqueen)
        }
        if (i ==4){
            Wking.name ='wk'
            Wking.pos = cooX[i]+'1'
            Wking.echec = false
            Wking.animationechec = false
            Wking.rock = true
            Wking.affichage()
            Wk.push(Wking)
            Bking.name ='bk'
            Bking.pos = cooX[i]+'8'
            Bking.echec = false
            Bking.animationechec = false
            Bking.rock = true
            Bking.affichage()
            Bk.push(Bking)
        }
    }


    //
    // Initialisation  des variables
    //
    selection = false
    clique1 = true
    promotion = false
    mouve.innerText+= Game;
    bienvenue.classList.add('couleur')
    messages.appendChild(bienvenue)
    messages.appendChild(jeu)
    messages.appendChild(mouve)
    document.body.classList.remove('bodyinit')
    document.body.classList.add('container')
    form.classList.add('right');
    messages.classList.add('left')

});

jeu.addEventListener('mouseover', function(e){
    if (e.target.className == "grid-item"){
        e.target.style.opacity =' 0.3';
    }
})
jeu.addEventListener('mouseout', function(e){
    if (e.target.className == "grid-item"){
        e.target.style.opacity ='1';
    }
})
jeu.addEventListener('click',function (e) {
    var NbCoup = Game.length-1;
    socket.emit('mouvement',e.target.className,e.target.id,(NbCoup % 2 == 0));
});
socket.on('mouvement',function(a,b){
    var NbCoup = Game.length-1;
    if (NbCoup % 2 == 0) {
        var Jcolor = Array('w',Wpiece)
        var Acolor = Array('b',Bpiece)
        pieceDuJoueur = AllpieceWhite_position()
    }
    else {
        var Jcolor = Array('b',Bpiece)
        var Acolor = Array('w',Wpiece)
        pieceDuJoueur = AllpieceBlack_position()
    }
    if (typeof(Manger_possible)!="undefined" && typeof(Mouvementnonbloque)!="undefined" && pieceDuJoueur.includes(b) && typeof(PieceSelectionne)!="undefined"&& PieceSelectionne.pos!==''){
        clique1 = true
        PieceSelectionne.deselection()
        DesaffichageCaseJouable(Mouvementnonbloque,PieceSelectionne)
        DesaffichageCasemangable(Manger_possible,PieceSelectionne)
    }
    if (clique1 && !promotion) {
        if (a == "grid-item") {
            PieceSelectionne = piece_at_this_position(b)
            if (typeof(PieceSelectionne)!="undefined" && PieceSelectionne.name[0] == Jcolor[0]) {
                selection = true
                PieceSelectionne.selection()
                if (PieceSelectionne.name[1] == 'p') {

                    Mouvementnonbloque2 = pos_non_Bloque_pion(PieceSelectionne.Mouv())
                    Manger_possible2 = pos_manger_pion(PieceSelectionne.Manger(), Jcolor[0])
                    MemPos=PieceSelectionne.pos
                    Mvt=Mvt_vraiment_pos(Mouvementnonbloque2,Manger_possible2,MemPos,Acolor,Jcolor)
                    Mouvementnonbloque=Mvt[0]
                    Manger_possible=Mvt[1]
                }
                if (PieceSelectionne.name[1] == 'r') {


                    Mouvementnonbloque2 = pos_non_bloque_4l(PieceSelectionne.Mouv(),Jcolor[0])
                    MemPos=PieceSelectionne.pos
                    Mvt=Mvt_vraiment_pos(Mouvementnonbloque2[0],Mouvementnonbloque2[1],MemPos,Acolor,Jcolor)
                    Mouvementnonbloque=Mvt[0]
                    Manger_possible=Mvt[1]
                }
                if (PieceSelectionne.name[1] == 'b') {


                    Mouvementnonbloque2 = pos_non_bloque_4l(PieceSelectionne.Mouv(),Jcolor[0])
                    MemPos=PieceSelectionne.pos
                    Mvt=Mvt_vraiment_pos(Mouvementnonbloque2[0],Mouvementnonbloque2[1],MemPos,Acolor,Jcolor)
                    Mouvementnonbloque=Mvt[0]
                    Manger_possible=Mvt[1]
                }
                if (PieceSelectionne.name[1] == 'n') {
                    Mouvementnonbloque2 = pos_non_bloque_knight(PieceSelectionne.Mouv(),Jcolor[0])
                    MemPos=PieceSelectionne.pos
                    Mvt=Mvt_vraiment_pos(Mouvementnonbloque2[0],Mouvementnonbloque2[1],MemPos,Acolor,Jcolor)
                    Mouvementnonbloque=Mvt[0]
                    Manger_possible=Mvt[1]
                }
                if (PieceSelectionne.name[1] == 'q') {
                    var MouvQ = PieceSelectionne.Mouv()

                    Mouvementnonbloque2 = pos_non_bloque_4l(MouvQ[0], Jcolor[0])[0].concat(pos_non_bloque_4l(MouvQ[1], Jcolor[0])[0])
                    Manger_possible2 = pos_non_bloque_4l(MouvQ[0], Jcolor[0])[1].concat(pos_non_bloque_4l(MouvQ[1], Jcolor[0])[1])
                    console.log(Manger_possible2);
                    MemPos=PieceSelectionne.pos
                    Mvt=Mvt_vraiment_pos(Mouvementnonbloque2,Manger_possible2,MemPos,Acolor,Jcolor)
                    Mouvementnonbloque=Mvt[0]
                    Manger_possible=Mvt[1]
                }
                if (PieceSelectionne.name[1] == 'k') {
                    var MouvK = pos_non_bloque_roi(PieceSelectionne.Mouv(),Acolor[0])
                    Mouvementnonbloque = MouvK[0]
                    Manger_possible = MouvK[1]
                    if (Jcolor[1][5][0].rock && !Jcolor[1][5][0].echec){
                        var MemRock = rock_verif(Jcolor[0])
                        MouvementrockKing = MemRock[0]
                        MouvementrockRook = MemRock[1]
                        AffichageCaseJouable(MouvementrockKing)
                    }
                }
                clique1 = false
                AffichageCaseJouable(Mouvementnonbloque)
                AffichageCasemangable(Manger_possible)
            }
        }
    }
    else if (!promotion){
        if (selection) {
            PieceSelectionne.deselection()
            if (Acolor[1][5][0].echec && !Acolor[1][5][0].animationechec ){
                Acolor[1][5][0].AnimationenEchec()
            }
        }
        DesaffichageCaseJouable(Mouvementnonbloque,'')
        DesaffichageCasemangable(Manger_possible,'')
            if (Manger_possible.includes(b)){
                Nb_sans_manger=0;
                var posmang = b;
                piece=piece_at_this_position(b);
                //pour la prise en passant
                if (piece==undefined) {
                    posi2=e.target.id
                    if (posi2[1] == 6) {
                        posi2 = posi2[0] + 5
                    } else if (posi2[1] == 3) {
                        posi2 = posi2[0] + 4
                    }
                    piece=piece_at_this_position(posi2)
                }
                piece.meurt()
                PieceSelectionne.destroy()
                Game.push(PieceSelectionne.pos + posmang)
                PieceSelectionne.pos = posmang
                PieceSelectionne.affichage()
                PieceSelectionne.EatSound()
                eche_atk(Jcolor[0])
                mouve.innerHTML=Game;
                if (PieceSelectionne.name[1] == 'k' || PieceSelectionne.name[1] == 'r'){
                    PieceSelectionne.rock = false
                    MouvementrockKing = Array()
                }
                if (Jcolor[1][5][0].echec){
                    // si il etait en echec mtn il est forcement plus puisqu'il a cliqué sur une casse autorisé)
                    Jcolor[1][5][0].echec = false
                    Jcolor[1][5][0].Destroy_AnimationenEchec()
                    Jcolor[1][5][0].mouvAutoEnechec = Array()
                    Jcolor[1][5][0].pieceAmanger = ''
                    Jcolor[1][5][0].DoitBouger = false
                }
                if(Acolor[1][5][0].echec){
                    if (! Acolor[1][5][0].DoitBouger){
                        Mangernonbloqueechec = Manger_autorise_en_echec(Acolor[1][5][0].pieceAmanger,Acolor[0])
                        Mouvementnonbloqueechec = Mouvement_autorise_en_echec(Acolor[1][5][0].mouvAutoEnechec,Acolor[0])
                    }
                    else{
                        var MouvK = pos_non_bloque_roi(PieceSelectionne.Mouv(),Acolor[0])
                        Mangernonbloqueechec = MouvK[0]
                        Mouvementnonbloqueechec = MouvK[1]
                        //mangernonbloque normal du roi
                        // Mouvement non bloque normal du roi

                    }
                    if (Mouvementnonbloqueechec.length ==0 && Mangernonbloqueechec.length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[0].length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[1].length == 0 ){
                        window.alert('Echec et mat')}

                }


                if (All_mouv(Acolor[0]).length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[0].length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[1].length ==0){
                    window.alert('Pat')
                }


            }
            else if (Mouvementnonbloque.includes(b)) {
                if (PieceSelectionne.name[1] != 'p'){
                    Nb_sans_manger++;
                }
                else {
                    Nb_sans_manger=0
                }

                PieceSelectionne.destroy()
                Game.push(PieceSelectionne.pos + b)
                PieceSelectionne.pos = b
                PieceSelectionne.affichage()
                PieceSelectionne.MouvSound()
                eche_atk(Jcolor[0])
                mouve.innerHTML=Game;
                if (PieceSelectionne.name[1] == 'k' || PieceSelectionne.name[1] == 'r'){
                    PieceSelectionne.rock = false
                    MouvementrockKing = Array()
                }
                if (Jcolor[1][5][0].echec){
                    // s'il était en echec mtn il est forcement plus puisqu'il a cliqué sur une casse autorisé)
                    Jcolor[1][5][0].echec = false
                    Jcolor[1][5][0].Destroy_AnimationenEchec()
                    Jcolor[1][5][0].mouvAutoEnechec = Array()
                    Jcolor[1][5][0].pieceAmanger = ''
                    Jcolor[1][5][0].DoitBouger = false

                }
                if(Acolor[1][5][0].echec){
                    if (! Acolor[1][5][0].DoitBouger){

                        Mangernonbloqueechec = Manger_autorise_en_echec(Acolor[1][5][0].pieceAmanger,Acolor[0])
                        Mouvementnonbloqueechec = Mouvement_autorise_en_echec(Acolor[1][5][0].mouvAutoEnechec,Acolor[0])
                    }
                    else{
                        var MouvK = pos_non_bloque_roi(PieceSelectionne.Mouv(),Acolor[0])
                        Mangernonbloqueechec = MouvK[0]
                        Mouvementnonbloqueechec = MouvK[1]
                        //mangernonbloque normal du roi
                        // Mouvement non bloque normal du roi

                    }

                    if (Mouvementnonbloqueechec.length ==0 && Mangernonbloqueechec.length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[0].length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[1].length == 0 ){
                        window.alert('Echec et mat')

                    }
                }

                if (All_mouv(Acolor[0]).length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[0].length == 0 && pos_non_bloque_roi(Acolor[1][5][0].Mouv(),Jcolor[0])[1].length ==0){
                    window.alert('Pat')
                }
            }
            else if (PieceSelectionne.name[1] == 'k' && typeof(MouvementrockKing)!= 'undefined' && MouvementrockKing.includes(b) ){
                var rook
                Nb_sans_manger++;
                var rookposmem
                PieceSelectionne.rock = false
                var index = MouvementrockKing.indexOf(b)
                var PosRook = MouvementrockRook[index]
                if (PosRook[0] == 'd'){
                    // grand rock tour en a
                    rook = Jcolor[1][1][0]
                    rookposmem = rook.pos
                    rook.destroy()
                    rook.pos = PosRook
                    rook.affichage()
                }
                else{
                    // petit rock tour en h
                    rook = Jcolor[1][1][1]
                    rookposmem = rook.pos
                    rook.destroy()
                    rook.pos = PosRook
                    rook.affichage()
                }
                PieceSelectionne.destroy()
                Game.push(PieceSelectionne.pos + b + rookposmem + PosRook+ 'o')
                PieceSelectionne.pos = b;
                PieceSelectionne.affichage()
                mouve.innerHTML=Game;
                //PieceSelectionne.RockSound()

            }
            if (PieceSelectionne.name[1] == 'p' && PieceSelectionne.promotion_cond()){
                Nb_sans_manger=0;
                var translation = cooX.indexOf(PieceSelectionne.pos[0])*100
                promotion = true
                promotion_pion = PieceSelectionne
                if (Jcolor[0] == 'w'){
                    document.getElementById("PromoBot").style.display = ""
                    document.getElementById("PromoBot").style.transform = "translateX("+translation+"%)"
                }
                else{
                    document.getElementById("PromoTop").style.display = ""
                    document.getElementById("PromoTop").style.transform = "translateX("+translation+"%)"
                }
            }

        clique1 = true
        if (Nb_sans_manger==50){
            window.alert('Parti Nulle 50 coups sans bouger un pion ou manger');
        }
    }
});
promotionBot.addEventListener('click',function (e) {
    socket.emit('promotion', e.target.className,e.target.className[e.target.className.length-2]);
});
promotionTop.addEventListener('click',function (e) {
    socket.emit('promotion', e.target.className,e.target.className[e.target.className.length-2]);
});
socket.on('promotion',function(a){
    var Piecepromo
    var choisi = false
    if (a.includes("promotion-piece")){
        if ((a == "promotion-piece wb")|| (a == "promotion-piece bb")){
            Piecepromo = new b()
            Piecepromo.name = promotion_pion.name[0]+'b'
            choisi = true
            Wpiece[3].push(Piecepromo)
        }
        if ((a == "promotion-piece wq")|| (a == "promotion-piece bq")){
            Piecepromo = new q()
            Piecepromo.name = promotion_pion.name[0]+'q'
            choisi = true
            Wpiece[4].push(Piecepromo)
        }
        if ((a == "promotion-piece wn")|| (a == "promotion-piece bn")){
            Piecepromo = new n()
            Piecepromo.name = promotion_pion.name[0]+'n'
            choisi = true
            Wpiece[2].push(Piecepromo)
        }
        if((a == "promotion-piece wr")|| (a == "promotion-piece br")){
            Piecepromo = new r()
            Piecepromo.name = promotion_pion.name[0]+'r'
            choisi = true
            Wpiece[1].push(Piecepromo)
        }
    }
    if (choisi){
        Piecepromo.pos = promotion_pion.pos;
        promotion_pion.meurt();
        Piecepromo.affichage();
        document.getElementById("PromoBot").style.display = "none";
        document.getElementById("PromoTop").style.display = "none";
        promotion = false;
    }


});
