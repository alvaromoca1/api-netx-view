import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

function Home({datos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Productos <a href="https://alandina.com">Alandina.com</a>
        </h1>

        <div className={styles.grid}>
          {console.log(datos.data)}
          {datos.data.map(artigo =>(
            <a key={artigo.id} href="#!" className={styles.card}>
              <figure className={styles.imgproducto}>
                <img src={artigo.image}/>
              </figure>
              <h3>{artigo.name}</h3>
              <p className={styles.descripcion}>{artigo.description}</p>
            </a>
          ))}

        </div>
      </main>
    </div>
  )
}
Home.getInitialProps = async ()=>{
    const response = await axios.get(
        'https://alandina.com/api/products'
    );
    return {datos: response.data}
};
export default  Home;
