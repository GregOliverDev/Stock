import { Button } from "@mui/material";
import styles from "./ContactCompanyPage.module.css";
import React from "react";

export default function ContactCompanyPage() {
  return (
    <div className={styles.divMain}>
      <div className={styles.divMainStart}>
        <div className={styles.divText}>
          <h1 className={styles.h1Text}>
            Venha fazer parceria com o Stock Controller e trabalhe conosco
          </h1>
          <h3 className={styles.h3Text}>
            Mande uma proposta atravez desse email
            <h2 className={styles.h2Text}>StockController@GregDev.com</h2>
          </h3>
        </div>
        <Button variant="contained"  href="/" className={styles.btDefaul}>
          Voltar
        </Button>
      </div>
    </div>
  );
}