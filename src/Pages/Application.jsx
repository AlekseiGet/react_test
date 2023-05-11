import React, { useEffect } from 'react';
import Block from '../components/box/Block';


const Application = () => {
    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
      <div>
        <h1>О том как проходят занятия</h1>
        <Block
          title={"РАСПИСАНИЕ ЗАНЯТИЙ В ЙОГА ЦЕНТРЕ 'Разумное Тело'"}
          text={{
            1: "ПРОСЬБА ЗАПИСЫВАТЬСЯ НА ЗАНЯТИЯ ПО ТЕЛЕФОНУ +7 (8634) 122 22 31",
          }}
        />

        <Block
          title={"Занятия проходят по адрессу : г.Таганрог ул. Пушкина строение 77"}
          text={{
            1: "ПРОСЬБА ЗАПИСЫВАТЬСЯ НА ЗАНЯТИЯ ПО ТЕЛЕФОНУ +7 (8634) 122 22 31",
            2: "понедельник : 17-00 до 19-00",
            3: "среда : 9-00 до 11-00",
            4: "пятница : 17-00 до 19-00",
            5: "С нетерпением ждём нашей встречи !"
          }}
        />
      </div>
    );
};

export default Application;