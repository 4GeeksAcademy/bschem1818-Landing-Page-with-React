import React from "react";
const NavbarC = () => {

    return (
    <nav class="navbar navbar-expand-lg bg-dark text-white">
      <div class="container-fluid">
        <a class="text-white navbar-brand" href="#">Start Boostrap</a>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex w-100 justify-content-between">
          <div class="navbar-nav ms-auto">
            <a class="text-white nav-link active" aria-current="page" href="#">Home</a>
            <a class="text-secondary nav-link " href="#">About</a>
            <a class="text-secondary nav-link " href="#">Services</a>
            <a class="text-secondary nav-link " href="#" tabindex="-1" aria-disabled="true">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default NavbarC