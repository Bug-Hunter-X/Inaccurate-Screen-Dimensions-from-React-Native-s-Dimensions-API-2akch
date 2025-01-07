# React Native Dimensions API Inaccuracy Bug

This repository demonstrates a common bug in React Native applications involving inaccurate screen dimensions returned by the `Dimensions` API.  The issue primarily arises during the initial render and when the device orientation changes. This leads to layout problems where UI elements are improperly positioned or sized.

The `DimensionsBug.js` file showcases the problem. The `DimensionsBugSolution.js` file provides a solution using `useEffect` to ensure the dimensions are correctly fetched after the component has mounted and any orientation changes are handled.