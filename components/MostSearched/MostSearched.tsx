import cn from 'classnames';

import Button from '@components/Button/Button';

import styles from './styles.module.css';
import Link from 'next/link';

export default function MostSearched() {
  return (
    <div className={styles.wrapper}>
      <span>Ou, escolha uma das mais buscadas:</span>

      <div className={styles.terms}>
        <ul>
          <li>
            <Link href="/a-distancia">
              <a>a distância</a>
            </Link>
          </li>
          <li>
            <Link href="/a-confirmar">
              <a>a confirmar</a>
            </Link>
          </li>
          <li>
            <Link href="/a-partir-de">
              <a>a partir de</a>
            </Link>
          </li>
          <li>
            <Link href="/andar-a-pe">
              <a>a pé</a>
            </Link>
          </li>
          <li>
            <Link href="/dar-a-luz">
              <a>dar à luz</a>
            </Link>
          </li>
          <li>
            <Link href="/das-8h-as-18h">
              <a>das 8h às 18h</a>
            </Link>
          </li>
          <li>
            <Link href="/de-segunda-a-sexta">
              <a>de segunda a sexta</a>
            </Link>
          </li>

          <li>
            <Link href="/a-ela">
              <a>a ela</a>
            </Link>
          </li>
          <li>
            <Link href="/a-prazo">
              <a>a prazo</a>
            </Link>
          </li>
          <li>
            <Link href="/a-venda">
              <a>a venda</a>
            </Link>
          </li>
          <li>
            <Link href="/apos-as">
              <a>após as</a>
            </Link>
          </li>
          <li>
            <Link href="/bem-vindo-a">
              <a>bem-vindo a</a>
            </Link>
          </li>
          <li>
            <Link href="/das-8h-as-9h">
              <a>das 8h às 9h</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
