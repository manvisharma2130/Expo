import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Form from "../screen/Form";
import Info from "../screen/Info";

const PageNavigation = createStackNavigator({
   Form,
   Info,
});

export default createAppContainer(PageNavigation);