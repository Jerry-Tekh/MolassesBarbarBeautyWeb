import { splitImages } from '../../data/media';
import styles from './BarberBeauty.module.css';

export default function BarberBeauty() {
  return (
    <section id="barber-beauty" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>More than a barbershop</h2>
          <p className={styles.copy}>
            Molasses brings traditional barbering craft and dedicated beauty styling together
            under one welcoming {`Kirkwood`} roof.
          </p>
        </div>

        <div className={styles.split}>
          <article className={styles.half}>
            <div className={styles.imageWrap}>
              <img src={splitImages.barber.src} alt={splitImages.barber.alt} loading="lazy" />
            </div>
            <h3>Barber craft</h3>
            <p>
              Cuts, fades, tapers, beard trims, razor lineups, and hot towel treatments from
              barbers who take pride in every line.
            </p>
          </article>

          <article className={styles.half}>
            <div className={styles.imageWrap}>
              <img src={splitImages.beauty.src} alt={splitImages.beauty.alt} loading="lazy" />
            </div>
            <h3>Beauty and styling</h3>
            <p>
              Protective styles, detailed parting, braiding, and hair care in a calm, personal
              setting.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
