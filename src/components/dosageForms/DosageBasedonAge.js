import React from "react";
import "../../App.css";
import { TextField,Select,MenuItem,Breadcrumbs } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

function DosageFormConversion() {
  const [age, setAge] = React.useState("5");
  const [dosage, setDosage] = React.useState("200");
  const [basedOn, setBasedOn] = React.useState("Age");
  return (
    <div className="dosage-form-conversion">
      <h1>  <Link to="/topics">
          <ArrowBackIcon />
        </Link>   Pediatric Dose Calculation </h1>
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/topics" style={{ textDecoration: "none" }}>
          Topics
        </Link> <Link
          style={{ textDecoration: "none" }}
          color="inherit"
          href="/getting-started/installation/"
          to="/conversion/metric-conversion"
        >
          Based on {basedOn}
        </Link></Breadcrumbs>
      <Select
        id="demo-simple-select"
        value={basedOn}
        onChange={(e) => setBasedOn(e.target.value)}
        variant="filled"
      >
        {" "}
        <MenuItem value={"Age"}>Age</MenuItem>
        <MenuItem value={"Weight"}>Weight</MenuItem>
        <MenuItem value={"Body-Surface"}>Body Surface</MenuItem>
      </Select>
      <br />
      {basedOn === "Age" ? (
        <div>
          <h3>Based on Age</h3>
          <TextField
            style={{ marginLeft: "15px", marginTop: "5px" }}
            label="Age in Years"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            variant="outlined"
          />
          <TextField
            style={{ marginLeft: "15px", marginTop: "5px" }}
            label="Adult Dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            type="number"
            variant="outlined"
          />
          <Youngsformula age={age} dosage={dosage} />
          <br />
          <DillingsFormula age={age} dosage={dosage} />
          <br />
          <CowlingsFormula age={age} dosage={dosage} />
          <br />
          <FriedFormula age={age} dosage={dosage} />

<br />
<br />
<br />
<br />
          
        </div>
      ) : null}
      {
          basedOn === 'Weight' ? <div><h3>Based on Weight</h3><span>In Development</span>
          </div> :null
      }
      {
          basedOn === 'Body-Surface' ? <div><h3>Based on Surface area</h3><span>In Development</span>
          </div> :null
      }
      
      
    </div>
  );
}

const Youngsformula = (props) => {
  return (
    <div>
      <h4>Youngs Formula</h4>
      {props.age <= 12 ? (
        <div
          style={{
            backgroundColor: "#70af85",
            paddingBottom: "15px",
            paddingTop: "5px",
            paddingLeft: "15px",
            margin: "5px",
          }}
        >
          <h6>Applicable</h6>Dose for Child =
          {(props.age / props.age + 12) * props.dosage}
        </div>
      ) : (
        "NOT Applicable"
      )}
    </div>
  );
};

const DillingsFormula = (props) => {
  return (
    <div>
      <h4>Dillings Formula</h4>
      {props.age && props.age >= 4 && props.age <= 20 ? (
        <div
          style={{
            backgroundColor: "#70af85",
            paddingBottom: "15px",
            paddingTop: "5px",
            paddingLeft: "15px",
            margin: "5px",
          }}
        >
          <h6>Applicable</h6>Dose for Child = {(props.age / 20) * props.dosage}
        </div>
      ) : (
        "Not Applicable"
      )}
    </div>
  );
};

const CowlingsFormula = (props) => {
  return (
    <div>
      <h4>Cowlings Formula</h4>
      {props.age? (
        <div
          style={{
            backgroundColor: "#70af85",
            paddingBottom: "15px",
            paddingTop: "5px",
            paddingLeft: "15px",
            margin: "5px",
          }}
        >
          <h6>Applicable</h6>Dose for Child ={" "}
          {((props.age + 1) / 24) * props.dosage}
        </div>
      ) : (
        "Not Applicable"
      )}
    </div>
  );
};

const FriedFormula = (props) => {
  return (
    <div>
      <h4>Fried's Formula</h4>
      {props.age && props.age <= 2 ? (
        <div
          style={{
            backgroundColor: "#70af85",
            paddingBottom: "15px",
            paddingTop: "5px",
            paddingLeft: "15px",
            margin: "5px",
          }}
        >
          <h6>Applicable</h6>Dose for Child ={" "}
          {((props.age * 12) / 150) * props.dosage}
        </div>
      ) : (
        "Not Applicable"
      )}
    </div>
  );
};

export default DosageFormConversion;
