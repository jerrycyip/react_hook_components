import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (currentPath === path) {
    return children;
  }

  return null; // display nothing
}

export default Route;
