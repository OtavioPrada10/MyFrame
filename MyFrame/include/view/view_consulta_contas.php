<form id="meuFormulario" action="controller/controller_contas.php" method="POST" onsubmit="handleFormSubmit(event)">
  <!-- Campos do formulário -->
  <input type="text" name="campo1">
  <input type="text" name="campo2">
  <!-- Botão de submit -->
  <button type="submit">Enviar</button>
</form>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
function handleFormSubmit(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  var form = event.target;
  var formData = new FormData(form);

  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      // Sucesso na requisição
      var response = JSON.parse(xhr.responseText);
      console.log('Resposta:', response);
      // Faça o que deseja com a resposta da requisição
    } else {
      // Erro na requisição
      console.error('Erro:', xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Erro na requisição AJAX');
  };

  xhr.send(formData);
}
</script>