import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../components/layout.module.css';
import Footer from '../components/Footer';

export default function Rekisteri() {
    return (
      <>
        <div className={styles.container}>
          <Head>
            <title>Tietosuojarekisteri</title>
          </Head>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Rekisteri- ja tietosuojaseloste</h2>
          </section>
          <section className={utilStyles.headingMd}>
              <p>Tämä on Yrityksen EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste. Laadittu 11.02.2023. Viimeisin muutos 11.02.2023.</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>1. Rekisterinpitäjä</h2>
            <ul>
              <li>Tmi JHK Toikkanen</li>
              <li>2016662-2</li>
              <li>Huhtasuonkatu 22, 40320 Jyväskylä</li>
            </ul>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>2. Rekisteristä vastaava yhteyshenkilö</h2>
            <p>Joni Toikkanen, jhk.toikkanen(at)gmail.com</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>3. Rekisterin nimi</h2>
            <p>Verkkopalvelun käyttäjärekisteri</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus</h2>
            <p>EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on:</p>
            <ul>
              <li>henkilön suostumus (dokumentoitu, vapaaehtoinen, yksilöity, tietoinen ja yksiselitteinen)</li>
              <li>sopimus, jossa rekisteröity on osapuolena</li>
              <li>julkisen tehtävän hoitaminen, tai</li>
              <li>rekisterinpitäjän oikeutettu etu (esim. asiakassuhde ennen sopimusta, työsuhde, jäsenyys).</li>
            </ul>
            <p>Henkilötietojen käsittelyn tarkoitus on yhteydenpito asiakkaisiin, asiakassuhteen ylläpito, markkinointi tms.</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>5. Rekisterin tietosisältö</h2>
            <p>Rekisteriin tallennettavia tietoja ovat: henkilön nimi, asema, yritys/organisaatio, yhteystiedot (puhelinnumero, sähköpostiosoite, osoite), www-sivustojen osoitteet, verkkoyhteyden IP-osoite, tunnukset/profiilit sosiaalisen median palveluissa, tiedot tilatuista palveluista ja niiden muutoksista, laskutustiedot, muut asiakassuhteeseen ja tilattuihin palveluihin liittyvät tiedot.</p>
            <p>Verkkosivuston vierailijoiden IP-osoitteita ja palvelun toiminnoille välttämättömiä evästeitä käsitellään oikeutetun edun perusteella mm. tietoturvasta huolehtimiseksi ja sivuston vierailijoiden tilastotietojen keruuta varten niissä tapauksissa, kun niiden voidaan katsoa olevan henkilötietoja. Kolmansien osapuolten evästeille pyydetään tarvittaessa suostumus erikseen.</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>6. Säännönmukaiset tietolähteet</h2>
            <p>Rekisteriin tallennettavat tiedot saadaan asiakkaalta mm. www-lomakkeilla lähetetyistä viesteistä, sähköpostitse, puhelimitse, sosiaalisen median palvelujen kautta, sopimuksista, asiakastapaamisista ja muista tilanteista, joissa asiakas luovuttaa tietojaan.</p>
            <p>Yritysten ja muiden organisaatioiden yhteyshenkilöiden tietoja voidaan kerätä myös julkisista lähteistä kuten verkkosivuilta, hakemistopalveluista ja muilta yrityksiltä.</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
            <p>Tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja voidaan julkaista siltä osin kuin niin on sovittu asiakkaan kanssa.</p>
            <p>Tietoja voidaan siirtää rekisterinpitäjän toimesta myös EU:n tai ETA:n ulkopuolelle.</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>8. Rekisterin suojauksen periaatteet</h2>
            <p>Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Kun rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä, että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden työntekijöiden toimesta, joiden työnkuvaan se kuuluu.</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h2>
            <p>Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h2>
            <p>Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).</p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingMd}>10. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h2>
            <p>Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien henkilötietojen poistamiseen rekisteristä ("oikeus tulla unohdetuksi"). Niin ikään rekisteröidyillä on muut EU:n yleisen tietosuoja-asetuksen mukaiset oikeudet kuten henkilötietojen käsittelyn rajoittaminen tietyissä tilanteissa. Pyynnöt tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).</p>
          </section>
          <div className={styles.backToHome}>
            <Link href="/">← Takaisin etusivulle</Link>
          </div>
        </div>
        <Footer/>
      </>
    );
  }