import CharacterList from "@/components/characterList";
import styles from "./page.module.css";
import SectionHeader from "@/components/sectionHeader";

export default function Home() {
  return (
    <div className={styles.container}>
      <SectionHeader sectionHeaderDescription={"Harry Potter é uma série de livros de fantasia escrita pela autora britânica J. K. Rowling. A série segue a vida de um jovem bruxo chamado Harry Potter e seus amigos Hermione Granger e Ron Weasley, que são estudantes na Escola de Magia e Bruxaria de Hogwarts."}
        sectionHeaderImage={"https://i.pinimg.com/736x/46/73/a0/4673a0ec6774af22af07f8544279d590.jpg"}
        sectionHeaderImageAlt={"Imagem de um filme"}
        sectionHeaderTitle={"Personagens de Harry Potter"} 
      />
      <main className={styles.main}>
        <CharacterList />
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido durante o curso de Desenvolvimento de Sistemas</p>
      </footer>
    </div>
  );
}