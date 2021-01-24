// RootNavigation.js

import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function push(...args) {
    navigationRef.current?.dispatch(StackActions.push(...args));
}

export function toggledrawer() {
    navigationRef.current?.navigation.toggleDrawer();
}
export function goBack() {
    navigationRef.current?.navigation.goBack();
}

// add other navigation functions that you need and export them

