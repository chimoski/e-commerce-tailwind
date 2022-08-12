import React, { useEffect } from "react";
import { client } from "../lib/sanitySetup";
import { fetchAllProductsquery } from "../lib/query";
import BestFeature from "../components/Featured/BestFeature";
import Categories from "../components/Featured/Categories";
import Feature from "../components/Featured/Feature";
import NewFeature from "../components/Featured/NewFeatures";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import { displayProducts } from "../lib/query";

export const Home = () => {
	useEffect(() => {
		client.fetch(displayProducts).then((data) => console.log(data));
	}, []);

	return (
		<>
			<main>
				<Header />
				<Hero />
				<Feature />
				<NewFeature />
				<BestFeature />
				<Categories />
				<Footer />
			</main>
		</>
	);
};
