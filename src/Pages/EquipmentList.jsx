import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EquipmentTable from "../Components/EquipmentTable/EquipmentTable";
import { getAllEquipments } from "../client/equipments";
const EquipmentList = () => {
  const [equipments, setEquipments] = useState(null);
  const [loading, setLoading] = useState(true);

  const deleteEmployee = (id) =>
    setEquipments((equipments) =>
      equipments.filter((employee) => employee.id !== id)
    );

  useEffect(() => {
    let lock = false;

    setLoading(true);
    (async () => {
      const list = await getAllEquipments();
      if (!lock) {
        setEquipments(list);
        setLoading(false);
      }
    })();

    return () => {
      lock = true;
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <EquipmentTable onDelete={deleteEmployee} equipments={equipments}/>;
};

export default EquipmentList;
