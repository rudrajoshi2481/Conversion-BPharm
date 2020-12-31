import React from "react";
import { Link } from "react-router-dom";
import {
  Select,
  MenuItem,
  Breadcrumbs,
  Button,
  Typography,
  TextField,
  Badge,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
function MetricConversion() {
  const [UnitSelected, setUnitSelected] = React.useState("Mass");

  return (
    <div className="metric-form-conversion-container">
      <h1>
        <Link to="/topics">
          <ArrowBackIcon />
        </Link>{" "}
        Metric Conversion
      </h1>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/topics" style={{ textDecoration: "none" }}>
          Topics
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          color="inherit"
          href="/getting-started/installation/"
          to="/conversion/metric-conversion"
        >
          Units (mass / length )
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          color="inherit"
          href="/getting-started/installation/"
          to="/conversion/metric-conversion"
        >
          {UnitSelected}
        </Link>
      </Breadcrumbs>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Select
          value={UnitSelected}
          onChange={(e) => setUnitSelected(e.target.value)}
          variant="filled"
        >
          <MenuItem value={"Mass"}>Mass</MenuItem>
          <MenuItem value={"Length"}>Length</MenuItem>
        </Select>
      </div>

      <hr />

      <div>
        <RenderUnit unit={UnitSelected} />
      </div>
    </div>
  );
}

const RenderUnit = (props) => {
  if (props.unit === "Mass") {
    return <Mass />;
  }
  if (props.unit === "Length") {
    return <Length />;
  }

  return null;
};

const Mass = () => {
  const massUnit = ["t", "kg", "hg", "dag", "g", "dg", "cg", "mg", "mcg"];
  const [value, setValue] = React.useState(1);
  const [selectedUnit, setSelectedUnit] = React.useState("g");

  const UnitDiffrenceFinder = (convertTo) => {
    // let diffCount = BigInt(5555555555555555);
    // array starts with 0 so count starts with 1
    let tmpCount = 1;
    let tmpCount02 = 1;
    let positionOfSelectedUnit = 0;
    // first count of enter variable
    let ConvertToPosition = 0;
    // second to count variable
    let diffSum = 0;
    let ans = 0;

    // find the position of selected unit
    const posSelecteUnit = () => {
      tmpCount = 1;
      massUnit.forEach((e) => {
        if (e === selectedUnit) {
          return (positionOfSelectedUnit = tmpCount);
        }
        tmpCount++;
      });
    };

    // find position of convertT unit
    const posConvertToUnit = () => {
      tmpCount02 = 1;
      // console.log('SOMETHING HAPPNED',tmpCount02,"CONVERT TO",convertTo);
      massUnit.forEach((e) => {
        if (e === convertTo) {
          return (ConvertToPosition = tmpCount02);
        }
        tmpCount02++;
      });
    };

    const valueAns = () => {
      let tmpdiff = 0;

      tmpdiff = positionOfSelectedUnit - ConvertToPosition;

      diffSum = tmpdiff;
      //   console.log(tmpdiff,convertTo);

      if (tmpdiff >= 0) {
        let countZero = 0;
        console.log("POSITIVE");
        // if positive then multipy
        switch (tmpdiff) {
          case 1:
            countZero = 10;
            break;
          case 2:
            countZero = 100;
            break;
          case 3:
            countZero = 1000;
            console.log("One");
            break;
          case 4:
            countZero = 1000000;
            console.log("One");
            break;
          case 5:
            countZero = 1000000000000;
            break;
          default:
            countZero = "Invalid";
        }

        return (diffSum = value / countZero);
      } else {
        let countZero = 0;
        switch (tmpdiff) {
          case -1:
            countZero = 10;
            break;
          case -2:
            countZero = 100;
            break;
          case -3:
            countZero = 1000;
            console.log("One");
            break;
          case -4:
            countZero = 1000000;
            console.log("One");
            break;
          case -5:
            countZero = 1000000000000;
            break;
          default:
            countZero = "Invalid";
        }

        return (diffSum = value * countZero);

        // if negative then divide
      }
    };

    posSelecteUnit();
    posConvertToUnit();
    valueAns();

    console.log(diffSum);
    return diffSum;
    // return ans
  };

  return (
    <div>
      <h3>mass</h3>
      <form noValidate autoComplete="off">
        <TextField
          label="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="number"
          variant="outlined"
        />
        <Select
          id="demo-simple-select"
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
          variant="filled"
        >
          <MenuItem value={"t"} disabled>
            Metric ton
          </MenuItem>
          <MenuItem value={"kg"}>KiloGram</MenuItem>
          <MenuItem value={"hg"}>HectoGram</MenuItem>
          <MenuItem value={"dag"}>Dekagram</MenuItem>
          <MenuItem value={"g"}>Gram</MenuItem>
          <MenuItem value={"dg"}>DeciGram</MenuItem>
          <MenuItem value={"cg"}>Centigram</MenuItem>
          <MenuItem value={"mg"}>MilliGram</MenuItem>
          <MenuItem value={"mcg"}>Microgram</MenuItem>
          <MenuItem value={"ounce"}>
            Ounce
          </MenuItem>
          <MenuItem value={"pounds"} disabled={true}>
            Pounds /lbs
          </MenuItem>
        </Select>
      </form>
      <div>
      <div style={{padding:'1em',margin:'1em',color:'tomato'}}>
      *Nan Means Unit Selected
      </div>

      {
        selectedUnit === 'ounce' ?  <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "5px",
          marginTop: "5px",
        }}
      >
        {/* <span className="metricConversion-span">
          MetricTon = {UnitDiffrenceFinder("t")}
        </span> */}
        <span className="metricConversion-span">
          {" "}
          Kilogram = {(value * 28.35)/ 1000}
          

        </span>

        <span className="metricConversion-span">
          HectoGram = {(value * 28.35)/ 100}
        </span>
        <span className="metricConversion-span">
          Dekagram = {(value * 28.35)/ 10}
        </span>
        <span className="metricConversion-span">
          Grams = {(value * 28.35)}
        </span>
        <span className="metricConversion-span">
          DeciGram = {(value * 28.35)* 10}
        </span>

        <span className="metricConversion-span">
          centigram = {(value * 28.35)* 100}
        </span>
        <span className="metricConversion-span">
          Milligram = {(value * 28.35)* 1000}
        </span>
        {/* <span className="metricConversion-span">
          MicroGram = {UnitDiffrenceFinder("mcg")}
        </span> */}
      </div>:null
      }

        {
          selectedUnit !== 'ounce' ? <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingTop: "5px",
            marginTop: "5px",
          }}
        >
          {/* <span className="metricConversion-span">
            MetricTon = {UnitDiffrenceFinder("t")}
          </span> */}
          <span className="metricConversion-span">
            {" "}
            Kilogram = {UnitDiffrenceFinder("kg")}
            

          </span>

          <span className="metricConversion-span">
            HectoGram = {UnitDiffrenceFinder("hg")}
          </span>
          <span className="metricConversion-span">
            Dekagram = {UnitDiffrenceFinder("dag")}
          </span>
          <span className="metricConversion-span">
            Grams = {UnitDiffrenceFinder("g")}
          </span>
          <span className="metricConversion-span">
            DeciGram = {UnitDiffrenceFinder("dg")}
          </span>

          <span className="metricConversion-span">
            centigram = {UnitDiffrenceFinder("cg")}
          </span>
          <span className="metricConversion-span">
            Milligram = {UnitDiffrenceFinder("mg")}
          </span>
          {/* <span className="metricConversion-span">
            MicroGram = {UnitDiffrenceFinder("mcg")}
          </span> */}
        </div> :null
        }
<hr />
{/* OUNCE AND POUNDS */}
          <span className="metricConversion-span">
            
              {/* Ounce = {UnitDiffrenceFinder("g") *1 / 28.35} */}

             {
               selectedUnit !== 'ounce' ? <div>Ounce = {
                selectedUnit === 'g' ? value * 1/ 28.35 : UnitDiffrenceFinder("g") *1 / 28.35 
              }</div>:null
             }
            
          </span>
      </div>
    </div>
  );
};

const Length = () => {
  return (
    <div>
      <h3>Length</h3>
      <span>in Development</span>
    </div>
  );
};

export default MetricConversion;
