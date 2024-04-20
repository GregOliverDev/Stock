"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import styles from "./DivHome.module.css";
import { useLoginStore } from "@/app/state/loginState";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { useIntegrationsOption } from "@/app/state/integrationOption";
import { useHeaderState } from "@/app/state/headerOption";

export default function DivHeader() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const alterLogin = useLoginStore((state) => state.alter);
  const alterIntOption = useIntegrationsOption((state) => state.alter);
  const headerOption = useHeaderState((state) => state.headerOption);

  const handleMenuToggle = () => {
    setMenuExpanded(!menuExpanded);
  };
  if (headerOption == 0) {
    return (
      <div className={styles.divHeader}>
        <div className={styles.divImg}>
          <Image
            src="/assets/LogoStockController.png"
            alt="logo"
            width={44}
            height={44}
            id={styles.logo}
          />
          <Link className={styles.h4Title} href="/" component={NextLink}>
            Stock Controller
          </Link>
        </div>
        <div className={styles.divUl}>
          <ul className={styles.ulHeader}>
            <li className={styles.liHeader}>
              <div className={styles.divIntegrations}>
                <a className={styles.aLiHeader}>Integrações</a>
                <Image
                  src="/assets/seta-para-baixo-black.png"
                  alt="arrow"
                  width={15}
                  height={15}
                  className={styles.arrow}
                />
              </div>
              <div className={styles.divHidden}>
                <Link
                  className={styles.aHidden}
                  href="/IntegrationsPage"
                  component={NextLink}
                  onClick={() => alterIntOption(0)}
                >
                  ERPs integrados
                </Link>
                <Link
                  className={styles.aHidden}
                  href="/IntegrationsPage"
                  component={NextLink}
                  onClick={() => alterIntOption(1)}
                >
                  Lojas virtuais
                </Link>
              </div>
            </li>
            <li className={styles.liHeader}>
              <Link className={styles.aLiHeader} href="/ContactCompanyPage" component={NextLink}>
                Contatar Empresa
              </Link>
            </li>
            <li className={styles.liHeader}>
              <Button
                variant="contained"
                className={styles.btDefaul}
                onClick={() => alterLogin(true)}
              >
                Cadastrar-se / Entrar
              </Button>
            </li>
          </ul>
          <div className={styles.divMenu} onClick={handleMenuToggle}>
            <h4 className={styles.h4Menu}>Menu</h4>
            <Image
              src="/assets/menu.png"
              alt="menu"
              width={22}
              height={22}
              className={styles.imgMenu}
            />
          </div>
          {menuExpanded && (
            <div className={styles.divMenuExpanded}>
              <ul className={styles.ulMenu}>
                <li className={styles.liMenu}>
                  <a className={styles.aMenu}>
                    Integrações
                    <Image
                      src="/assets/seta-para-baixo.png"
                      alt="arrow"
                      width={20}
                      height={20}
                      className={styles.arrow}
                    />
                  </a>
                  <div className={styles.divHiddenMenu}>
                    <Link
                      className={styles.aHidden}
                      href="/IntegrationsPage"
                      component={NextLink}
                      onClick={() => {
                        alterIntOption(0);
                        handleMenuToggle();
                      }}
                    >
                      ERPs integrados
                    </Link>
                    <Link
                      className={styles.aHidden}
                      href="/IntegrationsPage"
                      component={NextLink}
                      onClick={() => {
                        alterIntOption(1);
                        handleMenuToggle();
                      }}
                    >
                      Lojas virtuais
                    </Link>
                  </div>
                </li>
                <li className={styles.liMenu}>
                  <Link className={styles.aMenu} href="/ContactCompanyPage" component={NextLink}>
                    Contatar Empresa
                  </Link>
                </li>
                <li className={styles.liMenu}>
                  <Button
                    variant="contained"
                    className={styles.btDefaul}
                    onClick={() => alterLogin(true)}
                  >
                    <a>Cadastrar-se / Entrar</a>
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  } else if (headerOption == 1) {
    return (
      <div className={styles.divHeaderStock}>
        <div className={styles.divImg}>
          <Image
            src="/assets/LogoStockController.png"
            alt="logo"
            width={44}
            height={44}
            id={styles.logo}
          />
          <Link className={styles.h4Title} href="/" component={NextLink}>
            Stock Controller
          </Link>
        </div>
        <div className={styles.divMenuStock}>
            <h4 className={styles.h4Menu}>Menu</h4>
            <Image
              src="/assets/menu.png"
              alt="menu"
              width={22}
              height={22}
              className={styles.imgMenu}
            />
          </div>
      </div>
    );
  }
}
