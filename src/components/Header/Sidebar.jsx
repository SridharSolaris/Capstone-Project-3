// Sidebar.jsx
import React from "react";
import { IonContent, IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import { newspaperOutline, trendingUpOutline, createOutline, searchOutline, personCircleOutline } from "ionicons/icons";
import "../../theme/Sidebar.css"; // Import your CSS file

const SideMenu = () => {
    return (
        <IonContent>
            <IonList className="ion-list">
                <IonItem href="/news" className="ion-item">
                    <IonIcon icon={newspaperOutline} slot="start" />
                    <IonLabel>News</IonLabel>
                </IonItem>
                <IonItem href="/trending" className="ion-item">
                    <IonIcon icon={trendingUpOutline} slot="start" />
                    <IonLabel>Trending</IonLabel>
                </IonItem>
                <IonItem href="/submit" className="ion-item">
                    <IonIcon icon={createOutline} slot="start" />
                    <IonLabel>Submit</IonLabel>
                </IonItem>
                <IonItem href="/search" className="ion-item">
                    <IonIcon icon={searchOutline} slot="start" />
                    <IonLabel>Search</IonLabel>
                </IonItem>
                <IonItem href="/profile" className="ion-item">
                    <IonIcon icon={personCircleOutline} slot="start" />
                    <IonLabel>Profile</IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    );
};

export default SideMenu;
