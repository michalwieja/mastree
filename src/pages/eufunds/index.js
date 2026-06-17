import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import styles from './styles.module.css'

import HorizontalWrapper from '@/components/horizontal-wrapper'

const EUFunds = () => {
  return (
    <HorizontalWrapper>
      <div className={styles.eufunds}>
        <div className={styles.header}>
          <Link className={styles.back} href={'/'} aria-label="Powrót do strony głównej">
            <ChevronLeft height={48} width={48} />
          </Link>
          <h1>Fundusze Europejskie</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src="/fe.jpg" alt="Fundusze Europejskie" className={styles.image} />
          </div>

          <div className={styles.textContent}>
            <p className={styles.intro}>
              Firma Mastree Maciej Dybula uzyskała dotację z Unii Europejskiej na projekt
              &bdquo;Dywersyfikacja oferty przedsiębiorstwa dzięki nabyciu nowoczesnych środków
              trwałych umożliwiających rozwój rzemiosła.&rdquo;
            </p>

            <section className={styles.section}>
              <h2>Zadania</h2>
              <p>
                W ramach projektu Beneficjent zamierza nabyć nowoczesne środki trwałe,
                w tym: ploter frezujący CNC z funkcją nestingu, odciąg wiórów,
                pilarko-frezarkę, ukośnicę przesuwną, frezarkę górnowrzecionową
                oraz frezarkę do wpustów.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Grupy docelowe</h2>
              <p>
                Klienci indywidualni oraz firmy z sektora meblarskiego i
                budowlano-usługowego z woj. śląskiego i regionów ościennych.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Cele projektu</h2>
              <p>
                Rozwój działalności rzemieślniczej poprzez rozszerzenie oferty o nowe
                produkty i usługi (w tym frezowanie CNC), zwiększenie konkurencyjności
                przedsiębiorstwa oraz wdrożenie nowoczesnych i bardziej efektywnych
                procesów produkcyjnych.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Efekty projektu</h2>
              <p>
                Wprowadzenie nowych produktów (m.in. tory modelarskie, kosze na pranie
                na wymiar), uruchomienie usług frezowania CNC, skrócenie czasu realizacji
                zamówień, redukcja odpadów (min. 15%) oraz zmniejszenie zużycia surowców
                dzięki technologii cyfrowej.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Finansowanie</h2>
              <div className={styles.financing}>
                <div className={styles.financingItem}>
                  <span className={styles.label}>Wartość projektu:</span>
                  <span className={styles.value}>461 548,93 zł</span>
                </div>
                <div className={styles.financingItem}>
                  <span className={styles.label}>Wysokość wkładu Funduszy Europejskich:</span>
                  <span className={styles.value}>392 316,57 zł</span>
                </div>
              </div>
            </section>

            <div className={styles.tags}>
              <span>#FunduszeUE</span>
              <span>#FunduszeEuropejskie</span>
            </div>
          </div>
        </div>
      </div>
    </HorizontalWrapper>
  )
}

export default EUFunds
