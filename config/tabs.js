import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCompass,
    faMapMarkerAlt,
    faUser,
    faShoppingCart
  } from "@fortawesome/free-solid-svg-icons";

const tabs = [
    {
        label:"Home",
        path: "/",
        icon: <FontAwesomeIcon icon ={faCompass} />
    },

    {
        label:"Gallery",
        path: "/gallery",
        icon: <FontAwesomeIcon icon ={faCompass} />
    },

    {
        label:"About",
        path: "/about",
        icon: <FontAwesomeIcon icon ={faCompass} />
    }
     /* ,
  {
        label:"News",
        path: "/news",
        icon: <FontAwesomeIcon icon ={faCompass} />
    },
  {
        label:"Contact",
        path: "/contact",
        icon: <FontAwesomeIcon icon ={faCompass} />
    }*/
];

export default tabs;