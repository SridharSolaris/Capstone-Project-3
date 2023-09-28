import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const LargeHeader = ({ title }) => {
  return (
    <IonHeader collapse="condense">
      <IonTitle size="large">Welcome To {title}!</IonTitle>
    </IonHeader>
  );
};

export default LargeHeader;