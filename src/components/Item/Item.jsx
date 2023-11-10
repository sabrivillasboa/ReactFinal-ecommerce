import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Item = ({ product }) => {

  return (
    <Card sx={{ width: 300, m: 2, color:"#2E475D"}}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Precio: ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
