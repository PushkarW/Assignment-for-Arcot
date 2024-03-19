import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import CategoryDistributionChart from "../CategoryDistributionChart";
import ResponseTimesChart from "../ResponseTimesChart";
import UserSatisfactionChart from "../UserSatisfactionChart";
import UsageStatisticsChart from "../UsageStatisticsChart";
import InsightSummeryChart from "../InsightSummeryChart";
import "../Accordion/Accordion.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="mainContainer">
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="container"
        >
          <AccordionSummary
            className="main"
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>Category Distribution</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <div>
              <CategoryDistributionChart />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            className="main"
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>Response Time</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <div>
              <ResponseTimesChart />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            className="main"
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography>User Satisfaction</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <div>
              <UserSatisfactionChart />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            className="main"
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography>Usage Statistics</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <div>
              <UsageStatisticsChart />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="lastContainer">
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            className="main"
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <Typography>Insight Summery</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <div>
              <InsightSummeryChart />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
