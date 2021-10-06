import "./index.css";
import Product from "../../types/Product";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  ListItemText,
  Divider,
  InputLabel,
  Select,
  MenuItem,
  Button,
  List
} from "@material-ui/core";
import React from "react";

interface ProductInfoProps {
  product: Product;
}

/**
 * Product info elements
 * @returns ProductInfo UI elements
 */
const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  var listPrice = 0.00;
  if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
    listPrice = props.product.childSkus[0].listPrice;
  }

  var salePrice = 0.00;
  if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
    salePrice = props.product.childSkus[0].salePrice;
  }

  var colors: any[] = [];
  var sizes: any[] = [];
  var comments: any[] = [];

  var selectedColor = "";
  var selectedSize = "";
  if (props.product !== undefined && props.product.childSkus !== undefined) {
    selectedColor = props.product.childSkus[0].color;
    props.product.childSkus.forEach((sku) => {
      colors.push(<MenuItem value={sku.color}>{sku.color}</MenuItem>);
    });

    selectedSize = props.product.childSkus[0].size;
    props.product.childSkus.forEach((sku) => {
      sizes.push(<MenuItem value={sku.size}>{sku.size}</MenuItem>);
    });

    props.product.comments.forEach((comment) => {
      comments.push(
        <React.Fragment>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={comment.author}
              secondary={
                <React.Fragment>
                  <Typography>
                    {comment.body}
                  </Typography>
                  {comment.created}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      );
    });
  }

  var largeImageUrl = "";
  if (
    props.product !== undefined &&
    props.product.childSkus !== undefined &&
    props.product.childSkus[0] !== undefined
  ) {
    largeImageUrl = props.product.childSkus[0].largeImageUrl;
  } else {
    largeImageUrl = "https://dummyimage.com/500x500/000/0011ff"
  }

  return (
    <div className="productInfo">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={4}>
          <Paper className="largeImage">
            <img
              src={largeImageUrl}
              alt={props.product.name}
            />
          </Paper>
        </Grid>

        <Grid item lg={8} container>
          <Grid item lg={12}>
            <Typography className="productName" variant="h1">
              {props.product.name}
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography>
              {props.product.description}
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">{listPrice}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars">{salePrice}</Typography>
          </Grid>
          <Grid item lg={8} />
          <Grid item lg={2}>
            <InputLabel className="productLabel" id="color-label">
              Color
            </InputLabel>
            <Select className="selectLabel" labelId="color-label" id="color-select" label="Color" value={selectedColor}>
              {colors}
            </Select>
          </Grid>
          <Grid item lg={2}>
            <InputLabel className="productLabel" id="size-label">
              Size
            </InputLabel>
            <Select className="selectLabel" labelId="size-label" id="size-select" label="Size" value={selectedSize}>
              {sizes}
            </Select>
          </Grid>
          <Grid item lg={8} />
          <Grid item lg={2}>
            <InputLabel className="productLabel" id="quantity-label">
              Quantity
            </InputLabel>
            <Select className="selectLabel" labelId="quantity-label" id="quantity-select" label="Quantity" value={1}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={10} />

          <Grid item lg={4}>
            <Button className="addCartButton" variant="contained">
              Add to Cart
            </Button>
          </Grid>

          <Grid item lg={12} />
        </Grid>
      </Grid>
      <Grid container className="commentGrid" spacing={2}>
        <Grid item lg={4}>
          <Typography variant="h3" className="comment-title">Comments</Typography>
        </Grid>
        <Grid item lg={8} />
        <Grid item lg={12}>
          <List>
            {comments}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;
