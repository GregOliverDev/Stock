import { Button, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./StockPage.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { useHeaderState } from "@/app/state/headerOption";
import Product from "@/app/models/Product";
import TextField from "@mui/material/TextField";
import { customTheme } from "../CustomTheme/InputTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";

export default function DivMainStock() {
  const outerTheme = useTheme();
  const alterHeader = useHeaderState((state) => state.alter);
  const [menuProduct, setMenuProduct] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const [filterText, setFilterText] = useState("");

  const alterMenuProduct = () => {
    setMenuProduct(!menuProduct);
  };

  const handleMenuToggle = () => {
    const textName = document.getElementById("textName");
    const textValue = document.getElementById("textValue");
    const textDescri = document.getElementById("textDescri");
    const textUrl = document.getElementById("textUrl");

    if (textName instanceof HTMLInputElement && textName.value.trim() !== "") {
      if (
        textValue instanceof HTMLInputElement &&
        textValue.value.trim() !== ""
      ) {
        if (
          textDescri instanceof HTMLInputElement &&
          textDescri.value.trim() !== ""
        ) {
          if (
            textUrl instanceof HTMLInputElement &&
            textUrl.value.trim() !== ""
          ) {
            const newName = textName.value;
            const newValue = parseFloat(textValue.value);
            const newDescri = textDescri.value;
            const newUrl = textUrl.value;

            const newItems = [...items];

            const newProduct: Product = {
              cod: items.length + 1,
              name: newName,
              description: newDescri,
              value: newValue,
              urlImg: newUrl,
            };
            newItems.push(newProduct);

            setItems(newItems);
            textName.value = "";
            textValue.value = "";
            textDescri.value = "";
            textUrl.value = "";
          }
        }
      }
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().match(new RegExp(filterText.toLowerCase()))
  );

  alterHeader(1);

  return (
    <div className={styles.divMainStock}>
      <div className={styles.divControl}>
        <div className={styles.divFilter}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 310,
            }}
            className={styles.paperSearch}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Filtro Nome"
              inputProps={{ "aria-label": "Filtro Nome" }}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              className={styles.iconSearch}
              onClick={() => setFilterText(filterText)}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Button
            variant="contained"
            className={styles.btDefaul}
            onClick={alterMenuProduct}
          >
            + Add Produto
          </Button>
        </div>
        {filteredItems.map((item) => (
          <div key={item.cod} className={styles.divItem}>
            <img src={item.urlImg} alt={item.name} />
            <div className={styles.divItemText}>
            <p>Nome Produto:<h4 className={styles.h4Text}>{item.name}</h4></p>
            <p>TESTE Git Descrição Produto:<h4 className={styles.h4TextDesc}>{item.description}</h4></p>
            <p>Valor R$:<h4 className={styles.h4Text}>{item.value.toFixed(2)}</h4></p>
            </div>
          </div>
        ))}
      </div>
      {menuProduct && (
        <div className={styles.divRegister}>
          <div className={styles.divRegisterProduct}>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                label="Nome Produto"
                variant="standard"
                className={styles.textField}
                InputLabelProps={{
                  className: styles.whiteLabel,
                }}
                id="textName"
              />
            </ThemeProvider>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                label="Valor"
                variant="standard"
                className={styles.textField}
                InputLabelProps={{
                  className: styles.whiteLabel,
                }}
                type="number"
                inputProps={{
                  step: "0.01",
                  min: "0",
                  max: "9999.99",
                }}
                id="textValue"
              />
            </ThemeProvider>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                label="Descrição"
                variant="standard"
                className={styles.textField}
                InputLabelProps={{
                  className: styles.whiteLabel,
                }}
                id="textDescri"
              />
            </ThemeProvider>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                label="Url Imagem"
                variant="standard"
                className={styles.textField}
                InputLabelProps={{
                  className: styles.whiteLabel,
                }}
                id="textUrl"
              />
            </ThemeProvider>
            <div className={styles.divBts}>
              <Button
                variant="contained"
                className={styles.btDefaul}
                onClick={() => {
                  alterMenuProduct();
                  handleMenuToggle();
                }}
              >
                Gravar
              </Button>
              <Button
                variant="contained"
                className={styles.btDefaulCancel}
                onClick={alterMenuProduct}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
