// localhost:3000/ctas

import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useCtaData from "../../hooks/getCtaData";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import EditDeleteOptions from "../../components/UI/edit-delete-option/EditDeleteOptions";
import useDeleteCtaData from "../../hooks/deleteCtaData";
import EditCtaForm from "../../components/form/EditForm";

const Ctas = ({ onEditFormOpen }) => {
  const [showOptionIndex, setShowOptionIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const { ctaData } = useCtaData();
  const { deleteData } = useDeleteCtaData();

  const handleToggleOptions = (index) => {
    setShowOptionIndex(index === showOptionIndex ? null : index);
  };
  const handleEditFormOpen = (index) => {
    console.log("Opening edit form for index:", index);
    setEditIndex(index);
  };

  const handleEditFormClose = () => {
    setEditIndex(null);
  };
  const updateCta = (cta) => {
    // Define the function to update the CTA data here
    // For example, you might use a PUT request to update the data on a server
    console.log("Updating CTA data", cta);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div>
      <Header />
      <Row gutter={[16, 16]} style={{ marginTop: "3rem", marginLeft: "3rem" }}>
        {ctaData?.map((cta, index) => (
          <Col span={8}>
            <Card
              key={index}
              sx={{
                width: "90%",
                height: 550,
                overflow: "hidden",
                opacity: "0.8",
              }}
            >
              <CardContent>
                <div className="options">
                  <button onClick={() => handleToggleOptions(index)}>
                    ...
                  </button>
                  {showOptionIndex === index && (
                    <EditDeleteOptions
                      ctaKey={cta.key} // pass cta.key to the EditDeleteOptions component
                      onDelete={() => deleteData(cta.key)} // pass cta.key to onDelete function
                      onEditFormOpen={handleEditFormOpen}
                      index={index}
                    />
                  )}
                </div>
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
      {editIndex !== null && (
        <EditCtaForm
          cta={ctaData[editIndex]}
          onClose={handleEditFormClose}
          updateCta={updateCta}
        />
      )}
    </div>
  );
};

export default Ctas;
