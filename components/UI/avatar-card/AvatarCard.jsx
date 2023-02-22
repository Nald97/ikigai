import React from "react";
import Image from "next/image";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { color, positions } from "@mui/system";
import avatar from "../../../public/avatar.png";

const { Meta } = Card;

const AvatarCard = (props) => {
  const name = props.name;

  return (
    <Card
      style={{
        width: 250,
        height: 250,
        opacity: 0.9,
        top: 125,
        left: 125,
        color: "white",
        background: "black",
      }}
      ant-card-meta-title-color="white"
      cover={
        <div>
          {/* <Meta style={{ margin: "50px"}} title="Card title"  /> */}
          <h1
            style={{
              margin: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {name}
          </h1>
          <Image alt="example" src={avatar} />
        </div>
      }
    ></Card>
  );
};

export default AvatarCard;
