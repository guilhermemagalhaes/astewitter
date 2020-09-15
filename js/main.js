$('.btn-clipboard').tooltip({
				trigger: 'click',
				placement: 'bottom',
				tooltipClass: '.tooltip'
			});

			function setTooltip(message) {
				$('.btn-clipboard').tooltip('hide')
				.attr('data-original-title', message)
				.tooltip('show');
			}

			function hideTooltip() {
				setTimeout(function() {
					$('.btn-clipboard').tooltip('hide');
				}, 1000);
			}

			$(document).ready(function() {
				var clipboard = new ClipboardJS('.btn-clipboard');

				clipboard.on('success', function(e) {
					setTooltip('Copiado!');
					hideTooltip();
				});

				clipboard.on('error', function(e) {
					setTooltip('Falha!');
					hideTooltip();
				});
			});

			const regexpWhile = /([\w\S][^*])/g;
			const regex = /([\w\S])/g;

			$("#btn").on('click', function(){
				var retorno = "";
				var valor = $("#text").val();       
				retorno = valor.replaceAll(regex, '*');
				$("#retorno").text(retorno);
			});	