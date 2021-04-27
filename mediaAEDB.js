function media(){
    var Av1 = document.getElementById('txtAv1').value;
    var Av2 = document.getElementById('txtAv2').value;
    var Av3 = document.getElementById('txtAv3').value;
    var Aluno = document.getElementById('txtAluno').value;
    var Soma = parseInt(Av1) + parseInt(Av2);
    var Media = Soma/ 2;
    
    var Soma2 = parseInt(Av1) + parseInt(Av3);
    var Media2 = Soma2 / 2;

    var Soma3 = parseInt(Av3) + parseInt(Av2);
    var Media3 = Soma3 / 2;

    if(Av1<4 && Av2<4  || Av1<4 && Av3<4  || Av2<4 && Av3<4){
      
        outSituação.textContent = 'Você está reprovado';
        outMedia.textContent = '';
      
     
      
    
    }
   
    
    else if(Media>=6 && Media>=Media2 && Media>=Media3){
        
      outMedia.textContent ='Sua média é ' + Media;
      outSituação.textContent = 'Parabéns ' + Aluno + ', você está aprovado';
       
    }
    else if(Media2>=6 && Media2>=Media3 && Media2>Media){
      outMedia.textContent ='Sua média é ' + Media2;
      outSituação.textContent = 'Parabéns ' + Aluno + ', você está aprovado';
  
     }
     else if(Media3>=6 && Media3>Media && Media3>Media2){
      outMedia.textContent ='Sua média é ' + Media3;
      outSituação.textContent = 'Parabéns ' + Aluno + ', você está aprovado';
  
     }
     
     else{
       outSituação.textContent = 'Você está reprovado';
       outMedia.textContent = '';
     }
     
    

   
  




}

document.getElementById('btnMedia').addEventListener('click', media)
