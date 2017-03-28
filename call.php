<?php
//Set a constant with the theme path | Definir uma constante com o caminho do tema
define( 'TEMA_URI', get_template_directory_uri() );

?>

						<span class="uploader">
					   
					   		<span>
							<!-- image to display | imagem para visualizar -->
								<img style="height: 120px; width: 120px; border: 1px solid #dedede;" class="img_imagem" src=""></img>
							</span>

							<span>
								<!-- Text field for a link image | campo de texto para a imagem do link -->
								<input class="upload_imagem" type="text" name="imagem-background" value="" />
								<!-- Button add image | Botão adicionar imagem -->
								<input class="upload_imagem_botao button button-primary" type="button" value="Adicionar imagem" />
								<!-- Button remove image | Botão remover imagem -->
								<input class="remover_imagem button button-primary" type="button" value="Remover" />
								
							</span>
						   
					   </span>
					   
					   <!-- // Indicate where the javascript script is hosted | Indicar o local aonde o javascript está hospedado -->
					<script async type="text/javascript" src="<?= TEMA_URI; ?>/functions/js/media_upload.js"></script>
					