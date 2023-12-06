import React from 'react';
import HeaderHero from '@/Components/HeaderHero/HeaderHero';
import ImageGrid from '@/Components/PageBlocks/ImageGrid/ImageGrid';
import TextBlock from '@/Components/PageBlocks/TextBlock/TextBlock';
import Accordion from '@/Components/PageBlocks/Accordion/Accordion';

const Home = () => (
	<main>
		<HeaderHero />
		<TextBlock />
		<ImageGrid />
		<Accordion />
	</main>
);
export default Home;
