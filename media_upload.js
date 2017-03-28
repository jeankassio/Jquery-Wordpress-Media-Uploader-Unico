jQuery(document).ready(function($){
 
		var upload_imagem;
		
		//If the "remove" button is clicked, then ... | Se o botão "remover" for clicado, então...
			$('.remover_imagem').click(function(e){
			
			e.preventDefault();
			
			//get the elements | pega os elementos
			$caixaT = $(this).closest("span.uploader").find(".upload_imagem");
			$imgU = $(this).closest("span.uploader").find(".img_imagem");
			
			// Assigns null value to them | atribui valor nulo a eles
			$caixaT.val('');
			$imgU.attr('src', '');
				
			});
		
		//If the "add image" button is clicked, then ... | Se o botão "adicionar imagem" for clicado, então...
		$('.upload_imagem_botao').click(function(e) {
 
			e.preventDefault();
			
			//get the elements | pega os elementos
			$caixaT = $(this).closest("span.uploader").find(".upload_imagem");
			$imgU = $(this).closest("span.uploader").find(".img_imagem");
			
		   //Extend the wp.media object | Estender o objeto wp.media
			upload_imagem = wp.media.frames.file_frame = wp.media({
				title: 'Escolher imagem', // title window | titulo da janela
				button: {
					text: 'Escolher imagem' // text button 'choose image' | texto do botão 'escolher imagem'
				},
				multiple: false // 'false' for multiples files | valor 'false' para multiplos arquivos
			});
			
	 
			//When a file is selected, then | Se um arquivo for selecionado, então...
			upload_imagem.on('select', function() {
				
				// get file selected | pega o arquivo selecionado
				attachment = upload_imagem.state().get('selection').first().toJSON();
				
				// set to variable value of url | joga para a variável o valor da url
				$valor = attachment.url;
				
				// Assigns the url to the value and src of the elements | Atribui a url para o valor e src dos elementos
				$caixaT.val($valor);
				$imgU.attr('src', $valor);
			
			});
	 
			//Open the uploader dialog | Abre a janela de upload
			upload_imagem.open();
 
    });
 
 
});