import React, { useState } from "react";
import { cn } from "@lib/utils";

const PrivacySetting = ({ heading, description, onChange }) => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="border border-slate-500 p-4 rounded-md flex items-start gap-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        className="mt-1"
      />
      <div>
        <h2 className="font-medium">{heading}</h2>
        <p className="text-sm text-slate-700 mt-2">{description}</p>
        <a href="#" className="text-sm underline mt-2 inline-block">
          Zeigen Sie die Serviceinformationen.
        </a>
      </div>
    </div>
  );
};

export default PrivacySetting;
