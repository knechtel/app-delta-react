import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const AlertDismissibleExample = (mostra) => {
  const [show, setShow] = useState(mostra);

  if (show) {
    return <></>;
  }
};

export default AlertDismissibleExample;
