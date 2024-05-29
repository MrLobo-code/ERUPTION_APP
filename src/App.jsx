import { useCheckAuth } from "./common_user/hooks/useCheckAuth";
import MenuNavbar from "./common_user/MenuNavbar"
import AppRouter from "./router/AppRouter"

function App() {
  const { status } = useCheckAuth();
  return (
    <MenuNavbar status={status}>
      <AppRouter />
    </MenuNavbar >
  )
}

export default App
