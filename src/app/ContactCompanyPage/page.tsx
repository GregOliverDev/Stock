"use client";
import styles from "./page.module.css";
import DivHeader from "../components/HomePage/DivHeader";
import DivFooter from "../components/HomePage/DivFooter";
import ContactCompanyPage from "../components/ContactCompanyPage/ContactCompanyPage";

export default function IntegrationsPage() {
  return (
    <main className={styles.main}>
      <DivHeader />
      <ContactCompanyPage />
      <DivFooter />
    </main>
  );
}
