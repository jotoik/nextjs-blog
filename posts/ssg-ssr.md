---
title: 'Miloin käyttää Staattista Generointia ja milloin Serveripuolen Renderöintiä'
date: '2023-02-06'
---

Suosittelen käyttämään **Staattista generointia** (data kanssa ja ilman dataa) aina kun on mahdollista, koska sivusi rakennetaan kerran ja näyttää sen CDN:n kautta, mikä tekee siitä paljon nopeamman verrattuna siihen, että serveri renderöi sivun jokaisella pyynnöllä.

Voit käyttää Staattista generointia monen tyyppisiin sivuihin, kuten:

- Markkinointi sivut
- Blogi postaukset
- Verkkokaupan tuotelistauksiin
- Dokumentointiin

Sinun tulisi kysyä itseltäsi: "Voinko esirenderöidä tämän sivun **etukäteen** ennen käyttäjän pyyntöä?" Jos vastaus on kyllä, silloin sinun kannattaa käyttää Staattista generointia.

Toisaalta, Staattinen Generointi **ei** ole hyvä idea, jos et pysty esirenderöimään sivua ennen käyttäjän pyyntöä. Ehkä sivusi näyttää toistuvasti päivitettävää dataa ja sivusi sisältö vaihtuu joka pyynnöllä.

Tässä tapauksessa, voit käyttää **Serveripuolen Renderöintiä**. Se on hitaampi, mutta esirenderöity sivu on aina ajan tasalla. Tai voit ohittaa esirenderöinnin ja käyttää käyttäjäpuolen JavaScriptia täyttämään datan.