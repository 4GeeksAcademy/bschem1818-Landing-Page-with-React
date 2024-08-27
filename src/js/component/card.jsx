import React from "react";
import logo from '../../img/foto.jpg'; // with import


const Card = () => {
    return (
<div class="card text-center mb-3" style={{width: '18rem'}}>
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="card-footer">
    <a href="#" class="btn btn-primary">Find Out More!</a>
  </div>
</div>
    )
};
export default Card