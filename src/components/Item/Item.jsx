import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Item = ({ product }) => {
  return (
    <Card sx={{ width: 250, m: 2, color: "#2E475D" }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {product.name}
          </Typography>
          <Typography variant="body1">Precio: ${product.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
