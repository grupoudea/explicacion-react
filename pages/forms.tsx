import { FormInfoLaboral } from "@/components/FormInfoLaboral";
import { FormInfoPersonal } from "@/components/FormInfoPersonal";
import React from "react";

const Forms = () => {
  return (
    <div className=''>
      <FormInfoPersonal />
      <FormInfoLaboral />
    </div>
  );
};

export default Forms;
