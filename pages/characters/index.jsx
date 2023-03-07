// localhost:3000/characters

import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import avatar from "../../public/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase-config";
const Characters = () => {
  const [userData, setUserData] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(firestore, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserData(newData);
      console.log(newData);
    });
  };

  useEffect(() => {
    fetchPost();
    window.scrollTo(0, 0); // Scroll to top on component mount
    
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginTop: "3rem", marginLeft: "3rem" }}>
        {userData?.map((user) => (
          <Col span={8}>
            <Link href={`/characters/${user.displayName}`}>
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
                    {user.displayName}
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
