import { Banner } from '@/Components/Banner'
import styles from './page.module.scss'
import { Categories } from '@/Features/Home/Sections/Categories'
import { ProductsSection } from '@/Features/Home/Sections/Products'
import { Instagram } from '@/Features/Home/Sections/Instagram'
import { ART } from '@/Features/Home/Sections/ART'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <Categories/>

      <ProductsSection title='Best sellers' data={["a;slfd;asljdf", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f"]}/>
      <ProductsSection title='New products' data={["a;slfd;asljdf", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f", "alsjdfasjd;flajsd;f"]}/>
      <ART/>
      <Instagram/>
    </main>
  )
}
