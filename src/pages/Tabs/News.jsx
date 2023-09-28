import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonRouterLink,
  IonLoading,
} from "@ionic/react";
import Toast from "../../helpers/toast"; // Import `Toast` as a named import
import LinkList from "../../components/Link/LinkList";
import firebase from "../../firebase";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";

const News = (props) => {
  const [submittedLinks, setSubmittedLinks] = useState([]);

  // Function to fetch submitted links from Firebase
  const fetchSubmittedLinks = async () => {
    try {
      const snapshot = await firebase.db
        .collection("links")
        .orderBy("created", "desc")
        .get();
      const links = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubmittedLinks(links);
    } catch (error) {
      console.error("Error fetching links:", error);
      Toast("Error fetching links."); // Use the imported `Toast` component
    }
  };

  useEffect(() => {
    fetchSubmittedLinks(); // Fetch submitted links when the component mounts
  }, []);

  return (
    <IonPage>
      <SmallHeader title="News Feed" />
      <IonContent fullscreen>
        <LargeHeader title="News Feed" />
        {/* Pass the submittedLinks as a prop to the LinkList component */}
        <LinkList location={props.location} submittedLinks={submittedLinks} />
      </IonContent>
    </IonPage>
  );
};

export default News;
