import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
<img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
<div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

      </div>
      <div className={layout.sectionInfo}>
<h2 className={styles.heading2}>
Controla tus facturas <br className='sm:block hidden' /> de forma muy sencilla.
</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ut, cum quam nesciunt temporibus animi tempore cumque quos doloribus explicabo quae, eius sit quo est quia iusto laboriosam nostrum officia?
</p>
<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
  <img src={apple} alt="apple_store" className='w-[128px] h-[42px] mr-5 cursor-pointer object-contain' />
  <img src={google} alt="Google_play" className='w-[128px] h-[42px] cursor-pointer object-contain' />
</div>
      </div>
    </section>
  )


export default Billing