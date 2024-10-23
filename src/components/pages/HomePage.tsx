import { FC } from 'react';
import Welcome from './homeSections/Welcome';
import ImageUploader from './homeSections/ImageUploader ';

const HomePage: FC = () => {
    return <>
    <ImageUploader/>
    <Welcome/>
    </>;
};

export default HomePage;