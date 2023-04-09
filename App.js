import StackNavigator from "./src/utils/StackNavigator";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
}
