import { Box, Container, Grid, Typography } from "@mui/material";
import QuantitySelectorContainer from "../quantitySelector/QuantitySelectorContainer";

const ItemDetail = ({ item, addCart, initial }) => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5fa",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        maxWidth="md"
        sx={{
          display: "flex",
          boxShadow: "3",
          p: "4rem 1rem",
          mt: "8rem",
          backgroundColor: "#f0f0f5",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            sx={{ display: "flex" }}
            component="img"
            height="380"
            src={item.image}
            alt={item.name}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
            component="div"
          >
            <Typography gutterBottom variant="h4" component="div">
              {item.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Autor:
              {item.author}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {item.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Precio: ${item.price}
            </Typography>
            <QuantitySelectorContainer
              stock={item.stock}
              addCart={addCart}
              initial={initial}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetail;
