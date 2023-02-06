---
title: 'Kaksi tapaa tehdä esirenderöinti'
date: '2023-02-05'
---

Next.js pystyy esirenderöimään sivun kahdella tapaa: **Staattinen Generointi** ja **Serveripuolen renderöinti**. Erona on **milloin** se generoi HTML:n sivulle.

- **Staattinen Generointi** on esirenderöintitapa, joka tuottaa HTML:n **buildissa**. Esirenderöityä HTML:ää käytetään _uudelleen_ jokaisella pyynnöllä.
- **Serveripuolen renderöinti** on esirenderöintitapa, joka tuottaa HTML:n **jokaisella pyynnöllä**.

Tärkeintä kuitenkin on, että Next.js antaa sinun **valita**, mitä esirenderöintitapaa käytät milläkin sivulla. Voit tehdä "hybridi" Next.js aplikaation käyttämällä Staattista Generointia suurimpaan osaan sivuista ja muihin sivuihin Serveripuolen Renderöintiä.