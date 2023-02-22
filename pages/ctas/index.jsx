// localhost:3000/ctas

import { useEffect } from "react";
import { Col, Row } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useCtaData from "../../hooks/getCtaData";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";

const Ctas = () => {
  const { ctaData } = useCtaData();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div>
      <Header />
      <Row gutter={[16, 16]} style={{ marginTop: "3rem", marginLeft: "3rem" }}>
        {ctaData?.map((cta) => (
          <Col span={8}>
            <Card
              sx={{
                width: "90%",
                height: 550,
                overflow: "hidden",
                opacity: "0.8",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cta.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Resources: <br />
                  {cta.resources}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Description: <br />
                  {cta.description}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Outcome: <br />
                  {cta.outcome}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Success Criteria: <br />
                  {cta.successCriteria}
                </Typography>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Ctas;
