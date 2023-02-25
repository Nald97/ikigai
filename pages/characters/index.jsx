// localhost:3000/characters

import { useEffect } from "react";
import { Col, Row } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import avatar from "../../public/avatar.png";
import useSheetData from "../../hooks/getSheetData";
import Image from "next/image";
import Link from "next/link";

const Characters = () => {
  const { sheetData } = useSheetData();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginTop: "3rem", marginLeft: "3rem" }}>
        {sheetData?.map((user) => (
          <Col span={8}>
            <Link href={`/characters/${user.name}`}>
              <Card
                sx={{
                  width: "80%",
                  height: 550,
                  overflow: "hidden",
                  opacity: "0.8",
                }}
              >
                <Image alt="example" src={avatar} />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {user.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Characters;
