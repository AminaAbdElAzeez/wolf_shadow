import Image from 'next/image'
import styles from './sent.module.css'
import ProfileTitle from '../profileTitle/profileTitle'

function Sent() {
  return (
    <section className={styles.sent}>
      <div className='container'>
        <div className={styles.sentContent}>
        <Image src={"/images/sent.png"} alt='image' width={500} height={340} className={styles.sentImg}/>
        <ProfileTitle subTitle="Message sent" text={{ textAlign: "center" }} title="sent successfully" 
        desc={`Your message was sent successfully, and we will reach you ASAP `} />
        <button className={styles.btn}>Done</button>
        </div>
      </div>
    </section>
  )
}

export default Sent
