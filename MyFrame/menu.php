<nav class="navbar navbar-expand-sm text-bg-light">
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page">Home<span class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="#">Action 1</a>
                    <a class="dropdown-item" href="#">Action 2</a>
                </div>
            </li>
        </ul>
    </div>
    <div>
        <span class="fa-solid fa-bars fa-xl" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></span>
    </div>
</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample">
    <div class="offcanvas-header">
        <span class="fa-solid fa-circle-user fa-3x"></span>
        <h5 class="offcanvas-title">Nome do Usuário</h5>
        <span class="fa-solid fa-xmark fa-2x offcanvas-icon-close" data-bs-dismiss="offcanvas"></span>
    </div>
    <div class="offcanvas-body">
        <ul class="offcanvas-list">
            <li>Consultar Contas</li>
            <li>Favoritos</li>
            <li>Navegador</li>
            <li>Imagens</li>
            <li>Arquivos</li>
            <li>Ajuda</li>
        </ul>
        <button onclick="finalizaSessao()" class="btn offcanvas-btn-deslogar">Sair</button>
    </div>
    <script>

    </script>
</div>