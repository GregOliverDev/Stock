"use client";
import styles from "./page.module.css";
import DivHeader from "../components/HomePage/DivHeader";
import DivMainStock from "../components/StockPage/DivMainStock";

export default function StockHomePage() {
  return (
    <main className={styles.main}>
      <DivHeader />
      <DivMainStock />
    </main>
  );
}
