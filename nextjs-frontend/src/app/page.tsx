import React from 'react';
import HeaderHero from '@/Components/HeaderHero/HeaderHero';
import TextBlock from '@/Components/TextBlock/TextBlock';
import ImageGrid from '@/Components/ImageGrid/ImageGrid';
import Accordion from '@/Components/Accordion/Accordion';

const Home = () => (
	<main>
		<HeaderHero />
		<TextBlock />
		<ImageGrid />
		<Accordion />
	</main>
);
export default Home;
