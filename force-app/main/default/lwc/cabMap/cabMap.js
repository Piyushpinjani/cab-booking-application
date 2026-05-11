import { LightningElement } from 'lwc';

export default class CabMap extends LightningElement {
    
    markersTitle;
    center;

    mapMarkers = [
    {
      location: {
        Street: "M G Road",
        City: "Pune",
        State: "Maharashtra",
      },

      title: "Pune Pick up point",
      description:
        "Premium Intercity cabs: Pune Location",
    },

    {
      location: {
        Street: "Shivaji Park",
        City: "Mumbai",
        State: "Maharashtra",
      },

      title: "Mumbai Pick up point",
      description:
        "Premium Intercity cabs: Mumbai Location",
    },

    {
      location: {
        Street: "Ganeshwadi",
        City: "Nashik",
        State: "Maharashtra",
      },

      title: "Nashik Pick up point",
      description:
        "Premium Intercity cabs: Nashik Location",
    },

    {
      location: {
        Street: "Indira Gandhi Medical College",
        City: "Nagpur",
        State: "Maharashtra",
      },

      title: "Nagpur Pick up point",
      description:
        "Premium Intercity cabs: Nagpur Location",
    }
];

markersTitle = "Coordinates for Centering";

center = {
    location: { Latitude: "19.75", Longitude: "75.71" },
  };

}