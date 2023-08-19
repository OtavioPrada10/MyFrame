<!DOCTYPE html>
<html>

<head>
    <title>My System</title>
    <meta charset="UTF-8" />
    <script src="./estrutura/js/Jquery.js" type="text/javascript"></script>
    <script src="estrutura/js/js_principal.js" type="text/javascript"></script>
    <!-- Latest compiled and minified CSS -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="./estrutura/css/estilos.css">
</head>

<body>
    <header>
        <?php @include_once 'menu.html'; ?>
    </header>
    </nav>
    <div>
        <div class="card-area">
            <a href="include/view/view_consulta_Contas.php" class="card-link">
                <div class="card">
                    <span class="card-content">
                        <img src="./img/icons/icon-conta.svg" class="card-icon" alt="Flag" width="25%" />
                        <span class="card-text">Consultar Contas</span><br>
                    </span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span>Favoritos</span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span>Navegador</span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span>Imagens</span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span>Ajuda</span>
                </div>
            </a>
        </div>
        <!-- <div class="linha">
            <a href="#">
                <div class="card">
                    <span>Arquivos</span>
                </div>
            </a>
            <a href="#">
                <div class="tile azul item">
                    <span>E-mail</span>
                </div>
            </a>
            <a href="#">
                <div class="tile azul item">
                    <span>Camera</span>
                </div>
            </a>
            <a href="#">
                <div class="tile azul item">
                    <span>Música</span>
                </div>
            </a>
            <a href="#">
                <div class="card">
                    <span>Notas</span>
                </div>
            </a>
        </div>
    </div> -->
</body>

</html>