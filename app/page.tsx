import styles from "./page.module.css";
import { HomePage } from "@/features";
import { AppProvider } from "@/context/context";
export default function Home() {
  return (
    <AppProvider>
      <main className={styles.main}>
        <HomePage />
      </main>
    </AppProvider>
  );
}
