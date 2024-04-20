import styles from "./DivHome.module.css";
import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { Facebook, GitHub, Instagram, YouTube } from "@mui/icons-material";

export default function DivFooter() {
  return (
    <div className={styles.divFooter}>
        <div className={styles.divImg}>
        <Image
          src="/assets/LogoStockControllerBlack.png"
          alt="logo"
          width={44}
          height={44}
          id={styles.logo}
        />
        <h4 className={styles.h4TitleFooter}>Stock Controller</h4>
        </div>
        <div className={styles.divIcons}>
          <Button
            className={styles.btIcons}
            startIcon={<GitHub />}
            size="large"
          ></Button>
           <Button
            className={styles.btIcons}
            startIcon={<Instagram />}
            size="large"
          ></Button>
           <Button
            className={styles.btIcons}
            startIcon={<Facebook />}
            size="large"
          ></Button>
           <Button
            className={styles.btIcons}
            startIcon={<YouTube />}
            size="large"
          ></Button>
        </div>
      </div>
  );
}
