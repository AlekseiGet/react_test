import React, { useEffect } from 'react';
import FooterBar from '../components/footer/FooterBar';

const Application = () => {
    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
        <div>
            <h1>Заявка на ...</h1>
            <h1>Страница находится в разработке</h1>
        </div>
    );
};

export default Application;