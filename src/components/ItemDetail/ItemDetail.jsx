import { Box, Container, Grid, Typography } from "@mui/material";

const ItemDetail = (props) => {
    const { item } = props;
  return (
    <Container
      sx={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "grey",
      }}
    >
      <Grid container maxWidth="md" spacing={0.5} sx={{ boxShadow: "3" }}>
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetail;
