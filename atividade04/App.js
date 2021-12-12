import Routes from "./components/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes/>
    </SafeAreaProvider>
  );
}