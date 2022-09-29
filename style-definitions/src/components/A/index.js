import styles from './styles.module.css'

console.log("A",styles)

function A() {
  return (
    <div className={styles.title}>A</div> // 'title'
    //className'i unique olarak atamaz isek css dosyaları çakışabiliyor
    //bu sebeple modüler css kullanabiliriz bunun için css dosyasına styles.module.css şeklinde isim verip
    //daha sonra className tanımlamasında obje şeklinde {styles.title} tanımlama yapmamız gerekiyor.
  )
}

export default A