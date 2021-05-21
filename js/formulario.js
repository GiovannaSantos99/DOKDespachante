$(document).ready(function(){
    $('#serAfiliado').click(function(){
        var nome = $('#nome').val();
        var email = $('#email').val();

        $('#alert').html('');
        if(nome == '') {
            $('#alert').html("Preencher o campo nome !");
            $('#nome').addClass('is-invalid');    
            $('#alert').addClass('alert-danger');                     
            return false;
        }  
                
        $('#alert').html('');
        if(email == '') {
            $('#alert').html("Preencher o campo e-mail !");
            $('#email').addClass('is-invalid'); 
            $('#alert').addClass("alert-danger");            
            return false;
        }  
        
        $('#alert').html('');
        
        if($('#nome')!=='' && $('#email')!=='') {
            $('#alert').html("Dados enviados !");
            $('#alert').addClass("alert-success");
        }


       return false;
       
    })
});