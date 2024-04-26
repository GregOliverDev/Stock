import { Button } from "@mui/material";
import styles from "./DivHome.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { useLoginStore } from "@/app/state/loginState";
import DivItemPlan from "../PlanItem/DivItemPlan";
import { useItemPlanStore } from "@/app/state/itemPlan";

export default function DivMain() {
  const [selectedPlano1, setSelectedPlano1] = useState(false);
  const [selectedPlano2, setSelectedPlano2] = useState(false);
  const [selectedPlano3, setSelectedPlano3] = useState(false);
  
  const alterLogin = useLoginStore((state) => state.alter);
  const alterItemPlan = useItemPlanStore((state) => state.alter);

  const toggleSelecionado = (plano: number) => {
    switch (plano) {
      case 1:
        setSelectedPlano1(!selectedPlano1);
        setSelectedPlano2(false);
        setSelectedPlano3(false);
        break;
      case 2:
        setSelectedPlano1(false);
        setSelectedPlano2(!selectedPlano2);
        setSelectedPlano3(false);
        break;
      case 3:
        setSelectedPlano1(false);
        setSelectedPlano2(false);
        setSelectedPlano3(!selectedPlano3);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.divMain}>
      <div className={styles.divMainStart}>
        <div className={styles.divText}>
          <h1 className={styles.h1Text}>Gerencie seu estoque e venda online</h1>
          <h3 className={styles.h3Text}>
            Com o sistema de controle de estoque, você organiza os seus
            produtos, economiza tempo e evita erros integrando tudo ao seu ERP e
            suas lojas virtuais.
          </h3>
          <Button
            variant="contained"
            className={styles.btDefaul}
            onClick={() => alterLogin(true)}
          >
            <a>Cadastrar-se / Entrar</a>
          </Button>
        </div>
        <div className={styles.divMainImg}>
          <Image
            src="/assets/Img1.png"
            width={600}
            height={400}
            alt="ImgSystem"
            id={styles.imgSystem}
          />
        </div>
      </div>
      <div className={styles.divPlan}>
        <div className={styles.divText}>
          <h1 className={styles.h1TextPlan}>Planos e Preços</h1>
        </div>
        <div className={styles.divSelectPlan}>
          <div
            className={`${styles.divSelectItem} ${
              selectedPlano1  ? styles.divSelected : ""
            } ${selectedPlano1  ? styles.divSelectedBorder : ""}`}
            onClick={() => {
              toggleSelecionado(1); 
              alterItemPlan(0);
            }}
          >
            <Image
              src="/assets/prata.png"
              width={80}
              height={80}
              alt="ImgSystem"
              className={styles.imgPlan}
            />
            Prata
          </div>
          <div
           className={`${styles.divSelectItem} ${
            selectedPlano2 ? styles.divSelected : ""
          } ${selectedPlano2 ? styles.divSelectedBorder : ""}`}
          onClick={() => {
            toggleSelecionado(2); 
            alterItemPlan(1);
          }}
          >
            <Image
              src="/assets/ouro.png"
              width={80}
              height={80}
              alt="ImgSystem"
              className={styles.imgPlan}
            />
            Ouro
          </div>
          <div
            className={`${styles.divSelectItem} ${
              selectedPlano3 ? styles.divSelected : ""
            } ${selectedPlano3 ? styles.divSelectedBorder : ""}`}
            onClick={() => {
              toggleSelecionado(3);
              alterItemPlan(2);
            }}
          >
            <Image
              src="/assets/diamante.png"
              width={80}
              height={80}
              alt="ImgSystem"
              className={styles.imgPlan}
            />
            Diamante
          </div>
        </div>
        <div className={styles.divItemSelect}>
          <DivItemPlan />
        </div>
      </div>
    </div>
  );
}
