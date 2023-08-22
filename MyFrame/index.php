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

    <script src="https://kit.fontawesome.com/239779e4bc.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="./estrutura/css/estilos.css">
</head>

<body>
    <header>
        <?php @include_once 'menu.html'; ?>
    </header>
    </nav>
    <section>
        <div class="card-area">
            <span class="card-previous">
                <span class="fa-solid fa-circle-chevron-right fa-flip-horizontal fa-4x card-icon"></span>
            </span>
            <a href="include/view/view_consulta_Contas.php" class="card-link">
                <div class="card">
                    <span class="card-content">
                        <span class="card-icon-area">
                            <span class="fa-solid fa-sack-dollar fa-3x card-icon"></span>
                        </span>
                        <span class="card-text">Consultar Contas teste</span><br>
                    </span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span class="card-content">
                        <span class="card-icon-area">
                            <span class="fa-solid fa-star fa-3x card-icon"></span>
                        </span>
                        <span class="card-text">Favoritos</span>
                    </span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span class="card-content">
                        <span class="card-icon-area">
                            <span class="fa-solid fa-magnifying-glass-dollar fa-3x card-icon"></span>
                        </span>
                        <span class="card-text">Navegador</span>
                    </span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span class="card-content">
                        <span class="card-icon-area">
                            <span class="fa-solid fa-image fa-3x card-icon"></span>
                        </span>
                        <span class="card-text">Imagens</span>
                    </span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span class="card-content">
                        <span class="card-icon-area">
                            <span class="fa-solid fa-file fa-3x card-icon"></span>
                        </span>
                        <span class="card-text">Arquivos</span>
                    </span>
                </div>
            </a>
            <a href="#" class="card-link">
                <div class="card">
                    <span class="card-content">
                        <span class="card-icon-area">
                            <span class="fa-solid fa-question fa-3x card-icon"></span>
                        </span>
                        <span class="card-text">Ajuda</span>
                    </span>
                </div>
            </a>
            <span class="card-next">
                <span class="fa-solid fa-circle-chevron-right fa-4x card-icon"></span>
            </span>
        </div>
    </section>
</body>

</html>
<?