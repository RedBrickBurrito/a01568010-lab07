import "./index.css";
import Product from "../../types/Product";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

interface ProductPreviewProps {
    product: Product;
}

/**
 * Product preview elements
 * @returns ProductPreview UI elements
 */
const ProductPreview: React.FC<ProductPreviewProps> = (props) => {
    var listPrice = 0.0;
    if (
        props.product !== undefined &&
        props.product.childSkus !== undefined &&
        props.product.childSkus[0] !== undefined
    ) {
        listPrice = props.product.childSkus[0].listPrice;
    }

    var salePrice = 0.0;
    if (
        props.product !== undefined &&
        props.product.childSkus !== undefined &&
        props.product.childSkus[0] !== undefined
    ) {
        salePrice = props.product.childSkus[0].salePrice;
    }

    var mediumImageUrl = "";
    if (
        props.product !== undefined &&
        props.product.childSkus !== undefined &&
        props.product.childSkus[0] !== undefined
    ) {
        mediumImageUrl = props.product.childSkus[0].mediumImageUrl;
    } else {
        mediumImageUrl = "https://dummyimage.com/200x200/000/0011ff"
    }

    return (
        <div className="productPreview">
            <Grid container className="productGrid" spacing={10}>
                <Grid item lg={2}>
                    <Paper className="largeImage">
                        <img src={mediumImageUrl} alt={props.product.name} />
                    </Paper>
                </Grid>
                <Grid item lg={10} container>
                    <Grid item lg={12}>
                        <Typography className="productName" variant="h1">
                            <Link to={`/pdp?productId=${props.product.id}`}>{props.product.name}</Link>
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography className="description">
                            {props.product.description}
                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography className="dollars crossedout">{listPrice}</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography className="dollars">{salePrice}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductPreview;