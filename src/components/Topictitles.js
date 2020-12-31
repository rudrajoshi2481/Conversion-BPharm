import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../App.css";
function Topictitles() {
  return (
    <div className="topictitles-container">
      <div className="topic-cards-topic-titles">
        <CardComponent
          title={"Metric Conversion"}
          description={
            "To Convert Grams to MiliGrams,KiloGrams,Ounce,Pound,tonnes"
          }
          pageLink={"metric-conversion"}
        />
      </div>
      <div className="topic-cards-topic-titles">
        <CardComponent
          title={"Pediatric Dose Calculation"}
          description={
            "To calculate the use of dosage According to years, Months, Weights"
          }
          pageLink={"dosage-forms"}
        />
      </div>
    </div>
  );
}

const CardComponent = (props) => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <Link style={{ textDecoration: "none" }} to={`conversion/${props.pageLink}`}>
        <Button size="large" variant="contained" color="secondary">
          Open / Use
        </Button>
      </Link>
    </Card>
  );
};

export default Topictitles;
