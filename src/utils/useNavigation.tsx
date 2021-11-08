import { useContext } from "react";
import { NavigationContext, NavigationRoute, NavigationScreenProp } from "react-navigation";

export function useNavigation() {
    return useContext(NavigationContext) as NavigationScreenProp<
    NavigationRoute
   
    >;
}