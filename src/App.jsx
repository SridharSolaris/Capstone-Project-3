import React, { useState, useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonLabel,
  IonIcon,
  IonMenuButton,
  IonRouterOutlet,
  IonSplitPane,
  IonTabs,
  IonMenu,
  IonTabBar,
  IonTabButton,
  IonTitle,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  newspaperOutline,
  searchOutline,
  personCircleOutline,
  createOutline,
  menuOutline,
  trendingUpOutline,
} from "ionicons/icons";
import SideMenu from "./components/Header/Sidebar";
import News from "./pages/Tabs/News";
import Trending from "./pages/Tabs/Trending";
import Submit from "./pages/Tabs/Submit";
import Search from "./pages/Tabs/Search";
import Profile from "./pages/Tabs/Profile";
import EditProfile from "./pages/Auth/EditProfile";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Forgot from "./pages/Auth/Forgot";
import Link from "./pages/Link";
import useAuth from "./hooks/useAuth";
import UserContext from "./contexts/UserContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/responsive.css";


setupIonicReact();

const App = () => {
  const customLabelStyle = {
    fontSize: "24px", // Adjust the font size as needed
    fontWeight: "bold", // Optionally, make the text bold
    color: "orange",
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();
  const [user, setUser] = useAuth();
  // Toggle sidebar menu visibility on mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if the view is in mobile mode (e.g., smaller screens)
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    checkMobileView(); // Check initial view size
    window.addEventListener("resize", checkMobileView); // Listen for window resize events
    return () => {
      window.removeEventListener("resize", checkMobileView); // Cleanup event listener
    };
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <IonSplitPane when="md" contentId="main">
            {/* Sidebar menu (visible on mobile view) */}
            {isMobileView && (
              <IonMenu className="ion-menu" contentId="main" side="start" menuId="side-menu" isOpen={menuOpen}>
                <SideMenu />
              </IonMenu>
            )}

            {/* Header with hamburger menu (visible on mobile view) */}
            {isMobileView && (
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton autoHide={false} onClick={toggleMenu} className="menu-button">
                      <IonIcon icon={menuOutline} />
                    </IonMenuButton>
                  </IonButtons>
                  <IonTitle>Website Name</IonTitle>
                </IonToolbar>
              </IonHeader>
            )}


            <IonRouterOutlet id="main">
              <Route path="/" render={() => <Redirect to="/news" />} exact={true} />
              <Route path="/news" component={News} />
              <Route path="/trending" component={Trending} />
              <Route path="/submit" component={Submit} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/link/:linkId" component={Link} />
              <Route component={() => <Redirect to="/news" />} />
              {/* ... (other routes) */}
            </IonRouterOutlet>
          </IonSplitPane>

          {/* Main content */}
          <IonContent>
            {!isMobileView && (
              <IonTabs className="ion-tabs responsive-tabs">
                <IonRouterOutlet id="main">
                  <Route path="/" render={() => <Redirect to="/news" />} exact={true} />
                  <Route path="/news" component={News} />
                  <Route path="/trending" component={Trending} />
                  <Route path="/submit" component={Submit} />
                  <Route path="/search" component={Search} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/edit-profile" component={EditProfile} />
                  <Route path="/register" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot" component={Forgot} />
                  <Route path="/link/:linkId" component={Link} />
                  <Route component={() => <Redirect to="/news" />} />
                  {/* ... (other routes) */}
                </IonRouterOutlet>
                <IonTabBar slot="top">
                  {/* ... (other tab buttons) */}
                  <IonButton onClick={toggleMenu} slot="start" className="menu-button">
                    <IonIcon icon={menuOutline} />
                  </IonButton>
                  <IonTabButton tab="news" href="/news">
                    <IonLabel className="align-right-label" style={customLabelStyle}>NewsDen</IonLabel>
                    {/* Optionally, you can add an IonIcon here if needed */}
                  </IonTabButton>
                  <IonTabButton tab="empty" />
                  <IonTabButton tab="empty" />
                  <IonTabButton tab="news" href="/news">
                    <IonIcon icon={newspaperOutline} /> {/* Adjust margin as needed */}
                    <IonLabel >
                      News
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="trending" href="/trending">
                    <IonIcon icon={trendingUpOutline} /> {/* Adjust margin as needed */}
                    <IonLabel >
                      Trending
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="submit" href="/submit">
                    <IonIcon icon={createOutline} /> {/* Adjust margin as needed */}
                    <IonLabel>
                      Submit
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="search" href="/search">
                    <IonIcon icon={searchOutline} /> {/* Adjust margin as needed */}
                    <IonLabel>
                      Search
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="profile" href="/profile">
                    <IonIcon icon={personCircleOutline} /> {/* Adjust margin as needed */}
                    <IonLabel>
                      Profile
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="empty" />
                </IonTabBar>
              </IonTabs>
            )}
            {/* Tab bar (visible on mobile view) */}
            {isMobileView && (
              <IonTabs className="ion-tabs">
                <IonRouterOutlet id="main">
                  <Route path="/" render={() => <Redirect to="/news" />} exact={true} />
                  <Route path="/news" component={News} />
                  <Route path="/trending" component={Trending} />
                  <Route path="/submit" component={Submit} />
                  <Route path="/search" component={Search} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/edit-profile" component={EditProfile} />
                  <Route path="/register" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot" component={Forgot} />
                  <Route path="/link/:linkId" component={Link} />
                  <Route component={() => <Redirect to="/news" />} />
                  {/* ... (other routes) */}
                </IonRouterOutlet>
                <IonTabBar slot="top">

                  {/* ... (other tab buttons) */}
                  {isMobileView && (
                    <IonButton onClick={toggleMenu} slot="start" className="menu-button">
                      <IonIcon icon={menuOutline} />
                    </IonButton>
                  )}
                  <IonTabButton tab="websiteName">
                    <IonLabel className="align-right-label" style={customLabelStyle}>NewsDen</IonLabel>
                    {/* Optionally, you can add an IonIcon here if needed */}
                  </IonTabButton>
                  <IonTabButton tab="empty" />
                  <IonTabButton tab="empty" />
                  <IonTabButton tab="news" href="/news">
                    <IonIcon icon={newspaperOutline} /> {/* Adjust margin as needed */}
                    <IonLabel >
                      News
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="trending" href="/trending">
                    <IonIcon icon={trendingUpOutline} /> {/* Adjust margin as needed */}
                    <IonLabel >
                      Trending
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="submit" href="/submit">
                    <IonIcon icon={createOutline} /> {/* Adjust margin as needed */}
                    <IonLabel>
                      Submit
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="search" href="/search">
                    <IonIcon icon={searchOutline} /> {/* Adjust margin as needed */}
                    <IonLabel>
                      Search
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="profile" href="/profile">
                    <IonIcon icon={personCircleOutline} /> {/* Adjust margin as needed */}
                    <IonLabel>
                      Profile
                    </IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="empty" />
                </IonTabBar>
              </IonTabs>
            )}
          </IonContent>
        </UserContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
