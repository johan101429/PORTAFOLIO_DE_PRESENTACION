import { Mail, Paperclip } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import styles from "./introduction.module.css";
import Container from "./shared/container";

const Introduction = () => {
  return (
    <Container>
      <div className={styles.home} id="home">
        <h3 className={styles.greeting}>Hello I m</h3>
        <h1 className={styles.title}>JOHAN MAURICIO GIL RENDON</h1>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <div className={styles.flexItems}>
          <div className={styles.buttonGroup}>
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" /> Contact Me
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/cv-johan-gil.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paperclip className="mr-2" /> Download CV
            </Link>
          </div>
        </div>
        <Image
          src="/foto.jpg"
          alt="Johan Gil"
          width={180}
          height={180}
          className={styles.avatar}
          priority
        />
      </div>
    </Container>
  );
};

export default Introduction;
