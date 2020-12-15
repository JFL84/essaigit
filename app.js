var chrono=null;
var temps=0;


var pause=true;
//console.log(pause);
var compteur= 0;
var tempo;
var info;
var info2;
var selection;
var num;

jQuery(window).load(function(){ jQuery(".loader").fadeIn("500") .fadeOut("100") });



//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////                          //////////// 
//////////////////////////////////////   COMPTEUR DENERALE     ////////////
//////////////////////////////////////                          ////////////
//////////////////////////////////////////////////////////////////////////// 


function heure() { 
    temps++; base=temps;
    cs=base % 100;
    base=(temps-cs) / 100;
    s=base % 60;
    m=(base-s) / 60; 
    texte="";
    if (compteur>100){
        compteur=0;
        permutetaches();    
    };
   
    if (m<10) texte=texte+"0"; texte=texte+m+":";compteur++; 
    if (s<10) texte=texte+"0"; texte=texte+s+":";
    if (cs<10) texte=texte+"0"; texte=texte+cs; 
    document.formu.cadran.value=texte; 
};

   function commence() { 
    temps=-1; heure();
    document.formu.bouton.value="STOP";
    chrono=setInterval("heure()",10); 
   pause=false;
   console.log(pause);
    
   }; 
   function stoppe() {
    if (chrono!=null) clearInterval(chrono); 
    chrono=null;
    document.formu.bouton.value="DEPART";
    console.log("je suis en pause");
    pause=true;
    console.log(pause);
   };

   function clique() {
    if (chrono==null) commence(); else stoppe(); 
   };

var actionsdebase = new Array('html','css','javascript','react');
console.log(actionsdebase);
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////                                 ///// 
//////////////////////////////////////   Creation des taches de base   /////
//////////////////////////////////////                                 /////
//////////////////////////////////////////////////////////////////////////// 

function tache(nom,actions,delais,prime){
    this.nom = nom;
    this.actions = actions;
    this.delais = delais;
    this.prime = prime;
}


var tache1 = new tache('JeFl',actionsdebase,50,5);



console.log("je créer mes butons taches de base en fonction des taches : "
+tache1.nom);

document.body.onload = addElement;

function addElement(){
   //
   //for (var i=0; i<taches.length; i++) {  
   // if(taches[i].actions =='html'){  
   //           className ="styledtachehtml";
   //           }else if(taches[i] =='dormir'){
   //           className ="styledtache";
   //           }else if(taches[i] =='manger'){
   //           className ="styledtache";
   //           }else if(taches[i] =='loisir'){
   //           className ="styledtache";
   //           }else if(taches[i] =='achat'){
   //           className ="styledtache";
   //           }else if(taches[i] =='trajet'){
   //           className ="styledtache";
   //        }else if(taches[i] =='neant'){
   //            className ="styledtache"; 
   //        };       
            create('section__listetaches__taches','button',tache1.nom,0);
            create('section__listetaches__taches','button',tache1.nom,1);
            create('section__listetaches__taches','button',tache1.nom,2);
    };
///////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////                          //////////// 
//////////////////////////////////////   permute taches cycle   ////////////
//////////////////////////////////////                          ////////////
//////////////////////////////////////////////////////////////////////////// 
    function permutetaches(){

        // on decale les taches vers la gauche
        delElem('div', 'taches'); 
        tempo = taches[0];
        for(var i=0; i<=taches.length-1; i++){
            taches[i]= taches[i+1];
        }
         taches[taches.length-1]=tempo;
        create('div','button',tempo,className,num);
    };
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////                          //////////// 
//////////////////////////////////////   create taches normal   ////////////
//////////////////////////////////////                          ////////////
//////////////////////////////////////////////////////////////////////////// 
function create(id, obj, text, num){
    var target = document.getElementById(id);
        console.log("target= "+target);
        var elem = document.createElement(obj);
        console.log(elem);
        var txt = document.createTextNode(text);
        console.log(target);
                        // if(text =='travail'){  
                        //     className ="styledtache";
                        //     }else if(text =='dormir'){
                        //     className ="bouton styleddormir";
                        //     }else if(text =='manger'){
                        //     className ="bouton styledmanger";
                        //     }else if(text =='loisir'){
                        //     className ="bouton styledloisir";
                        //     }else if(text =='achat'){
                        //     className ="bouton styledachat";
                        //     }else if(text =='trajet'){
                        //     className ="bouton styledtrajet";
                        //  }else if(text =='neant'){
                        //     className ="bouton styledneant";
                        //  };
        elem.appendChild(txt);
        elem.id = 'taches2';
        elem.className = id;
      
        elem.setAttribute('onClick',"callJavascriptFunction(event)");
        elem.value = num;
      
        target.appendChild(elem);
       // delElem('section__listetaches__taches','taches2');
      };
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////                          //////////// 
//////////////////////////////////////   create taches selected ////////////
//////////////////////////////////////                          ////////////
////////////////////////////////////////////////////////////////////////////

function create2(id, obj, text, num)  
{
  var target = document.getElementById(id);
  var elem = document.createElement(obj);
  var txt = document.createTextNode(text);

 
  elem.appendChild(txt);
  elem.id = 'taches2';
 elem.className = className;
 elem.value = num;
 console.log("j'affiche l'element selected créer "+elem.value);
 
 elem.value = num;

 // target.appendChild(elem);
};
////////////////////////////////////////////// Del element //////////////////////////////

function delElem(parent, child)
    {
        var obj = document.getElementById(parent);
        var old = document.getElementById(child);
        
        obj.removeChild(old);
    }; 

//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////                          //////////// 
//////////////////////////////////////                          ////////////
//////////////////////////////////////                          ////////////
//////////////////////////////////////////////////////////////////////////// 



function callJavascriptFunction(event){
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(3 * 1000).then(() => saySomething("3 seconds")).catch(failureCallback);
var tempo=event;
console.log(tempo);
};

function failureCallback(){
    console.log("failure callback");
}

function saySomething(){
    console.log("say something la tache est fini");

console.log("je consulte ma tache créer en attente d'être faite");
console.log("la tache comporte :"+tache1.nom);
console.log("la tache actions :"+tache1.actions);
console.log("la tache delais :"+tache1.delais);
console.log("la tache prime :"+tache1.prime);

var div = document.getElementById('idsection__tacheselected__taches');
div.innerHTML += " la tache cliquer est : "+ tache1.nom;
div.innerHTML +=" les taches sont : "+ tache1.actions;
div.innerHTML +=" le delais est : "+ tache1.delais;
div.innerHTML +=" la prime est : "+ tache1.prime;



delElem('section__listetaches__taches','taches2');
create('section__poste1__taches','button',tache1.nom,0)

};

