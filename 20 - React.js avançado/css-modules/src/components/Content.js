import style from './Content.module.css'

const Content = () => {
   return (
      <section className={style.content}>
         <h2>Titulo</h2>
         <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
         <button className={style.btn}>Outro botao de teste</button>
      </section>
   )
}

export default Content