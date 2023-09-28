import React from "react";
import { IonHeader, IonTitle, IonToolbar, IonContent, IonPage } from "@ionic/react";
import "../../theme/variables.css";
const SmallHeader = ({ title }) => {

  return (
    <IonHeader className="centered-header">
      <h6>Welcome To {title}!</h6>
    </IonHeader>
  );
};

export default SmallHeader;
