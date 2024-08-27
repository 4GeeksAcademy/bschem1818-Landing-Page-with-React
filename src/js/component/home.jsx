import React from "react";

//include images into your bundle
import NavbarC from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
		
		<>
		<NavbarC />
		<Jumbotron />


		<div class="row justify-content-start">
    <div class="col-3">
	<Card />
    </div>
    <div class="col-3">
	<Card />
    </div>
	<div class="col-3">
	<Card />
    </div>
	<div class="col-3">
	<Card />
    </div>
  </div>
		
    <Footer />	
		
		</>


	);
};

export default Home;
