import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';


const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Consigue la mejor tarjeta <br className='sm:block hidden' /> de crédito en minutos.
        </h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro veniam eaque accusamus quisquam ratione!
</p>
<Button styles='mt-10' />
      </div>
<div className={layout.sectionImg}>
<img src={card} alt="card" className='w-[100%] h-[100%]' />
</div>



    </section>
  )


export default CardDeal