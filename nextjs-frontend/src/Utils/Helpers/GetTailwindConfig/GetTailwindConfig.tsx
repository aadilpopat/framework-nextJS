import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/../tailwind.config';

const GetTailwindConfig = () => resolveConfig(tailwindConfig);

export default GetTailwindConfig;
