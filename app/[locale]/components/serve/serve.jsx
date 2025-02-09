import Image from 'next/image'
import styles from './serve.module.css'
import ProfileTitle from '../profileTitle/profileTitle'

function Serve() {
  return (
    <section className={styles.sent}>
      <div className='container'>
        <div className={styles.sentContent}>
        <Image src={"/images/serve.png"} alt='image' width={500} height={340} className={styles.sentImg}/>
        <ProfileTitle subTitle="Pending request" text={{ textAlign: "center" }} title="Served successfully" 
        desc={`Please be patient, Until we reach you in ASAP `} />
          <button className={styles.btn}>Done</button>
        </div>
      </div>
    </section>
  )
}

export default Serve
