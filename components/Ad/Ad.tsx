import styles from './styles.module.css';

export default function Ad() {
  return (
    <div className={styles.ad}>
      <span className={styles.title}>AD</span>
      <ul className={styles.links}>
        <li className={styles.link}><a href="https://www.amazon.com.br/b?_encoding=UTF8&tag=gnunes-20&linkCode=ur2&linkId=669044cd83489aaa956fb73d6db39044&camp=1789&creative=9325&node=6740748011">100 livros mais vendidos</a></li>
        <li className={styles.link}><a href="https://www.amazon.com.br/b?_encoding=UTF8&tag=gnunes-20&linkCode=ur2&linkId=ba2dfdd2f400d5e70a0864fa65c042a1&camp=1789&creative=9325&node=5308307011">Ebooks Kindle</a></li>
        <li className={styles.link}><a href="https://www.amazon.com.br/kindle-11geracao-preto/dp/B09SWTG9GF?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Y313JAG5R0PV&keywords=kindle&qid=1676290737&sprefix=kindl%2Caps%2C286&sr=8-1&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&linkCode=ll1&tag=gnunes-20&linkId=e98acebc0c0bde6204a240b9e7c365f6&language=pt_BR&ref_=as_li_ss_tl">Kindle 11ª Geração</a></li>
      </ul>
    </div>
  );
}
