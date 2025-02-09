import Image from 'next/image'
import styles from './performance.module.css'

function Performance() {
  return (
    <section className={styles.performance}>
        <div className='container'>
            <div className={styles.performanceContent}>
                <div className={styles.performanceLeft}>
                    <Image src={"/images/Group-5367.png"} alt='image' width={524} height={630}/>
                </div>
                <div className={styles.performanceRight}>
                    <h3 className={styles.performanceRightTitle}>Get to Know Us</h3>
                    <h4 className={styles.performanceRightSubTitle}>
                    Welcome to <span>Wolf Shadow</span> Fab & <br/> Performance
                    </h4>
                    <p className={styles.performanceRightDesc}>
                    Where passion meets precision. Since 1995, we've been <br/> redefining vehicle modification. Our friendly team of <br/> professionals shares a love for automotive mastery. <br/> We set trends with innovative excellence, ensuring your <br/> vehicle stands out. Elevate your ride with our <br/> commitment to precision. Join us on a journey where <br/> your automotive dreams become reality.
                    </p>
                    <p className={styles.performanceRightDesc}>
                    Where passion meets precision. Since 1995, we've been <br/> redefining vehicle modification. Our friendly team of <br/> professionals shares a love for automotive mastery. <br/> We set trends with innovative excellence, ensuring your <br/> vehicle stands out. Elevate your ride with {" >"}.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Performance
