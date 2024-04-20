"use client";
import { Button } from "@mui/material";
import styles from "./DivLogin.module.css";
import Image from "next/image";
import * as React from "react";
import TextField from "@mui/material/TextField";
import NextLink from "next/link";
import { customTheme } from "../CustomTheme/InputTheme";

import {
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";

import { useLoginStore } from "@/app/state/loginState";

export default function DivLogin() {
  const outerTheme = useTheme();
  const alterLogin = useLoginStore((state) => state.alter);

  return (
    <div className={styles.divLogin}>
      <div className={styles.divRegister}>
        <div className={styles.divImg}>
          <Image
            src="/assets/LogoStockController.png"
            alt="logo"
            width={44}
            height={44}
            id={styles.logo}
          />
          <h4 className={styles.h4Title}>Stock Controller</h4>
          <div className={styles.divClose}>
            <h4 className={styles.h4Close}>Fechar</h4>
            <div className={styles.divImgClose}>
              <Image
                src="/assets/IconClose.png"
                alt="imgClose"
                width={15}
                height={15}
                className={styles.imgClose}
                onClick={() => alterLogin(false)}
              />
            </div>
          </div>
        </div>
        <h2 className={styles.h2Text}>Experimente grátis</h2>
        <p className={styles.pText}>Cadastre-se e comece a usar agora mesmo!</p>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            label="CPF / CNPJ"
            variant="standard"
            className={styles.textField}
            InputLabelProps={{
              className: styles.whiteLabel,
            }}
          />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            label="Email"
            type="email"
            variant="standard"
            className={styles.textField}
            InputLabelProps={{
              className: styles.whiteLabel,
            }}
          />
        </ThemeProvider>

        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            label="Password"
            type="Password"
            variant="standard"
            className={styles.textField}
            InputLabelProps={{
              className: styles.whiteLabel,
            }}
          />
        </ThemeProvider>

        <div className={styles.divBt}>
          <Button variant="contained" className={styles.btDefaul}>
            Cadastrar
          </Button>
          <Button
            variant="contained"
            className={styles.btDefaul}
            onClick={() => alterLogin(false)}
            href="/StockHomePage"
            component={NextLink}
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
