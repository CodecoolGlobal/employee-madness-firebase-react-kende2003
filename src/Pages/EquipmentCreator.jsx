import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentForm from "../EquipmentForm";
import { createEquipment } from "../client/equipments";

const EquipmentCreator = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateEquipment = async (equipment) => {
    setLoading(true);
    await createEquipment(equipment);
    setLoading(false);
    navigate("/equipments");
  };

  return (
    <EquipmentForm
      disabled={loading}
      onCancel={() => navigate("/")}
      onSave={handleCreateEquipment}
    />
  );
};

export default EquipmentCreator;
