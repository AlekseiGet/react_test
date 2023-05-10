import React, { useEffect } from 'react';


const Error = () => {

    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
        <div>
            <h1>Ошибка</h1>
            <h1>Страница находится в разработке</h1>
        </div>
    );
};

export default Error;